import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default class Tips extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <Text style={{color:"#757575"}}>Tips</Text>
                <Ionicons name="information-circle-sharp" size={18} color="#757575" style={{ marginTop: -2, marginLeft: -20, position: "absolute" }} />

            </View>
        )
    }
}