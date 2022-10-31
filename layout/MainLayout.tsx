import { Footer, Header } from "@components";
import { ColorModeProvider } from "@context";
import { ReactNode } from "react";
import { styles } from "./mainLayout.css";
import classNames from "classnames";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ColorModeProvider>
      <div className={classNames(styles.wrapper)}>
        <Header home={false} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </ColorModeProvider>
  );
};
