import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SmsIcon from '@material-ui/icons/Sms';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const  Article = ({name}) => {
    const classes = useStyles();
    return (
       
           <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Fab color="primary"><TextsmsIcon></TextsmsIcon></Fab>
          </Grid>
          <Grid item xs>
            <Typography>{name.text}</Typography>
          </Grid>
        </Grid>
      </Paper>
       
    )
}
export default  Article