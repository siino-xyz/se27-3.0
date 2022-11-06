import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Zen_Kaku_Gothic_Antique } from "@next/font/google";
import "../styles/globals.css";

const ZenKakuGothicAntique_normal = Zen_Kaku_Gothic_Antique({
  weight: "400",
  subsets: ["japanese"],
});
const ZenKakuGothicAntique_bold = Zen_Kaku_Gothic_Antique({
  weight: "700",
  subsets: ["japanese"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${ZenKakuGothicAntique_normal.style.fontFamily},
            ${ZenKakuGothicAntique_bold};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
