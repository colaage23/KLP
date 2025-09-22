/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Background,
  ContentText,
  Icon,
  RowView,
} from '../Components/StyledComponent';
import {
  FlatList,
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import theme from '../Components/theme';
import FastImage from 'react-native-fast-image';

const PostWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState<string[]>([]);
  return (
    <Background>
      <SafeAreaView style={{flex: 1}}>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <InsertView>
            <View>
              <ContentText bold>제목</ContentText>
              <TextInput
                placeholder="제목을 입력하세요"
                placeholderTextColor={theme.colors.fontLightGray}
                maxLength={50}
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View>
              <ContentText bold>내용</ContentText>
              <TextInput
                placeholder="내용을 입력하세요"
                placeholderTextColor={theme.colors.fontLightGray}
                maxLength={500}
                multiline
                numberOfLines={10}
                style={{textAlignVertical: 'top', height: 200}}
                value={content}
                onChangeText={setContent}
              />
              <TextInput
                placeholder="Tag"
                placeholderTextColor={theme.colors.fontLightGray}
                maxLength={50}
                value={tags}
                onChangeText={setTags}
              />
            </View>
            <ContentText bold>사진</ContentText>
          </InsertView>
        </Pressable>
        <ScrollView
          style={{marginTop: 5}}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}>
          {images.length < 5 && (
            <ImageBtn>
              <Icon source={require('../Image/ic_plus_circle_gray.png')} />
            </ImageBtn>
          )}

          {images.map(item => {
            return (
              <PostImage source={{uri: item}}>
                <DelBtn>
                  <Icon source={require('../Image/ic_x_circle_white.png')} />
                </DelBtn>
              </PostImage>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default PostWrite;

const InsertView = styled.View`
  align-self: center;
  width: 100%;
  gap: 10px;
`;

const TextInput = styled.TextInput`
  color: ${theme.colors.fontMain};
  width: 100%;
  height: 40px;
  background-color: #fff;
  margin-bottom: 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.barGray};
  margin-top: 5px;
  padding: 10px;
`;

const ImageBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.barGray};
  margin-right: 10px;
`;

const DelBtn = styled.TouchableOpacity`
  position: absolute;
  right: -7px;
  top: -7px;
`;

const PostImage = styled.ImageBackground`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 10px;
`;
