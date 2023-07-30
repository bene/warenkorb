import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { Product } from "../components/Product";

export function Step5() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={2}>
        <Product name="Milch" amount="1 Liter" />
      </Page>
      <ContinueButton
        title={"Shop for those products"}
        disabled={false}
        onClick={() => nav.navigate("Step6")}
      />
    </>
  );
}
