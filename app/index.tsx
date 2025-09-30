import Button from "@/components/Button";
import List from "@/components/List";
import { ListItemProps } from "@/components/ListItem";
import { useMemo, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PokemonDataType = {
  count: number;
  next: string|null;
  previous: string|null;
  results: ListItemProps[];
};

const Index = () => {

  const [next,setNext] = useState(null);
  const [previous,setPrevious] = useState(null);
  const[results,setResults] = useState([]);
  const[loading,setLoading] = useState(false);

  const isFirstPage = useMemo( ()=> previous===null,[previous]);
  const isLastPage =useMemo (() => next===null,[next]);

  return(
    <SafeAreaView style = {styles.container}>
     <List items={results} />
     <View style = {styles.buttonContainer}>
      <Button leftIcon="chevron-left" text="Previous" onPress={() => null} disabled={isFirstPage} />
      <Button rightIcon="chevron-right" text="Next" onPress={() => null} disabled={isLastPage}/>
     </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});


export default Index;
