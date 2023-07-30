import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { Page } from "../components/Page";

export function Step2() {
  const nav = useNavigation<any>();
  const [selectedStores, setSelectedStores] = useState<string[]>([]);

  return (
    <>
      <Page currentStep={0}></Page>
      <TouchableOpacity
        className={twMerge(
          " absolute bottom-0 left-0 right-0 m-4 mb-6 flex items-center justify-center rounded-md bg-sky-500 p-3",
          selectedStores.length === 0 && "bg-gray-400 ",
        )}
        onPress={() => {
          selectedStores.length > 0 && nav.navigate("Step2");
        }}
      >
        <Text className="font-medium tracking-widest text-white">
          {selectedStores.length} Supermärkte ausgewählt
        </Text>
      </TouchableOpacity>
    </>
  );
}
