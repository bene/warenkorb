import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import Slider from "@react-native-community/slider";
import { View, Text, Image } from "react-native";
import { useState } from "react";
import Geo from "../../assets/geo.png";

export function Step1() {
  const nav = useNavigation<any>();

  const [radius, setRadius] = useState(5);

  return (
    <>
      <View
        className={`absolute rounded-full border-4 border-zinc-700`}
        style={{
          zIndex: 1,
          left: 200 - (radius * 12 + 100) / 2,
          top: 300 - (radius * 12 + 100) / 2,
          height: radius * 12 + 100,
          width: radius * 12 + 100,
        }}
      ></View>
      <View
        style={{
          left: -350,
          bottom: 50,
          zIndex: -1,
        }}
      >
        <Image source={Geo} />
      </View>
      <View className="absolute bottom-0 w-full rounded-xl bg-white p-2 pb-0">
        <Text className="text-center text-base font-medium">{radius} km</Text>
        <Slider
          minimumTrackTintColor="#525252"
          maximumTrackTintColor="#525252"
          thumbTintColor="#525252"
          minimumValue={1}
          maximumValue={20}
          step={1}
          value={radius}
          onValueChange={setRadius}
        />
        <ContinueButton
          title={`Show Results`}
          disabled={false}
          onClick={() => nav.navigate("Step2")}
          classes="relative"
        />
      </View>
    </>
  );
}
