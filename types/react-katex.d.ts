declare module "react-katex" {
  import * as React from "react";

  interface InlineMathProps {
    math: string;
    className?: string;
  }

  interface BlockMathProps {
    math: string;
    className?: string;
  }

  export class InlineMath extends React.Component<InlineMathProps> {}
  export class BlockMath extends React.Component<BlockMathProps> {}
}
