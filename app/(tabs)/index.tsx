import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.view}>
      <View style={{width: "30%", height: "70%", backgroundColor: "white", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", shadowColor: "gray"}}>
        <Text style={{alignSelf: "center", fontWeight: "bold", fontSize: 50, marginBottom: 50}}>Welcome!</Text>
        <View style={{ height: "20%", width: "90%"}}>
          <Link href="/(tabs)/login" style={{width: "100%", height: "50%", backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center", borderColor: "gray", borderRadius: 10, marginBottom: 5, padding: 3}}> 
          <Text style={{fontSize: 30, fontWeight: "bold" }}>Login</Text></Link>
          <Link href="/(tabs)/signup" style={{width: "100%", height: "50%", backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center", borderColor: "gray", borderRadius: 10, marginTop: 5, padding: 3}}> 
          <Text style={{fontSize: 30, fontWeight: "bold" }}>Signup</Text></Link>
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "gray",
  },

  button:{
    marginTop:20,
    padding:10,
    backgroundColor:"#f54242",
    borderRadius:5
  }
});
