import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ArtistContext } from '../context/ArtistContext';
import ArtistCard from '../components/ArtistCard';
import { AlbumContext } from '../context/AlbumContext';
import AlbumCard from '../components/AlbumCard';
import Error from '../components/Error';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { artists, loading, error } = useContext(ArtistContext);
    const {
        albums,
        loading: albumsLoading,
        error: albumsError,
    } = useContext(AlbumContext);

    return (
        <LinearGradient colors={['#040306', '#131624']} style={{ flex: 1 }}>
            <ScrollView style={{ marginTop: 50 }}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image
                            style={styles.headerIcon}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s',
                            }}
                        />
                        <Text style={styles.headerText}>Message</Text>
                    </View>

                    <FontAwesome6 name="bolt-lightning" color="white" size={24} />
                    {/* <MaterialCommunityIcons name="lightning-bolt" color="white" size={24} /> */}
                </View>
                {/* tab buttons */}

                <View style={styles.tabButtons}>
                    <Pressable style={styles.tabButton}>
                        <Text style={styles.tabButtonText}> Music</Text>
                    </Pressable>
                    <Pressable style={styles.tabButton}>
                        <Text style={styles.tabButtonText}>Poadcast & Shows</Text>
                    </Pressable>
                </View>

                {/*İnfo buttons */}
                <View style={{ marginTop: 10 }}>
                    <Pressable style={styles.likedSongs}>
                        <LinearGradient
                            colors={['#33006F', '#FFFFFF']}
                            style={styles.LinearGradient}>
                            <Pressable
                                onPress={() => navigation.navigate("Songs")}


                                style={{
                                    width: 55,
                                    height: 55,

                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <AntDesign name="heart" color="white" size={24} />
                            </Pressable>
                        </LinearGradient>
                        <Text style={styles.likedSongsText}>Songs</Text>
                    </Pressable>
                    <Pressable style={styles.likedSongs}>
                        <LinearGradient
                            colors={['#33006F', '#FFFFFF']}
                            style={styles.LinearGradient}>
                            <Pressable
                                style={{
                                    width: 55,
                                    height: 55,

                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Entypo name="moon" color="white" size={24} />
                            </Pressable>
                        </LinearGradient>
                        <Text style={styles.likedSongsText}>Rock & Rol</Text>
                    </Pressable>
                    <Pressable style={styles.likedSongs}>
                        <LinearGradient
                            colors={['#33006F', '#FFFFFF']}
                            style={styles.LinearGradient}>
                            <Pressable
                                style={{
                                    width: 55,
                                    height: 55,

                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Entypo name="star" color="white" size={24} />
                            </Pressable>
                        </LinearGradient>
                        <Text style={styles.likedSongsText}>Caz</Text>
                    </Pressable>
                    <Text style={styles.sectionTitle}> Your Top Artist</Text>

                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <Error error={error} />
                    ) : (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {artists?.map((artist, index) => (
                                <ArtistCard artist={artist} key={index} />
                            ))}
                        </ScrollView>
                    )}
                    <View style={{ height: 10 }} />
                    <Text style={styles.albumText}>Populer Albüms</Text>

                    {albumsLoading ? (
                        <Loader />
                    ) : albumsError ? (
                        <Error error={albumsError} />
                    ) : (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {albums?.map((album, index) => (
                                <AlbumCard key={index} album={album} />
                            ))}
                        </ScrollView>
                    )}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,

        padding: 10,
    },
    headerIcon: {
        height: 50,
        width: 50,
        padding: 10,
        borderRadius: 30,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    tabButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
        marginHorizontal: 12,
    },
    tabButton: {
        backgroundColor: '#282828',
        padding: 10,
        borderRadius: 30,
    },
    tabButtonText: {
        color: 'white',
        fontSize: 15,
    },
    likedSongs: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: '#282828',
        borderRadius: 15,
    },
    likedSongsText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    LinearGradient: {
        borderRadius: 15,
    },
    sectionTitle: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    albumText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
});
