import { Text, View, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Logo from '../Components/Logo'
import AddWorryTime from '../Components/AddWorryTime'
import Tips from '../Components/Tips'
import Tabs from '../Components/Tabs/Tabs'



export function Screen1({ navigation }) {



    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>

            {/* This is the Logo section */}
            <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
                <Logo />
            </View>
            {/* This is the C1 section*/}
            <View style={{ flex: 7, marginLeft: 20 }}>

                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 33, marginLeft: 10 }}>Setup:</Text>
                    <Text style={{ fontSize: 33, marginLeft: 10 }}>My worry time & place </Text>
                    <Text style={{ color: "#4092bc", fontSize: 25, marginLeft: 10, marginTop: 20, fontWeight: "600" }}>Worry times</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#489345", letterSpacing: -0.3, fontSize: 16, marginTop: 17, marginLeft: 10 }}>What time/s do I want to worry?                                 </Text>
                        <Tips />
                    </View>
                    <AddWorryTime />
                </View>
                {/* This is the C2 section */}
                <View style={{ flex: 1, marginBottom: 60 }}>
                    <Text style={{ color: "#4092bc", fontSize: 25, marginLeft: 10, marginTop: -150, fontWeight: "600" }}>Worry place</Text>
                    <Text style={{ color: "#489345", letterSpacing: -0.3, fontSize: 16, marginTop: 17, marginLeft: 10 }}>Where do I want to worry?                                             <Tips /></Text>
                    <KeyboardAvoidingView >
                        <View>
                            <TextInput
                                style={{ height: 50, borderWidth: 2, borderRadius: 5, width: 340, borderColor: "grey", marginTop: 10, marginLeft: 10 }}
                                placeholder="    e.g chair in living room, at desk in the Study"

                            /></View>

                    </KeyboardAvoidingView>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Text style={{ color: "red", fontSize: 18, marginTop: 50, marginLeft: 10 }}>Cancel setup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('form')} style={{ backgroundColor: "#e7eaf1", height: 47, width: 160, marginTop: 40, borderRadius: 30, marginLeft: 90, alignItems: "center" }}>
                            <Text style={{ color: "grey", fontSize: 18, marginTop: 12, marginLeft: 0 }}>Save my setup</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>

            <Tabs />
        </View>




    )
}



export default Screen1