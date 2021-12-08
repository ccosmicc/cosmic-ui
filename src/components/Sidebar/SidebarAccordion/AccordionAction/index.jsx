import { ItemWrapper, SubTitle } from "../styled";
import { Add } from "@mui/icons-material/";

/* Sidebar Accordion Action is for adding dm and channels  */

//TODO: According to the type, change the onClick method the title.
const AccordionAction = ({ type }) => {
  //TODO: Message functionality(MUI dialog maybe) after installling elixr
  const addMesssage = () => {
    console.log("message add");
  };
  const addRoom = () => {
    console.log("room add");
  };

  return (
    <ItemWrapper
      style={{ padding: "5px 10px" }}
      onClick={type === "direct-message" ? addMesssage : addRoom}
    >
      <Add />
      <SubTitle>
        {type === "direct-message" ? "Add Direct Messages" : "Add Rooms"}
      </SubTitle>
    </ItemWrapper>
  );
};

export default AccordionAction;
