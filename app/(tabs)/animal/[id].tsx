import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { animals } from "../../mocks/animals";
import { useAdoptionStore } from "@/stores/adopitionStore";
import InterestButton from "@/components/InterestingButton";

export default function AnimalDetail() {
  const { id } = useLocalSearchParams();

  const animal = animals.find((a) => a.id === id);

  const { adopt, cancelAdoption, isAdopted } = useAdoptionStore();

  if (!animal) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Animal não encontrado</Text>
      </View>
    );
  }

  const adopted = isAdopted(animal.id);

  const handleAdoption = () => {
    adopted ? cancelAdoption(animal.id) : adopt(animal);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: animal.image }} style={styles.image} />

      <View style={styles.form}>
        <Text style={styles.name}>{animal.name}</Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Raça: </Text>
          {animal.breed}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Idade: </Text>
          {animal.age}
        </Text>

        <Text style={styles.sectionTitle}>Sobre {animal.name}</Text>
        <Text style={styles.description}>{animal.description}</Text>
      </View>

      <InterestButton animal={animal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  notFound: {
    fontSize: 18,
    color: "#555",
  },
  image: {
    width: "100%",
    height: 280,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  form: {
    marginTop: -24, // efeito de sobrepor a imagem
    marginHorizontal: 16,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    elevation: 4, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  label: {
    fontWeight: "600",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F97316",
    marginTop: 16,
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
});
