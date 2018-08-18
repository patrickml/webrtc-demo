import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import startVideoStream from 'webrtc/user-media';
import Video from 'Components/Video';

class App extends Component {
  state = {
    stream: null,
  };

   startVideo = async () => {
    try {
      const stream = await startVideoStream({ audio: false, video: { facingMode: "user" } });
      this.setState({
        stream,
      });
    } catch(e) {
      alert(e);
    }
  };

  async componentDidMount() {
      
  }

  render() {
    return (
      <div className="App">
        <Video src={this.state.stream && this.state.stream.getVideoTracks()} style={{ width: '500px', height: '500px', background: 'black', maxWidth: '100%' }} autoplay={false} controls />
        <button onClick={this.startVideo}>Start Video</button>
      </div>
    );
  }
}

export default App;
