import React, {Component} from 'react';

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
  
  render() {
    return( 
      <>
        <form onSubmit={this.renderSubmit}>
          <ul>
            { this.state.techs.map(tech => <li key={ tech }>{ tech }</li>) }
          </ul>
          <input type="text" onChange={ this.renderInput } value={ this.state.newTech }/>
          <button type="submit">Enviado</button>
        </form>
        
      </>
    );
  }
}

export default TechList