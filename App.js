import React from 'react';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TouchableOpacity} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import PreferencesContext from './PreferencesContext';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

// const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

// import Title from './src/components/title';
// import SelectBox from './src/components/selectbox';

// import HomeScreen from './src/screens/home';
// import Sample from './src/screens/sample';

const Stack = createNativeStackNavigator();
const title = 'title';
const content = 'content';

const HomeScreen = ({navigation}) => (
  <TouchableOpacity
    onPress={() =>
      navigation?.push('Details', {
        title,
        content,
      })
    }>
    <Card>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

const DetailsScreen = props => {
  const {title, content} = props?.route?.params;
  return (
    <List.Section>
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

const App = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};
export default App;
