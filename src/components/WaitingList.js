import React from 'react';
import StyleContain from './styles/WaitingList';
import { NavigatorConsumer } from '../context/NavigatorContext';

const WaitingList = () => (
  <NavigatorConsumer>
    {context => (
      <StyleContain>
        <header>Lista de espera</header>
        <div className="list">
          {context.state.videos.map(video => (
            <div className="row" key={video.time}>
              <h4>{video.author}</h4>
              <p>{video.name}</p>
            </div>
          ))}
        </div>
      </StyleContain>
    )}
  </NavigatorConsumer>
);

export default WaitingList;
