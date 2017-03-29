import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

var shareData = require('./shareData.json');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var column = 3;
var cellWH = 100;
var hMargin = (width - cellWH * column) / (column + 1);
var vMargin = 20;

export class ListViewDemoii extends Component {

    // 构造
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(shareData.data)
        };
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}
                      contentContainerStyle={styles.listViewStyle}
                      initialListSize={20}/>
        );
    }

    renderRow(data, sId, rId, hRow) {
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={() => this.itemDidSelected(rId)}>
                <View style={styles.cellStyles}>
                    <Image style={styles.cellImageStyle} source={{uri: data.icon}}/>
                    <Text>{data.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    itemDidSelected(rId) {
        AlertIOS.alert(rId)
    }
}

const styles = StyleSheet.create({
    cellImageStyle: {
        width: 80,
        height: 80,

        marginBottom: 5
    },
    cellStyles: {
        width: cellWH,
        height: cellWH,

        marginLeft: hMargin,
        marginTop: vMargin,

        alignItems: 'center'
    },
    listViewStyle: {
        alignItems: 'center',

        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

module.exports = ListViewDemoii;
