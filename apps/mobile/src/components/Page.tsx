import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Stepper } from "./Stepper";

export function Page({
  currentStep,
  children,
  steps,
}: React.PropsWithChildren<{ currentStep: number; steps?: string[] }>) {
  const nav = useNavigation<any>();

  return (
    <View className="relative h-max p-4">
      {currentStep !== -1 && (
        <Stepper
          currentIndex={currentStep}
          steps={steps || ["Stores", "My Lists", "Products", "Overview"]}
        />
      )}
      <View className="flex">{children}</View>
    </View>
  );
}
