import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

export class Detail extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            detailData: ''
        };
      }

    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                source={{html: this.state.detailData, baseUrl: ''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    }

    componentDidMount() {
        var url = 'http://c.3g.163.com/nc/article/' + this.props.data.docid + '/full.html';
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                var data = responseData[ this.props.data.docid];
                var html = data.body;

                console.log(html);

                this.setState({
                    detailData: html
                });
            }).catch((error) => {

        });
    }
}

export default Detail;
