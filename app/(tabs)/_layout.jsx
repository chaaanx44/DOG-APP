import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => (
  <View>
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: focused ? 30 : 24,
        height: focused ? 30 : 24,
        tintColor: color,
      }}
    />
  </View>
);

const screens = [
  { name: 'home', title: 'Home', icon: icons.home },
  { name: 'profile', title: 'Profile', icon: icons.profile },
  { name: 'bookmark', title: 'Bookmark', icon: icons.bookmark },
  { name: 'dashboard', title: 'Dashboard', icon: icons.dashboard },
  { name: 'guide', title: 'Guide', icon: icons.guide },
];

const TabLayout = () => (
  <Tabs>
    {screens.map((screen) => (
      <Tabs.Screen
        key={screen.name}
        name={screen.name}
        options={{
          title: screen.title,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={screen.icon} color={color} name={screen.name} focused={focused} />
          ),
        }}
      />
    ))}
  </Tabs>
);

export default TabLayout;