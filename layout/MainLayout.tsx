import { Footer, Header, Seo } from "@components";
import { ColorModeProvider } from "@context";
import { ReactNode } from "react";
import { styles } from "./MainLayout.css";
//redeployed.
import classNames from "classnames";

type MainLayoutProps = {
  children: ReactNode;
  headerType: boolean;
};

export const MainLayout = ({ children, headerType }: MainLayoutProps) => {
  return (
    <ColorModeProvider>
      <div className={classNames(styles.wrapper)}>
        <Header home={headerType} />
        <main className={classNames(styles.main)}>{children}</main>
        <Footer />
      </div>
    </ColorModeProvider>
  );
};
