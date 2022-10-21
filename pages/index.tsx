import { text } from "@styles/pages/top.css";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <p className={text}>
        このフォントは、全角ゴシックアンティークというやつで、GoogleFontsから取ってきました
      </p>
    </div>
  );
};

export default Home;
