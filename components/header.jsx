import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function Header() {
    return(
        <SafeAreaView style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "coral",
        height: 120

    },
    title: {
        fontWeight: "900",
        color: "white",
        textAlign: "center",
        fontSize:40
    }
})