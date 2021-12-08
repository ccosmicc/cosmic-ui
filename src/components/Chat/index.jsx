import { useSelector } from "react-redux";
import styled from "styled-components";
import { StarOutline, InfoOutlined } from "@mui/icons-material/";
import { Tooltip } from "@mui/material";
const Container = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const ChatHeader = styled.div`
  display: flex;
  height: 52px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;

  > .MuiSvgIcon-root {
    margin-left: 10px;
  }

  &:hover {
    background-color: var(--cosmic-text-hover-color);
    border-radius: 10px;
  }
`;

const RoomName = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

const HeaderRight = styled.div`
  cursor: pointer;
  padding-right: 10px;
`;

const Chat = () => {
  const roomName = useSelector((state) => state.room.name);

  return (
    <Container>
      <ChatHeader>
        <HeaderLeft>
          <RoomName># {roomName}</RoomName>
          <StarOutline />
        </HeaderLeft>
        <HeaderRight>
          <Tooltip
            disableFocusListener
            disableTouchListener
            title="Get room details"
          >
            <InfoOutlined />
          </Tooltip>
        </HeaderRight>
      </ChatHeader>
    </Container>
  );
};

export default Chat;
