import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//components
import NumbersMemo from './components/numbers/numbersMemo';
import NumbersRecall from './components/numbers/numbersRecall';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'MemoCode' }}
        />
        <Stack.Screen name="Numbers-Memo" component={NumbersMemo}/>
        <Stack.Screen name='Numbers-Recall' component = {NumbersRecall}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Numbers Event"
      onPress={() => navigation.navigate('Numbers-Memo', { name: 'Jane' })}
    />
  );
};
const ProfileScreen = () => {
  return <Text>This is Jane's profile</Text>;
};

export default App;
