import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  User,
  UserAvatar,
  UserContent,
  UserName,
  UserBio,
  List,
  Item,
  ItemTitle,
  ItemLink,
  BackButton,
  BackButtonText
} from "./styles";

function Detail({ navigation }) {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    setUser(navigation.getParam("user"));
  }, []);

  useEffect(() => {
    if (!user) return;

    getRepositories();
  }, [user]);

  async function getRepositories() {
    try {
      const { data } = await axios.get(user.repos_url);

      setRepositories(data);
    } catch (error) {}
  }

  function renderItem({ item }) {
    return (
      <Item>
        <ItemTitle>{item.full_name}</ItemTitle>
        <ItemLink>{item.html_url}</ItemLink>
      </Item>
    );
  }

  if (!user) return <Container />;

  return (
    <Container>
      <User>
        <UserAvatar source={{ uri: user.avatar_url }} />

        <UserContent>
          <UserName>@{user.login}</UserName>
          <UserBio>{user.bio || "Don't have informations..."}</UserBio>
        </UserContent>
      </User>

      <List
        data={repositories}
        keyExtractor={repository => String(repository.id)}
        renderItem={renderItem}
      />

      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonText>Go back</BackButtonText>
      </BackButton>
    </Container>
  );
}

export default Detail;
