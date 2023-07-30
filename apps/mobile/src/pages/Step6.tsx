import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { View, Text, Image, ScrollView } from "react-native";
import Hofer from "../../assets/hofer.jpg";
import Spar from "../../assets/spar.png";

export function Step6() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={3}>
        <ScrollView className="pr-2">
          <View className="mb-4 flex items-center justify-center rounded-md border-2 border-emerald-500 bg-emerald-200 p-2">
            <Text className="mb-4 text-xl font-bold">Cheapest Supermarket</Text>
            <View className="flex w-full flex-row items-center">
              <Image
                source={Hofer}
                style={{ height: 80, width: 65, top: -25 }}
              />
              <View className="mb-2 flex gap-2 pl-4 pr-6">
                <View className="flex w-full flex-row  pl-4 pr-16">
                  <Text className="w-[115px] text-lg font-bold">Hofer</Text>
                  <Text className="">Distance: 0,3 km</Text>
                </View>
                <View className="flex w-full flex-row pl-4 pr-16 pt-0.5">
                  <Text className="w-[115px] ">Nutri Score: C</Text>
                  <Text>Used CO2: 0,7 kg</Text>
                </View>
                <View className="flex w-full flex-row pl-4 pr-16">
                  <Text className="w-[115px]">
                    Price: <Text className=" text-lg font-bold">10,95 €</Text>
                  </Text>
                  <Text>
                    Savings:{" "}
                    <Text className="text-lg font-bold text-red-700">
                      1,95 €
                    </Text>
                  </Text>
                </View>
                <View className="flex w-full flex-row justify-end pl-4 pr-16 pt-2">
                  <Text className="mr-2 rounded-lg bg-green-600 p-1.5 font-bold text-white">
                    Order Online
                  </Text>
                  <Text className="mr-2 rounded-lg bg-zinc-800 p-1.5 font-bold text-white">
                    Save Entry
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="mb-4 flex items-center justify-center rounded-md border-2 border-emerald-500 bg-emerald-200 p-2">
            <Text className="mb-4 text-xl font-bold">
              Cheapest Combined Prices
            </Text>
            <View className="flex w-full flex-row items-center">
              <Image
                source={Hofer}
                style={{ height: 80, width: 65, top: -25 }}
              />
              <View className="mb-2 flex gap-2 pl-4 pr-6">
                <View className="flex w-full flex-row  pl-4 pr-16">
                  <Text className="w-[115px] text-lg font-bold">
                    Hofer & Billa
                  </Text>
                  <Text className="">Distance: 0,3 km</Text>
                </View>
                <View className="flex w-full flex-row pl-4 pr-16 pt-0.5">
                  <Text className="w-[115px] ">Nutri Score: B</Text>
                  <Text>Used CO2: 0,5 kg</Text>
                </View>
                <View className="flex w-full flex-row pl-4 pr-16">
                  <Text className="w-[115px]">
                    Price: <Text className=" text-lg font-bold">7,95 €</Text>
                  </Text>
                  <Text>
                    Savings:{" "}
                    <Text className="text-lg font-bold text-red-700">
                      4,95 €
                    </Text>
                  </Text>
                </View>
                <View className="flex w-full flex-row justify-end pl-4 pr-16 pt-2">
                  <Text className="mr-2 rounded-lg bg-green-600 p-1.5 font-bold text-white">
                    Order Online
                  </Text>
                  <Text className="mr-2 rounded-lg bg-zinc-800 p-1.5 font-bold text-white">
                    Save Entry
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex items-center justify-center rounded-md border-2 border-red-500 bg-red-200 p-2">
            <Text className="mb-4 text-xl font-bold">
              Expensive Supermarket
            </Text>
            <View className="flex w-full flex-row items-center">
              <Image
                source={Spar}
                style={{ height: 80, width: 65, top: -25 }}
              />
              <View className="mb-2 flex gap-2 pl-4 pr-6">
                <View className="flex w-full flex-row  pl-4 pr-16">
                  <Text className="w-[115px] font-bold">Spar</Text>
                  <Text className="">Distance: 0,7 km</Text>
                </View>
                <View className="flex w-full flex-row pl-4 pr-16 pt-0.5">
                  <Text className="w-[115px] ">Nutri Score: B</Text>
                  <Text>Used CO2: 0,2 kg</Text>
                </View>
                <View className="flex w-full flex-row pl-4 pr-16">
                  <Text className="w-[115px]">
                    Price: <Text className=" text-lg font-bold">15,95 €</Text>
                  </Text>
                  <Text>
                    Savings:{" "}
                    <Text className="text-lg font-bold text-red-700">
                      -4,95 €
                    </Text>
                  </Text>
                </View>
                <View className="flex w-full flex-row justify-end pl-4 pr-16 pt-2">
                  <Text className="mr-2 rounded-lg bg-red-600 p-1.5 font-bold text-white">
                    Order Online
                  </Text>
                  <Text className="mr-2 rounded-lg bg-zinc-800 p-1.5 font-bold text-white">
                    Save Entry
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Page>
    </>
  );
}
