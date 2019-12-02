import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
      pageCount:240
    }
  
    this.wordCount = this.wordCount.bind(this);
    this.addText = this.addText.bind(this);
  }

  addText() {
    let text = this.state.text;
    this.props.setItems(text);
    this.setState({
      text: '',
      pageCount:240
    })
  }

  wordCount(event){
    let characterCount =240- event.target.value.length;
    this.setState({
      pageCount: characterCount,
      text: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <div className='header-content'>
            <div className='textarea-container'>
              <textarea className='textarea' maxLength='240' onChange={this.wordCount} value={this.state.text} placeholder='text here'></textarea>
            </div>
            <div >
              <button className='button' onClick={this.addText}>Add</button>
            </div>
          </div>
          <span className="md-color-grey-300">Current word {this.state.pageCount}</span>


        </div>

      </div>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'',
      items:[]
    };
    this.setItems = this.setItems.bind(this);
  }

  setItems(text) {
    this.setState({
      text: text,
      items:[...this.state.items,text]
    });
  }  



  render() {
    return (
      <div className="" >
        <Todo setItems={this.setItems} />
        <div>
         
        </div>
        {this.state.items.map((item,index)=>(
          <div key={index} >
            <div>
            <input type="checkbox" className="strike" />
            <div>  {item}</div>
            <button onClick={()=>delete this.props.item}>Delete</button>
          </div>
          <div className='text-container'></div>
            </div>
        ))}
        
      </div>
    );
  }
}
export default App;
