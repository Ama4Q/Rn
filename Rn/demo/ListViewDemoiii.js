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

var car = require('../demo/Car.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export class ListViewDemoiii extends Component {
    // 构造
    constructor(props) {
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData, //获取组数据
                getRowData: getRowData, //获取行数据

                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}
                      renderSectionHeader={this.renderSectionHeader}
                      style={{marginTop: 20}}/>
        );
    }

    renderRow(data) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image source={{uri: data.icon}} style={styles.rowImageStyle}/>
                    <Text style={styles.rowTextStyle} ellipsizeMode='tail' >{data.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderSectionHeader(data, Id) {
        return (
            <View style={{backgroundColor: '#eeeeee'}}>
                <Text style={styles.headerTextStyle}>{data}</Text>
            </View>
        );
    }

    componentDidMount() {
        this.loadDataFromJson();
    }

    loadDataFromJson() {
        var jsonData = car.data;

        var dataBlob = {};
        var sectionIDs = [];
        var rowIDs = [];
        var cars = [];

        for (var i = 0; i < jsonData.length; i ++) {
            sectionIDs.push(i);

            dataBlob[i] = jsonData[i].title;

            cars = jsonData[i].cars;
            rowIDs[i] = [];

            for (var j = 0; j < cars.length; j ++) {
                rowIDs[i].push(j);
                dataBlob[i + ':' + j] = cars[j];
            }
        }
        
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        height: 100,

        flexDirection: 'row',
        alignItems: 'center',

        borderBottomWidth: 0.5,
        borderBottomColor: '#eeeeee',
    },
    rowImageStyle: {
        width: 70,
        height: 70,

        marginLeft: 10,
        marginRight: 20
    },
    rowTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',

        marginLeft: 10,
        color: '#aaaaaa'
    }
});

module.exports = ListViewDemoiii;
