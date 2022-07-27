import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { View,TouchableOpacity } from 'react-native'
import Logo from '../Components/Logo'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Tabs from '../Components/Tabs/Tabs'
import Back from '../Components/Back'

const Screen3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View >
            <View style={{flexDirection:"row" }}>
                <Back />
            <View style={{marginTop:35, marginLeft:110}}>
               <Logo  /> 
            </View>
            <View>
                <Text style={{fontSize:40,marginTop:120,marginLeft:-200}}>Add a worry time</Text>
            </View>
            <View>
                <Text style={{marginTop:200,marginLeft:-285, fontSize:16, color:"#63b663"}}>What time do i want to worry?</Text>
                
                <View style={[styles.card, styles.shadowOffset, styles.elevation, styles.shadowOpacity, styles.shadowRadius, styles.shadowColor]}>
                    <View style={{ backgroundColor: "#0092e7", width: 60, height: 57, borderRadius: 8, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                        <TouchableOpacity><Feather name="watch" size={35} color="white" style={{ marginTop: 10, marginLeft: 14 }}/></TouchableOpacity>

                    </View>
                    <Text style={{ marginTop: -40, marginLeft: 75, fontSize: 16 }}>Tap to open the worry time selector</Text>
                </View>

            
            </View>
            <View style={{marginTop:130}}>
                <Text style={{marginTop:190,marginLeft:-285, fontSize:16, color:"#63b663"}}>How long do you want to worry?</Text>
                <View style={{flexDirection:"row", marginLeft:-270, justifyContent:"space-between", marginTop:20}}>
                <MaterialIcons name="timelapse" size={50} color="#017bc1" margin/>
                <MaterialIcons name="timelapse" size={50} color="grey" margin/>
                <MaterialIcons name="timelapse" size={50} color="grey" margin/>
                <MaterialIcons name="timelapse" size={50} color="grey" margin/>
                </View>
                <View>
                    <Text style={{color:"#017bc1",fontSize:20,marginLeft:-265}}>15m</Text>
                <Text style={{color:"grey",fontSize:20,marginLeft:-190, marginTop:-24}}>30m</Text>
                <Text style={{color:"grey",fontSize:20,marginLeft:-110, marginTop:-24}}>45m</Text>
                <Text style={{color:"grey",fontSize:20,marginLeft:-20, marginTop:-24}}>60m</Text>
               
                </View>
                

            
            </View>
            <View style={{marginTop:280}}>
            <Text style={{marginTop:190,marginLeft:-300, fontSize:16, color:"#63b663"}}>How often do i want to worry</Text>
            </View>
            <View>
                <Text style={{marginTop:520, marginLeft:-290}}>Every Monday</Text>
                <Text style={{marginLeft:-290,marginTop:20}}>Every Tuesday</Text>
            <View style={{backgroundColor:"#f0f0f0", width:350, height:2, marginLeft:-300, marginTop:15}}>
                

            </View>
            <View>
            <Text style={{marginLeft:-291,marginTop:10}}>Every Wednesday</Text>
            <View style={{backgroundColor:"#f0f0f0", width:350, height:2, marginLeft:-300, marginTop:15}}></View>
            </View>
            <View>
            <Text style={{marginLeft:-291,marginTop:10}}>Every Thursday</Text>
            <View style={{backgroundColor:"#f0f0f0", width:350, height:2, marginLeft:-300, marginTop:15}}></View>
            </View>
            <View>
            <Text style={{marginLeft:-291,marginTop:10}}>Every Friday</Text>
            <View style={{backgroundColor:"#f0f0f0", width:350, height:2, marginLeft:-300, marginTop:15}}></View>
            </View>
            <View>
            <Text style={{marginLeft:-291,marginTop:10}}>Every Saturday</Text>
            <Text style={{marginLeft:-291,marginTop:20}}>Every Sunday</Text>
            <View style={{backgroundColor:"#f0f0f0", width:350, height:2, marginLeft:-300, marginTop:15}}></View>
            </View>
            </View>
            <View style={{marginTop:280}}>
            <Text style={{marginTop:580,marginLeft:-350, fontSize:16, color:"#63b663"}}>Do I want a notification of my worry time?</Text>
             <View style={{ marginLeft:10}}>
                <Text style={{marginLeft:-350,marginTop:25,fontSize:15}}>Add this time to my calender</Text>
                <FontAwesome5 name="check-circle" size={22} color="#1a9519" style={{marginTop:-20,marginLeft:-50}} />
             </View>
             <View style={{marginTop:-5, marginLeft:10}}>
                <Text style={{marginLeft:-350,marginTop:25,fontSize:15}}>Ring my alarm at this time</Text>
                <FontAwesome5 name="check-circle" size={22} color="#1a9519" style={{marginTop:-20,marginLeft:-50}} />
             </View>
            </View>
            <View style={{ flexDirection: "row", marginTop:1000,marginLeft:-360 }}>
                        <TouchableOpacity>
                            <Text style={{ color: "red", fontSize: 18, marginTop: 50, marginLeft: 10 }}>Cancel setup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ backgroundColor: "#018a00", height: 47, width: 160, marginTop: 40, borderRadius: 30, marginLeft: 90, alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 18, marginTop: 12, marginLeft: 0 }}>Save my setup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop:1230,marginLeft:-370 }}>
                     <Tabs />   
                    </View>
                    
            </View>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 42,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 335,
    height: 57,
    marginHorizontal: -285,
    marginTop: 10,
    shadowColor: '#98989c',
    shadowOpacity: 2,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 30,
    elevation: 20,
    backgroundColor: 'white'


},
});

export default Screen3;