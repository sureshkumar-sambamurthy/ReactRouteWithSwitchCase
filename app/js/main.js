import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import About from './component/about';

class App extends React.Component{

  render() {
      var CHILD_COMPONENT;
      switch(this.props.route){
          
          case 'about':
           CHILD_COMPONENT = About;
           break;
          default:
           CHILD_COMPONENT = Home;
      }
      return (
          <div>
            <CHILD_COMPONENT />
          </div>
      );
  }
}
window.addEventListener('hashChange', render);
function render(){
   var route = window.location.hash.substr(1);
   ReactDOM.render(<App route={route} />, document.getElementById("contentBox"));
}

render();