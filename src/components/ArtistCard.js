import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ArtistCard = ({ artist }) => {
    return (
        <TouchableOpacity>
            <View style={styles.artistContainer}>
                <Image
                    source={{
                        uri:
                            artist?.data?.visuals?.avatarImage?.sources?.[0]?.url ||
                            'https://lh5.googleusercontent.com/proxy/z8ZnpVeh7pBZzjRpSzf84No758IYunlB0tAwsdbsAaoVaqDUv3OVcXCt633gFvj6hb6IoXjQsJ9h5HVx-xJycMkzkL0w4Js4EiZMn9yDozmk0g',
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
