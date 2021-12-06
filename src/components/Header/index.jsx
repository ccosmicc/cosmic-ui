import { useState } from "react";
import { Badge, Tooltip } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";

import {
  Container,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  SearchIconContainer,
  SearchInput,
  HeaderRight,
} from "./styled";

const Header = () => {
  const [badgeInvisible, setBadgeInvisible] = useState(true);

  return (
    <Container>
      <HeaderLeft>
        <HeaderAvatar
        // TODO: onClick
        // TODO: src: the users' profile picture
        />
        <Tooltip disableFocusListener disableTouchListener title="History">
          <AccessTime />
        </Tooltip>
      </HeaderLeft>
      <HeaderSearch>
        <SearchIconContainer>
          <Search />
        </SearchIconContainer>
        <SearchInput placeholder="✨✨✨ Search the Cosmic  ✨✨✨" />
      </HeaderSearch>
      <HeaderRight>
        <Tooltip disableFocusListener disableTouchListener title="Help">
          <Badge variant="dot" color="secondary" invisible={badgeInvisible}>
            <HelpOutline />
          </Badge>
        </Tooltip>
      </HeaderRight>
    </Container>
  );
};

export default Header;
