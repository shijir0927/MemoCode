import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>Best Scores</Text>
            <Text>Numbers: 80 numbers in 45 seconds</Text>
            <Text>Words: 80 numbers in 45 seconds</Text>
            <Text>Binary: 80 numbers in 45 seconds</Text>
            <Text>Cards: 80 numbers in 45 seconds</Text>
        </SafeAreaView>
    );
  };

  export default SettingsScreen;