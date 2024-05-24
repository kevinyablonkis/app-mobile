import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StyledText from '@/src/components/StyledText'
import theme from '@/src/Theme'

function messageSaved() {
    return (
        <View style={styles.container} >
            <View style={styles.messageSaved}>
                <StyledText>Hola como estas</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.darker,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    messageSaved: {
        padding: 15,
        backgroundColor: theme.colors.medium,
        borderRadius: 15,
        color: '#fff'
    }
})

export default messageSaved