function getByID(id){ return document.getElementById(id) }

requirejs(['react', 'react-dom'], function(React, ReactDOM){
  class Hello extends React.Component {
    constructor(props) {
      super(props)
      this.state = {date: new Date()}
    }

    componentDidMount() {
      this.timerID = setInterval(() => {
        console.log('reRender')
        this.tick()
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }

    tick() {
      this.setState({
        date: new Date()
      })
    }

    render() {
      return(
        <h1>
          Hello
          {this.props.toWhat} {this.state.date.toLocaleTimeString()}
        </h1>
      );
    }
  }

  class App extends React.Component {
    render() {
      return(
        <div>
          <Hello toWhat="World 1" />
          <Hello toWhat="World 2" />
          <Hello toWhat="World 3" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, getByID('hello_world_element'));
})
