import { Fragment } from "react";
import { Text, View } from "react-native";
import { twMerge } from "tailwind-merge";

export function Stepper({
  steps,
  currentIndex,
}: {
  steps: number;
  currentIndex: number;
}) {
  return (
    <View className="flex flex-row items-center justify-center">
      {new Array(steps).fill(0).map((_, i) => (
        <Fragment key={i}>
          <View
            className={twMerge(
              "flex h-8 w-8 items-center justify-center rounded-full border",
              currentIndex === i && "bg-black",
            )}
          >
            <Text className={twMerge(currentIndex === i && "text-white")}>
              {i + 1}
            </Text>
          </View>
          {i !== steps - 1 && <View className="w-8 border-b-2" />}
        </Fragment>
      ))}
    </View>
  );
}
