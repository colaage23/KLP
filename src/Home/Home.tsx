import { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { ContentText, Icon, RowView } from '../Components/StyledComponent';
import theme from '../Components/theme';
import { PostListItem } from './Interface/Interface';
import PostList from './Component/PostList';


const Home = () => {

  const [list, setList] = useState<PostListItem[]>([
    // 더미데이터
    { userName: 'JohnDoe', title: 'First Post', content: 'This is the content of the first post.', date: '2023-10-01', tag: ['news', 'update'], viewCount: 150, thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg' },
    { userName: 'JaneSmith', title: 'Second Post', content: 'This is the content of the second postThis is the content of the second postThis is the content of the second postThis is the content of the second post.', date: '2023-10-02', tag: ['announcement'], viewCount: 200, thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg' },
    { userName: 'AliceJohnson', title: 'Third Post', content: 'This is the content of the third post.', date: '2023-10-03', tag: ['news'], viewCount: 250, thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg' },
    { userName: 'BobBrown', title: 'Fourth Post', content: 'This is the content of the fourth post.', date: '2023-10-04', tag: ['update'], viewCount: 300, thumbnail: 'https://static.cdn.kmong.com/gigs/ef3u71671517803.jpg' },
  ]);


  // 검색
  const [search, setSearch] = useState('');
  const onSearch = () => {
    search.trim() && console.log('Searching for:', search);
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <SearchView>
          <SearchInput placeholder="Search..." value={search} onChangeText={setSearch} />
          <TouchableOpacity onPress={onSearch}>
            <Icon source={require('../Image/find_black.png')} />
          </TouchableOpacity>
        </SearchView>

        <ListView>
          {
            list?.map((item) => (
              <PostList key={item.title} {...item} />
            ))

          }
        </ListView>

      </Background>
    </SafeAreaView>
  );
};

export default Home;

const Background = styled.View`
  flex: 1;
  background-color:white;
  padding: 15px;
  gap: 15px;
`

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
`

const SearchInput = styled.TextInput`
  height: 100%;
  width: 85%;
  font-size: 16px;
`

const ListView = styled.View`
  flex: 1;
  width: 100%;
`