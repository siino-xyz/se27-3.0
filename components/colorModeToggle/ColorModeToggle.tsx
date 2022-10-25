import { useColorMode } from "@context";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { toggleStyle } from "./ColorModeToggle.css";
import classNames from "classnames";

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <TogglePrimitive.Root
      className={classNames(toggleStyle)}
      aria-label="ColorMode Toggle"
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      切り替えボタン
    </TogglePrimitive.Root>
  );
};
