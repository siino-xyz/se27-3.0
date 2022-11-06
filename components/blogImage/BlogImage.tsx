import classNames from "classnames";
import Image from "next/image";
import { blogImageRecipe, BlogImageRecipe, styles } from "./BlogImage.css";

type BlogImageProps = {
  src: string;
  alt: string;
} & BlogImageRecipe;

export const BlogImage = ({ src, alt, radius }: BlogImageProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 90vw,
              33vw"
        className={classNames(
          styles.content,
          blogImageRecipe({
            radius,
          })
        )}
      />
    </div>
  );
};
