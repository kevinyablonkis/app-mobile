import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchDevice from '@/src/components/SearchDevice'
import StyledText from '@/src/components/StyledText'
import Button from '@/src/components/Button'
import UIDecoration from '@/src/components/UIDecoration'
import theme from '@/src/Theme'

export default function Tab() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerVincular} >
          <View style={styles.containerUIDecoration} >
            <UIDecoration />
          </View>
          <Button primary >Vincular</Button>
        </View>
        <View style={styles.containerListDevice} >
          <StyledText bold big>Buscando dispositivos</StyledText>
          <SearchDevice />
        </View>
      </View>
    </ScrollView>
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
  containerVincular: {
    position: "absolute",
    top: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  containerUIDecoration: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scale: '120%' }],
  },
  containerListDevice: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 330,
    marginBottom: 25,
    // height: 230,
  },
});
