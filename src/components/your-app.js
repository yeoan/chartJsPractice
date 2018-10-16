import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';
import YourComponent1 from './your-component.js'
import YourComponent2 from './your-component2.js'
import { BrowserRouter, Route} from 'react-router-dom'; //{Link} to shift page;
import BarComponent from './bar-component.js';
import BubbleComponent from './bubble-component.js'
import DoughoutComponent from './doughnut-component.js'
import HorizontalBarComponent from './horizontalbar-component.js'
import LineComponent from './line-component.js'
import PieComponent from './pie-component.js'
import PolarComponent from './polar-component.js'
import RadarComponent from './radar-component.js'
import '../style.css';

class YourApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div>
          <hr />
          <BarComponent />
          <hr />
          <BubbleComponent />
          <hr />
          <DoughoutComponent />
          <hr />
          <HorizontalBarComponent />
          <hr />
          <LineComponent />
          <hr />
          <PieComponent />
          <hr />
          <PolarComponent />
          <hr />
          <RadarComponent />
        </div>

    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(YourApp);
