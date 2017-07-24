class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.toWhat}</h1>;
  }
}

window.addEventListener('load', function(){
  ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('hello_world_element')
  );
});
