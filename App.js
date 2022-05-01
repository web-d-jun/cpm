import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Title from './src/components/title';
import SelectBox from './src/components/selectbox';

import HomeScreen from './src/screens/home';
import Sample from './src/screens/sample';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={({navigation}) => ({
            headerLeft: props => <SelectBox />,
            headerTitle: props => <Title {...props} />,
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Sample" component={Sample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
