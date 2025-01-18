import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('http://localhost:8080/api/projects');
            setProjects(response.data);
        };

        fetchProjects();
    }, []);

    return (
        <ScrollView>
            {projects.map((project) => (
                <View key={project.id}>
                    <Text>{project.title}</Text>
                    <Text>{project.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default Projects;
