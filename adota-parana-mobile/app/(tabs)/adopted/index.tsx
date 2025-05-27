import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useAdoptionStore } from "@/stores/adopitionStore";
import CardAnimal from "@/components/CardAnimal";

export default function AdoptedScreen() {
  const { adoptedAnimals } = useAdoptionStore();

  return (
    <View className="flex-1 bg-white px-4">
      <FlatList
        data={adoptedAnimals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/animal/${item.id}`} asChild>
            <TouchableOpacity>
              <CardAnimal animal={item} />
            </TouchableOpacity>
          </Link>
        )}
        ListEmptyComponent={
          <Text className="text-center mt-4 text-lg">
            Nenhum animal adotado ainda.
          </Text>
        }
      />
    </View>
  );
}
