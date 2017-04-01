import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class loginView extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Image source={require('../img/favicon.png')} style={styles.iconStyle} />
                <TextInput placeholder='请输入用户名' style={styles.textInputStyle} />
                <TextInput placeholder='请输入密码' password={true} style={styles.textInputStyle} />
                <View style={styles.loginBtnStyle} >
                    <Text style={{color: 'white'}} >登录</Text>
                </View>
                <View style={styles.settingStyle} >
                    <Text style={{color:'#aaaaaa'}} >无法登录</Text>
                    <Text style={{color:'#aaaaaa'}} >新用户</Text>
                </View>
                <View style={styles.otherStyle} >
                    <Text>其他登录方式:</Text>
                    <Image source={require('../img/favicon.png')} style={styles.otherLoginStyle} />
                    <Image source={require('../img/favicon.png')} style={styles.otherLoginStyle} />
                    <Image source={require('../img/favicon.png')} style={styles.otherLoginStyle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center'
    },
    iconStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white'
    },
    textInputStyle: {
        height: 38,
        backgroundColor: 'white',
        marginBottom: 1,
        textAlign: 'center'
    },
    loginBtnStyle: {
        marginTop: 30,
        marginBottom: 10,
        height: 35,
        width: width - 20,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    settingStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 10
    },
    otherStyle: {
        flexDirection: 'row',
        alignItems: 'center',

        // 绝对定位
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    otherLoginStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 8
    }
});

module.exports = loginView;