//import libraries
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);



//initialize express server
const app = express();
const main = express();

//add the path to receive request and set json as bodyParser to process the body 
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

//initialize the database and the collection 
const db = admin.firestore();
console.log(db);



interface User {
    firstName: String,
    name: String,
    email: String,
    id:String,
    contactNumber:String,
    adress: String,
    zipCode: String
}

// Create new user
app.post('/users', async (req, res) => {
    try {
        const user: User = {
            firstName: req.body['firstName'],
            name: req.body['name'],
            email: req.body['email'],
            id:req.body['id'],
            contactNumber:req.body['contactNumber']
        }

        const newDoc = await db.collection('userProfiles').add(user);
        res.status(201).send(`Created a new user: ${newDoc.id}`);
    } catch (error) {
        res.status(400).send(`User should cointain firstName, name, email, id and contactNumber!!!`)
    }
});


//get all users
app.get('/users', async (req, res) => {
    try {
        const userQuerySnapshot = await db.collection('userProfiles').get();
        const users: any[] = [];
        userQuerySnapshot.forEach(
            (doc)=>{
                users.push({
                    id: doc.id,
                    data:doc.data()
            });
            }
        );
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

//get a single contact
app.get('/users/:userId', (req,res) => {

    const userId = req.params.userId; 
    db.collection('userProfiles').doc(userId).get()
    .then(user => {
        if(!user.exists) throw new Error('User not found');
        res.status(200).json({id:user.id, data:user.data()})})
    .catch(error => res.status(500).send(error));
        
});


// Delete a user
app.delete('/users/:userId', (req, res) => {
    db.collection('userProfiles').doc(req.params.userId).delete()
    .then(()=>res.status(204).send("Document successfully deleted!"))
    .catch(function (error) {
            res.status(500).send(error);
    });
})

// Update user
app.put('/users/:userId', async (req, res) => {
    await db.collection('userProfiles').doc(req.params.userId).set(req.body,{merge:true})
    .then(()=> res.json({id:req.params.userId}))
    .catch((error)=> res.status(500).send(error))

});


//define google cloud function name
export const webApi = functions.https.onRequest(main);