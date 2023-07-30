import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Stepper } from "./Stepper";

export function Page({
  currentStep,
  children,
}: React.PropsWithChildren<{ currentStep: number }>) {
  const nav = useNavigation<any>();

  return (
    <View className="relative h-max p-4">
      <Stepper
        currentIndex={currentStep}
        steps={["Stores", "My Lists", "Products", "Overview"]}
      />
      <View className="flex">{children}</View>
    </View>
  );
}
