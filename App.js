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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Home" component={ContinuesPage} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ContinuesPage = ({navigation, route}) => {
  console.log(route.params);
  if (route.params) {
    if (route.params.number) {
      let index = pages[route.params.number - 1].toString().split('/');
      let lastPage = false;
      if (index[0] === index[1]) {
        lastPage = true;
      }
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
            <Text
              style={{textAlign: 'center', marginBottom: '5%', fontSize: 25}}>
              {pages[route.params.number - 1].name}
            </Text>
            <Image
              style={{width: 700, height: 700, resizeMode: 'contain'}}
              source={pages[route.params.number - 1].imagePath}
            />
            <Text style={{textAlign: 'center', marginBottom: '5%'}}>
              {pages[route.params.number - 1].text}
            </Text>
            {pages[route.params.number - 1].information == undefined ? (
              <Text />
            ) : (
              <Text
                style={{
                  textAlign: 'center',
                  color: '#292D78',
                  marginBottom: '5%',
                  backgroundColor: '#C8EBFB',
                }}>
                {pages[route.params.number - 1].information}
              </Text>
            )}
            <Text style={{textAlign: 'center', marginBottom: '5%'}}>
              {pages[route.params.number - 1].question}
            </Text>
          </View>
          {route.params.number - 1 == '6' ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HomeScreen', {
                  number: 0,
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
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '800',
                }}>
                Ja, ga verder
              </Text>
            </TouchableOpacity>
          ) : (
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
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '800',
                }}>
                Ja, ga verder
              </Text>
            </TouchableOpacity>
          )}
        </ImageBackground>
      );
    }
  }
};

const HomeScreen = ({navigation}) => {
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
          backgroundColor: ' white',
        }}>
        <View>
          <Image
            style={{width: 400, height: 400, resizeMode: 'contain'}}
            source={pages[0].imagePath}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              marginBottom: '5%',
              color: '#292D78',
            }}>
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
            style={{
              textAlign: 'center',
              fontWeight: '800',
              color: 'white',
            }}>
            Picoo opstarten
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
const TestScreen = ({navigation, route}) => {
  return <Text>Test value is: {route.params.test}</Text>;
};
export default App;
