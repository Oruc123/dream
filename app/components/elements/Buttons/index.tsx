import Link from "next/link";
import {
  StyledIconButton,
  StyledThinckButton,
  StyledFollowDefaultButton,
  StyledFollowPrimaryButton,
} from "./Atom";

interface IButton {
  label: string | React.ReactNode;
  handleClik?: () => void;
  active?: boolean;
}

export const IconButton: React.FC<IButton> = ({ label, handleClik }) => {
  return <StyledIconButton onClick={handleClik}>{label}</StyledIconButton>;
};

interface IThinkButton extends IButton {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
export const ThinkButton: React.FC<IThinkButton> = ({
  label,
  handleClik,
  startIcon,
  endIcon,
  active,
}) => {
  return (
    <StyledThinckButton onClick={handleClik} as="button">
      {startIcon && <span className="start-icon">{startIcon}</span>}
      {label}
      {endIcon && <span className="end-icon">{endIcon}</span>}
    </StyledThinckButton>
  );
};
interface IFollowbutton extends IButton {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "primary";
}
export const FollowButton: React.FC<IFollowbutton> = ({
  label,
  variant = "default",
}) => {
  if (variant === "primary") {
    return (
      <Link href="/">
        <StyledFollowPrimaryButton href="/">{label}</StyledFollowPrimaryButton>
      </Link>
    );
  }

  return (
    <Link href="/">
      <StyledFollowDefaultButton href="/">{label}</StyledFollowDefaultButton>
    </Link>
  );
};
