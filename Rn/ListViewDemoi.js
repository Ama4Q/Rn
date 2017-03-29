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

// 导入json数据
var wines = require('./Wine.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export class ListViewDemoi extends Component {
    // 构造
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(wines)
        };
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}/>
        );
    }

    // 返回Cell
    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={() => this.cellDidSelected(rowID)}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
                    <View style={styles.cellRightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                        <Text style={styles.bottomTitleStyle}>$:{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    cellDidSelected(rowID) {
        AlertIOS.alert(rowID)
    }

}

const styles = StyleSheet.create({
    cellViewStyle: {
        padding: 10,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: '#eeeeee',

        flexDirection: 'row'
    },
    cellRightViewStyle: {
        justifyContent: 'center'
    },
    leftImageStyle: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    topTitleStyle: {
        width: width - 20 - 70,
        marginBottom: 10
    },
    bottomTitleStyle: {

    }
});

module.exports = ListViewDemoi;
