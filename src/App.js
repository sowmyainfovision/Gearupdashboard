import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import Users from './Users.js';
import Tasks from './Tasks.js';
import GeoFence from './GeoFence.js';
import Groups from './Groups.js';
import { CSSTransitionGroup } from 'react-transition-group'

const styles = {
  card: {
           height:'150px',
           display:'flex',
           padding: 20,
           flexDirection:'column',
           width:'400px',
           color: 'black',
           backgroundColor:'white',
           
  },
 };

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className="App">
        <div className="icon">
      <div className="icon">
    <CSSTransitionGroup
  transitionName="cardAnimation"
  transitionAppear={true}
  transitionAppearTimeout={1000}
  transitionEnter={false}
  transitionLeave={false}
>   
{
    <Card className={classes.card}>
    <CardContent>
      <Users />
      </CardContent>
    </Card>

}
    </CSSTransitionGroup>
    </div>
    <div className="info">
    <CSSTransitionGroup
  transitionName="cardAnimation"
  transitionAppear={true}
  transitionAppearTimeout={1000}
  transitionEnter={false}
  transitionLeave={false}
>   
{

<Card className={classes.card}>
    <CardContent>
      <Tasks />
      </CardContent>
    </Card>

}

</CSSTransitionGroup>
</div>
</div>
<div className="info">
      <div className="icon">
<CSSTransitionGroup
  transitionName="cardAnimation"
  transitionAppear={true}
  transitionAppearTimeout={1000}
  transitionEnter={false}
  transitionLeave={false}
>   
{
    
<Card className={classes.card}>
   <CardContent>
      <Groups />
      </CardContent>
    </Card>
  }

</CSSTransitionGroup>
</div>

<div className="info">
<CSSTransitionGroup
  transitionName="cardAnimation"
  transitionAppear={true}
  transitionAppearTimeout={1000}
  transitionEnter={false}
  transitionLeave={false}
>   
{
   <Card className={classes.card}>
    <CardContent>
      <GeoFence />
      </CardContent>
    </Card>
    }

    </CSSTransitionGroup>
    </div>
    </div>
</div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
