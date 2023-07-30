import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";
import { useState } from "react";

export function Step1() {
  const nav = useNavigation<any>();

  const [radius, setRadius] = useState(5);

  return (
    <>
      <Page currentStep={0}></Page>
      <View className="absolute bottom-24 w-full p-2">
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
      </View>
      <ContinueButton
        title={`Show Results`}
        disabled={false}
        onClick={() => nav.navigate("Step2")}
      />
    </>
  );
}
