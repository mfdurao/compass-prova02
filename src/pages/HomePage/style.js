import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height:500px;
  width: 100%;
  margin-bottom: 20px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 105px;
  width: 860px;
  height: 250px;
  box-shadow: 0px 0px 5px var(--grey-heavy);
  padding: 15px;
  z-index: 1;
  border-radius: 5px;
  border: 2px dashed ${(props) => props.theme.colors.infoBorder};
  background: ${(props)=> props.theme.colors.infoBackground};
`;

export const InfoTitle = styled.h2`
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px dashed ${props => props.theme.colors.postBorder};
`;

export const InfoParagraph = styled.p`
  padding: 20px;
`;

export const ImgLogo = styled.img`
  height: 45px;
  border-radius: 50%;
  background: var(--grey-heavy);
  animation: rotateImg 10s cubic-bezier(0, 0, 0, 0) 0.1s infinite;

  @keyframes rotateImg {
    0% {
      transform: rotate(360deg);
    }
  }
`;
