import React from 'react';
import { Component } from 'react';
import './App.css';
import AddList from './component/AddList';
import ReadList from './component/ReadList';

class App extends Component {
  componentDidMount(){
    document.title = "YounCalendar"
  }
  render() {
    return (      
      <div className = "mainpage">
        <div className = "mainbar">          
          <a href = "/" className = "logo">
            <div className = "logtext">YYSchedule
              
            </div>            
          </a>
        </div>
        <div className = "board">          
          <ReadList></ReadList>
          <AddList></AddList>
        </div>          
      </div>
    );
  }
}

export default App;
