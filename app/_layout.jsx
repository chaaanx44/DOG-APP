import { Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const MainLayout = () => {
  return (
    <Stack>
        <Stack.Screen 
        name="index"
        options={{
            headerShown:false
        }}
        />
    </Stack>

  //<>
  //header 
  //<Slot></Slot>
  //footer
  //</>
  )
}

export default MainLayout