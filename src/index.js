import React from 'react';
import { render } from 'react-dom';
import Video from './Video';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

// const App = () => (
//   <div style={styles}>
//     <Hello embedId='j38ihh83m5' />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// )

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: false
    }
  }
  play () {
    this.setState({
      video: !this.state.video
    })
  }
  render () {
    return (
      <div style={styles}>
        {
          this.state.video &&
          <Video embedId='j38ihh83m5' />
        }
        <button onClick={() => this.play()}>play-stop-cta</button>
      </div>
    
    )
  }
}

render(<App />, document.getElementById('root'));
