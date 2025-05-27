import { Pressable, Text, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { useAdoptionStore } from "@/stores/adopitionStore";

type Props = {
  animal: {
    id: string;
    name: string;
    breed: string;
    age: string;
    image: string;
    tag: string;
  };
};

export default function InterestButton({ animal }: Props) {
  const { isAdopted, adopt, cancelAdoption } = useAdoptionStore();

  const adopted = isAdopted(animal.id);

  const handlePress = () => {
    adopted ? cancelAdoption(animal.id) : adopt(animal);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: adopted ? Colors.error : Colors.secondary },
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>
          {adopted ? "Cancelar Adoção" : "Tenho Interesse"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
