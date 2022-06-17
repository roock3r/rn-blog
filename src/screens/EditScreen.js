import React,{ useState, useContext} from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import {Context } from '../context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

const EditScreen = ({ navigation}) => {
    // const [title, setTitle] = useState(blogPost.title);
    // const [content, setContent] = useState(blogPost.content);
    // return (
    //     <View>
    //         <Text> Edit Screen - {navigation.getParam('id')} </Text>
    //         <Text> Edit Title: </Text>
    //         <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
    //     </View>
    // )

    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm 
    initialValues={{title: blogPost.title, content: blogPost.content}} 
    onSubmit={(title,content) =>{
        editBlogPost(id,title,content, () => navigation.pop())
    }}/>
}

const styles = StyleSheet.create({})

export default EditScreen;