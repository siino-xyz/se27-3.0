import { Seo } from "@components";
import { ColorModeProvider } from "@context";
import { MainLayout } from "@layout";
import { text } from "@styles/pages/top.css";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const home: NextPageWithLayout = () => {
  return (
    <ColorModeProvider>
      <p className={text}>
        このフf全角ffzzシックアンティークというやつで、GoogleFontsから取ってきました
      </p>
    </ColorModeProvider>
  );
};

home.getLayout = function getLayout(home: ReactElement) {
  return <MainLayout headerType={true}>{home}</MainLayout>;
};
export default home;
