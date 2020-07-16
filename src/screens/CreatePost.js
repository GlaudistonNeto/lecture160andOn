import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/PicContext';
import PicPostForm from '../components/PicPostForm';

const CreateScreen = ({ navigation }) => {
  const { addPicPost } = useContext(Context);

  return (
    <PicPostForm
      onSubmit={(title, content) => {
        addPicPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;