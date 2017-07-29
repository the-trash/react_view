window.reactVersion = '15.6.1'
window.noCache = 'nocache=' + Math.random()

requirejs.config({
  baseUrl: '/',
  paths: {
    'react': 'react.min.js?v' + reactVersion,
    'react-dom': 'react-dom.min.js?v' + reactVersion
  }
})

// requirejs(['react', 'react-dom'], function (React, ReactDOM) {
//   console.log(React);
//   console.log(ReactDOM);
// })

// window.addEventListener('load', function(){
//   console.warn('Win on Load')
// });

requirejs(['hello_world.js?' + noCache])
