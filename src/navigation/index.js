import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Users from "../screens/Users";
import Detail from "../screens/Detail";

export default createAppContainer(
  createStackNavigator(
    {
      Users,
      Detail
    },
    {
      initialRouteName: "Users",
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);
