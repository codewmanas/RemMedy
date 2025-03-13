
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, Touchable, TouchableOpacity, ScrollView, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
interface CircularProgressBarProps {
     progress: number;
     totalDoses: number;
     completedDoses: number;
}

function CircularProgress({
     progress,
     totalDoses,
     completedDoses
}: CircularProgressBarProps){
   const animationValue = useRef(new Animated.Value(0)).current;
   const size = width * 0.55;
     const strokeWidth = 15;
     const radius = (size - strokeWidth) / 2;
     const circumference = 2 * Math.PI * radius;

     useEffect(() => {
     Animated.timing(animationValue, {
          toValue: progress,
          duration: 1000,
          useNativeDriver: true,
     }).start();
     }, [progress]);

}

export default function HomeScreen(){



     return(
          <ScrollView showsVerticalScrollIndicator={false}>
               <LinearGradient colors={["#1a8e2d","#146992"]} >
                    <View>
                         <View>
                              <View>
                                   <Text>
                                        Daily Progress
                                   </Text>
                              </View>
                              <TouchableOpacity>
                                   <Ionicons name='notifications-outline' size={24} color='white' />
                              </TouchableOpacity>
                         </View>
                         {/* Progress Bar */}

                    </View>
                    </LinearGradient>
          </ScrollView>
     )
}