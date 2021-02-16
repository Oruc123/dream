import Box from "components/elements/Box";
import Ul from "components/elements/Ul";
import AccauntFollow from "./AccauntFollow";

const AccauntsList = () => {
  return (
    <Box marginY={0.5}>
      <Ul>
        <AccauntFollow />
        <AccauntFollow />
        <AccauntFollow />
        <AccauntFollow />
        <AccauntFollow />
      </Ul>
    </Box>
  );
};

export default AccauntsList;
