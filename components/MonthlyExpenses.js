import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { UserDataContext } from "../Context";

const Profile = ({ navigation }) => {
  const contest = useContext(UserDataContext);
  const [pkr, setpkr] = React.useState("");
  const [name, setname] = React.useState("");
  const [flag, setflag] = React.useState(false);
  console.log(contest.Users);
  return (
    <View>
      <FlatList
        data={contest.NICHE}
        renderItem={(item) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  {
                    console.log(item.item.index);
                  }
                  return setflag(true);
                }}
              >
                <Image
                  style={styles.Slogo}
                  source={{ uri: item.item.profileImage }}
                />
                <View style={styles.introduction}>
                  <Text style={styles.users}>{item.item.displayName}</Text>
                  <Text style={styles.users}>{item.item.Price}</Text>
                </View>
                {/* <View style={styles.chevron}>
                  <Text> {">"} </Text>
                </View> */}
              </TouchableOpacity>
              <Modal visible={flag}>
                <TextInput
                  placeholder="Enter added Price"
                  onChangeText={setpkr}
                />
                <Button
                  title="Add"
                  onPress={() => {
                    contest.addPrice(item.index, pkr);
                    setflag(false);
                  }}
                />
              </Modal>
            </View>
          );
        }}
      />
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "Light",
          backgroundColor: "lightpink",
          width: "100px",
          height: "35px",
          marginLeft: "40%",
          borderRadius: "10%",
          padding: "15px",
        }}
        onPress={() => {
          navigation.navigate("screen 3");
        }}
      >
        <Text>ON PRESS</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "80%",
  },
  introduction: {
    display: "flex",
    flexDirection: "column",
  },
  users: {
    color: "grey",
    paddingLeft: 10,
  },
  Slogo: {
    borderRadius: "25%",
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  chevron: {
    marginLeft: "100%",
  },
});
export default Profile;
