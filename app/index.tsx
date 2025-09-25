import List from "@/components/List";
import { View } from "react-native";

const pokemonData = [
  {
    name : "Pikachu",
    url:""
  },
  {
    name : "Pikachu2",
    url:""
  },
  {
    name : "Pikachu3",
    url:""
  }
] 

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <List items={pokemonData} />
    </View>
  );
}
export default Index;
