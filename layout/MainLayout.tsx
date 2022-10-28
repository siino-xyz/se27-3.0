import { Footer, Header } from "@components";
import { ColorModeProvider } from "@context";
import { ReactNode } from "react";
import { styles } from "./MainLayout.css";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ColorModeProvider>
      <div className={styles.wrapper}>
        <Header home={false} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </ColorModeProvider>
  );
};
