import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, Alert} from 'react-native';

const EventCard = ({cardColor, eventName, eventText })=>{
    const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: '100%',
            backgroundColor: cardColor,
            borderRadius: 4
        },
        textContainer:{
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
            padding: 10
        },
        event:{
            fontSize: 24,
            color: cardColor
        },
        eventText:{
            fontSize: 14,
            color: 'black'
        }
    })
    return (
        <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.event}>{eventName}</Text>
                <Text style = {styles.eventText}>{eventText}</Text>
            </View>
        </View>
    )
}

export default EventCard;

