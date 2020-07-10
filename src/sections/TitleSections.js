import React, { Component } from 'react';
import data from '../data.json'
import { SocialIcon } from 'react-social-icons';
import './TitleSections.css'
import Fullpage from '../components/Fullpage'
import DownIcon from '../components/Downicon'
import { Link, Element} from 'react-scroll'

class TitleSections extends Component {
  constructor() {
    super()
    this.state = {
      color: 'white',
    }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor = () => {
    this.setState({
      color: this.state.color === 'white' ? 'yellow' : 'white'
    })
  }

  render() {
    let background = this.state ? this.state.background : 'blue'
    return (
      <div>
        <Fullpage className="first" background = {background} >
          <h1 className="title"
            style={{
              color: this.state.color,
              zIndex: 1000,
            }}
            onMouseOver={this.changeColor}

            onMouseLeave={this.changeColor}
          >
            {data.title}
          </h1>
          <h2>
            {data.subtitle}
          </h2>
          <div className="icons-wrapper">
            {
              Object.keys(data.links).map(icons => {
                return (
                  <SocialIcon url={data.links[icons]} className="icon" />
                )
              })
            }
          </div>
        </Fullpage>
       <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
        <DownIcon
          icon={data.icons.down}
        />
           </Link>
        <Element name="about" className="element">
        </Element>
      </div>
    )
  }
}

export default TitleSections