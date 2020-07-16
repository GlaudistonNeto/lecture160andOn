import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/PicContext';
import PicPostForm from '../components/PicPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editPicPost } = useContext(Context);

  const picPost = state.find(picPost => picPost.id === id);

  return (
    <PicPostForm
      initialValues={{ title: picPost.title, content: picPost.content }}
      onSubmit={(title, content) => {
        editPicPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;