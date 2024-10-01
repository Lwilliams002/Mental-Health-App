import React, {useState} from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const weeklyLevelBar = () => {

    const [currentXP, setCurrentXP] = useState(3);
    const [totalXP, setTotalXP] = useState(10);

    const progress = totalXP > 0 ? currentXP / totalXP : 0;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Weekly Progress</Text>
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { flex: progress }]} />
                <View style={{ flex: 1 - progress }} />
                <Text style={styles.progressText}>{`${currentXP} XP / ${totalXP} XP`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    progressBar: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#ffffff',
    },
    progressFill: {
        backgroundColor: '#b2ebf2',
        borderRadius: 20,
    },
    progressText: {
        position: 'absolute',
        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default weeklyLevelBar;