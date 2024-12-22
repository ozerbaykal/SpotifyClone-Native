import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = ({ error }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>{error ? error.message : "Veriler Yüklenirken bir hata oluştu"} </Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "crimson",

        height: 100,
        width: "auto",
        marginHorizontal: 20,
        marginVertical: 30,
        borderRadius: 10

    },

    errorText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"



    }



})