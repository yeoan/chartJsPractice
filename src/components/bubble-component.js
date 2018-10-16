import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';
import {Bubble} from 'react-chartjs-2';

class BubbleComponent extends React.Component {

  componentWillMount(){
    this.props.yourAction(1);
  }

  constructor(props) {
    super(props);
  }


  render() {

    const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{x:10,y:20,r:5},{x:20,y:10,r:15},{x:16,y:15,r:30}]
    }
  ]
};

    return (
      <div>
        <h2>Bubble Example</h2>
        <Bubble data={data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(BubbleComponent);
