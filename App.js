import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Text} from 'react-native';
const Stack = createStackNavigator();

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
const HomeScreen = ({navigation}) => {
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {
            text: '1',
            link: 'Profile2',
          })
        }
      />
      <Text>test</Text>
    </>
  );
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
