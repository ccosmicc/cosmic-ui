import { useSelector } from "react-redux";
import { StarOutline, InfoOutlined } from "@mui/icons-material/";
import { Tooltip, Avatar, Badge } from "@mui/material";

import {
  Container,
  ChatHeader,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
  MessagesContainer,
  StyledBadge,
} from "./styled";

const Chat = ({ chatType }) => {
  const headerTitle = useSelector((state) =>
    chatType === "direct-message" ? state.message.user.name : state.room.name
  );

  return (
    <Container>
      <ChatHeader>
        <HeaderLeft chatType={chatType}>
          {chatType && chatType === "direct-message" ? (
            <>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt={headerTitle}
                  src="./cosmic-logo.png"
                  sx={{ width: 24, height: 24 }}
                />
              </StyledBadge>
              <HeaderTitle>{headerTitle}</HeaderTitle>
            </>
          ) : (
            <>
              <HeaderTitle>#{headerTitle}</HeaderTitle>
              <StarOutline />
            </>
          )}
        </HeaderLeft>
        <HeaderRight>
          <Tooltip disableFocusListener disableTouchListener title="Details">
            <InfoOutlined />
          </Tooltip>
        </HeaderRight>
      </ChatHeader>
      <MessagesContainer>
        {/* <ChatBox/> */}
        <h1>hey there</h1>
      </MessagesContainer>
    </Container>
  );
};

export default Chat;
