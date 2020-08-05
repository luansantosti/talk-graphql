import React from 'react';
import styled from 'styled-components'
import { space, width } from 'styled-system';

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #e052b1;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={'./img/graphql.png'} width={150} />
      <Title mt={20}>GraphQL</Title>
      <Subtitle mt={20}>Primeiros passos</Subtitle>
      <MeName mt={100}>Luan Santos</MeName>
    </Center>
  </Root>
);
