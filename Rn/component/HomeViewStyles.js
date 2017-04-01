import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cellStyle: {
        height: 80,
        padding: 10,
        backgroundColor: 'white',

        flexDirection: 'row',
    },
    imgStyle: {
        width: 60,
        height: 60,
        marginRight: 10,

        borderRadius: 5
    },
    rightViewStyle: {
        width: width - 90
    },
    titleStyles: {
        fontSize: 18,
        marginBottom: 5
    },
    subTitleStyles: {
        fontSize: 13,
        color: 'gray'
    },
    flowTitleStyles: {
        position: 'absolute',
        bottom: 0,
        right: 10,

        borderWidth: 0.5,
        borderColor: '#dddddd',
        borderRadius: 5,
        padding: 3
    }
});

module.exports = styles;