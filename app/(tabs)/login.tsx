import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function LoginScreen(){

return(
<View style={{flex: 1, alignItems: "center", justifyContent: "center", display: "flex"}}>
    <View style={{display: "flex", justifyContent: "center", alignItems: "center", width: "30%", height: "70%", borderRadius: 10, backgroundColor: "white"}}>
       

        <View style={{width: "100%", height: "10%", display: "flex", justifyContent: "center",  marginBottom: 30}}>
            <Text style={{marginBottom: 5, fontSize: 20, marginLeft: 12}}>Password</Text>
            <View style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'center',}}>
                <TextInput placeholder="Enter password" style={{width: "90%", height: "90%", borderWidth: 1, borderBlockColor: "gray", borderRadius: 10, paddingLeft: 3}}></TextInput>
            </View>
        </View>

        <View style={{width: "100%", height: "10%", display: "flex", justifyContent: "center",  marginBottom: 30}}>
            <Text style={{marginBottom: 5, fontSize: 20, marginLeft: 12}}>Confirm Password</Text>
            <View style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'center',}}>
                <TextInput placeholder="Enter email" style={{width: "90%", height: "90%", borderWidth: 1, borderBlockColor: "gray", borderRadius: 10, paddingLeft: 3}}></TextInput>
            </View>
        </View>
        
        <View style={{width: "90%", height: "20%", alignSelf: "center", margin: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Link href="/(tabs)/dashboard" style={{width: "100%", height: "50%", backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center", borderColor: "gray", borderRadius: 10, marginBottom: 5, padding: 3}}> 
        <Text style={{fontSize: 30, fontWeight: "bold" }}>Login</Text></Link>
        </View>

        <Link href="/(tabs)/signup">
            <Text style={{fontSize: 15, fontWeight: "thin" }}>I don't have an account</Text>
        </Link>


    </View>
</View>
);

}