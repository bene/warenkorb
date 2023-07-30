import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { Page } from "../components/Page";
import { stores } from "../util/storeData";

export function Step1() {
  const nav = useNavigation<any>();
  const [selectedStores, setSelectedStores] = useState<string[]>([]);

  return (
    <>
      <Page currentStep={0}>
        {stores.map((store) => (
          <TouchableOpacity
            key={store.name}
            activeOpacity={0.7}
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
              "mb-4 w-full rounded-md border-2 border-sky-500 p-2 pl-4",
              selectedStores.includes(store.name) &&
                "border-sky-300 bg-sky-300",
            )}
          >
            <View className="flex flex-row items-center">
              <Image
                source={store.icon}
                style={{ height: 50, width: 40 }}
                className="mr-5"
              />
              <View>
                <Text className={"text-2xl"}>{store.label}</Text>
                <Text className="text-gray-500">
                  Distance to next store: {store.distance} km
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Page>
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
