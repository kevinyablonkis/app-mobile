import React from 'react';
import { Text, StyleSheet } from 'react-native'
import GlobalFont from '../GlobalFont'
import theme from '@/src/Theme'

function StyledText({ opacity, bold, light, small, big, extrabig, textLabelTabBar, children }: any) {
    GlobalFont()

    const textStyle = [
        styles.text,
        bold && styles.bold,
        light && styles.light,
        small && styles.small,
        big && styles.big,
        extrabig && styles.extrabig,
        opacity && styles.opacity,
        textLabelTabBar && styles.textLabelTabBar
    ]

    return (
        <Text style={textStyle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSize.medium,
        color: 'white',
        fontFamily: theme.fonts.global,
    },
    opacity: {
        opacity: 0.67,
    },
    small: {
        fontSize: theme.fontSize.small,
    },
    big: {
        fontSize: theme.fontSize.big,
    },
    extrabig: {
        fontSize: theme.fontSize.extrabig,
    },
    textLabelTabBar: {
        fontSize: theme.fontSize.textLabelTabBar,
    },
    bold: {
        fontWeight: 'bold',
    },
    light: {
        fontWeight: 'light',
        opacity: 0.85,
    }
})

export default StyledText