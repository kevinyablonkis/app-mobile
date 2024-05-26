import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '@/src/Theme'

function UIDecoration() {
    return (
        <View style={styles.containerFour}>
            <View style={styles.containerThree}>
                <View style={styles.containerTwo}>
                    <View style={styles.containerOne}>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFour: {
        position: 'relative',
        top: 0,
        left: 0,
        backgroundColor: theme.colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
        width: 390,
        height: 390,
        borderRadius: 1000,
        zIndex: 1,
    },
    containerThree: {
        position: 'absolute',
        backgroundColor: theme.colors.medium,
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        height: 320,
        borderRadius: 1000,
        zIndex: 2,
    },
    containerTwo: {
        position: 'absolute',
        backgroundColor: theme.colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250,
        borderRadius: 1000,
        zIndex: 3,
    },
    containerOne: {
        position: 'absolute',
        backgroundColor: theme.colors.lighter,
        alignItems: 'center',
        justifyContent: 'center',
        width: 190,
        height: 190,
        borderRadius: 1000,
        zIndex: 4,
    },
})

export default UIDecoration