import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Text, VStack } from "native-base";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <Group name="costas" />
    </VStack>
  );
}
