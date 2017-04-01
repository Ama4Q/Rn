import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

export class touchDemo extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = { title: '不透明触摸'};
    }

    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => this.renderPress('点击')}
                                  onPressIn={() => this.renderPress('按下')}
                                  onPressOut={() => this.renderPress('抬起')}
                                  onLongPress={() => this.renderPress('长按')} >
                    <View style={styles.innerViewStyle} >
                        <Text>文本,但是可以触摸.</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>{this.state.title}</Text>
                    <Text>{this.props.txxxx}</Text>
                </View>
            </View>
        );
    }

    renderPress(event) {
        this.setState({
           title: event
        });
    }
}

touchDemo.propTypes={
    txxxx: React.PropTypes.string
};

touchDemo.defaultProps={txxxx:'asd'};//设置默认属性

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerViewStyle: {
        backgroundColor: 'red'
    }
});

module.exports = touchDemo;
