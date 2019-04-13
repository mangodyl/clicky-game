import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Pic from './components/Pics';
import picArray from './Array/picArray';

class App extends Component {
  state = {
    images: picArray,
    score: 0,
    topScore: 0,
    maxScore: 12,
    clickedArray: [],
    message: 'Click each pic once only to win!'
  }

  // Shuffles array of images
  shuffleImg = arr => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr
  }

  // On image click function
  handleOnClick = id => {
    console.log(id);
    let clicked = this.state.clickedArray;
    // Check if clicked
    if (!clicked.includes(id)) {
      clicked.push(id);
      // Check if all images have been clicked
      if(clicked.length === this.state.maxScore) {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.maxScore,
          message: 'You got all of them right! Congratulations!'
        })

        // Else complete regular correct guess logic
      } else {
        this.setState({ 
          images: this.shuffleImg(picArray),
          score: this.state.score + 1,
          clickedArray: clicked,
          message: 'Good guess! Keep going!'
        })
      }
    } else {
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score,
          message: 'You clicked that twice, but you got a hi-score anyway!'
        })
      }
      this.setState({
        score: 0,
        clickedArray: [],
        message: "You've already clicked that one! Game over!"
      })
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Main>
          <div>
            <h2 className="score-header">Score: {this.state.score}</h2>
            <h3 className="score-header">Top Score: {this.state.topScore}</h3>
          </div>
          <div>
            {this.state.images.map(img => {
              return (<Pic
                key={img.id}
                src={img.path}
                name={img.title}
                id={img.id}
                imgClick={() => {this.handleOnClick(img.id)}}
              />
              )
            })}
          </div>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
