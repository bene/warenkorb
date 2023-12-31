import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { ShoppingList } from "../components/ShoppingList";
import { TouchableOpacity, Text, View, Image } from "react-native";
import Scan from "../../assets/barcode-scanner.png";
import Plus from "../../assets/plus.png";

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
            <Image source={Scan} style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Image source={Plus} style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
        </View>
        <ShoppingList
          name="My Weekly Groceries"
          subtitle="Most important groceries"
          classes="bg-sky-200 border-sky-400"
        />
        <ShoppingList name="Party" subtitle="Snacks & Beverages" />
        <ShoppingList name="Baking" subtitle="Cupcakes" />
        <ShoppingList name="Christmas" subtitle="Turkey" />
        <ShoppingList
          name="Healthy Breakfast"
          subtitle="4 People"
          classes="bg-emerald-200 border-emerald-400"
        />
      </Page>
    </>
  );
}
