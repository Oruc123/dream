import Link from "next/link";
import { StyledLink, StyledViewAllLink } from "./Atom";
export type Size = "small" | "medium" | "large";

interface ILink {
  label: string | React.ReactNode;
  path: string;
  size?: Size;
  padding?: boolean;
  bold?: boolean;
}

const CustomLink: React.FC<ILink> = ({
  label,
  path,
  size = "small",
  padding = false,
  bold,
}) => {
  return (
    <Link href={path}>
      <StyledLink href={path} bold={bold} padding={padding} size={size}>
        {label}
      </StyledLink>
    </Link>
  );
};

export const ViewAllLink: React.FC<ILink> = ({ path, label }) => {
  return (
    <Link href={path}>
      <StyledViewAllLink href={path}>{label}</StyledViewAllLink>
    </Link>
  );
};

export default CustomLink;
