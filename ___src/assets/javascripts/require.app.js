window.reactVersion = '15.6.1'
window.noCache = 'nocache=' + /* @echo NOCACHE_STAMP */

requirejs.config({
  baseUrl: '/',
  paths: {
    'redux': 'redux.min.js?v' + reactVersion,
    'react': 'react.min.js?v' + reactVersion,
    'react-dom': 'react-dom.min.js?v' + reactVersion,
  }
})

requirejs(['hello_world.js?' + noCache])
