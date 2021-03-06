import { NavigationContainer } from '@react-navigation/native';
import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const NumbersStaging = ({route, navigation})=>{

    const [digits, setDigits] = useState('');
    const [memoTime, setMemoTime] = useState('');
    const [recallTime, setRecallTime] = useState('');

    const handleClick = () =>{
        navigation.navigate('Numbers-Memo', {digits: parseInt(digits) || 80, memoTime: parseInt(memoTime) || 60, recallTime: parseInt(recallTime) || 60}) 
    }

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.row}>
                <Text style = {styles.text}>Digits to memorise:</Text>
                <TextInput 
                    style = {styles.input} 
                    keyboardType = 'number-pad'
                    onChangeText={text => setDigits(text)}
                    value={digits}
                />
            </View>

            <View style = {styles.row}>
                <Text style = {styles.text}>Memorization Time:</Text>
                <TextInput 
                    style = {styles.input} 
                    keyboardType = 'number-pad'
                    onChangeText={text => setMemoTime(text)}
                    value={memoTime}
                />
            </View>

            <View style = {styles.row}>
                <Text style = {styles.text}>Recall Time:</Text>
                <TextInput 
                    style = {styles.input} 
                    keyboardType = 'number-pad'
                    onChangeText={text => setRecallTime(text)}
                    value={recallTime}
                />
            </View>

            <View style = {styles.start}>
                <Button title = 'Start' onPress = {handleClick}/>
            </View>
        </SafeAreaView>
    )
}

export default NumbersStaging;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height: '100%'
    },
    text:{
        fontSize: 20
    },
    input:{
        borderWidth:1,
        borderColor: 'grey',
        width: 100,
        height: 35,
        borderRadius: 4,
        marginLeft: 20,
        paddingLeft: 5,
        fontSize: 18
    },
    row:{
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 20
    },
    start:{
        marginTop: 50
    }
})