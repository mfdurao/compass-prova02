import React from "react";

import { Container } from "../style";
import Astronaut from "../../images/404pageimg.svg";
import Stars from "../../images/stars.svg";
import {
  AstronautImg,
  Container404,
  NotFoundDescription,
  NotFoundImg,
  StarsImg,
} from "./style";

const Page404 = () => (
  <Container>
    <Container404>
      <NotFoundDescription>Ops, página não encontrada.</NotFoundDescription>
      <NotFoundImg>
        <AstronautImg src={Astronaut} alt="Página não encontrada" />
        <StarsImg src={Stars} alt="Background Stars" />
      </NotFoundImg>
      <NotFoundDescription>
        Volte para a Home ou acesse alguma categoria para continuar.
      </NotFoundDescription>
    </Container404>
  </Container>
);

export default Page404;
