import { ColorModeToggle } from "@components";
import { ColorModeProvider } from "@context";
import { text } from "@styles/pages/top.css";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <ColorModeProvider>
      <p className={text}>
        このフォントは、全角ゴシックアンティークというやつで、GoogleFontsから取ってきました
      </p>
    </ColorModeProvider>
  );
};

export default Home;
