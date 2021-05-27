import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Button,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import pages from './json/pages';
const Stack = createStackNavigator();

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

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
        <ImageBackground
          source={require('./images/Background.png')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'cover',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
          }}>
          <View>
            <Image
              style={{width: 200, height: 200, resizeMode: 'contain'}}
              source={pages[0].imagePath}
            />
            <Text style={{textAlign: 'center', marginBottom: '5%'}}>
              {pages[route.params.number - 1].name}
            </Text>
            <Text style={{textAlign: 'center', marginBottom: '5%'}}>
              {pages[route.params.number - 1].text}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home', {
                number: route.params.number + 1,
              })
            }
            style={{
              marginTop: '10%',
              backgroundColor: 'blue',
              width: '50%',
              padding: '2%',
              borderRadius: 50,
            }}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '800'}}>
              Ja, ga verder
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      );
    }
  } else {
    {
      let imagePath = pages[0].imgpath;
    }

    return (
      <>
        <ImageBackground
          source={require('./images/Background.png')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'cover',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
          }}>
          <View>
            <Image
              style={{width: 200, height: 200, resizeMode: 'contain'}}
              source={pages[0].imagePath}
            />
            <Text style={{textAlign: 'center', marginBottom: '5%'}}>
              {pages[0].name}
            </Text>
            <Text style={{textAlign: 'center', marginBottom: '5%'}}>
              {pages[0].text}
            </Text>
            <Text>{pages[0].question}</Text>


          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home', {
                number: 2,
              })
            }
            style={{
              marginTop: '10%',
              backgroundColor: 'blue',
              width: '50%',
              padding: '2%',
              borderRadius: 50,
            }}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '800'}}>
              Picoo opstarten
            </Text>
          </TouchableOpacity>
        </ImageBackground>
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
