import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority"


export type ParagraphVariants = VariantProps<typeof paragraphProps>;
const paragraphProps = cva({
  variants:{
    size:{
      large: ["text-xl"],
      normal: ["text-base"],
      small: ["text-sm"]
    },
    muted:{
      true: ["text-muted-foreground"],
      false: []
    },
  },
  defaultVariants: {
    size: "normal",
    muted: false,
  }
})

export interface ParagraphProps extends ParagraphVariants {
    children: React.ReactNode,
    [key:string]: any;
}
export function Paragraph(props: ParagraphProps) {
    const { children, ...rest} = props;
    return (
      <p className={paragraphProps({...rest})}>
        {children}
      </p>
    )
  }
