import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {HomeScreen} from './components/screen';
import {Button, Text, View} from 'react-native';
import Example2 from './components/screen';

import * as data from './json/data.json';
import pages from "./json/data.json";
const test = 'hallo dit is een test';
const Stack = createStackNavigator();
//const Array = JSON.parse(data);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Profile2" component={ProfileScreen} />
        <Stack.Screen name="Profile3" component={ProfileScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation, route}) => {
  if (route.params) {
    if (route.params.number) {
      console.log(route.params.number);
      return (
        <View>
          <View>
            <Text>{data.pages[route.params.number - 1].name}</Text>
            <Text>{data.pages[route.params.number - 1].text}</Text>
          </View>
          <Button
            title="next page"
            onPress={() =>
              navigation.navigate('Home', {
                number: route.params.number + 1,
              })
            }
          />
        </View>
      );
    }
  } else {
    return (
      <>
        <View>
          <View>
            <Text>{data.pages[0].name}</Text>
            <Text>{data.pages[0].text}</Text>
          </View>
          <Button
            title="to page 2"
            onPress={() =>
              navigation.navigate('Home', {
                number: 2,
              })
            }
          />
        </View>
      </>
    );
  }
};

const ProfileScreen = ({navigation, route}) => {
  return (
    <>
      <Button
        title={route.params.link.toString()}
        onPress={() =>
          navigation.navigate(route.params.link, {
            text: 'hgfhgjfjffggfisgggggggggggggggggdgddddddddddddddddddddddd',
            link: 'Profile3',
          })
        }
      />
      <Text>{route.params.text}</Text>
    </>
  );
};
const TestScreen = ({navigation, route}) => {
  return <Text>Test value is: {route.params.test}</Text>;
};
export default App;
