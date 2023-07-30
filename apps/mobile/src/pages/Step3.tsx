import { useNavigation } from "@react-navigation/native";
import { ContinueButton } from "../components/ContinueButton";
import { Page } from "../components/Page";
import { ShoppingList } from "../components/ShoppingList";

export function Step3() {
  const nav = useNavigation<any>();

  return (
    <>
      <Page currentStep={1}>
        <ShoppingList
          name="My Weekly Groceries"
          subtitle="All of you weekly necessaties."
          classes="bg-sky-200 border-sky-400"
        />
        <ShoppingList name="Baking" subtitle="All of you weekly necessaties." />
        <ShoppingList name="Baking" subtitle="All of you weekly necessaties." />
        <ShoppingList name="Baking" subtitle="All of you weekly necessaties." />
        <ShoppingList
          name="Healthy Alternatives"
          subtitle="All of you weekly necessaties."
          classes="bg-emerald-200 border-emerald-400"
        />
      </Page>
    </>
  );
}
