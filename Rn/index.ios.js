import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

// 引入外部js文件
//var LoginView = require('./LoginView.js');
var TouchViewDemo = require('./TouchViewDemo.js');
var ScrollViewDemo = require('./ScrollViewDemo.js');
var ListViewDemoi = require('./ListViewDemoi.js');
var ListViewDemoii = require('./ListViewDemoii.js');
var ListViewDemoiii = require('./ListViewDemoiii.js');
var TabBarDemo = require('./TabBarDemo.js');

export default class Rn extends Component {
  render() {
    return (
      //<LoginView />
      //<TouchViewDemo />
      //<ScrollViewDemo />
      //<ListViewDemoi />
      //<ListViewDemoii />
      //<ListViewDemoiii />
        <TabBarDemo />
    );
  }
}

AppRegistry.registerComponent('Rn', () => Rn);
