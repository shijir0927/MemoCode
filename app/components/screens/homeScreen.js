import React ,{useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet, Alert, SafeAreaView, Pressable, ScrollView} from 'react-native';
import EventCard from '../common/eventCard';

const HomeScreen = ({ navigation }) => {
    return (
      <SafeAreaView style = {styles.homeScreenContainer}>
            <ScrollView style = {styles.homeScroll}>
                <Pressable onPress={() => navigation.navigate('Numbers-Staging')} style = {styles.card}>
                    <EventCard eventName = 'Numbers' eventText = 'Memorize random numbers' cardColor = 'blue' />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Words-Staging')} style = {styles.card}>
                    <EventCard eventName = 'Words' eventText = 'Memorize random words' cardColor = 'purple' />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Numbers-Memo')} style = {styles.card}>
                    <EventCard eventName = 'Cards' eventText = 'Memorize random cards' cardColor = 'red' />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Numbers-Memo')} style = {styles.card}>
                    <EventCard eventName = 'Binary' eventText = 'Memorize random binary' cardColor = 'green' />
                </Pressable>
            </ScrollView>
      </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    homeScreenContainer:{
        justifyContent: 'space-between'
    },  
    homeScroll:{
        height: '100%'
    },
    card:{
        height: 150,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})