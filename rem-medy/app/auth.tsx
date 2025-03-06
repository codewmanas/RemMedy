import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { router } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window'); 

export default function AuthScreen(){


     return(
          <LinearGradient colors={["#4CAF50","#2E7D32"]} >
               
               <View>
                    <View>
                         <Ionicons name="medical" size={80} color='white' />
                    </View>
               </View>

          </LinearGradient>
     )
}
