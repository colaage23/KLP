import styled from "styled-components/native"
import { ContentText, Icon, RowView } from "../../Components/StyledComponent"
import { PostListItem } from "../Interface/Interface"
import theme from "../../Components/theme"
import FastImage from "react-native-fast-image"



const PostList = (item: PostListItem) => {
    return (
        <ListItemView>
            <RowView >
                <Thumnail source={{ uri: item.thumbnail }} resizeMode='cover' />
                <ContentView>
                    <ContentText>{item.title}</ContentText>
                    <ContentText small numberOfLines={2}>{item.content}</ContentText>
                    <RowView between>
                        <ContentText xxsmall right>{item.date}</ContentText>
                        <RowView style={{ gap: 5 }}>
                            <Icon size={15} source={require('../../Image/view_count_black.png')} />
                            <ContentText xxsmall>{item.viewCount}</ContentText>
                        </RowView>
                    </RowView>
                </ContentView>
            </RowView>
            <RowView style={{ gap: 5, marginTop: 5 }}>
                {item.tag.map((tag, index) => (
                    <Tag key={index}>
                        <ContentText small blue>#{tag}</ContentText>
                    </Tag>
                ))}
            </RowView>
        </ListItemView>
    )
}


const ListItemView = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-color: ${theme.colors.lineGray};
  `

const Thumnail = styled(FastImage)`
  flex: 1;
  height: 100px;
`

const ContentView = styled.View`
  flex: 3;
  height: 100%;
  padding: 8px;
  gap: 5px;
`
const Tag = styled.View`
    padding: 4px 10px;
    border-radius: 15px;
    background-color: ${theme.colors.bgBlue};

`

export default PostList;