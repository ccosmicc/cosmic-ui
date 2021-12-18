import { useSelector } from "react-redux";
import { StarOutline, InfoOutlined } from "@mui/icons-material/";
import { Tooltip, Avatar } from "@mui/material";
import ChatInputBox from "./ChatInputBox/";
import ChatMessage from "./ChatMessage/";
import {
  Container,
  Header,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
  ChatMessages,
  StyledBadge,
} from "./styled";

const Chat = ({ chatType }) => {
  const headerTitle = useSelector((state) =>
    chatType === "direct-message" ? state.message.user.name : state.room.name
  );

  const ChatHeader = () => (
    <Header>
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
    </Header>
  );

  return (
    <Container>
      <ChatHeader />
      <ChatMessages>
        {/*TODO:Information should come from backend
         */}
        <ChatMessage
          user={{ name: "cosmic official" }}
          userImg="./cosmic-logo.png"
          timestamp="07/05/2021 20.27 PM"
          message="hey there"
        />
        <ChatMessage
          user={{ name: "cosmic official" }}
          userImg="./cosmic-logo.png"
          timestamp="07/05/2021 20.27 PM"
          message="hey there"
        />
        <ChatMessage
          user={{ name: "cosmic official" }}
          userImg="./cosmic-logo.png"
          timestamp="07/05/2021 20.27 PM"
          message="hey there"
        />
        <ChatMessage
          user={{ name: "cosmic official" }}
          userImg="./cosmic-logo.png"
          timestamp="07/05/2021 20.27 PM"
          message="hey there"
        />
        <ChatMessage
          user={{ name: "cosmic official" }}
          userImg="./cosmic-logo.png"
          timestamp="07/05/2021 20.27 PM"
          message="hey there"
        />
        <ChatMessage
          user={{ name: "cosmic official" }}
          userImg="./cosmic-logo.png"
          timestamp="07/05/2021 20.27 PM"
          message="hey there"
        />
        <ChatInputBox chatType={chatType} />
      </ChatMessages>
    </Container>
  );
};

export default Chat;
