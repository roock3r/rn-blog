import React,{ useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context)

    useEffect(() => {
        getBlogPosts();

        const listener  = navigation.addlistener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        }
    },[])

    return (
        <View>
            {/* <Text>
                Index Screen
            </Text> */}
            {/* <Button title="Add Button" onPress={addBlogPost}/> */}
            <FlatList data={state} keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})} >
                        <View styles={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}><Feather name ="trash" styles={styles.icon}/></TouchableOpacity>
                        </View>
                    </TouchableOpacity>);
            }
        }
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create') }>
            <Feather name="plus" size={30} />
            </TouchableOpacity> 
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;