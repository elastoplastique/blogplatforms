import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority"

export type HeaderVariantProps = VariantProps<typeof headerVariants>;

const headerVariants = cva(["scroll-m-20", "tracking-tight"], {
  variants: {
    level: {
      h1: ["text-4xl", "font-extrabold", "lg:text-5xl"],
      h2: ["text-3xl", "font-semibold", "border-b", "pb-2", "transition-colors", "first:mt-0"],
      h3: ["text-2xl", "font-semibold"],
      h4: ["text-xl", "font-semibold"],
    },
  },
  defaultVariants: {
    level: "h2",
  }
})

export interface HeaderProps extends HeaderVariantProps {
  children: React.ReactNode,
  [key: string]: any;
}

function Header(props: HeaderProps) {
  const { children, ...rest } = props;

  switch ((props.level || "h2").toLowerCase()) {
    case "h1":
      return () => <h1 className={headerVariants({ level: props.level, ...rest })}>{children}</h1>
      break
    case "h2":
      return () => <h2 className={headerVariants({ level: props.level, ...rest })}>{children}</h2>
      break
    case "h3":
      return () => <h3 className={headerVariants({ level: props.level, ...rest })}>{children}</h3>
      break
    case "h4":
      return () => <h4 className={headerVariants({ level: props.level, ...rest })}>{children}</h4>
      break
    default:
      return () => <h2 className={headerVariants({ level: props.level, ...rest })}> {children}</h2>
      break
  }
}

export { Header, headerVariants }
