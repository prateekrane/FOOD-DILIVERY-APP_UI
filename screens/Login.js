import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { useState } from "react";


const LoginScreen = () => {
  const[emailfocus, setEmailfocus]= useState(false);
  const[passwordfocus, setPasswordfocus]=useState(false);
  const[showpassword, setshowpassword]=useState(true);
  return (
    <View style={logdeco.container}>
      <ImageBackground
        style={logdeco.imgback}
        source={require("../assets/background.jpg")}
      >
        <Text style={logdeco.uppertext}>Barbel</Text>
        <View style={logdeco.box}>
        <AntDesign name="user" size={30} color={emailfocus === true?"red":"black"} width={30} height={40}  position="absolute" marginTop={3} marginLeft={2}/>
        <TextInput 
        style={logdeco.inputtext} 
        placeholder="Email"
        keyboardType="email-address"
        onFocus={()=>{
          setEmailfocus(true)
          setPasswordfocus(false)
          
        }}>
        </TextInput></View>
        <View style={logdeco.box}>
        <AntDesign name="lock" size={30} color={passwordfocus=== true?"red":"black"} position="absolute" marginTop={3} marginLeft={2}/>
        <TextInput
          style={logdeco.inputtext}
          placeholder="Password"
          secureTextEntry={showpassword}
          onFocus={()=>{
               setEmailfocus(false)
               setPasswordfocus(true)
          }}
        ></TextInput>
        <FontAwesome5 name={showpassword== false ? "eye" : "eye-slash"} size={20} color="black" position="absolute" marginLeft={255} marginTop={8} onPress={()=> setshowpassword(!showpassword)} />
        </View>
        <View style={logdeco.formation}>
          <TouchableOpacity>
            <Text style={logdeco.bt1}>{"\t\tSign in\t\t"}</Text>
          </TouchableOpacity>
        </View>
        <View><TouchableOpacity>
        <Text style={logdeco.infotext}>Forgot your password?</Text></TouchableOpacity>
        </View>
        <Text style={{textAlign:"center", fontSize:20 , fontWeight:"700",color:"black", marginVertical:25}}>OR</Text>
        <Text style={{textAlign:"center", fontSize:20 , fontWeight:"700",color:"black", marginVertical:-15}}>Sign In With</Text>
        <View style={logdeco.gf}>
            <View style={logdeco.gficon}>
                <TouchableOpacity>
                <Ionicons name="logo-google" 
                size={30} 
                color="black"
                marginLeft={140} 
                marginVertical={30}
                height={32} width={32}
                />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <Zocial name="facebook" 
            size={24} 
            color="black"
            marginLeft={50} 
            marginVertical={30}
            height={32} width={32}
             />
            </TouchableOpacity>
        </View>
        <View style={logdeco.h80} />
        <View style={logdeco.gf}>
            <View>
            <Text style={{textAlign:"center", fontSize:15 ,color:"black", marginVertical:15,marginLeft:100}}>Dont have an account?</Text></View>
            <View>
                <TouchableOpacity>
                    <Text style={{textAlign:"center", fontSize:15 ,color:"black", marginVertical:15}}>{"\tSign Up"}</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const logdeco = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    marginBottom:20,
  },
  box: {
    height: 40,
    marginVertical:8,
    backgroundColor: "white",
    borderRadius: 10,
    width: "75%",
    marginLeft: 50,
    elevation: 5,
    textAlign: "center",
    
  },
  inputtext:{
     margin:10,
     marginLeft:35,
     fontSize:15,
     padding:1,
  },
  infotext: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    marginVertical:-15,
  },
  formation: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom:20,
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
    width:200,
    height:35,
  },
  h80: {
    height: 1,
    width: 300,
    backgroundColor: "black",
    alignSelf: "center",
    marginTop:8,
  },
  gf:{
    flexDirection:"row"
  },
});
export default LoginScreen;
