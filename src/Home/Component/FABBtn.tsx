/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {ContentText, Icon, RowView} from '../../Components/StyledComponent';
import theme from '../../Components/theme';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-paper';

interface FABProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const FABBtn = ({isExpanded, setIsExpanded}: FABProps) => {
  const handleFabClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setIsExpanded(false);
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
            position: 'absolute',
            flex: 1,
            width: '120%',
            height: '120%',
            top: -50,
            left: -20,
          }}
        />
      )}
      <FAB
        icon={() => {
          if (!isExpanded) {
            return <Icon source={require('../../Image/ic_pen_black.png')} />;
          } else {
            return (
              <Icon
                style={{alignSelf: 'center', top: 5}}
                size={15}
                source={require('../../Image/ic_x_black.png')}
              />
            );
          }
        }}
        animated={true}
        style={{
          backgroundColor: theme.colors.fontBlue,
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 15,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          borderRadius: 50,
        }}
        onPress={handleFabClick}
      />
      {isExpanded && (
        <>
          {/* 추가 버튼 1 */}
          <RowView
            style={{
              right: 3,
              bottom: 80,
              position: 'absolute',
              zIndex: 2,
            }}>
            <ContentText style={{marginRight: 8}} white medium>
              글작성
            </ContentText>
            <FAB
              icon={() => {
                return (
                  <Icon source={require('../../Image/ic_pen_black.png')} />
                );
              }}
              style={{
                backgroundColor: 'white',
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}
              onPress={() => {
                setIsExpanded(false);
                // navigation.navigate('Home_Stacks', {
                //   screen: 'Regist',
                // });
              }}
            />
          </RowView>
          <RowView
            style={{
              right: 3,
              bottom: 135,
              position: 'absolute',
              zIndex: 2,
            }}>
            <ContentText style={{marginRight: 8}} white medium>
              마이페이지
            </ContentText>
            <FAB
              icon={() => {
                return (
                  <Icon
                    size={24}
                    source={require('../../Image/ic_people_black.png')}
                  />
                );
              }}
              style={{
                backgroundColor: 'white',
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}
              onPress={() => {
                setIsExpanded(false);
                // navigation.navigate('Home_Stacks', {
                //   screen: 'Regist',
                // });
              }}
            />
          </RowView>
        </>
      )}
    </>
  );
};

export default FABBtn;
