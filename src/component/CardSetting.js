import React from 'react';
import { Component } from 'react';
import store, { card_des, card_com } from '../modules/counter';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";


class CardSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardtitle: this.props.cardtitle,
      cardDescrip: "",
      cardComment: "",
      descripstate: true,
      Comments : true,
      timepicker : true,
      rowsvalue: 0,
      Date : new Date()
    };
    this.dateChange = this.dateChange.bind(this);
  }
  textChange = (e) => {    
    if(e.target.id === "textarea"){
      this.setState({ cardDescrip: e.target.value });
    }
    else if(e.target.id === "comments"){
      this.setState({ cardComment: e.target.value });
    }
  }  
  //add 버튼을 클릭하는 경우 현재 state에 저장된 값을 store의 state에 추가
  textSubmit = (e) => {    
    e.preventDefault();
    store.dispatch(card_des(this.state.cardDescrip, this.props.listno, this.props.cardNo));
    this.setState({descripstate : false});         
  }
  //덧글을 카드에 추가
  comSubmit = (e) => {
    e.preventDefault();
    store.dispatch(card_com(this.state.cardComment, this.props.listno, this.props.cardNo));
    this.setState({Comments : false});
  }
  dateChange = (date) => {
    this.setState({Date : date});
  }
  render() {
    // 입력한 텍스트 크기에 따라 textarea의 세로 크기를 확장 및 축소
    let length = this.state.cardDescrip.length;    
    if (length / this.state.rowsvalue >= 40) {
      const value = this.state.rowsvalue
      this.setState({ rowsvalue: value + 1 });
    }
    else if (40 * (this.state.rowsvalue - 1) > length) {
      const value = length % this.state.rowsvalue;
      this.setState({ rowsvalue: value });
    }    
    var d = this.state.Date;
    var k = d.getMonth() + 1;
    const date = d.getFullYear() + "/" + k + "/" + d.getDate()
    
    return <div className = "cardsetting">
      <div>
        <img src = "./icon1.PNG"></img>
        {this.state.cardtitle}
      </div>
      <img src = "./icon1.PNG"></img>
      {this.state.timepicker === true ?
      (<div onClick = {(e) => {
        e.preventDefault(); 
        this.setState({timepicker: false})}}>{date}</div>) 
      : (<div className = "timePicker">
        <input value = {date}></input>
        <DatePicker selected = {this.state.Date} onChange = {this.dateChange} inline showTimeSelect />
        <button onClick = {(e) => {e.preventDefault(); this.setState({timepicker: true})}}>확인</button>
      </div>)}      
      <div>
      <img src = "./icon1.PNG"></img>
      {this.state.descripstate === true ?
        (<h2 onClick={(e) => { e.preventDefault(); this.setState({ descripstate: false }) }}>입력해라</h2>)
        : (<form onSubmit={this.textSubmit}>
          <label>
            <textarea id="textarea" cols="40" rows={this.state.rowsvalue} onChange={this.textChange}></textarea>
          </label>
          <input type="submit" value="추가"/>
        </form>)}
      </div>
      <div>
      <img src = "./icon1.PNG"></img>
      {this.state.Comments === true ? 
      (<h2  onClick={(e) => { e.preventDefault(); this.setState({ Comments: false }) }}>입력해라</h2>) 
      : (<form onSubmit={this.comSubmit}>
        <label>
          <textarea id="comments" cols="40" rows={this.state.rowsvalue} onChange={this.textChange}></textarea>
        </label>
        <input type="submit" value="추가" onClick={(e) => { e.preventDefault(); this.setState({ Comments: true }) }} />
      </form>)}
      </div>
      
    </div>
  }
}
export default CardSetting;