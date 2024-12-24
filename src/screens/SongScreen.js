import {
    ActivityIndicator,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import Modal from 'react-native-modal';

const SongScreen = () => {
    const navigation = useNavigation();
    const progress = useProgress();

    const [searchText, setSearchText] = useState("Türkiye'de populer müzikler");
    const [searchedTracks, setSearchTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    const handleScreen = async () => {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: {
                term: 'Tarkan',
                locale: 'tr-TR',
                offset: '0',
                limit: '5',
            },
            headers: {
                'x-rapidapi-key': 'e48aae4760msh168a32d55c6ea2fp1054afjsn68df4fe6d656',
                'x-rapidapi-host': 'shazam.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            setSearchTracks(response.data.tracks.hits);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    const setupPlayer = async () => {
        try {
            /*
            TrackPlayer kütüphanesinin oynatıcıyı kurmasını sağlar.bu işlemde oynatıcıyı
            başlatmak için gerekli olan yapılandırmalar.
            
             */
            await TrackPlayer.setupPlayer();
            TrackPlayer.updateOptions({
                capabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_STOP,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                ],
            });
        } catch (error) {
            console.log('Error setting up player:', error);
        }
    };
    //tıklanana şarkının verilerini gönderiyoruz
    const handlePlay = async track => {
        const trackData = {
            id: track.track.key,
            url: track.track.hub.actions.find(action => action.type === 'uri').uri,
            title: track.track.title,
            artist: track.track.subtitle,
            artwork: track.track.images.coverart,
        };

        try {
            await TrackPlayer.reset();
            await TrackPlayer.add(trackData);
            await TrackPlayer.play();
            setSelectedTrack(track.track);
            setModalVisible(true);
            setIsPlaying(true);
        } catch (error) {
            console.log(error);
        }
    };
    const formatTime = seconds => {
        // toplam saniyeyi dakiyaya çevirelim
        const mins = Math.floor(seconds / 60);
        //toplam saniye sayısından geriye kalan saniyeyi hesapla
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ' '}${secs}`;
    };

    const togglePlayback = async () => {
        if (isPlaying) {
            //müzik oynatılıyorsa durdur
            await TrackPlayer.pause();
        } else {
            //müzik duruyorsa oynat
            await TrackPlayer.play();
        }
        //isplaying değerini oynatma ve durdurma butonuna basıldığında tamtersi değerine çevir
        setIsPlaying(!isPlaying);
    };

    // müziği 10 sn geri alan fonksiyon
    const seekBackward = async () => {
        const position = await TrackPlayer.getPosition();
        await TrackPlayer.seekTo(position - 10);
    };

    // müziği 10 sn ileri alan fonkiyon
    const seekForward = async () => {
        const position = await TrackPlayer.getPosition();
        await TrackPlayer.seekTo(position + 10);
    };


    useEffect(() => {
        handleScreen();
        setupPlayer()
    }, []);

    return (
        <>
            <LinearGradient colors={['#614385', '#516395']} style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, marginTop: 50, padding: 10 }}>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </Pressable>
                        <Pressable
                            style={{
                                flexDirection: 'row',
                                gap: 5,
                                padding: 10,
                                borderWidth: 1,
                                borderColor: 'white',
                                borderRadius: 10,
                                backgroundColor: 'darkgrey',
                            }}>
                            <AntDesign name="search1" size={24} color="white" />
                            <TextInput
                                onChangeText={setSearchText}
                                placeholder="Find in search songs"
                                placeholderTextColor="white"
                                style={{
                                    fontWeight: '600',
                                    fontSize: 16,
                                    width: '80%',
                                    color: 'white',

                                }}
                                onSubmitEditing={handleScreen}
                            />
                        </Pressable>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
                            Search songs
                        </Text>
                        <Text style={{ marginTop: 5, color: 'white' }}>5</Text>
                    </View>

                    {loading ? (
                        <ActivityIndicator size={'large'} color={'gray'} />
                    ) : (
                        <FlatList
                            data={searchedTracks}
                            keyExtractor={item0 => item0.track.key}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => handlePlay(item)}>
                                    <View style={styles.trackContainer}>
                                        <Image
                                            source={{ uri: item.track.images.coverart }}
                                            style={styles.albumCover}
                                        />
                                        <View style={styles.trackInfo}>
                                            <Text style={styles.trackName}>{item.track.title}</Text>
                                            <Text style={styles.artistName}>{item.track.subtitle}</Text>
                                        </View>
                                        <Entypo name="controller-play" size={24} color="white" />
                                    </View>
                                </Pressable>
                            )}></FlatList>
                    )}
                </ScrollView>
            </LinearGradient>

            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                swipeDirection="down"
                onSwipeComplete={() => setModalVisible(false)}
                style={{ margin: 0 }}>
                <View
                    style={{
                        backgroundColor: '#5072A7',
                        width: '100%',
                        height: '100%',
                        paddingTop: 60,
                        paddingHorizontal: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <AntDesign name="down" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                            songs
                        </Text>

                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </View>

                    <View style={{ padding: 10, marginTop: 20 }}>
                        <Image
                            source={{ uri: selectedTrack?.images.coverart }}
                            style={{ width: '100%', height: 330, borderRadius: 4 }}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                            }}>
                            <View>
                                <Text
                                    style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                                    {' '}
                                    {selectedTrack?.title}{' '}
                                </Text>
                                <Text
                                    style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                                    {' '}
                                    {selectedTrack?.subtitle}{' '}
                                </Text>
                            </View>

                            <AntDesign name="heart" size={24} color="#1DB954" />
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: 10,
                                    height: 3,
                                    backgroundColor: 'gray',
                                    borderRadius: 5,
                                }}>
                                <View
                                    style={[
                                        styles.progressbar,
                                        {
                                            width: `${(progress.position / progress.duration) * 100
                                                }%`,
                                        },
                                    ]}
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: -5,
                                        width: 10,
                                        height: 10,
                                        backgroundColor: 'white',
                                        borderRadius: 5,
                                        left: `${(progress.position / progress.duration) * 100}%`,
                                    }}
                                />
                            </View>

                            <View
                                style={{
                                    marginTop: 12,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    {' '}
                                    {formatTime(progress.position)}{' '}
                                </Text>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    {' '}
                                    {formatTime(progress.duration)}{' '}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 18,
                                    alignItems: 'center',
                                }}>
                                <Pressable onPress={seekBackward}>
                                    <Entypo
                                        name="controller-fast-backward"
                                        size={30}
                                        color="white"
                                    />
                                </Pressable>

                                <Pressable>
                                    <Ionicons name="play-skip-back" size={30} color="white" />
                                </Pressable>

                                <Pressable onPress={togglePlayback}>
                                    {isPlaying ? (
                                        <AntDesign name="pausecircle" size={60} color="white" />
                                    ) : (
                                        <Entypo name="controller-play" size={60} color="white" />
                                    )}
                                </Pressable>

                                <Pressable>
                                    <Ionicons name="play-skip-forward" size={30} color="white" />
                                </Pressable>

                                <Pressable onPress={seekForward}>
                                    <Entypo
                                        name="controller-fast-forward"
                                        size={30}
                                        color="white"
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default SongScreen;

const styles = StyleSheet.create({
    trackContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    albumCover: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    trackInfo: {
        flex: 1,
        marginLeft: 10,
    },
    trackName: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    artistName: {
        fontSize: 16,
        color: '#758694',
        fontWeight: "500",
        marginTop: 5
    },
});
