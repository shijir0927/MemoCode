import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, Alert} from 'react-native';


const NumbersMemo = ({navigation}) =>{

    const getRandomNumbers = (digitsCount)=>{
        let randomNumbers = '';
        for(let i=0; i<digitsCount; i++){
            randomNumbers += Math.floor(Math.random()*9).toString();
        }   
        return randomNumbers;
    }

    const [randomNumbers, setRandomNumbers] = useState(getRandomNumbers(100));
    const [counter, setCounter] = React.useState(300);

    useEffect(()=>{
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(counter == 0){
            handleTimeUp();
        }
        return () => clearInterval(timer);

    }, [counter])

    const handleFinish = () =>{
        navigation.navigate('Numbers-Recall', {numbers : randomNumbers})
        setCounter(-1);
    }

    const handleTimeUp = ()=>{
        alert('Time is up!');
        navigation.navigate('Numbers-Recall', {numbers : randomNumbers})
    }

    return (
       <View style = {styles.numbersContainer}>

           <View style = {styles.topRow}>
            <Text>Time Remaining: {counter}</Text>
            <Button title = 'Finish' onPress = {handleFinish}/>
           </View>

            <View  style = {styles.randomNumbersContainer}>
                <Text style = {styles.randomNumbers}>{randomNumbers}</Text>
            </View>
       </View>
    )
}

export default NumbersMemo;

const styles = StyleSheet.create({
    numbersContainer:{
        padding: 20
    },
    topRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    randomNumbersContainer:{
        height: '90%'
    },
    randomNumbers:{
        fontSize: 44,
        letterSpacing: 10
    }
})