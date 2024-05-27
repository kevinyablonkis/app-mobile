import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '@/src/Theme'
import GlobalFont from '@/src/GlobalFont';

function Button({ primary, secundary, chatSize, children }: any) {

    GlobalFont()

    const Styles = [
        styles.button,
        primary && styles.primary,
        secundary && styles.secundary,
        chatSize && styles.chatSize
    ]

    return (
        <Text style={Styles}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    button: {
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
    primary: {
        backgroundColor: '#fff',
        fontSize: theme.fontSize.textSizeButton,
        fontFamily: theme.fonts.global,
    },
    secundary: {
        backgroundColor: theme.colors.medium,
        color: '#fff',
        opacity: 0.7,
        fontSize: theme.fontSize.textSizeButton,
        fontFamily: theme.fonts.global,
    },
    chatSize: {
        transform: [{ scale: 0.9 }]
    }
})

export default Button