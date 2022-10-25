import Image from "next/image";
import { blogImageWrapper } from "./BlogImage.css";

type BlogImageProps = {
  src: string;
  alt: string;
};

export const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className={blogImageWrapper}>
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />
    </div>
  );
};
