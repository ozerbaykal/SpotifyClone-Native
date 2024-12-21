import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Loader from '../components/Loader'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"

const HomeScreen = () => {
    return (
        <LinearGradient colors={['#040306', '#131624']} style={{ flex: 1 }}>
            {/* <Loader /> */}
            <ScrollView style={{ marginTop: 50 }}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.headerIcon} source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
                        }} />
                        <Text style={styles.headerText}>Message</Text>

                    </View>

                    <FontAwesome6 name="bolt-lightning" color="white" size={24} />
                    {/* <MaterialCommunityIcons name="lightning-bolt" color="white" size={24} /> */}


                </View>
                {/* tab buttons */}

                <View style={styles.tabButtons}>
                    <Pressable style={styles.tabButton}>
                        <Text style={styles.tabButtonText}> Music</Text>
                    </Pressable   >
                    <Pressable style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Poadcast & Shows</Text>
                    </Pressable>

                </View>



            </ScrollView>
        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,

        padding: 10


    },
    headerIcon: {
        height: 50,
        width: 50,
        padding: 10,
        borderRadius: 30,

    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"

    },
    tabButtons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 5,
        marginHorizontal: 12,

    },
    tabButton: {
        backgroundColor: "#282828",
        padding: 10,
        borderRadius: 30

    },
    tabButtonText: {
        color: "white",
        fontSize: 15,
    },

})