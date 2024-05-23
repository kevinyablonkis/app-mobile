import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StyledText from '@/src/components/StyledText'
import ItemDevice from '@/src/components/ItemDevice'

function SearchDevice() {
    return (
        <View style={styles.container}>
            <StyledText bold big>Buscando dispositivos</StyledText>
            <ItemDevice numberId={1} nameDevice="Redmi 9c" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
})

export default SearchDevice