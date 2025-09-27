declare module "react-syntax-highlighter" {
  import * as React from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any;
    children?: React.ReactNode;
    showLineNumbers?: boolean;
    wrapLines?: boolean;
    customStyle?: React.CSSProperties;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lineProps?: any;
  }

  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module "react-syntax-highlighter/dist/esm/styles/hljs";
