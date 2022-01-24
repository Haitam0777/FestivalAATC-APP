import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home2 from '../Components/Home2';
import Map2 from '../Components/map';

function HomeScreen() {
  return (
    <Home2/>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Map() {
    return (
      <Map2/>
    );
  }

const Tab = createBottomTabNavigator();

export default function tab() {
  return (
    <NavigationContainer style={{ backgroundColor:"red"}}>
      <Tab.Navigator initialRouteName = {"Home"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
            size = focused
              ? size+10
              : size;
            
          } else if (route.name === 'Contact') {
            iconName = focused ? 'mail' : 'mail';
            size = focused
              ? size+10
              : size;
          }else {
            iconName = focused ? 'navigate-circle' : 'navigate-circle';
            size = focused
              ? size+10
              : size;
          } 

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#603813',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contact" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}