import React, { Component } from 'react'
import Logo from '../Components/Logo'
import AddWorryTime from '../Components/AddWorryTime'
import Tips from '../Components/Tips'
import Tabs2 from '../Components/Tabs/Tabs'
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export function Screen2() {
    const navigation = useNavigation();


    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>

            {/* This is the Logo section */}
            <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
                <Logo />
            </View>
            {/* This is the C1 section*/}
            <View style={{ flex: 7, marginLeft: 20 }}>

                <View style={{ flex: 3 }}>

                    <Text style={{ fontSize: 33, marginLeft: 10, flexDirection: "row" }}>Add a worry  </Text>
                    <View style={{ position: "absolute", marginLeft: 300, marginTop: 15 }}>
                        <Tips />

                    </View>
                    <AntDesign name="staro" size={19} color="grey" style={{ position: "absolute", marginLeft: 330, marginTop: 13 }} />

                    <Text style={{ color: "#3d9acf", fontSize: 20, marginLeft: 10, marginTop: 20, fontWeight: "600" }}>My worry is about...</Text>

                    <KeyboardAvoidingView >
                        <View>
                            <TextInput
                                style={{ height: 50, borderWidth: 2, borderRadius: 5, width: 340, borderColor: "grey", marginTop: 10, marginLeft: 10 }}
                                placeholder="    e.g I wont be able to pay bills"

                            /></View>

                    </KeyboardAvoidingView>

                </View>
                {/* This is the C2 section */}
                <View style={{ flex: 1, marginBottom: 60 }}>

                    <KeyboardAvoidingView >
                        <View style={{ marginTop: -100 }}>
                            <Text style={{ color: "#3d9acf", fontSize: 20, marginLeft: 10, marginTop: -150, fontWeight: "600" }}>Further information about my worry</Text>
                            <TextInput
                                style={{ height: 150, borderWidth: 2, borderRadius: 5, width: 340, borderColor: "grey", marginTop: 10, marginLeft: 10, textAlign: "left", textAlignVertical: "top", paddingTop: 10, paddingLeft: 10, }}
                                multiline={true}

                                placeholder="e.g You can write more details about your worry here if you think it will help (it's optional). "

                            /></View>

                    </KeyboardAvoidingView>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Text style={{ color: "red", fontSize: 18, marginTop: -0, marginLeft: 20 }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#e7eaf1", height: 47, width: 160, marginTop: -10, borderRadius: 30, marginLeft: 120, alignItems: "center" }}>
                            <Text style={{ color: "grey", fontSize: 18, marginTop: 12, marginLeft: 0 }}>Save my worries</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>







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
        </View>




    )
}



export default Screen2