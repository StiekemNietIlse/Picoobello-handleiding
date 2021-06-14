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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ContinuesPage = ({navigation, route}) => {
  console.log(pages[route.params.number - 1].name);
  const index = pages[route.params.number - 1].name.split('/');
  let lastPage = false;
  if (index[0] === index[1]) {
    lastPage = true;
  }
  console.log(index[0]);
  console.log(index[1]);
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
        <Text style={{textAlign: 'center', marginBottom: '2%', fontSize: 22}}>
          {pages[route.params.number - 1].name}
        </Text>
        <Text style={{textAlign: 'center', marginBottom: '2%', fontSize: 22}}>
          {pages[route.params.number - 1].text}
        </Text>
        <Image
          style={{width: 800, height: 800, resizeMode: 'contain'}}
          source={pages[route.params.number - 1].imagePath}
        />
        {pages[route.params.number - 1].information == undefined ? (
          <Text />
        ) : (
          <Text
            style={{
              textAlign: 'center',
              color: '#292D78',
              margin: '2%',
              backgroundColor: '#C8EBFB',
              fontSize: 22,
            }}>
            {pages[route.params.number - 1].information}
          </Text>
        )}
        <Text style={{textAlign: 'center', marginBottom: '2%', fontSize: 22}}>
          {pages[route.params.number - 1].question}
        </Text>
      </View>
      {route.params.number - 1 == index[1] ? (
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
              fontSize: 22,
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
            backgroundColor: '#F1A948',
            width: '50%',
            padding: '2%',
            borderRadius: 50,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 22,
            }}>
            Ja, ga verder
          </Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
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
              fontSize: 22,
              marginBottom: '5%',
              color: '#292D78',
            }}>
            {pages[0].text}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              color: '#292D78',
            }}>
            {pages[0].question}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              number: 2,
            })
          }
          style={{
            marginTop: '10%',
            backgroundColor: '##F1A948',
            width: '70%',
            padding: '2%',
            borderRadius: 50,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              color: 'white',
            }}>
            Picoo opstarten
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
export default App;
