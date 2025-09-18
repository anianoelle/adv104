// import { Tabs } from "expo-router";
// import Entypo from '@expo/vector-icons/Entypo';
// export default function RootLayout() {

//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
     
//       <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => (<Entypo name="home" size={24} color="black" /> )}} />
//       <Tabs.Screen name="login" options={{ title: "Login"}} />
//     </Tabs>
//   );
// }

import { Stack } from "expo-router";
export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home"}} />
      <Stack.Screen name="login" options={{ title: "Login"}} />
      <Stack.Screen name="signup" options={{ title: "Signup"}} />
      <Stack.Screen name="dashboard" options={{ title: "Dashboard"}} />
    </Stack>
  );
}
