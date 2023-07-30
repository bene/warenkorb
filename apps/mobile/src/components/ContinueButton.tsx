import { TouchableOpacity, Text } from "react-native";
import { twMerge } from "tailwind-merge";

export function ContinueButton({
  title,
  disabled,
  onClick,
  classes,
}: {
  title: string;
  disabled: boolean;
  onClick: () => void;
  classes?: string;
}) {
  return (
    <TouchableOpacity
      className={twMerge(
        "absolute bottom-0 left-0 right-0 m-4 mb-6 flex items-center justify-center rounded-full bg-zinc-800 p-3",
        disabled && " bg-gray-300",
        classes,
      )}
      onPress={() => {
        !disabled && onClick();
      }}
    >
      <Text className="font-medium tracking-widest text-white">{title}</Text>
    </TouchableOpacity>
  );
}
