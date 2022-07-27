import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
//This is a component for Add a worry time
export default class AddWorryTime extends Component {
    render() {
        return (
            <View >
                <View style={[styles.card, styles.shadowOffset, styles.elevation, styles.shadowOpacity, styles.shadowRadius, styles.shadowColor]}>
                    <View style={{ backgroundColor: "#0092e7", width: 60, height: 57, borderRadius: 8, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                        <TouchableOpacity><AntDesign name="pluscircleo" size={25} color="white" style={{ marginTop: 15, marginLeft: 18 }} /></TouchableOpacity>

                    </View>
                    <Text style={{ marginTop: -40, marginLeft: 75, fontSize: 18 }}>Add a worry time</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',

    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 335,
        height: 57,
        marginHorizontal: 10,
        marginTop: 10,
        shadowColor: '#98989c',
        shadowOpacity: 2,
        shadowOffset: { width: 2, height: 5 },
        shadowRadius: 30,
        elevation: 20,
        backgroundColor: 'white'


    },

});  