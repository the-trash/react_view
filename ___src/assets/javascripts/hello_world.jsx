requirejs(['react', 'react-dom'], function(React, ReactDOM){

  class Hello extends React.Component {
    render() {
      return <h1>Hello {this.props.toWhat}</h1>;
    }
  }

  class App extends React.Component {
    render() {
      return(
        <div>
          <Hello toWhat={"World 1 " + (new Date).getTime()} />
          <Hello toWhat={"World 2 " + (new Date).getTime()} />
          <Hello toWhat={"World 3 " + (new Date).getTime()} />
        </div>
      );
    }
  }

  setInterval(() => {
    console.log('reRender')

    ReactDOM.render(
      <App />,
      document.getElementById('hello_world_element')
    );
  }, 1000)

})
