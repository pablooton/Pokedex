import { StyleSheet, Text, View } from "react-native";

export type ListItemProps= {
    name:string;
    url:string;
}; 

const ListItem: React.FC<ListItemProps> =({name}) => (
<View
    style={styles.itemContainer}>
    <Text style={styles.text}>{name.toUpperCase()}</Text>
</View>
)

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