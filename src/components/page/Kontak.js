import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
// import line from

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

  function Kontak(props) {
    const { classes } = props;
    return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.appletreebsd.com/wp-content/uploads/2017/10/LINE-Brush-.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Kontak Line
                </Typography>
                <Typography gutterBottom>abidaffaarila • ID</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
        <br/>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="data:image/png;base64,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" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Kontak Whatsapp
                </Typography>
                <Typography gutterBottom>082280847142 • No Hp</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
        <br/>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Kontak Instagram
                </Typography>
                <Typography gutterBottom>@abidaffa.a • ID</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>  
        );
    }


export default withStyles(styles)(Kontak);
