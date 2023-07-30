import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { Text } from "react-native";

export function Home() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={-1}></Page>
      <ContinueButton
        title={`Show Results`}
        disabled={false}
        onClick={() => nav.navigate("Step1")}
      />
    </>
  );
}
