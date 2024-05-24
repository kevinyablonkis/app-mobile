import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MessageSaved from '@/src/components/MessageSaved'
import theme from '@/src/Theme'

function MessageChat() {
  return (
    <View style={styles.container} >
      <MessageSaved />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})

export default MessageChat