import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {Link} from "expo-router";
import Icon from 'react-native-vector-icons/Entypo';
import WeeklyLevelBar from "./(tabs)/components/weeklyLevelBar";


export default function App(){
    return (

        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-pregular">HomeScreen</Text>
            <WeeklyLevelBar />
            <StatusBar style="auto"/>
            <Link className= "absolute top-10 left-2" href= "/(tabs)/profile"  >
                <Icon name="menu" size={24} color="black" />
            </Link>
        </View>
    )
}