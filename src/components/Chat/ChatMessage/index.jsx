import {
  Container,
  UserImage,
  MessageInfo,
  MessageHeader,
  Message,
} from "./styled";

//TODO:Informations shold come from the backend.
//TODO:If there are no images place default image
const ChatMessage = ({ user, userImg, timestamp, message }) => {
  return (
    <Container>
      <UserImage src={userImg} />
      <MessageInfo>
        <MessageHeader>
          <h3>{user.name}</h3>
          <span>{timestamp}</span>
        </MessageHeader>
        <Message>{message}</Message>
      </MessageInfo>
    </Container>
  );
};

export default ChatMessage;
