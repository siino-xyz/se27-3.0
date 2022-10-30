import Image from "next/image";
import { styles } from "./BlogImage.css";

type BlogImageProps = {
  src: string;
  alt: string;
};

export const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className={styles.wrapper}>
      <Image src={src} alt={alt} fill className={styles.content} />
    </div>
  );
};
