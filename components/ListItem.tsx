import { Text, View } from "react-native-reanimated/lib/typescript/Animated";

export type ListItemProps= {
    name:string;
    url:string;
}; 

const ListItem: React.FC<ListItemProps> = (item) => <View>
    <Text>{item.name}</Text>
</View>;

export default ListItem;