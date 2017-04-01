import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

/**
 * 设置组件相关颜色, 使用时需遵守相关的约定 ~>不使用的参数传 null
 *
 * @param type 组件类型 ~> 必须与所用组件同名
 * @param bc 背景颜色
 * @param c 字体颜色
 */
export function color(type, bc, c) {
    var styles = [];
    switch (type) {
        case 'Text':
            styles['color'] = c;
        default:
            styles['backgroundColor'] = bc;
            break;
    }
    return (StyleSheet.create({
        color: styles
    }).color);
}

/**
 * 组件相关尺寸 ~> 不使用的参数传 null
 * @param width 宽
 * @param height 高
 */
export function size(width, height) {
    return (StyleSheet.create({
        size: {
            width: width,
            height: height
        }
    }).size);
}

/**
 * 组件相关外边距 ~> 不使用的参数传 null
 * @param m margin
 * @param ml left
 * @param mt top
 * @param mr right
 * @param mb bottom
 */
export function margin(m, ml, mt, mr, mb) {
    return (StyleSheet.create({
        margin: {
            margin: m,
            marginLeft: ml,
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb
        }
    }).margin);
}

/**
 * 组件相关内边距 ~> 不使用的参数传 null
 * @param p padding
 * @param pl left
 * @param pt top
 * @param pr right
 * @param pb bottom
 */
export function padding(p, pl, pt, pr, pb) {
    return (StyleSheet.create({
        padding: {
            padding: p,
            paddingLeft: pl,
            paddingTop: pt,
            paddingRight: pr,
            paddingBottom: pb
        }
    }).padding);
}

/**
 * 组件相关flexbox ~> 不使用的参数传 null
 * @param f flex
 * @param fd flexDirection
 * @param jc justifyContent
 * @param ai alignItems
 * @param as alignSelf
 * @param fw flexWrap
 */
export function flex(f, fd, jc, ai, as, fw) {
    return (StyleSheet.create({
        flex: {
            flex: f,
            flexDirection: fd,
            justifyContent: jc,
            alignItems: ai,
            alignSelf: as,
            flexWrap: fw
        }
    }).flex);
}

/**
 * 组件相关border ~> 不使用的参数传 null
 * @param r borderRadius
 * @param c borderColor
 * @param w borderWidth
 */
export function border(r, c, w) {
    return (StyleSheet.create({
        border: {
            borderRadius: r,
            borderColor: c,
            borderWidth: w
        }
    }).border);
}

/**
 * 组件相关font ~> 不使用的参数传 null
 * @param s fontSize
 * @param w fontWeight
 * @param c fontColor
 */
export function font(s, w) {
    return (StyleSheet.create({
        font: {
            fontSize: s,
            fontWeight: w
        }
    }).font);
}

/**
 * 组件相关position ~> 不使用的参数传 null
 * @param p position
 * @param l left
 * @param t top
 * @param r right
 * @param b bottom
 * @returns {*}
 */
export function position(p, l, t, r, b) {
    return (StyleSheet.create({
        position: {
            position: p,
            left: l,
            top: t,
            right: r,
            bottom: b
        }
    }).position);
}



