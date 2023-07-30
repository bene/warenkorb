import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { stores } from "../util/storeData";

export function Step2() {
  const nav = useNavigation<any>();
  const [selectedStores, setSelectedStores] = useState<string[]>([]);

  return (
    <>
      <Page currentStep={0}>
        {stores.map((store) => (
          <TouchableOpacity
            key={store.name}
            activeOpacity={0.9}
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
              "mb-4 w-full rounded-md border-2 border-zinc-400 bg-zinc-100 p-2 pl-4",
              selectedStores.includes(store.name) &&
                "border-emerald-400 bg-emerald-200",
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
      <ContinueButton
        title={`${selectedStores.length} Supermarkets selected`}
        disabled={selectedStores.length === 0}
        onClick={() => nav.navigate("Step3")}
      />
    </>
  );
}
