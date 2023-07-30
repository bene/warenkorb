import { Fragment } from "react";
import { Text, View } from "react-native";
import { twMerge } from "tailwind-merge";

export function Stepper({
  steps,
  currentIndex,
}: {
  steps: string[];
  currentIndex: number;
}) {
  return (
    <View className="flex w-full flex-row items-center justify-center pb-8 pt-4">
      {steps.map((v, i) => (
        <Fragment key={i}>
          <View
            className={twMerge(
              "flex h-8 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-100 pl-3 pr-3",
              currentIndex >= i && "bg-zinc-800",
            )}
          >
            <Text className={twMerge(currentIndex >= i && "text-white")}>
              {v}
            </Text>
          </View>
          {i !== steps.length - 1 && (
            <View className="w-3 border-b-2 border-zinc-500" />
          )}
        </Fragment>
      ))}
    </View>
  );
}
