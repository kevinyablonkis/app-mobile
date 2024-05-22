import { Text, View, StyleSheet } from "react-native";
import StyledText from '@/src/components/StyledText'
import UIDecoration from '@/src/components/UIDecoration'

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={{ width: "100%", alignItems: "center", }}>
        <StyledText big bold>NOMBRE</StyledText>
        <StyledText light>Haz que el mundo te entienda</StyledText>
      </View>
      <View style={styles.UIDecorationOne}>
        <UIDecoration />
      </View>
      <View style={styles.UIDecorationTwo}>
        <UIDecoration />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#164A70",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    width: "100%",
    height: "100%",
  },
  UIDecorationOne: {
    position: 'absolute',
    right: -200,
    top: -200,
  },
  UIDecorationTwo: {
    position: 'absolute',
    left: -200,
    bottom: -200,
  },
});