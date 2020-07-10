import React, {Component} from 'react';
import data from '../data.json'
import { SocialIcon } from 'react-social-icons';
import Fullpage from '../components/Fullpage'

class AboutSection extends Component{
    render(){
      let background = this.state ? this.state.background : 'orange'

        return(
            <Fullpage className="second" background = {background}>
            <h1>
             {data.sections[0].title}
           </h1>

            <div className="paragraphs">
              {data.sections[0].items.map(p => {
                return <p>{p.content}</p>;
              })}
            </div>
            </Fullpage>
        )
    }
}

export default AboutSection