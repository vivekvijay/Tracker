import React from 'react';
import { ScrollView, Text, View, StyleSheet, YellowBox, Dimensions } from 'react-native';

export default class WellInfo extends React.Component {
    render() {
        const window = Dimensions.get('window'),
            windowWidth = window.width,
            windowHeight = window.height;
        return (
            <ScrollView pagingEnabled={true} horizontal={true} style={styles.container} >
                <View style={styles.block}>
                    <Text style={styles.title}>1</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.title}>8</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'yellow'
    },
    block: {
        width: Dimensions.get('window').width / 2,
        padding: '2%',
        backgroundColor: 'white',
        height: '100%'
    },
    title: {
        color: '#929e9a'
    },
    content: {
        backgroundColor: '#cccccc',
        borderColor: '#7f7f7f',
        borderWidth: 4,
        height: '100%',
        width: '100%'
    }
});