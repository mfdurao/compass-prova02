import styled from "styled-components";

export const Container404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const NotFoundImg = styled.div`
  margin-top: 20px;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  box-shadow: 7px 0px 32px #ff5500;
  background: var(--black);
  overflow: hidden;
  position: relative;
`;

export const AstronautImg = styled.img`
  position: absolute;
  top: 150px;
  left: 150px;
  height: 200px;
  width: 200px;
  animation: rotateAstronaut 100s cubic-bezier(1, 1, 1, 1) 0.1s infinite;
  filter: invert(90%) drop-shadow(0px 0px 3px var(--black));
  z-index: 1;

  @keyframes rotateAstronaut {
    0% {
      transform: rotate(-360deg);
    }
  }
`;

export const StarsImg = styled.img`
  height: 500px;
  filter: invert(100%) drop-shadow(0px 0px 3px var(--white));
  width: 500px;
  position: absolute;
  top: 0px;

  animation: rotateImg 120s cubic-bezier(1, 1, 1, 1) 0.1s infinite;

  @keyframes rotateImg {
    0% {
      transform: rotate(360deg);
    }
  }
`;

export const NotFoundDescription = styled.p`
  margin: 25px;
  z-index: 1;
  font-size: 25px;
  text-align: center;
  width: 500px;
  color: ${props => props.theme.colors.text};
  text-shadow: 0px 0px 1px var(--black);
`;
