import styled from "styled-components/native";
import { StyleSheet, Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f6fa;
  padding-top: ${Platform.OS === "android" ? 32 : 0}px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 44px;
  border-radius: 22px;
  padding: 0 24px;
  background-color: #2d3436;
  position: absolute;
  bottom: 32px;

  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const BackButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const User = styled.View`
  margin: 16px 24px;
  padding-bottom: 16px;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: #b2bec3;

  flex-direction: row;
`;

export const UserAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const UserContent = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #2d3436;
`;

export const UserBio = styled.Text`
  font-size: 16px;
  color: #2d3436;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 48
  }
})``;

export const Item = styled.View`
  padding: 16px 24px;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #2d3436;
`;

export const ItemLink = styled.Text`
  font-size: 16px;
  color: #2d3436;
`;
