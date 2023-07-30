import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { Page } from "../components/Page";

export function Home() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={-1}>
        <View className="mb-4 flex items-center justify-center rounded-full bg-emerald-700 p-4">
          <Text className="pb-3 text-xl font-medium tracking-wider text-white">
            Your Savings
          </Text>
          <Text className=" text-3xl font-bold text-green-300">+ 20,40 €</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            !nav.navigate("Step1");
          }}
          activeOpacity={0.9}
          className={twMerge(
            "flex items-center justify-center rounded-full bg-zinc-800 p-5",
          )}
        >
          <Text className="text-xl font-bold tracking-widest text-white">
            Start Shopping!
          </Text>
        </TouchableOpacity>
      </Page>
    </>
  );
}
