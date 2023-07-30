import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { ResizeMode, Video } from "expo-av";
import { View } from "react-native";

export function Step4() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page
        currentStep={1}
        steps={["Stores", "Scan List", "Products", "Overview"]}
      >
        <View className="h-5/6 w-full">
          <Video
            source={{
              uri: "https://warenkorb-assets.netlify.app/demo.mp4",
            }}
            className="h-full w-full rounded-2xl"
            resizeMode={ResizeMode.COVER}
            isMuted
            useNativeControls
            shouldPlay
          />
        </View>
      </Page>
      <ContinueButton
        title={"Scan"}
        disabled={false}
        onClick={() => nav.navigate("Step5")}
      />
    </>
  );
}
