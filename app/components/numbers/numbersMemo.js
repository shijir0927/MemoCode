import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, Alert, ScrollView} from 'react-native';


const NumbersMemo = ({route, navigation}) =>{
    const {digits, memoTime, recallTime}  = route.params;

    const getRandomNumbers = (digitsCount)=>{
        let randomNumbers = '';
        for(let i=0; i<digitsCount; i++){
            randomNumbers += Math.floor(Math.random()*9).toString();
        }   
        return randomNumbers;
    }

    const [randomNumbers, setRandomNumbers] = useState(getRandomNumbers(digits));
    const [counter, setCounter] = useState(memoTime);

    useEffect(()=>{
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(counter == 0){
            handleTimeUp();
        }
        return () => clearInterval(timer);

    }, [counter])

    const handleFinish = () =>{
        navigation.navigate('Numbers-Recall', {numbers : randomNumbers, recallTime: recallTime})
        setCounter(-1);
    }

    const handleTimeUp = ()=>{
        alert('Time is up!');
        navigation.navigate('Numbers-Recall', {numbers : randomNumbers, recallTime: recallTime})
    }

    return (
       <View style = {styles.numbersContainer}>

           <View style = {styles.topRow}>
            <Text style = {styles.timeRemaining}>Time Remaining: <Text style = {styles.time}>{counter}</Text></Text>
            <Button title = 'Finished' onPress = {handleFinish} style = {styles.finished}/>
           </View>

            <ScrollView  style = {styles.randomNumbersContainer}>
                <Text style = {styles.randomNumbers}>{randomNumbers}</Text>
            </ScrollView>
       </View>
    )
}

export default NumbersMemo;

const styles = StyleSheet.create({
    numbersContainer:{
        padding: 20,
        backgroundColor: 'white',
        height: '100%'
    },
    topRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f3f4f5',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 10
    },
    randomNumbersContainer:{
        height: '90%'
    },
    randomNumbers:{
        fontSize: 44,
        letterSpacing: 10
    },
    timeRemaining:{
        fontSize: 18
    },
    time:{
        fontWeight: '500',
        fontSize: 20
    },
    finished:{
        backgroundColor: 'green'
    }
})