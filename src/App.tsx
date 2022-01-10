import React, { Component } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <Header>
          <p>
            Home Work 4
          </p>
        </Header>
      </Root>
    );
  }
}

export default App;
