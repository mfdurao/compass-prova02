import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  flex-direction: column;
  width: 700px;
  height: 800px;
  background: ${props => props.theme.colors.postBackground};
  border: 3px dashed${props => props.theme.colors.postBorder};
  border-radius: 5px;
  z-index: 1;
`;

export const FormTitle = styled.h2`
  align-self: center;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 10px;
  width: 500px;
  border-bottom: 2px dashed ${props => props.theme.colors.postBorder};
`;

export const FormLabel =  styled.label`
  font-size: 20px;
  padding: 10px 0px;

  ::before{
    content: "*";
    color: red;
    font-size: 20px;
  }
`;

export const InputText = styled.input`
  border: 1px solid var(--grey-medium);
  background:${props => props.theme.colors.inputBackground}; 
  height: 35px;
  width: 500px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  outline: 0;

  :hover{
    border: 1px solid var(--blue);
  }

  :focus{
    box-shadow: 0px 0px 10px var(--blue-light);
  }
  ::placeholder{
    color: ${props => props.theme.colors.postBorderSecondary};
  }
`;

export const FormTextArea = styled.textarea`
  border: 1px solid var(--grey-medium);
  height: 150px;
  background:${props => props.theme.colors.inputBackground}; 
  width: 600px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  outline: 0;

  :hover{
    border: 1px solid var(--blue);
  }

  :focus{
    box-shadow: 0px 0px 10px var(--blue-light);
  }
  ::placeholder{
    color: ${props => props.theme.colors.postBorderSecondary};
  }
`;

export const FormSelect = styled.select`
  border: 1px solid var(--grey-medium);
  height: 40px;
  width: 250px;
  margin-left: 10px;
  background:${props => props.theme.colors.inputBackground}; 
  padding: 10px;
  text-transform: capitalize;
  border-radius: 5px;
  outline: 0;

  :hover{
    border: 1px solid var(--blue);
  }

  :focus{
    box-shadow: 0px 0px 10px var(--blue-light);
  }
  
`;

export const FormOptions = styled.option`
  background: var(--white);
  :hover{
    background: var(--blue-light);
  }
`;

export const SubmitBtn = styled.button`
  padding: 10px;
  margin-top: 40px;
  width: 100px;
  border: none;
  box-shadow: 0px 0px 5px var(--grey-heavy);
  cursor: pointer;
  border-radius: 5px;
  background: var(--grey-lighter);
  align-self: center;
  font-size: 18px;

  transition: all 0.4s;

  :hover{
    background: var(--orange);
    box-shadow: 0px 0px 15px var(--grey-medium);
  }
`;
