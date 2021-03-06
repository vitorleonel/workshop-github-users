import styled from "styled-components/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f6fa;
  padding-top: ${Platform.OS === "android" ? 32 : 0}px;
`;

export const Form = styled.View`
  margin: 24px;

  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholder: "Type username",
  placeholderTextColor: "#636e72",
  autoCapitalize: "none",
  autoCorrect: false,
  autoCompleteType: "off"
})`
  flex: 1;
  height: 44px;
  border-width: 1px;
  border-color: #dcdde1;
  background-color: #dcdde1;
  color: #2d3436;
  border-radius: 6px;
  padding: 0 12px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 44px;
  margin-left: 16px;
  border-radius: 6px;
  background-color: #2d3436;
  padding-left: 16px;
  padding-right: 16px;

  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled(Icon).attrs({
  name: "add",
  color: "#ffffff",
  size: 24
})``;

export const ButtonLoading = styled.ActivityIndicator.attrs({
  color: "#ffffff",
  size: "small"
})``;

export const List = styled.FlatList``;

export const User = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
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

export const UserBio = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 16px;
  color: #2d3436;
`;
