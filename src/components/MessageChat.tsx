import React from 'react'
import { View, StyleSheet } from 'react-native'
import MessageSaved from '@/src/components/MessageSaved'

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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})

export default MessageChat