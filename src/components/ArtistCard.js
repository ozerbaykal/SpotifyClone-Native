import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ArtistCard = ({ artist }) => {
    return (
        <TouchableOpacity>
            <View style={styles.artistContainer}>
                <Image
                    source={{
                        uri:
                            artist?.data?.visuals?.avatarImage?.sources?.[0]?.url ||
                            'fallback-image-url',
                    }}
                    style={styles.artistImage}
                />
                <Text numberOfLines={1} style={styles.artistName}>{artist.data.profile.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ArtistCard;

const styles = StyleSheet.create({
    artistImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    artistContainer: {
        margin: 10,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    artistName: {
        color: 'white',
        marginTop: 8,
    },
});
