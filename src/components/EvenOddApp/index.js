import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, text: 'Count is Even'}

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    if (randomNum % 2 === 0) {
      this.setState(prevState => ({num: randomNum}))
      this.setState(prevState => ({text: 'Count is Even'}))
    } else {
      this.setState(prevState => ({num: randomNum}))
      this.setState(prevState => ({text: 'Count is Odd'}))
    }
  }

  render() {
    const {num, text} = this.state

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1>
            Count <span>{num}</span>
          </h1>
          <p className="">{text}</p>
          <button className="button" type="submit" onClick={this.onIncrement}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
