import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export type ListItemProps= {
    name:string;
    url:string;
}; 

const ListItem: React.FC<ListItemProps> =({name,url}) =>{ 
  const id = url.split("/").at(-2) || "";

  return (
    <Pressable style={styles.itemContainer} onPress={ () => router.push(`/${id}`)}>
      <Text style={styles.text}>{name.toUpperCase()}</Text>
    </Pressable>
)
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#f9c2ff",
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
});

export default ListItem;