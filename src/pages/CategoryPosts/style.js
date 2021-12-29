import styled from "styled-components";

export const BreadCrumb = styled.span`
  color: ${props => props.theme.colors.breadcrumb};
  padding-left: 40px;
  width: 100%;
  text-align: start;
  text-shadow: 0px 0px 2px ${props => props.theme.colors.breadcrumbShadow};
`;
