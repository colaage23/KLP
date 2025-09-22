/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Background, Icon} from '../Components/StyledComponent';
import FABBtn from './Component/FABBtn';
import PostList from './Component/PostList';
import {PostListItem} from './Interface/Interface';
import database from '@react-native-firebase/database';

const Home = () => {
  const navigation = useNavigation();

  const [list, setList] = useState<PostListItem[]>([]);

  // 검색
  const [search, setSearch] = useState('');

  const onSearch = () => {
    search.trim() && console.log('Searching for:', search);
  };

  // Paper FAB Handler
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const postRef = database().ref('/posts');

    const onValueChange = postRef.on('value', snapshot => {
      const posts = snapshot.val();
      if (posts) {
        const postArray: PostListItem[] = Object.keys(posts).map(key => {
          const post = posts[key];
          return {
            userName: post.userName || 'Anonymous',
            title: post.title,
            content: post.content,
            createdAt: new Date(post.createdAt).toLocaleDateString(),
            tag: post.tags || [],
            viewCount: post.viewCount || 0,
            thumbnail:
              post.images && post.images.length > 0 ? post.images[0] : '',
          };
        });
        // 최신 순으로 정렬
        postArray.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        setList(postArray);
      } else {
        setList([]);
      }
    });

    return () => postRef.off('value', onValueChange);
  }, []);

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
          <PaddingView />
        </ListView>

        {/* {FAB} */}
        <FABBtn isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </SafeAreaView>
    </Background>
  );
};

export default Home;

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

const PaddingView = styled.View`
  height: 50px;
`;
