import { StyledList, StyledListLink } from "./Atom";
import Switch from "react-switch";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import data from "./data";
import { useState } from "react";
const List = () => {
  const [darkMode, setdarkMode] = useState(false);
  const handleChange = () => {
    setdarkMode(!darkMode);
  };
  return (
    <StyledList>
      {data.map((el, ind) => (
        <Link key={ind} href="#">
          <StyledListLink>
            {el.icon}
            {el.label}
          </StyledListLink>
        </Link>
      ))}

      <div style={{ marginTop: 8 }}>
        <StyledListLink onClick={handleChange}>
          <FiMoon />
          Dark mode
          <div className="mode">
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={handleChange}
              checked={darkMode}
              height={18}
              width={42}
              handleDiameter={22}
              offHandleColor="#fff"
              onHandleColor="#f14472"
              onColor="#94a6b8"
              offColor="#94a6b8"
              boxShadow="0 1px 5px 0 rgb(0 0 0 / 60%)"
            />
          </div>
        </StyledListLink>
      </div>
    </StyledList>
  );
};

export default List;
