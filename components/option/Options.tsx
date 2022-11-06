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
            ##{domToReact(domNode.children, Options)}
          </h2>
        );
      }
      if (domNode.attribs && domNode.name === "h3") {
        return (
          <h3 className={styles.heading3} {...props}>
            ###{domToReact(domNode.children, Options)}
          </h3>
        );
      }
      if (domNode.attribs && domNode.name === "h4") {
        return (
          <h4 className={styles.heading4} {...props}>
            ####{domToReact(domNode.children, Options)}
          </h4>
        );
      }
      if (domNode.attribs && domNode.name === "p") {
        return (
          <p className={styles.paragraph} {...props}>
            {domToReact(domNode.children, Options)}
          </p>
        );
      }
      if (domNode.attribs && domNode.name === "ul") {
        return (
          <ul className={styles.lists} {...props}>
            {domToReact(domNode.children, Options)}
          </ul>
        );
      }
      if (domNode.attribs && domNode.name === "ol") {
        return (
          <ol className={styles.ollists} {...props}>
            {domToReact(domNode.children, Options)}
          </ol>
        );
      }
      if (domNode.attribs && domNode.name === "li") {
        return (
          <li className={styles.listItem} {...props}>
            {domToReact(domNode.children, Options)}
          </li>
        );
      }
    }
  },
};
