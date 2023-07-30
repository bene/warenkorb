import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { ShoppingList } from "../components/ShoppingList";

export function Step4() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page
        currentStep={1}
        steps={["Stores", "Scan List", "Products", "Overview"]}
      ></Page>
      <ContinueButton
        title={"Use Image"}
        disabled={false}
        onClick={() => nav.navigate("Step4")}
      />
    </>
  );
}
