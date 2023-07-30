import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

export function ShoppingList({
  name,
  classes,
  subtitle,
}: {
  name: string;
  subtitle: string;
  classes?: string;
}) {
  const nav = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className={twMerge(
        "mb-4 flex flex-row items-center justify-between rounded-md border-2 border-zinc-500 bg-zinc-200 p-2",
        classes,
      )}
    >
      <View>
        <Text className="text-lg font-medium">{name}</Text>
        <Text className="text-gray-500">{subtitle}</Text>
      </View>
      <Text className="pr-2 text-xl font-medium">&gt;</Text>
    </TouchableOpacity>
  );
}
