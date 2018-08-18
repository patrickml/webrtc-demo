import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import startVideoStream from 'webrtc/user-media';
import Video from 'Components/Video';

class App extends Component {
  state = {
    streamURL: null,
  };

   startVideo = async () => {
    try {
      const stream = await startVideoStream({ audio: false, video: { facingMode: "user" } });
      this.stream = stream;
      this.video.srcObject = stream;
    } catch(e) {
      alert(e);
      this.setState({
        streamURL: window.URL.createObjectURL(stream),
      });
    }
  };

  async componentDidMount() {
      
  }

  render() {
    return (
      <div className="App">
        <Video 
          src={this.state.streamURL} 
          style={{ width: '500px', height: '500px', background: 'black', maxWidth: '100%' }} 
          playsInline 
          autoPlay 
          ref={(ref) => {
            this.video = ref;
          }}
        />
        <button onClick={this.startVideo}>Start Video</button>
      </div>
    );
  }
}

export default App;
