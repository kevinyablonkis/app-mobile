import React, { Children } from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '@/src/Theme'

function Button({ children }: any) {
    return (
        <Text style={styles.button}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 60,
        borderRadius: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        padding: 10,
        fontSize: theme.fontSize.textSizeButton,
        fontFamily: theme.fonts.global,
    },
})

export default Button