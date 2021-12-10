import styled from "styled-components";

const Container = styled.div`
  background-color: var(--cosmic-primary-color);
  margin-top: 60px;
  color: #faf9fa;
  height: 100vh;
  flex: 0.25;
`;

/* To seperate sections in the header */
const Hr = styled.hr`
  background-color: #5dadec;
  height: 1px;
  border: none;
`;

/* Header includes HeaderInfo and HeaderIcon */
const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 5px 10px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px;
  margin-right: auto;
`;

const HeaderInfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const HeaderInfoTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  /* we can style MuiIcon using root class*/
  > .MuiSvgIcon-root {
    color: var(--cosmic-active-color);
    margin-right: "5px";
  }
`;

const HeaderIcon = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const BodyWrapper = styled.div``;
const SidebarOptions = styled.div`
  padding: 10px;
`;

export {
  Container,
  Hr,
  SidebarHeader,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoTextContainer,
  HeaderIcon,
  BodyWrapper,
  SidebarOptions,
};
