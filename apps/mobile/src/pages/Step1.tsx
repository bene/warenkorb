import { useState } from "react";
import { Button, Text, TouchableHighlight, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { Stepper } from "./Stepper";

const stores = [
  {
    name: "billa",
    label: "BILLA",
  },
  {
    name: "spar",
    label: "Spar",
  },
  {
    name: "hofer",
    label: "Hofer",
  },
  {
    name: "penny",
    label: "Penny",
  },
  {
    name: "lidl",
    label: "Lidl",
  },
];

export function Step1() {
  const [selectedStores, setSelectedStores] = useState<string[]>([]);

  return (
    <View className="flex flex-1 items-center justify-center p-8">
      <Text className="mb-12 text-center text-3xl font-bold">
        Wähle Märkte
        {"\n"}
        in deiner Nähe aus.
      </Text>
      <View className="flex flex-row flex-wrap justify-center gap-2">
        {stores.map((store) => (
          <TouchableHighlight
            key={store.name}
            onPress={() => {
              if (selectedStores.includes(store.name)) {
                setSelectedStores(
                  selectedStores.filter((s) => s !== store.name),
                );
              } else {
                setSelectedStores([...selectedStores, store.name]);
              }
            }}
            className={twMerge(
              "rounded-full border-2 px-4 py-2",
              selectedStores.includes(store.name) && "bg-black",
            )}
          >
            <Text
              className={twMerge(
                "text-lg",
                selectedStores.includes(store.name) && "text-white",
              )}
            >
              {store.label.toUpperCase()}
            </Text>
          </TouchableHighlight>
        ))}
      </View>

      <View className="mt-12">
        <Stepper currentIndex={0} steps={3} />
      </View>

      <View className="mt-12">
        <Button title="Weiter" onPress={() => {}} />
      </View>
    </View>
  );
}
