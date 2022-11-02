import { Heading } from "@components/heading/Heading";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
} from "react-share";
import { styles } from "./ShareIcons.css";

type ShareIconsProps = {
  url: string;
  title: string;
};

export const ShareIcons = ({ url, title }: ShareIconsProps) => {
  return (
    <>
      <Heading as="h2" headings="h2" aligns="center" text="記事をシェアする" />
      <div className={styles.icons}>
        <TwitterShareButton title={title} url={url}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <FacebookShareButton title={title} url={url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <HatenaShareButton title={title} url={url}>
          <HatenaIcon size={32} round={true} />
        </HatenaShareButton>
      </div>
    </>
  );
};
