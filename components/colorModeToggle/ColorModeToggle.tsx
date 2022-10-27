import { useColorMode } from "@context";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { toggleStyle } from "./ColorModeToggle.css";
import { IconDarkMode, IconLightMode } from "@components/svgAssets/SvgAssets";

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <TogglePrimitive.Root
      className={toggleStyle}
      aria-label="ColorMode Toggle"
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      {colorMode === "light" ? <IconDarkMode /> : <IconLightMode />}
    </TogglePrimitive.Root>
  );
};
