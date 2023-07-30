import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { Product } from "../components/Product";
import { View, Text } from "react-native";

export function Step5() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={2}>
        <View className="mb-6 rounded-full border-2 border-zinc-400 p-2 px-4">
          <Text className="text-zinc-400">Produkt suchen...</Text>
        </View>
        <Product name="Apfel" amount="1 kg" />
        <Product name="Mehl" amount="500 g" />
        <Product name="Zucker" amount="500 g" />
        <Product name="Backpulver" amount="1 Stk." />
        <Product name="Margerquark" amount="500 g" />
        <Product name="Milch" amount="1 Liter" />
      </Page>
      <ContinueButton
        title={"Calculate Product Prices"}
        disabled={false}
        onClick={() => nav.navigate("Step6")}
      />
    </>
  );
}
