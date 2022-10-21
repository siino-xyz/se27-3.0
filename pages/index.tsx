import { text } from "@styles/pages/top.css";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <p className={text}>開閉ボタンはこちらです。</p>
    </div>
  );
};

export default Home;
