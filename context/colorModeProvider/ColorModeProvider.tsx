import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ColorMode = "dark" | "light";

export const themekey = "se27ColorModeToggle";

type ColorModeContextValues = {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
};

export const ColorModeContext = createContext<ColorModeContextValues>({
  colorMode: null,
  setColorMode: () => {},
});

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    setColorMode(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const setter = (color: ColorMode) => {
    setColorMode(color);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(color);

    try {
      localStorage.setItem(themekey, color);
    } catch (e) {}
  };
  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode: setter }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
