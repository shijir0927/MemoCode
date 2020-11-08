import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//components
import NumbersMemo from './components/numbers/numbersMemo';
import NumbersRecall from './components/numbers/numbersRecall';
import NumbersStaging from './components/numbers/numbersStaging';
import HomeScreen from './components/screens/homeScreen';

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
          name="Settings"
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
    </Stack.Navigator>
  )
}



const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default App;
