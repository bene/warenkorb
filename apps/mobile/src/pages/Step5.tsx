import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";

export function Step5() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={2}></Page>
      <ContinueButton
        title={"Shop for those products"}
        disabled={false}
        onClick={() => nav.navigate("Step6")}
      />
    </>
  );
}
