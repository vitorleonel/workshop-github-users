import React, { useState, useEffect, useRef } from "react";
import { AsyncStorage, Alert, StatusBar } from "react-native";
import axios from "axios";
import Toast from "react-native-easy-toast";

import {
  Container,
  Form,
  Input,
  Button,
  ButtonIcon,
  ButtonLoading,
  List,
  User,
  UserAvatar,
  UserContent,
  UserName,
  UserBio
} from "./styles";

function Users(props) {
  const toast = useRef();
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("users").then(async items => {
      if (items) await setUsers(JSON.parse(items));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  async function addHadler() {
    if (!username.length) return;

    try {
      setLoading(true);

      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );

      setUsers([...users, data]);
      setUsername("");

      toast.current.show("User successfully added!");
    } catch (error) {
      toast.current.show(
        "Unable to add user. Check the data and try again!",
        1500
      );
    } finally {
      setLoading(false);
    }
  }

  async function removeHandler(userId) {
    Alert.alert("Attention", "Do you want to remove this user?", [
      {
        text: "Yes, remove!",
        onPress: () => {
          const newUsers = users.filter(user => user.id !== userId);

          setUsers(newUsers);
          toast.current.show("User successfully removed!");
        }
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]);
  }

  function renderItem({ item }) {
    return (
      <User
        onPress={() => props.navigation.navigate("Detail", { user: item })}
        onLongPress={() => removeHandler(item.id)}
      >
        <UserAvatar source={{ uri: item.avatar_url }} />

        <UserContent>
          <UserName>@{item.login}</UserName>
          <UserBio>{item.bio || "Don't have informations..."}</UserBio>
        </UserContent>
      </User>
    );
  }

  return (
    <Container>
      <Form>
        <Input
          value={username}
          onChangeText={setUsername}
          onSubmitEditing={addHadler}
        />

        <Button onPress={addHadler}>
          {loading ? <ButtonLoading /> : <ButtonIcon />}
        </Button>
      </Form>

      <List
        data={users}
        keyExtractor={user => String(user.id)}
        renderItem={renderItem}
      />

      <Toast ref={toast} />
    </Container>
  );
}

export default Users;
