import { StyleSheet, View } from "react-native";
import Screen2a from "./screen2a";
import Screen2c from "./screen2c";
import {Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
      <Button
        title="Go to Screen2a"
        onPress={() => navigation.navigate('Screen2a')}
      />
      <Button
        title="Go to Screen2c"
        onPress={() => navigation.navigate('Screen2c')}
      />
     
      

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Screen2a"
          component={Screen2a}
          options={{ title: 'Screen2a' }}
        />
        <Stack.Screen
          name="Screen2c"
          component={Screen2c}
          options={{ title: 'Screen2c' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}