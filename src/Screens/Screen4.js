import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../Components/Logo'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Worries from '../Components/worries'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function Screen5({navigation}) {
    return (

        <View style={{backgroundColor:"white", flex:1}}>
            <View style={{marginLeft:160, marginTop:15}} >
                <Logo /> 
            </View>
           
            <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 10 }}>My unsolvable worries</Text>
            <View style={{ backgrounColor:"grey", width: 350, height: 50, marginLeft: 10, marginTop: 20, borderRadius: 10 }}>
                <AntDesign name="search1" size={24} color="grey" style={{ marginTop: 12, marginLeft: 10 }} />
                <TextInput style={{ Backgroundcolor:"grey",color: "#a7a7a7", fontSize: 20, marginTop: -25, marginLeft: 37 }} placeholder="Search my worries" />
                <FontAwesome name="hand-pointer-o" size={14} color="black" style={{marginTop:30}}  />
                <Text style={{color:"#969696",position:"absolute", marginTop:70,marginLeft:20, fontSize:13}}>Touch + Hold down a worry item + drag to reposition it</Text>
           </View>
           <View >
            <Worries />
            </View>
            <View  style={{marginTop:-50}}> 
                 <Worries/>
                
            </View>
            <View style={{
                height: 60, backgroundColor: "white", width: 400, elevation: 15, flexDirection: "row",
                shadowOffset: { width: 5, height: 10 },
                shadowRadius: 30,
                marginTop:375
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