import React, { Component } from 'react';
import { Modal, Radio } from 'antd';
import { PlayCircle } from 'styled-icons/feather/PlayCircle';
import { Tab, MusicContainer, Letters } from './styles/MusicSection';
import { NavigatorConsumer } from '../context/NavigatorContext';

/* eslint-disable */
const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const RadioGroup = Radio.Group;

class VideoclipList extends Component {
  state = {
    modal: false,
    value: 'normal',
    music: null
  };

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  addVideo = (fn) => {
    fn({...this.state.music, option: this.state.value});
    this.setState({ modal: false });
  }


  render() {
    const { videoclips, onAddVideo } = this.props;
    return (
      <NavigatorConsumer>
        {context => (
          <div style={{ marginBottom: '1em', padding: '0 1em' }}>
            <Tab>
              <div>Canciones</div>
              <div>Nuevos</div>
              <div>
                <span role="img" aria-label="fire">
                  🔥
                </span>
              </div>
            </Tab>
            <MusicContainer>
              <div style={{ flex: '1', paddingRight: '1em' }}>
                {videoclips.map(music => (
                  <div
                    className="musica"
                    key={music.id}
                  >
                    <div onClick={() => context.preview(music)}>
                      <div>{music.author}</div>
                      <div>{music.name}</div>
                    </div>
                    <PlayCircle style={{ minWidth: '22px', color: '#fff' }} onClick={ () => this.setState({music, modal: true }) }/>
                  </div>
                ))}
              </div>
              <Letters>
                {letters.map(item => (
                  <div key={item}>{item}</div>
                ))}
              </Letters>
            </MusicContainer>
            <Modal
              title="Elija su opcion de video"
              centered
              visible={this.state.modal}
              onOk={() => this.addVideo(context.add)}
              onCancel={() => this.setState({ modal: false })}
            >
              <RadioGroup onChange={this.onChange} value={this.state.value}  buttonStyle="solid">
                <Radio value={'normal'}>Normal</Radio>
                <Radio value={'vip'}>Vip</Radio>
              </RadioGroup>
            </Modal>
          </div>
        )}
      </NavigatorConsumer>
    );
  }
}

export default VideoclipList;
