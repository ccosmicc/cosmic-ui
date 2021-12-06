import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronRightOutlined } from "@mui/icons-material";
import AccordionItem from "./AccordionItem";
import AccordionAction from "./AccordionAction";

import {
  StyledAccordion,
  StyledAccordionSummary,
  AccordionTitle,
} from "./styled";

//TODO: Option data will came from backend. (names)
const SidebarAccordion = ({ title, type, data }) => {
  return (
    <StyledAccordion elevation={0} disableGutters>
      <StyledAccordionSummary
        expandIcon={
          <ChevronRightOutlined style={{ color: "white" }} fontSize="small" />
        }
      >
        <AccordionTitle>{title}</AccordionTitle>
      </StyledAccordionSummary>
      <AccordionDetails>
        <AccordionItem type={type} name="lorem" />
        <AccordionItem type={type} name="ipsum" />
        <AccordionItem type={type} name="lorem" />
      </AccordionDetails>
      <AccordionAction type={type} />
    </StyledAccordion>
  );
};

export default SidebarAccordion;
