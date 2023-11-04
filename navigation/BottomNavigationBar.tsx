import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Icon from "react-native-vector-icons/FontAwesome"; // Replace "FontAwesome" with the icon set you want to use

const tabScreens = [
  {
    name: "Home",
    icon: "home",
    component: Home,
  },
  {
    name: "Search",
    icon: "search",
    component: Search,
  },
  {
    name: "Profile",
    icon: "user",
    component: Profile,
  },
];

const BottomNavigationBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      {tabScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={screen.icon} color={color} size={size} />
            ),
          }}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
