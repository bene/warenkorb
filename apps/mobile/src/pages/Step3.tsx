import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";

export function Step3() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={1}></Page>
    </>
  );
}
