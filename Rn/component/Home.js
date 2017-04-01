import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

import * as bsConfig from './baseStyleConfig';
let baseStyle = require('./baseStyle');

let ScrollView = require('../demo/ScrollViewExtension');
let cacheData = require('../cacheData.json');

import Detail from './Detail';


export class Home extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            headerArr: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    render() {
        return ( //styles.container
            <View
                style={[baseStyle.flex(1)]}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow.bind(this)}
                          renderHeader={this.renderHeader.bind(this)}
                          renderSeparator={this.renderSeparator}/>
            </View>
        );
    }

    renderRow(data, sID, rID, highlightRow) {
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={() => this.cellDidSelected(data)}>
                <View
                    style={[baseStyle.size(null, 80),
                            baseStyle.padding(10),
                            baseStyle.color('View', 'white', null),
                            baseStyle.flex(null, bsConfig.row)]}>
                    <Image
                        source={{uri: data.imgsrc}}
                        style={[baseStyle.size(60,60),
                                baseStyle.margin(null, null, null, 10),
                                baseStyle.border(5)]}/>
                    <View style={baseStyle.size(bsConfig.width - 90)}>
                        <Text
                            style={[baseStyle.font(18, 'bold'),
                                    baseStyle.margin(null, null, null, null, null, 5)]}>{data.title}</Text>
                        <Text
                            style={[baseStyle.font(13),
                                    baseStyle.color('Text', null, 'gray')]}>{data.subtitle}</Text>
                        <Text
                            style={[baseStyle.position('absolute', null, null, 10, 0),
                                    baseStyle.border(5, '#dddddd', 0.5),
                                    baseStyle.padding(3)]}>评论:{data.replyCount}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderHeader() {
        if (this.state.headerArr.length == 0) return;

        return (
        <View>
            <ScrollView publicImgs={this.state.headerArr} />
        </View>
        );
    }

    renderSeparator(sId, rId) {
        return (
            <View style={[baseStyle.size(null, 0.5), baseStyle.color('View', bsConfig.purple)]}
                  key={sId+rId}/>
        );
    }

    cellDidSelected(data) {
        this.props.navigator.push({
            component: Detail,
            title: 'Detail',
            passProps: {data},
            backButtonTitle: this.props.title
    })
    }

    // 请求网络数据
    componentDidMount() {
        this.loadDataFromNet();
    }

    loadDataFromNet() {
        fetch(this.props.net_api, {method: 'GET'})
            .then((response) => response.json())
            .then((responseData) => {
                this.parsing(responseData);
            }).catch((error) => {
                this.parsing(cacheData);
                console.log(error);
            });
    }

    parsing(responseData) {
        let jsonData = responseData[this.props.key];
        var headers = [], lists = [];

        for (var i = 0; i < jsonData.length; i ++) {
            let data = jsonData[i];

            if (data.hasAD == 1) { //是否是广告
                headers = data.ads;
            } else {
                lists.push(data);
            }
        }

        this.setState ({
            headerArr: headers,
            dataSource: this.state.dataSource.cloneWithRows(lists)
        });
    }
}

Home.propTypes = {
    net_api: React.PropTypes.string,
    key: React.PropTypes.string
};
Home.defaultProps = {
    net_api:'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html',
    key: 'T1348647853363'
};

module.exports = Home;
