import { View, Text, StyleSheet } from 'react-native';
import SearchDevice from '@/src/components/SearchDevice'
import theme from '@/src/Theme'

export default function Tab() {
  return (
    <View style={styles.container}>
      <SearchDevice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: theme.colors.darker,
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    width: "100%",
    height: "100%",
  },
});
