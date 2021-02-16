import React from "react";
import Box from "components/elements/Box";
import { ThinkButton } from "components/elements/Buttons";
import { FiRotateCcw } from "react-icons/fi";
import AccauntsList from "./AccauntsList";
import { ViewAllLink } from "components/elements/Link";
const Sugested = () => {
  return (
    <Box marginY={2}>
      <Box display="flex">
        <h3>Suggested Profiles</h3>
        <ThinkButton startIcon={<FiRotateCcw />} label="Refresh" />
      </Box>
      <AccauntsList />
      <ViewAllLink path="#" label="View All" />
    </Box>
  );
};

export default Sugested;
