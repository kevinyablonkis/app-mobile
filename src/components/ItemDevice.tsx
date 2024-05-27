import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from '@/src/components/StyledText'
import theme from '@/src/Theme'

function ItemDevice({ numberId, nameDevice }: any) {
    return (
        <View style={styles.containerDevice}>
            <StyledText opacity bold>{numberId}</StyledText>
            <View style={styles.dateDevice}>
                <View style={styles.device}>
                </View>
                <StyledText style={styles.textDevice} >{nameDevice}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerDevice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
    },
    dateDevice: {
        position: 'relative',
        padding: 10,
        paddingHorizontal: 15,
        width: 300,
    },
    device: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 10,
        backgroundColor: theme.colors.dark,
        width: '105%',
        height: 45,
    },
    textDevice: {
        position: 'absolute'
    }
})

export default ItemDevice