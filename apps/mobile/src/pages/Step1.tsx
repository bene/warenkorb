import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";

export function Step1() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={0}></Page>
      <ContinueButton
        title={`Show Results`}
        disabled={false}
        onClick={() => nav.navigate("Step2")}
      />
    </>
  );
}
