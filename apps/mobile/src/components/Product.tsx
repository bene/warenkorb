import { View, Text } from "react-native";

export function Product({ name, amount }: { name: string; amount: string }) {
  return (
    <View className="mb-4 flex flex-row items-center justify-between rounded-md border-2 border-zinc-500 bg-zinc-200 p-2">
      <Text className="text-lg font-medium">{name}</Text>
      <Text>{amount}</Text>
    </View>
  );
}
