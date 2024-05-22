import React from 'react'
import { View, StyleSheet } from 'react-native'

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
        backgroundColor: '#1B5885',
        alignItems: 'center',
        justifyContent: 'center',
        width: 390,
        height: 390,
        borderRadius: '100%',
        zIndex: 1,
    },
    containerThree: {
        position: 'absolute',
        backgroundColor: '#216698',
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        height: 320,
        borderRadius: '100%',
        zIndex: 2,
    },
    containerTwo: {
        position: 'absolute',
        backgroundColor: '#2978B0',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250,
        borderRadius: '100%',
        zIndex: 3,
    },
    containerOne: {
        position: 'absolute',
        backgroundColor: '#2788CE',
        alignItems: 'center',
        justifyContent: 'center',
        width: 190,
        height: 190,
        borderRadius: '100%',
        zIndex: 4,
    },
})

export default UIDecoration