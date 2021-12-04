import {
  FiberManualRecord,
  CreateOutlined,
  ExpandMoreOutlined,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import SidebarOption from "./SidebarOption";
import Options from "./SidebarOption/optionsData";

import {
  Container,
  Hr,
  SidebarHeader,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoTextContainer,
  HeaderIcon,
  SidebarOptions,
} from "./styled";

const Sidebar = () => (
  <Container>
    <Hr />
    <SidebarHeader>
      <HeaderInfo>
        <HeaderInfoTitle>Hatice Demir</HeaderInfoTitle>
        {/*TODO: Get the name when user logs in */}
        <HeaderInfoTextContainer>
          <FiberManualRecord />
          active
        </HeaderInfoTextContainer>
      </HeaderInfo>
      <Tooltip disableFocusListener disableTouchListener title="New Message">
        <HeaderIcon>
          <CreateOutlined color="primary" />
        </HeaderIcon>
      </Tooltip>
    </SidebarHeader>
    <Hr />
    <SidebarOptions>
      {Options.map((item) => (
        <SidebarOption Icon={item.Icon} title={item.title} />
      ))}
    </SidebarOptions>
    <Hr />
  </Container>
);

export default Sidebar;
