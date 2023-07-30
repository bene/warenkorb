import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { ShoppingList } from "../components/ShoppingList";
import { TouchableOpacity, Text, View, Image } from "react-native";
import Scan from "../../assets/scanner.png";

export function Step3() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={1}>
        <View className="flex flex-row gap-2 self-end pb-4">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => nav.navigate("Step4")}
          >
            <Image source={Scan} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <ShoppingList
          name="My Weekly Groceries"
          subtitle="Most important groceries"
          classes="bg-sky-200 border-sky-400"
        />
        <ShoppingList name="Party" subtitle="Snacks & beverages" />
        <ShoppingList name="Baking" subtitle="Cupcakes" />
        <ShoppingList name="Christmas" subtitle="Turkey" />
        <ShoppingList
          name="Breakfast"
          subtitle="4 people"
          classes="bg-emerald-200 border-emerald-400"
        />
      </Page>
    </>
  );
}
