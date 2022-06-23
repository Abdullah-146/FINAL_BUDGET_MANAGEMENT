import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MonthlyExpenses from "./components/MonthlyExpenses";
import ExpensesTracker from "./components/ExpensesTracker";
import Context from "./Context";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}
          initialRouteName={"screen 2"}
        >
          <Stack.Screen name="screen 1" component={MainComponent} />
          <Stack.Screen
            options={{ title: "Expenses" }}
            name="screen 2"
            component={MonthlyExpenses}
          />
          <Stack.Screen
            options={{ title: "ExpensesTracker" }}
            name="screen 3"
            component={ExpensesTracker}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}

function MainComponent({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        onPress={() => navigation.navigate("screen 2")}
        title="islamabad"
      />
    </View>
  );
}
function SecondaryComponent({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SecondaryComponent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
