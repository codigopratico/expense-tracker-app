import { View } from 'react-native'
import React, { useEffect } from 'react'
import { RelativePathString, useRouter } from 'expo-router'
import SafeAreaLayoutWrapper from '@/safe-area-layout-wrapper'
import { Text } from 'react-native-paper'
Text

const IndexScreen = () => {

  const router = useRouter()

  const checkAuthStatusNavigate = async () => {
    try{
      // simulate 2 second delay and navigate to /landing
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.push('/landing' as RelativePathString);
    }catch (error) {
      console.log("Error checking auth status" ,error);
    }
  }

  useEffect(() => {
    checkAuthStatusNavigate()
  }, [])
  return (
    <SafeAreaLayoutWrapper>
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

      }}
      >
        <Text>Checking auth status ...</Text>
      </View>
    </SafeAreaLayoutWrapper>
  )
}

export default IndexScreen