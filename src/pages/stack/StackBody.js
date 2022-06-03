import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
});

class StackBody extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              Content 1Content 1Content 1Content 1Content 1Content 1Content
              1Content 1Content 1
            </Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>살려주세여</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>진짜ㅏ악</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>이것도 그냥 가져온거긴 한데</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 5</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 6</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 7</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 8</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(StackBody);
