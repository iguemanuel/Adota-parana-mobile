import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { animals } from "../../mocks/animals";
import CardAnimal from "@/components/CardAnimal";

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/animal/${item.id}`} asChild>
            <TouchableOpacity>
              <CardAnimal animal={item} />
            </TouchableOpacity>
          </Link>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum animal encontrado.</Text>
        }
        ListHeaderComponent={
          <View>
            <Link href="/adopted" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver Animais Adotados</Text>
              </TouchableOpacity>
            </Link>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
    fontSize: 16,
  },
});
