import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Loader from '../components/Loader'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from 'react-native-vector-icons/Entypo';
import { ArtistContext } from '../context/ArtistContext'
import ArtistCard from '../components/ArtistCard'


const HomeScreen = () => {
    const { artists, loading, error } = useContext(ArtistContext)
    return (
        <LinearGradient colors={['#040306', '#131624']} style={{ flex: 1 }}>
            {/* {<Loader />} */}
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


                {/*İnfo buttons */}
                <View style={{ marginTop: 10 }} >
                    <Pressable style={styles.likedSongs}>
                        <LinearGradient colors={['#33006F', '#FFFFFF']} style={styles.LinearGradient}   >
                            <Pressable style={{
                                width: 55,
                                height: 55,

                                justifyContent: "center",
                                alignItems: "center",

                            }}>
                                <AntDesign name="heart" color="white" size={24} />
                            </Pressable>


                        </LinearGradient>
                        <Text style={styles.likedSongsText}>Liked Songs</Text>

                    </Pressable>
                    <Pressable style={styles.likedSongs}>
                        <LinearGradient colors={['#33006F', '#FFFFFF']} style={styles.LinearGradient}  >
                            <Pressable style={{
                                width: 55,
                                height: 55,

                                justifyContent: "center",
                                alignItems: "center",

                            }}>
                                <Entypo name="moon" color="white" size={24} />
                            </Pressable>


                        </LinearGradient>
                        <Text style={styles.likedSongsText}>Rock & Rol</Text>

                    </Pressable>
                    <Pressable style={styles.likedSongs}>
                        <LinearGradient colors={['#33006F', '#FFFFFF']} style={styles.LinearGradient}  >
                            <Pressable style={{
                                width: 55,
                                height: 55,

                                justifyContent: "center",
                                alignItems: "center",

                            }}>
                                <Entypo name="star" color="white" size={24} />
                            </Pressable>


                        </LinearGradient>
                        <Text style={styles.likedSongsText}>Caz</Text>

                    </Pressable>
                </View>

                <Text style={styles.sectionTitle}> Your Top Artist</Text>

                <ScrollView>
                    {
                        artists?.map((artist, index) => (
                            <ArtistCard artist={artist} key={index} />


                        ))
                    }

                </ScrollView>





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
    likedSongs: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: "#282828",
        borderRadius: 15



    },
    likedSongsText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600"

    },
    LinearGradient: {
        borderRadius: 15

    },
    sectionTitle: {
        color: "white",
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,


    }

})