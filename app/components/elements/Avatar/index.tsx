import Link from "next/link";
import { StyledAvatar } from "./Atom";
interface IButton {
  name: string;
  img?: boolean;
  size: number;
  noLink?: boolean;
  path: string;
}

const Avatar: React.FC<IButton> = ({ name, img, size, noLink, path }) => {
  if (noLink) {
    return (
      <StyledAvatar size={size}>
        {img ? <img alt="Avatar" src="/av.jpg" /> : name[0]}
      </StyledAvatar>
    );
  }
  return (
    <Link href={path}>
      <a>
        <StyledAvatar size={size}>
          {img ? <img alt="Avatar" src="/av.jpg" /> : name[0]}
        </StyledAvatar>
      </a>
    </Link>
  );
};
export default Avatar;
