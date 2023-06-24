
import { Pressable, TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,ImageBackground ,Image} from 'react-native';




const Welcome=({navigation})=>
{
    // const [signup,setsignup]=useState(false);
    // const [login,setlogin]=useState(false);
   

    return(
        <View style={{flex:1, }}>
            <ImageBackground 
              style={weldeco.imgback}
              source={require('../assets/background.jpg')}
              >
                
                <Text style={weldeco.uppertext}>Welcome to Barbel</Text>
                <Image 
                style={weldeco.logo}
                source={require('../assets/logo.jpg.png')}
                ></Image>
            <View style={weldeco.h80}/>
            <Text style={weldeco.infotext}>Find the best food around you at lowest price!!</Text>
            <View style={weldeco.h80} />
            <View style={weldeco.formation}>
                <TouchableOpacity>
                   
                    
                    <Text style={weldeco.bt1}
                    onPress={() =>navigation.navigate('SignUp')}>{"\t\tSign up\t\t"}
                    
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={weldeco.bt2}
                    onPress={()=>navigation.navigate('SignIn')}>{"\t\tSign in\t\t"}</Text>
                </TouchableOpacity>
            </View>
<View style={weldeco.footer}>
    <Text style={weldeco.infotext}>All rights reserved by Barbel, 2022</Text>
</View>
              </ImageBackground>
        </View>

    );
}

export default Welcome;

const weldeco=StyleSheet.create(
    {
        container:{
            flex:1,
            
        },

        imgback:{
            height:"100%",
            width:"100%",
            resizeMode:"contain",
            opacity:1,
            justifyContent:"center",
           
        },
        uppertext:{
            fontSize:35,
            
            color:"black",
            marginTop:-20,
            elevation:10,
            position:"relative",
            textAlign:"center",
          
            
            

        },
        logo:{
            alignSelf:"center",
            height:250,
            width:250,
            marginTop:100,
            marginVertical:50,
            

        },
        h80:{
            height:2,
            width:300,
            backgroundColor:"black",
            alignSelf:"center",
            
        },
        infotext:{
            fontSize:20,
            color:"black",
            textAlign:"center",
            marginVertical:10,
           
            

        },
        formation:{
            flexDirection:"row",
            
        },
        bt1:{
               fontSize:20,
               padding:3,
               textAlign:"center",
               color:"black",
               backgroundColor:"#FACD95",
               marginTop:50,
               marginLeft:90,
               borderRadius:7,
               fontWeight:"700",
               elevation:7,
        },
        bt2:{
            fontSize:20,
            padding:3,
            textAlign:"center",
            color:"black",
            marginLeft:200,
            backgroundColor:"#FACD95",
            marginTop:50,
            marginLeft:40,
            borderRadius:7,
            fontWeight:"700",
            elevation:7,

        },
        footer:{
            marginBottom:-150,
            marginVertical:50,
        },

    }
);