import React, { useCallback } from 'react';
import { Text, StyleSheet } from 'react-native'

function StyledText({ bold, light, small, big, children }: any) {
    const textStyle = [
        styles.text,
        bold && styles.bold,
        light && styles.light,
        small && styles.small,
        big && styles.big,
    ]

    return (
        <Text style={textStyle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'InriaSans',
    },
    small: {
        fontSize: 12,
    },
    big: {
        fontSize: 30,
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