import FontAwesome from '@expo/vector-icons/FontAwesome';
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
              <StyledText bold style={{ color: color }}>Inicio</StyledText>
            </View>,
          tabBarIcon: ({ color }) =>
            <View style={styles.iconContainerOne}>
              {
                pathname == '/' && (
                  <View style={styles.tabBarActiveIndicatorOne}></View>
                )
              }
              <FontAwesome size={40} name="home" color={color} />
            </View>,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: ({ color }) =>
            <View style={styles.labelContainerTwo}>
              <StyledText bold style={{ color: color }}>Chat</StyledText>
            </View>,
          tabBarIcon: ({ color }) =>
            <View style={styles.iconContainerTwo}>
              {
                pathname == '/chat' && (
                  <View style={styles.tabBarActiveIndicatorTwo} ></View>
                )
              }
              <FontAwesome size={40} name="comment" color={color} />
            </View>,
        }}
      />
      <Tabs.Screen
        name="connect"
        options={{
          tabBarLabel: ({ color }) =>
            <View style={styles.labelContainerThree}>
              <StyledText bold style={{ color: color }}>Vincular</StyledText>
            </View>,
          tabBarIcon: ({ color }) =>
            <View style={styles.iconContainerThree}>
              {
                pathname == '/connect' && (
                  <View style={styles.tabBarActiveIndicatorThree}></View>
                )
              }
              <FontAwesome size={40} name="wifi" color={color} />
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
    paddingBottom: 6,
    transform: [{ translateY: -5 }],
  },
  tabBarActiveIndicatorOne: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '21%' }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lighter,
    height: '140%',
    width: '220%',
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
    paddingBottom: 6,
    transform: [{ translateY: -5 }],
  },
  tabBarActiveIndicatorTwo: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '21%' }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lighter,
    height: '140%',
    width: '220%',
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
    paddingBottom: 6,
    transform: [{ translateY: -5 }],
  },
  tabBarActiveIndicatorThree: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '21%' }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lighter,
    height: '140%',
    width: '220%',
    borderRadius: 8,
    zIndex: 0,
  }
});

