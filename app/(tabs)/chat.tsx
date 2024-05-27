import { View, StyleSheet } from 'react-native';
import theme from '@/src/Theme'
import WriterChat from '@/src/components/WriterChat'
import MessageChat from '@/src/components/MessageChat'

export default function Tab() {
  return (
    <View style={styles.container} >
      <MessageChat />
      <WriterChat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.darker,
    height: '100%',
  },
});
