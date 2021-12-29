import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  background: ${props => props.theme.colors.background};
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
  min-height: 100vh;
  
  transition: all 0.4s;

  .wave{
    position: absolute;
    bottom: 0;
  }
`;