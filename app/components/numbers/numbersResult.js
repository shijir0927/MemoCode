import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, Alert, ScrollView} from 'react-native';


const NumbersMemo = ({route, navigation}) =>{

    const {correctCount, totalCount, recalled, memorized}  = route.params;

    const handleFinish = () => {
        navigation.navigate('Memorise');
    }

    const generateResult = (a, b) =>{
        let result = []
        for(let i=0; i<a.length; i++){
            if(a[i] == b[i]){
                result.push(<Text style = {styles.correct} key = {i}>{a[i]}</Text>)
            }else{
                result.push(<Text style = {styles.incorrect} key = {i}>{a[i]}</Text>)
            }
        }

        return result;
    }
    return (
       <View style = {styles.numbersContainer}>

           <View style = {styles.topRow}>
            <Text>Score : {correctCount} out of {totalCount}</Text>
            <Button title = 'Finished' onPress = {handleFinish} style = {styles.finished}/>
           </View>

            <ScrollView  style = {styles.randomNumbersContainer}>
            <Text style = {styles.randomNumbers}>{generateResult(recalled, memorized)}</Text>
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
    },
    correct: {
        color: 'green'
    }, incorrect: {
        color: 'red'
    }
})