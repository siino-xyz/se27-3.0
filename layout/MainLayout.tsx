import { Footer, Header } from "@components";
import { ColorModeProvider } from "@context";
import { ReactNode } from "react";
import { customMaxWidth, CustomMaxWidth, styles } from "./mainLayout.css";
import classNames from "classnames";

type MainLayoutProps = {
  children: ReactNode;
} & CustomMaxWidth;

export const MainLayout = ({ children, maxWidth }: MainLayoutProps) => {
  return (
    <ColorModeProvider>
      <div className={classNames(styles.wrapper)}>
        <Header home={false} />
        <main className={classNames(styles.main, customMaxWidth({ maxWidth }))}>
          {children}
        </main>
        <Footer />
      </div>
    </ColorModeProvider>
  );
};
