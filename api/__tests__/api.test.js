const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

describe('Api endpoints happy paths', ()=>{
    it('Gets articles endpoint', async (done) =>{
        const response = await request.get('/api/V1/articles');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
        done();
    }, 1000);

    it('Gets users endpoint', async (done) =>{
        const response = await request.get('/api/V1/users');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
        done();
    }, 1000);

    it('Gets particular user endpoint', async(done) =>{
        var user=1;
        const response = await request.get(`/api/V1/users/${user}`)
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
        expect(response.text).toMatch("response")
        expect(response.body.error).toBeNull();
        done();
    }, 1000);

    it('Gets particular article endpoint', async(done) =>{
        var article=1;
        const response = await request.get(`/api/V1/article/${article}`)
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
        expect(response.text).toMatch("response")
        expect(response.body.error).toBeNull();
        done();
    }, 1000);



})



