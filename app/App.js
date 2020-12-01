import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import HomeScreen from './components/screens/homeScreen';
import SettingsScreen from './components/screens/settingsScreen';
//components
import NumbersMemo from './components/numbers/numbersMemo';
import NumbersRecall from './components/numbers/numbersRecall';
import NumbersStaging from './components/numbers/numbersStaging';
import NumebrsResult from './components/numbers/numbersResult';
import WordsStaging from './components/words/wordsStaging';
import WordsMemo from './components/words/wordsMemo';
import WordsRecall from './components/words/wordsRecall';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreenStack}
        />
        <Tab.Screen
          name="Scores"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeScreenStack = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Memorise" component={HomeScreen} />
      <Stack.Screen name="Numbers-Memo" component={NumbersMemo} />
      <Stack.Screen name="Numbers-Recall" component={NumbersRecall} />
      <Stack.Screen name='Numbers-Staging' component={NumbersStaging}/>
      <Stack.Screen name='Numbers-Result' component={NumebrsResult}/>
      <Stack.Screen name="Words-Memo" component={WordsMemo} />
      <Stack.Screen name="Words-Recall" component={WordsRecall} />
      <Stack.Screen name='Words-Staging' component={WordsStaging}/>
    </Stack.Navigator>
  )
}





export default App;
