import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/CapitalCard/Card'
import capitals from './capitals.json'
import './main.css'

class App extends Component {
  state = {
    title: "Memory Game",
    capitals,
    currentScore: 0,
    highScore: 0
   }

  // End Game Function
  endGame = () => {
    alert(`Game Over
    You scored ${this.state.currentScore}`)
    if (this.state.currentScore > this.state.highScore) {
      this.setState({highScore: this.state.currentScore}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.capitals.forEach(capital => {
      capital.count = 0;
    });
    // console.log(`Game Over :( \nscore: ${this.state.currentScore}`);
    this.setState({currentScore: 0});
    // console.log(`Game Over :( \nscore: ${this.state.currentScore}`);
    return true;

  }

  // Checks for previous Guesses
  clickCount = id => {
    this.state.capitals.find((foundCapital, index) => {
      if (foundCapital.id === id){

        if (capitals[index].count === 0){
          // console.log(this.state.capitals[index].count)
          capitals[index].count = this.state.capitals[index].count + 1;
          // Increase Score + 1
          this.setState({currentScore : this.state.currentScore + 1}, function(){
            console.log(`currentScore: ${this.state.currentScore}`);

            if (this.state.currentScore === this.state.capitals.length){
              this.endGame();
            }
          });
        }
        else{

          this.endGame()
        }
        this.shuffleArray()
        return true;
      }
      return null;
    });
  }

  // Function to shuffle the Array
  shuffleArray = () => {
    const array = this.state.capitals
    for (let i = 0; i<this.state.capitals.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // Set State
    this.setState({capitals: array})
  }

  render() { 
    return (
      <div className = "mb-custom">
        {/* Header (passing current score and high score) */}
        <Header
          title={this.state.title}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <div className='container mt-3 pb-8 maxWidth400'>
          <div className = 'row border border-dark'>
            {this.state.capitals.map(capital =>(
              <Card
                clickCount={this.clickCount}
                key={capital.id} 
                id={capital.id} 
                imageURL={capital.imageURL}
                name={capital.name}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default App;