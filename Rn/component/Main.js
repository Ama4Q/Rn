import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var Home = require('./Home');
var Find = require('./Find');
var Msg = require('./Msg');
var Me = require('./Me');

export class Main extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedItem: 'home'
        };
      }

    render() {
        return (
            <TabBarIOS tintColor= 'orange'>
                <TabBarIOS.Item icon={require('../img/TabBar/tabbar_home.png')}
                                title='首页'
                                selected={this.state.selectedItem == 'home'}
                                onPress={() => {this.setState({selectedItem: 'home'})}}>
                    <NavigatorIOS tintColor= 'orange'
                                  style={{flex: 1}}
                                  initialRoute={{
                                            component: Home,
                                            title: '网易',
                                            leftButtonIcon: require('../img/NavigationBar/navigationbar_friendattention.png'),
                                            rightButtonIcon: require('../img/NavigationBar/navigationbar_pop.png')}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item icon={require('../img/TabBar/tabbar_discover.png')}
                                title='发现'
                                selected={this.state.selectedItem == 'discover'}
                                onPress={() => {this.setState({selectedItem: 'discover'})}}>
                    <NavigatorIOS style={{flex: 1}}
                                  initialRoute={{
                                            component: Find,
                                            title: '发现'}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item icon={require('../img/TabBar/tabbar_message_center.png')}
                                title='信息'
                                selected={this.state.selectedItem == 'center'}
                                onPress={() => {this.setState({selectedItem: 'center'})}}>
                    <NavigatorIOS style={{flex: 1}}
                                  initialRoute={{
                                            component: Msg,
                                            title: '消息'}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item icon={require('../img/TabBar/tabbar_profile.png')}
                                title='我的'
                                selected={this.state.selectedItem == 'profile'}
                                onPress={() => {this.setState({selectedItem: 'profile'})}}>
                    <NavigatorIOS style={{flex: 1}}
                                  initialRoute={{
                                            component: Me,
                                            title: '我的'}}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({

});

module.exports = Main;
