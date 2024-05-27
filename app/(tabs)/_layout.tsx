import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs, usePathname } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import StyledText from '@/src/components/StyledText'
import GlobalFont from '@/src/GlobalFont'
import theme from '@/src/Theme'

export default function TabLayout() {

  const pathname = usePathname()

  GlobalFont();

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: { backgroundColor: '#1B5885', height: 80 },
      tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold', fontFamily: 'InriaSans', marginBottom: 5 }, headerShown: false
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ color }) =>
            <View style={styles.labelContainerOne}>
              <StyledText textLabelTabBar style={{ color: color }}>Inicio</StyledText>
            </View>,
          tabBarIcon: ({ color }) =>
            <View style={styles.iconContainerOne}>
              {
                pathname == '/' && (
                  <View style={styles.tabBarActiveIndicatorOne}></View>
                )
              }
              <Ionicons style={{ zIndex: 1 }} name="home" size={37} color={color} />
            </View>,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: ({ color }) =>
            <View style={styles.labelContainerTwo}>
              <StyledText textLabelTabBar style={{ color: color }}>Chat</StyledText>
            </View>,
          tabBarIcon: ({ color }) =>
            <View style={styles.iconContainerTwo}>
              {
                pathname == '/chat' && (
                  <View style={styles.tabBarActiveIndicatorTwo} ></View>
                )
              }
              <MaterialCommunityIcons style={{ zIndex: 1 }} name="comment-multiple" size={37} color={color} />
            </View>,
        }}
      />
      <Tabs.Screen
        name="connect"
        options={{
          tabBarLabel: ({ color }) =>
            <View style={styles.labelContainerThree}>
              <StyledText textLabelTabBar style={{ color: color }}>Vincular</StyledText>
            </View>,
          tabBarIcon: ({ color }) =>
            <View style={styles.iconContainerThree}>
              {
                pathname == '/connect' && (
                  <View style={styles.tabBarActiveIndicatorThree}></View>
                )
              }
              <FontAwesome6 style={{ zIndex: 1 }} name="wifi" size={37} color={color} />
            </View>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  // tabBarInicio
  iconContainerOne: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 45,
    paddingVertical: 5,
  },
  labelContainerOne: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 45,
    paddingBottom: 3,
    transform: [{ translateY: -5 }],
  },
  tabBarActiveIndicatorOne: {
    position: 'absolute',
    left: '-35%',
    bottom: '-65%',
    // transform: [{ translateX: -60 }, { translateY: 15 }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lighter,
    height: 70,
    width: 90,
    borderRadius: 8,
    zIndex: 0,
  },
  // tabBarChat
  iconContainerTwo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  labelContainerTwo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
    transform: [{ translateY: -5 }],
  },
  tabBarActiveIndicatorTwo: {
    position: 'absolute',
    left: '-22%',
    bottom: '-65%',
    // transform: [{ translateX: -80 }, { translateY: 15 }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lighter,
    height: 70,
    width: 90,
    borderRadius: 8,
    zIndex: 0,
  },
  // tabBarVincular
  iconContainerThree: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 45,
    paddingVertical: 5,
  },
  labelContainerThree: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 45,
    paddingBottom: 3,
    transform: [{ translateY: -5 }],
  },
  tabBarActiveIndicatorThree: {
    position: 'absolute',
    left: '-28%',
    bottom: '-65%',
    // transform: [{ translateX: -55 }, { translateY: 15 }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lighter,
    height: 70,
    width: 90,
    borderRadius: 8,
    zIndex: 0,
  }
});

