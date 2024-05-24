import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import StyledText from '@/src/components/StyledText'
import Button from '@/src/components/Button'
import theme from '@/src/Theme'

function WriterChat() {
    return (
        <View style={styles.containerWriteChat}>
            <View style={styles.containerWriteText} >
                <StyledText big bold style={styles.writeText}>Hello</StyledText>
            </View>
            <View style={styles.containerButtons} >
                <Button secundary chatSize >Borrar</Button>
                <Button primary chatSize >Guardar</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerWriteChat: {
        backgroundColor: theme.colors.lighter,
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        width: '100%',
    },
    containerWriteText: {
        backgroundColor: theme.colors.medium,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 10,
        height: 140,
        width: '90%',
        borderRadius: 15,
    },
    writeText: {
        backgroundColor: 'black',
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
    }
});

export default WriterChat