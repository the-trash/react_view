requirejs.config({
  baseUrl: '/',
  urlArgs: 'nocache=' + Math.random(),
  paths: {
    'react': 'react.min',
    'react-dom': 'react-dom.min'
  }
})

// requirejs(['react', 'react-dom'], function (React, ReactDOM) {
//   console.log(React);
//   console.log(ReactDOM);
// })

// window.addEventListener('load', function(){
//   console.warn('Win on Load')
// });

requirejs(['hello_world'])
