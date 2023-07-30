import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { Image } from "react-native";
import List from "../../assets/list.jpg";

export function Step4() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page
        currentStep={1}
        steps={["Stores", "Scan List", "Products", "Overview"]}
      >
        <Image source={List} style={{ width: "100%", height: "88%" }} />
      </Page>
      <ContinueButton
        title={"Use Image"}
        disabled={false}
        onClick={() => nav.navigate("Step5")}
      />
    </>
  );
}
