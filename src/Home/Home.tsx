/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {ContentText, Icon, RowView} from '../Components/StyledComponent';
import theme from '../Components/theme';
import {PostListItem} from './Interface/Interface';
import PostList from './Component/PostList';
import {useNavigation} from '@react-navigation/native';
import FABBtn from './Component/FABBtn';

const Home = () => {
  const navigation = useNavigation();

  const [list, setList] = useState<PostListItem[]>([
    // 더미데이터
    {
      userName: 'JohnDoe',
      title: 'First Post',
      content: 'This is the content of the first post.',
      date: '2023-10-01',
      tag: [
        'news',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
        'update',
      ],
      viewCount: 150,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'JaneSmith',
      title: 'Second Post',
      content:
        'This is the content of the second postThis is the content of the second postThis is the content of the second postThis is the content of the second post.',
      date: '2023-10-02',
      tag: ['announcement'],
      viewCount: 200,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'AliceJohnson',
      title: 'Third Post',
      content: 'This is the content of the third post.',
      date: '2023-10-03',
      tag: ['news'],
      viewCount: 250,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'BobBrown',
      title: 'Fourth Post',
      content: 'This is the content of the fourth post.',
      date: '2023-10-04',
      tag: ['update'],
      viewCount: 300,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'JohnDoe',
      title: 'First Post',
      content: 'This is the content of the first post.',
      date: '2023-10-01',
      tag: ['news', 'update'],
      viewCount: 150,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'JaneSmith',
      title: 'Second Post',
      content:
        'This is the content of the second postThis is the content of the second postThis is the content of the second postThis is the content of the second post.',
      date: '2023-10-02',
      tag: ['announcement'],
      viewCount: 200,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'AliceJohnson',
      title: 'Third Post',
      content: 'This is the content of the third post.',
      date: '2023-10-03',
      tag: ['news'],
      viewCount: 250,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'BobBrown',
      title: 'Fourth Post',
      content: 'This is the content of the fourth post.',
      date: '2023-10-04',
      tag: ['update'],
      viewCount: 300,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'JohnDoe',
      title: 'First Post',
      content: 'This is the content of the first post.',
      date: '2023-10-01',
      tag: ['news', 'update'],
      viewCount: 150,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'JaneSmith',
      title: 'Second Post',
      content:
        'This is the content of the second postThis is the content of the second postThis is the content of the second postThis is the content of the second post.',
      date: '2023-10-02',
      tag: ['announcement'],
      viewCount: 200,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'AliceJohnson',
      title: 'Third Post',
      content: 'This is the content of the third post.',
      date: '2023-10-03',
      tag: ['news'],
      viewCount: 250,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
    {
      userName: 'BobBrown',
      title: 'Fourth Post',
      content: 'This is the content of the fourth post.',
      date: '2023-10-04',
      tag: ['update'],
      viewCount: 300,
      thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg',
    },
  ]);

  // 검색
  const [search, setSearch] = useState('');
  const onSearch = () => {
    search.trim() && console.log('Searching for:', search);
  };

  // Paper FAB Handler
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Background>
      <SafeAreaView style={{flex: 1}}>
        {/* 검색 */}
        <SearchView>
          <SearchInput
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity onPress={onSearch}>
            <Icon source={require('../Image/ic_find_black.png')} />
          </TouchableOpacity>
        </SearchView>

        {/* 게시글 리스트 */}
        <ListView bounces={false}>
          {list?.map((item, index) => (
            <PostList key={index} {...item} />
          ))}
        </ListView>

        {/* {FAB} */}
        <FABBtn isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </SafeAreaView>
    </Background>
  );
};

export default Home;

const Background = styled.View`
  flex: 1;
  background-color: white;
  padding: 15px;
  gap: 15px;
`;

const SearchView = styled.View`
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-color: gray;
  border-radius: 8px;
  padding-horizontal: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  height: 100%;
  width: 85%;
  font-size: 16px;
`;

const ListView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
