import { View, Text, Image, StyleSheet } from "react-native";
import { Animal } from "@/types/animal";

export default function CardAnimal({ animal }: { animal: Animal }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: animal.image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.description}>
          <Text style={styles.name}>{animal.name}</Text>
          <Text style={styles.breed}>{animal.breed}</Text>
          <Text style={styles.age}>{animal.age}</Text>
        </View>

        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{animal.tag}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 24,
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 220,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  description: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2937", // mais escuro para melhor leitura
    marginBottom: 6,
  },
  breed: {
    fontSize: 16,
    color: "#6B7280", // cinza médio
    marginBottom: 2,
  },
  age: {
    fontSize: 14,
    color: "#9CA3AF", // cinza mais claro
  },
  tagContainer: {
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#F97316",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#FFD9B0",
    shadowColor: "#F97316",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 8,
  },
  tagText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
