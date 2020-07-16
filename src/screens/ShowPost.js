import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/PicContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowPost = ({ navigation }) => {
  const { state } = useContext(Context);

  const picPost = state.find(
    (picPost) => picPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{picPost.title}</Text>
      <Text>{picPost.content}</Text>
    </View>
  );
};

ShowPost.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowPost;