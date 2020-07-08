import React, {Component} from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'nodeJs',
      'reactJs',
      'react native'
    ]
  }

  renderInput = e => {
    this.setState({newTech: e.target.value})
  }

  renderSubmit = e => {
    e.preventDefault()

    this.setState({techs: [...this.state.techs, this.state.newTech]})
  }

  renderDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech)})
  }

  
  render() {
    return( 
      <>
        <form onSubmit={this.renderSubmit}>
          <ul>
          {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.renderDelete(tech)} 
            />)}
          </ul>
          <input type="text" onChange={ this.renderInput } value={ this.state.newTech }/>
          <button type="submit">Enviado</button>
        </form>
        
      </>
    );
  }
}

export default TechList