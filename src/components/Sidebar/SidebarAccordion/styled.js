import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

const StyledAccordion = styled(Accordion)`
  font-size: 16px;
  font-weight: 500;
  background-color: var(--cosmic-primary-color);
  color: white;
  margin: 0px;
  /*   to remove line above the accordion of MU*/
  &::before {
    display: none;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  margin: 0px;
  padding: 5px;
  flex-direction: row-reverse;
`;

const AccordionTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
`;

export { StyledAccordion, StyledAccordionSummary, AccordionTitle };
