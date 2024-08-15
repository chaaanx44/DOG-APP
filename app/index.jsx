import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500 ">
      <Text className="text-5x1 font-bold font-pblack">Attendance</Text>
      <Link href="/profile">Go to Profile</Link>
      <Link href="/register">Go to Registration</Link>
      <StatusBar style="auto" />
    </View>
  );
}
