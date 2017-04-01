import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

// 引入外部js文件
var LoginView = require('./demo/LoginView.js');
var TouchViewDemo = require('./demo/TouchViewDemo.js');


var ScrollViewDemo = require('./demo/ScrollViewExtension.js');
// 获取json数据
var ImageData = require('./demo/ImageData.json');


var ListViewDemoi = require('./demo/ListViewDemoi.js');
var ListViewDemoii = require('./demo/ListViewDemoii.js');
var ListViewDemoiii = require('./demo/ListViewDemoiii.js');
var TabBarDemo = require('./demo/TabBarDemo.js');

var Main = require('./component/Main');

export default class Rn extends Component {
    render() {
        return (
            //<LoginView />
            //<TouchViewDemo />
            //<ScrollViewDemo publicImgs={ImageData.data}/>
            //<ListViewDemoi />
            //<ListViewDemoii />
            //<ListViewDemoiii />
            //<TabBarDemo />
            <Main />
        );
    }
}

AppRegistry.registerComponent('Rn', () => Rn);