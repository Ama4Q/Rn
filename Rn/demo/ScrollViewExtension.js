import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

// 引入定时器类库
var TimerMixin = require('react-timer-mixin');

// 获取屏幕宽度
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//ES5
var ScrollViewDemo = React.createClass({
    // 注册定时器
    mixins: [TimerMixin],

    // 初始化props
    getDefaultProps() {
        return {
            duration: 2000,

            // 对外数组, 获取外部数据
            publicImgs: []
        };
    },

    // 初始化state
    getInitialState() {
        return {
            // 当前scrollView页码
            currentPage: 1,
            // 当前指示器页码
            currentIndicator: 0,


            title: this.props.publicImgs[0].title
        };
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref = 'scrollView' //组件标识
                            horizontal={true} //横向移动
                            showsHorizontalScrollIndicator={false} //隐藏移动指示器
                            pagingEnabled={true} //可分页
                            onMomentumScrollEnd={(e) => this.onAnimationEnd(e)} //一帧停止时回调
                            onScrollBeginDrag={this.onScrollBeginDrag} // 开始拖拽
                            onScrollEndDrag={this.onScrollEndDrag} // 停止拖拽 这是当前页面偏移量
                            contentOffset={{x: width, y: 0}}>
                    {this.renderAllImage()}
                </ScrollView>
                {/*指示器*/}
                <View style={styles.pagViewStyle}>
                    <Text style={{color: 'white', paddingLeft: 5}}>{this.state.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 10, height: 25}}>
                        {this.renderpageCircle()}
                    </View>
                </View>
            </View>
        );
    },

    componentDidMount() {
        // 开启定时器
        this.startTimer();
    },

    // 开启定时器
    startTimer() {
        var scroll = this.refs.scrollView;

        this.timer = this.setInterval(() => { //function() {}
            var activePage = this.state.currentPage + 1;
            scroll.scrollResponderScrollTo({x: (activePage * width), y:0, animated: true});

            this.setState({
                currentPage: activePage,
                currentIndicator: activePage - 1
            });

        }, this.props.duration);
    },

    renderAllImage() {
        var allImages = [];
        var images = this.props.publicImgs;
        let lenght = images.length;

        // scrollView内容布局为 "4 0 1 2 3 4 0"
        for (var i = 0; i < lenght + 2; i++) {
            var imageName;

            if (i < 1) {
                imageName = images[lenght - 1].imgsrc;
            } else if (i > lenght) {
                imageName = images[0].imgsrc;
            } else {
                imageName = images[i - 1].imgsrc;
            }

            allImages.push(
                <Image key = {i} source={{uri: imageName}} style={{width: width, height: 120}}/>
            );
        }
        return allImages;
    },

    renderpageCircle() {
        var indicatorArr = [];
        var style;

        var images = this.props.publicImgs;
        for(var i = 0; i < images.length; i ++ ) {
            style = (i == this.state.currentIndicator) ? {color: 'orange', fontSize: 25} : {color: 'white', fontSize: 18};
            indicatorArr.push(
                <Text key = {i} style={[style, {textAlign: 'center', width: 13}]}>&bull;</Text>
            );
        }
        return indicatorArr;
    },

    // 一帧结束时
    onAnimationEnd(e) {
        var offSetx = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offSetx / width);
        let length = this.props.publicImgs.length;

        // scrollView内容布局为 "4 0 1 2 3 4 0"
        // 如果page到了最后一页,跳转的第二页
        if ((currentPage + 1) > length + 1) {
            currentPage = 1;
            this.refs.scrollView.scrollResponderScrollTo({x: width, y:0, animated: false});
        }

        // 如果page到了第一页,跳转到倒数第二页
        if (currentPage == 0) {
            currentPage = length;
            this.refs.scrollView.scrollResponderScrollTo({x: (currentPage * width), y:0, animated: false});
        }

        this.setState({
            currentPage: currentPage,
            currentIndicator: currentPage - 1,
            title: this.props.publicImgs[currentPage - 1].title
        });

    },

    // 开始拖拽
    onScrollBeginDrag() {
        this.clearInterval(this.timer);
    },

    // 停止拖拽
    onScrollEndDrag() {
        this.startTimer();
    }
});

const styles = StyleSheet.create({
    container: {
    },
    pagViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.6)',

        position: 'absolute',
        bottom: 0,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

module.exports = ScrollViewDemo;