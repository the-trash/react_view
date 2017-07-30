function getByID(id){ return document.getElementById(id) }

requirejs(['react', 'react-dom', 'redux'], function(React, ReactDOM, Redux){

  const reducer = (state = { value: 0 }, action) => {
    switch (action.type) {
      case 'PLUS':
        return { value: state.value + 1 }
      case 'MINUS':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

  let store = Redux.createStore(reducer)

  class Hello extends React.Component {
    constructor(props) {
      super(props)
      this.state = store.getState()

      this.minusHandler = this.minusHandler.bind(this)
      this.plusHandler  = this.plusHandler.bind(this)
    }

    minusHandler() {
      store.dispatch({type: 'MINUS'})
      this.setState( store.getState() )
    }

    plusHandler() {
      store.dispatch({type: 'PLUS'})
      this.setState( store.getState() )
    }

    render() {
      return(
        <div>
          <button onClick={this.minusHandler}>MINUS</button>
          <h1>Hello {this.state.value}</h1>
          <button onClick={this.plusHandler}>PLUS</button>
        </div>
      );
    }
  }

  class World extends React.Component {
    constructor(props) {
      super(props)
      this.state = store.getState()
    }

    render() {
      return(
        <div>
          <h1>{this.state.value}</h1>
        </div>
      )
    }
  }

  class App extends React.Component {
    render() {
      return(
        <div>
          <Hello /> <br/> <br/> <World />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, getByID('hello_world_element'));
})
