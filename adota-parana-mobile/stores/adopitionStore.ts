import { create } from "zustand";
import { Animal } from "@/types/animal";

type AdoptionState = {
  adoptedAnimals: Animal[];
  adopt: (animal: Animal) => void;
  cancelAdoption: (animalId: string) => void;
  isAdopted: (animalId: string) => boolean;
};

export const useAdoptionStore = create<AdoptionState>((set, get) => ({
  adoptedAnimals: [],
  adopt: (animal) =>
    set((state) => ({
      adoptedAnimals: [...state.adoptedAnimals, animal],
    })),
  cancelAdoption: (animalId) =>
    set((state) => ({
      adoptedAnimals: state.adoptedAnimals.filter((a) => a.id !== animalId),
    })),
  isAdopted: (animalId) => get().adoptedAnimals.some((a) => a.id === animalId),
}));
