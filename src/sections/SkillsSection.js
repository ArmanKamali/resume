import React, { Component } from 'react';
import data from '../data.json'
import { SocialIcon } from 'react-social-icons';
import './skillsection.css'
import Fullpage from '../components/Fullpage'
import SkillCard from '../components/SkillCard'
class SkillsSection extends Component {
  render() {
    let background = this.state ? this.state.background : 'grey'
    return (
      <Fullpage className="third" background = {background}>
        <h1>
          {data.sections[1].title}
        </h1>
        <div className="card-wrapper">
          {
            data.sections[1].items.map(eachskill => {
              return (
               <SkillCard skill={eachskill}/>
              )
            })
          }
        </div>
      </Fullpage>
    )
  }
}

export default SkillsSection