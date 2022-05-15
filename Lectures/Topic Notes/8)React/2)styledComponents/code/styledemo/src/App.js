import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  const ContentImage = styled.img`
    display: block;
    margin-bottom: 8px;
    width: 100%;
    max-width: var(--max-width);
  `;
  return (
    <>
      <h1>Working</h1>
      <ContentImage
        alt="A running shoe with pink laces and a rainbow decal"
        src="https://www.joshwcomeau.com/images/shoe.png"
        style={{
          '--max-width': '200px',
        }}
      />
      <ContentImage
        alt="A close-up shot of the same running shoe"
        src="https://www.joshwcomeau.com/images/shoe.png"
      />
    </>
   
  );
}

export default App;