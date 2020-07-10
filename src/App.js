import React, { Component } from 'react';
import data from './data.json'
import logo from './logo.svg';
import './App.css';
import TitleSections from './sections/TitleSections'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import Particle from './components/Particle'
import UpIcon from './components/UpIcon'
import { Link, Element } from 'react-scroll'



class App extends Component {
  constructor(props) {
    super(props)
    this.particleRef = React.createRef()
    this.titleRef = React.createRef()
    this.aboutRef = React.createRef()
    this.skillRef = React.createRef()
    this.state = {
      about_color: 'white',
      skill_color: 'white'
    }
  }
  changebackground = (element) => {
    const min = 0
    const max = 255
    const r = parseInt(min + Math.random() * (max - min))
    const g = parseInt(min + Math.random() * (max - min))
    const b = parseInt(min + Math.random() * (max - min))
    const node = element.current
    node.setState({ background: `rgb(${r},${g},${b})` })
  }


  changeColor = (name) => {
    if (name == "about")
      this.setState({
        about_color: this.state.about_color === 'white' ? 'yellow' : 'white'
      })
    else if (name == "skill")
      this.setState({
        skill_color: this.state.skill_color === 'white' ? 'yellow' : 'white'
      })
  }

  render() {
    let i = 1
    let styles = data.particles
    let style = "circle"


    return (

      <div className="App">

        <div className="navigation">
          <div
            onClick={() => {
              i = i < styles.length ? i : 0
              style = styles[i++]
              const node = this.particleRef.current
              node.setState({ particle: style })
            }}
          >
            <img src={data.icons.bubble} />
          </div>
          <div
            onClick={() => {
              this.changebackground(this.titleRef)
              this.changebackground(this.aboutRef)
              this.changebackground(this.skillRef)
            }}
          >
            <img src={data.icons.magic} />
          </div>
          <div className="push"
            onMouseOver={() => {
              this.changeColor("about")
            }}
            onMouseLeave={() => {
              this.changeColor("about")
            }}


            style={{
              color: this.state.about_color
            }}

          >
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
              About
          </Link>
          </div>
          <div
            onMouseOver={() => {
              this.changeColor("skill")
            }}
            onMouseLeave={() => {
              this.changeColor("skill")
            }}

            style={{
              color: this.state.skill_color
            }}>
            <Link activeClass="active" to="skill" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
              Skill
            </Link>
            </div>
        </div>

        <Particle id="particle" setState="circle" ref={this.particleRef} />
        <Element name="top" className="element">
        </Element>
        <TitleSections ref={this.titleRef} />
        <Element name="about" className="element">
        </Element>
        <AboutSection ref={this.aboutRef} />
        <Element name="skill" className="element">
        <Link activeClass="active" to="top" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
        <UpIcon
          icon={data.icons.up}
        />
        </Link>
        </Element>
        <SkillsSection ref={this.skillRef} />
        <Link activeClass="active" to="top" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
        <UpIcon
          icon={data.icons.up}
        />
        </Link>
      </div>
    );
  }
}

export default App;
