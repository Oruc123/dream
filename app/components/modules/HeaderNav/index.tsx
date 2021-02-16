import CustonLink from "components/elements/Link";
import { IconButton } from "components/elements/Buttons";
import { FiMessageSquare, FiBell } from "react-icons/fi";
import { StyledHeaderNav } from "./Atom";
import Avatar from "components/elements/Avatar";
import UserMenu from "../UserMenu";
import { useCallback, useState } from "react";

const HeaderNav = () => {
  const [isOpen, setOpen] = useState(false);
  const clickHandler = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <StyledHeaderNav>
      <li>
        <CustonLink padding path="#" label="Tanışlıq" />
      </li>
      <li>
        <IconButton label={<FiBell />} />
      </li>
      <li>
        <IconButton label={<FiMessageSquare />} />
      </li>
      <li onClick={clickHandler}>
        <Avatar size={32} noLink img name="V" />
        {isOpen && <UserMenu />}
      </li>
    </StyledHeaderNav>
  );
};
export default HeaderNav;
