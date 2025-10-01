import Button from "@/components/Button";
import List from "@/components/List";
import { ListItemProps } from "@/components/ListItem";
import { useEffect, useMemo, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PokemonDataType = {
  count: number;
  next: string|null;
  previous: string|null;
  results: ListItemProps[];
};

const Index = () => {

  const [next,setNext] = useState<string | null>(null);
  const [previous,setPrevious] = useState<string | null>(null);
  const[results,setResults] = useState<ListItemProps[]>([]);
  const[loading,setLoading] = useState(false);

  const isFirstPage = useMemo( ()=> previous===null,[previous]);
  const isLastPage =useMemo (() => next===null,[next]);

  const fetchUrl = (url: string | null) => {
if(url === null){
  return;
}

    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then((data:PokemonDataType)  => {
        setResults(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      })
      .finally(() => setLoading(false));
  };

   useEffect(() => fetchUrl("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"), []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Loading...</Text>
      </SafeAreaView>
    );
  }

  return(
    <SafeAreaView style = {styles.container}>
     <List items={results} />
     <View style = {styles.buttonContainer}>
      <Button leftIcon="chevron-left" text="Previous" onPress={() =>fetchUrl(previous)} disabled={isFirstPage} />
      <Button rightIcon="chevron-right" text="Next" onPress={() => fetchUrl(next)} disabled={isLastPage}/>
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
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
});

export default Index;
