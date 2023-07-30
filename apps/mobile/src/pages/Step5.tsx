import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { Product } from "../components/Product";

export function Step5() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={2}>
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
