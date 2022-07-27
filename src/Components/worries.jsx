import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
//This is a component for Add a worry time
export default class Worries extends Component {
    render() {
        return (
            <View >
                <View style={[styles.card, styles.shadowOffset, styles.elevation, styles.shadowOpacity, styles.shadowRadius, styles.shadowColor]}>
                    <View style={{  }}>
                        <TouchableOpacity><Ionicons name="ios-star" size={30} color="#10910f" style={{marginTop:10, marginLeft:20}}/></TouchableOpacity>


                    </View>
                    <Text style={{ marginTop: -25, marginLeft: 60, fontSize: 16}}>Aliquam vulputata esameo eliqo...</Text>
                    <MaterialIcons name="arrow-forward-ios" size={24} color="black" style={{marginLeft:300, marginTop:-20}}/>
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
        marginTop: 60,
        shadowColor: '#98989c',
        shadowOpacity: 2,
        shadowOffset: { width: 2, height: 5 },
        shadowRadius: 30,
        elevation: 10,
        backgroundColor: 'white'


    },

});  