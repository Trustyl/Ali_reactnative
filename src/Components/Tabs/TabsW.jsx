import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Tabs2() {
    const navigation = useNavigation();
    return (
        <View style={{
            height: 60, backgroundColor: "white", width: 400, elevation: 15, flexDirection: "row",
            shadowOffset: { width: 5, height: 10 },
            shadowRadius: 30,
        }}>
            <TouchableOpacity>
                <Feather name="home" size={32} color="#0092e7" style={{ marginTop: 10, marginLeft: 15, flexDirection: "column" }} >

                </Feather>
                <Text style={{ fontSize: 11, marginLeft: 18, color: "#0092e7", marginTop: 2 }}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Worries')}>
                <Ionicons name="document-text-outline" size={32} color="tomato" style={{ marginTop: 10, marginLeft: 30 }} />
                <Text style={{ fontSize: 11, marginLeft: 25, color: "tomato" }}>WORRIES</Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: "white", position: "absolute", width: 80, height: 80, marginLeft: 140, marginTop: -60, elevation: 0.01, flexDirection: "row", borderRadius: 60 }}>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={60} color="#1f971f" style={{ marginTop: 15, marginLeft: 9.5, fontWeight: "bold" }} />

                </TouchableOpacity>
                <Text style={{ marginTop: 80, marginLeft: -10, position: "absolute", fontSize: 18, fontWeight: "bold", color: "#1f971f" }}>Add a Worry</Text>
            </View>
            <TouchableOpacity>
                <AntDesign name="infocirlceo" size={32} color="#0092e7" style={{ marginTop: 10, marginLeft: 130, flexDirection: "column" }} />
                <Text style={{ fontSize: 11, marginLeft: 135, color: "#0092e7" }}>Tips</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Setup')}>

                <Feather name="settings" size={32} color="#0092e7" style={{ marginTop: 10, marginLeft: 40, flexDirection: "column" }} />
                <Text style={{ fontSize: 11, marginLeft: 45, color: "#0092e7" }}>Setup</Text>
            </TouchableOpacity>







        </View>
    )
}

export { Tabs2 as default, };