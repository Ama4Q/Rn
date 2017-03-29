import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    TabBarIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export class TabBarDemo extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTabBarItem: 'h'
        };
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navStyle}>
                    <Text style={{color: 'white'}}>Tab</Text>
                </View>
                <TabBarIOS barTintColor='white'
                           tintColor='deeppink'
                           translucent={true}>
                    <TabBarIOS.Item systemIcon='contacts'
                                    badge='3'
                                    selected={this.state.selectedTabBarItem === 'h'}
                                    onPress={() => {
                                        this.setState({
                                            selectedTabBarItem: 'h'
                                        });
                                    }}>
                        <View style={[styles.homeViewStyles, {backgroundColor: 'red'}]}>
                            <Text>首页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item systemIcon='bookmarks'
                                    badge='1'
                                    selected={this.state.selectedTabBarItem === 's'}
                                    onPress={() => {
                                        this.setState({
                                            selectedTabBarItem: 's'
                                        });
                                    }}>
                        <View style={[styles.homeViewStyles, {backgroundColor: 'purple'}]}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item systemIcon='downloads'
                                    badge='4'
                                    selected={this.state.selectedTabBarItem === 't'}
                                    onPress={() => {
                                        this.setState({
                                            selectedTabBarItem: 't'
                                        });
                                    }}>
                        <View style={[styles.homeViewStyles, {backgroundColor: 'green'}]}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item systemIcon='search'
                                    badge='6'
                                    selected={this.state.selectedTabBarItem === 'f'}
                                    onPress={() => {
                                        this.setState({
                                            selectedTabBarItem: 'f'
                                        });
                                    }}>
                        <View style={[styles.homeViewStyles, {backgroundColor: 'blue'}]}>
                            <Text>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        height: 64
    },
    homeViewStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = TabBarDemo;
