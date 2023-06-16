import styled from 'styled-components';

function ConfirmationMessage({ status, children }) {
  return (
    <Wrapper
      style={{
        '--main-color': status === 'success'
          ? 'green'
          : 'red'
      }}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.p`
  font-weight: 500;
  background: white;
  padding: 32px;
  border-radius: 2px;
  color: var(--main-color);

  @media (min-width: 500px) {
    border-left: 2px solid var(--main-color);
  }
`;

const App = () => (
  <ConfirmationMessage status="error">
    Something has exploded
  </ConfirmationMessage>
);

export default App;