import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import TestimonialsScreen from '../screens/TestimonialsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Projects" component={ProjectsScreen} />
            <Tab.Screen name="Testimonials" component={TestimonialsScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
