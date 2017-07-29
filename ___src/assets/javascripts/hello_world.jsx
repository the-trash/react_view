requirejs(['react', 'react-dom'], function(React, ReactDOM){

  class Hello extends React.Component {
    render() {
      return <h1>Hello {this.props.toWhat}</h1>;
    }
  }

  setInterval(() => {
    console.log('reRender')

    ReactDOM.render(
      <Hello toWhat={"World " + (new Date).getTime()} />,
      document.getElementById('hello_world_element')
    );
  }, 1000)

})
