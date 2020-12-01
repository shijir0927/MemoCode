import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const NumbersRecall= ({route, navigation}) =>{

    const { numbers, recallTime } = route.params;
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
        let correctCount = 0;
        for(let i=0; i<value.length; i++){
            if(value[i] == numbers[i]){
                correctCount++;
            }
        }
        // alert(`You got ${correctCount} out of ${numbers.length}`);
        navigation.navigate('Numbers-Result', {totalCount: numbers.length, correctCount: correctCount, recalled: value, memorized: numbers});
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
                keyboardType = 'number-pad'
                maxLength = {numbers.length}
                placeholder = 'Recall here'
                onChangeText={text => onChangeText(text)}
                value={value}/>
            </View>
       </View>
    )
}

export default NumbersRecall;

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
        fontSize: 36,
        letterSpacing: 8
    }
})