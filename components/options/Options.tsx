import {
  attributesToProps,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { styles } from "./Options.css";

export const Options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.type == "tag") {
      const props = attributesToProps(domNode.attribs);

      if (domNode.attribs && domNode.name === "h2") {
        return (
          <h2 className={styles.heading2} {...props}>
            {domToReact(domNode.children, Options)}
          </h2>
        );
      }
      if (domNode.attribs && domNode.name === "h3") {
        return (
          <h3 className={styles.heading3} {...props}>
            {domToReact(domNode.children, Options)}
          </h3>
        );
      }
      if (domNode.attribs && domNode.name === "h4") {
        return (
          <h3 className={styles.heading4} {...props}>
            {domToReact(domNode.children, Options)}
          </h3>
        );
      }
      if (domNode.attribs && domNode.name === "p") {
        return (
          <h3 className={styles.paragraph} {...props}>
            {domToReact(domNode.children, Options)}
          </h3>
        );
      }
    }
  },
};
