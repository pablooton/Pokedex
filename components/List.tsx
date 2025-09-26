import { ScrollView } from "react-native";
import ListItem, { ListItemProps } from "./ListItem";

type ListProps = {
    items:ListItemProps[];
};

const List : React.FC<ListProps> = ({items}) => (
<ScrollView>
    {items.map(item => 
    (<ListItem key ={item.name} {...item}  />
    ))}
</ScrollView>

);
export default List;