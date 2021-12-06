import { ItemWrapper, SubTitle } from "../styled";
import { Avatar } from "@mui/material";

/* Sidebar Accordion Item is reusable component */

//TODO: Image prop should take image from the backend render it properly.
const AccordionItem = ({ name, type, image }) => (
  <ItemWrapper>
    {type && type === "direct-message" ? (
      <Avatar
        alt="Avatar"
        src="/cosmic-logo.png"
        sx={{ width: 24, height: 24 }}
        z
      />
    ) : (
      <span>#</span>
    )}
    <SubTitle>{name}</SubTitle>
  </ItemWrapper>
);

export default AccordionItem;
