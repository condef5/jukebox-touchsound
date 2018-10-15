import styled from 'styled-components';

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1em;
  img {
    width: 40px;
  }
  .credits {
    color: #fff;
    border-radius: 50%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    height: 100px;
    width: 100px;
    align-items: center;
    border: 3px solid #fff;

    -webkit-text-stroke: 1px #ef1a1c;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 4px #ef1a1cad, -1px -1px 4px #ef1a1cad;
    div:first-child {
      font-size: 15px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-top: 10px;
    }
    div:last-child {
      font-size: 35px;
      letter-spacing: 2px;
    }
  }
`;

export default Controls;
