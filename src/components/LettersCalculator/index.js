// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">
            Calculate the
            <br />
            letters you
            <br /> enter
          </h1>
          <label className="description" htmlFor="searchInput">
            Enter the phrase
          </label>
          <input
            type="text"
            onChange={this.onChangeSearchInput}
            className="inputele"
            id="searchInput"
            value={searchInput}
            placeholder="Enter the phrase"
          />
          <p className="searchInput">No.of letters: {searchInput.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="w-25"
        />
      </div>
    )
  }
}
export default LettersCalculator
