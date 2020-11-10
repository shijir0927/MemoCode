import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const WordsRecall = ({route, navigation}) =>{

    const { words, recallTime } = route.params;
    const [counter, setCounter] = useState(recallTime);
    const [value, onChangeText] = useState('');

    useEffect(()=>{
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(counter == 0){
            handleFinish();
        }
        return () => clearInterval(timer);

    }, [counter])

    const handleFinish = () => {
        const recalledWords = value.split('\n');

        let correctCount = 0;
        for(let i=0; i<recalledWords.length; i++){
            if(recalledWords[i].toLowerCase() == words[i].toLowerCase()){
                correctCount++;
            }
        }
        alert(`You got ${correctCount} out of ${words.length}`);
        navigation.navigate('Memorise');
    }

    return (
       <View style = {styles.recallContainer}>

           <View style = {styles.topRow}>
            <Text>Time Remaining: {counter}</Text>
            <Button title = 'Finish' onPress = {handleFinish}/>
           </View>

            <View  style = {styles.inputContainer}>
                <TextInput style = {styles.input} 
                multiline
                autoFocus 
                keyboardAppearance = 'dark'
                placeholder = 'Recall here'
                onChangeText={text => onChangeText(text)}
                value={value}/>
            </View>
       </View>
    )
}

export default WordsRecall;;

const styles = StyleSheet.create({
    recallContainer:{
        padding: 20
    },
    topRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputContainer:{
        height: '90%'
    },
    input:{
        fontSize: 32,
    }
})