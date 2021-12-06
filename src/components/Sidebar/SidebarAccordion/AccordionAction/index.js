import { ItemWrapper, SubTitle } from "../styled";
import { Add } from "@mui/icons-material/";

/* Sidebar Accordion Action is for adding dm and channels  */

//TODO: According to the type, change the onClick method the title.
const AccordionAction = ({ type }) => (
  <ItemWrapper style={{ padding: "5px 10px" }}>
    <Add />
    {type && (
      <SubTitle>
        {type === "direct-message" ? "Add Direct Messages" : "Add Channels"}
      </SubTitle>
    )}
  </ItemWrapper>
);

export default AccordionAction;
