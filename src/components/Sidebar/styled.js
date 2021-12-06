import styled from "styled-components";

const Container = styled.div`
  background-color: var(--cosmic-primary-color);
  margin-top: 60px;
  color: #faf9fa;
  padding: 10px;
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
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px;
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
    color: green;
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
  margin: 0px 10px 0px 50px;
  cursor: pointer;
`;

const SidebarOptions = styled.div`
  margin: 10px 0px;
`;

export {
  Container,
  Hr,
  SidebarHeader,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoTextContainer,
  HeaderIcon,
  SidebarOptions,
};
