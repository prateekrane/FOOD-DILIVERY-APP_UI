import { Pressable, TouchableOpacity, TextInput } from "react-native";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { useState } from "react";

const Signup = () => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [passwordfocus1, setPasswordfocus1] = useState(false);
  const [showpassword, setshowpassword] = useState(true);
  const [showpassword1, setshowpassword1] = useState(true);
  return (
    <View style={signdeco.container}>
      <ImageBackground
        style={signdeco.imgback}
        source={require("../assets/background.jpg")}
      >
        <Text style={signdeco.uppertext}>Barbel</Text>
        <View style={signdeco.box}>
          <AntDesign
            name="user"
            size={30}
            color={emailfocus === true ? "red" : "black"}
            width={30}
            height={40}
            position="absolute"
            marginTop={3}
            marginLeft={2}
          />
          <TextInput
            style={signdeco.inputtext}
            placeholder="Enter your Email"
            keyboardType="email-address"
            onFocus={() => {
              setEmailfocus(true);
              setPasswordfocus(false);
              setPasswordfocus1(false);
            }}
          ></TextInput>
        </View>
        <View style={signdeco.box}>
          <AntDesign
            name="lock"
            size={30}
            color={passwordfocus === true ? "red" : "black"}
            position="absolute"
            marginTop={3}
            marginLeft={2}
          />
          <TextInput
            style={signdeco.inputtext}
            placeholder="Enter Password"
            secureTextEntry={showpassword}
            onFocus={() => {
              setEmailfocus(false);
              setPasswordfocus(true);
              setPasswordfocus1(false);
            }}
          ></TextInput>
          <FontAwesome5
            name={showpassword === false ? "eye" : "eye-slash"}
            size={20}
            color="black"
            position="absolute"
            marginLeft={255}
            marginTop={8}
            onPress={() => setshowpassword(!showpassword)}
          />
        </View>
        <View style={signdeco.box}>
          <AntDesign
            name="lock"
            size={30}
            color={passwordfocus1 === true ? "red" : "black"}
            position="absolute"
            marginTop={3}
            marginLeft={2}
          />
          <TextInput
            style={signdeco.inputtext}
            placeholder="Re-Enter Password"
            secureTextEntry={showpassword1}
            onFocus={() => {
              setEmailfocus(false);
              setPasswordfocus(false);
              setPasswordfocus1(true);
            }}
          ></TextInput>
          <FontAwesome5
            name={showpassword1 == false ? "eye" : "eye-slash"}
            size={20}
            color="black"
            position="absolute"
            marginLeft={255}
            marginTop={8}
            onPress={() => setshowpassword1(!showpassword1)}
          />
        </View>
        <View style={signdeco.formation}>
          <TouchableOpacity>
            <Text style={signdeco.bt1}>{"\t\tSign in\t\t"}</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "700",
            color: "black",
            marginVertical: 25,
            marginTop:-15,
          }}
        >
          OR
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "700",
            color: "black",
            marginVertical: -15,
          }}
        >
          Sign In With
        </Text>
        <View style={signdeco.gf}>
          <View style={signdeco.gficon}>
            <TouchableOpacity>
              <Ionicons
                name="logo-google"
                size={30}
                color="black"
                marginLeft={140}
                marginVertical={30}
                height={32}
                width={32}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Zocial
              name="facebook"
              size={24}
              color="black"
              marginLeft={50}
              marginVertical={30}
              height={32}
              width={32}
            />
          </TouchableOpacity>
        </View>
        <View style={signdeco.h80} />
      </ImageBackground>
    </View>
  );
};

export default Signup;

const signdeco = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgback: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    opacity: 1,
    justifyContent: "center",
  },
  uppertext: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
    marginBottom: 20,
  },
  box: {
    height: 40,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 10,
    width: "75%",
    marginLeft: 50,
    elevation: 5,
    textAlign: "center",
  },
  inputtext: {
    margin: 10,
    marginLeft: 35,
    fontSize: 15,
    padding: 1,
  },
  formation: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  bt1: {
    fontSize: 20,
    padding: 3,
    textAlign: "center",
    color: "black",
    backgroundColor: "#FACD95",
    marginTop: 25,
    margin: 10,
    borderRadius: 7,
    fontWeight: "700",
    elevation: 7,
    alignSelf: "center",
    width: 200,
    height: 35,
  },
  gf: {
    flexDirection: "row",
  },
  h80: {
    height: 1,
    width: 300,
    backgroundColor: "black",
    alignSelf: "center",
    marginTop:8,
  },
});
