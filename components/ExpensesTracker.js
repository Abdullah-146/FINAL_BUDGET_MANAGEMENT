import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Button,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import { UserDataContext } from "../Context";

const ExpensesTracker = () => {
  const [flag, setflag] = React.useState(false);
  const contest = useContext(UserDataContext);
  const [pkr, setpkr] = React.useState("");
  const [name, setname] = React.useState("");

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.card}>
        <Text style={styles.Text}>Total Expense</Text>
        <Text style={styles.Text}>$5000</Text>
        <Text style={styles.Text}> Month:JUNE 2022 </Text>
        {console.log(Date.now())}
      </View>
      <Pressable style={styles.card} onPress={() => setflag(true)}>
        <Text style={styles.Text}>ADD Expense CATEGORY</Text>
      </Pressable>
      <Pressable style={styles.card}>
        <Text style={styles.Text}> Add NEW Expense </Text>
      </Pressable>
      <Modal visible={flag}>
        <View style={{ marginTop: "50%" }}>
          <Text style={{ fontSize: 28, fontWeight: "800", color: "lightblue" }}>
            ENTER NEW CATEGORY
          </Text>
          <TextInput
            style={{
              padding: "10px",
              marginBottom: "5px",
              borderBottomColor: "black",
              borderBottomWidth: "2px",
              borderRadius: "3px",
            }}
            placeholder="Enter new Category"
            onChangeText={setname}
          />
          <TextInput
            style={{
              padding: "10px",
              marginBottom: "5px",
              borderBottomColor: "black",
              borderBottomWidth: "2px",
            }}
            placeholder="Enter expense value"
            onChangeText={setpkr}
          />
          <Button
            title="Add"
            onPress={() => {
              contest.addNewItem({
                Price: pkr,
                displayName: name,
                profileImage:
                  "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
              });
              setflag(false);
              contest.fn();
            }}
          />
        </View>
      </Modal>

      {console.log(contest.NICHE)}
    </View>
  );
};

export default ExpensesTracker;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "lightblue",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "4px",
    borderColor: "black",
    marginTop: "20px",
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
