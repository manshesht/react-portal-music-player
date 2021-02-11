import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageOne from './PageOne'; // Main pages
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import MusicPlayer from './MusicPlayer'; //importing music player portal
import './index.css'; //styling

/**
 * Main class render
 */
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.audio = new Audio('/Gold_On_The_Ceiling.mp3');
    }

    componentDidMount() {
        this.pause();
    }

    play = () => {
        this.setState({ play: true, pause: false })
          this.audio.play();
    }
        
    pause = () => {
        this.setState({ play: false, pause: true })
          this.audio.pause();
    }

    render() {
        return (
            <div>
                <MusicPlayer parentState={this.state.play} playMusic={this.play} pauseMusic={this.pause} />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={PageOne}/>
                        <Route path='/pg2' component={PageTwo}/>
                        <Route path='/pg3' component={PageThree}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);


registerServiceWorker();
