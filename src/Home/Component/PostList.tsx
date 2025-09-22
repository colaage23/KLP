/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import styled from 'styled-components/native';
import {ContentText, Icon, RowView} from '../../Components/StyledComponent';
import {PostListItem} from '../Interface/Interface';
import theme from '../../Components/theme';
import FastImage from 'react-native-fast-image';
import {FlatList, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';

const PostList = (item: PostListItem) => {
  return (
    <ListItemView>
      <TouchableOpacity>
        <RowView>
          <Thumnail source={{uri: item.thumbnail}} resizeMode="contain" />
          <ContentView>
            <ContentText numberOfLines={1}>{item.title}</ContentText>
            <ContentText small numberOfLines={2}>
              {item.content}
            </ContentText>
            <RowView between>
              <ContentText xxsmall right>
                {dayjs(item.createdAt).format('YYYY-MM-DD')}
              </ContentText>
              <RowView style={{gap: 5}}>
                <Icon
                  size={15}
                  source={require('../../Image/ic_view_count_black.png')}
                />
                <ContentText xxsmall>{item.viewCount}</ContentText>
              </RowView>
            </RowView>
          </ContentView>
        </RowView>
      </TouchableOpacity>

      <RowView style={{gap: 5, marginTop: 5}}>
        <FlatList
          data={item.tag}
          renderItem={({item: tag}) => (
            <Tag key={tag}>
              <ContentText small blue>
                #{tag}
              </ContentText>
            </Tag>
          )}
          keyExtractor={(tag, index) => index.toString()}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 5}}
        />
      </RowView>
    </ListItemView>
  );
};

const ListItemView = styled.View`
  width: 100%;
  flex: 1;
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-color: ${theme.colors.lineGray};
`;

const Thumnail = styled(FastImage)`
  flex: 1;
  height: 90px;
  border-radius: 4px;
`;

const ContentView = styled.View`
  flex: 3;
  height: 100%;
  padding: 4px 8px;
  gap: 5px;
  justify-content: space-between;
  max-height: 100px;
`;

const TagContainer = styled.ScrollView`
  flex-direction: row;
`;

const Tag = styled.View`
  padding: 4px 10px;
  border-radius: 15px;
  background-color: ${theme.colors.bgBlue};
`;

export default PostList;
