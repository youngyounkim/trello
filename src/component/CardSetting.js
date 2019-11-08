import React from 'react';
import { Component } from 'react';
import ReadComment from './ReadComment'
import store, { card_des, card_com, time_add } from '../modules/counter';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

// 카드를 터치하는 경우 출력되는 제어 창을 사용하기 위한 컴포넌트 입니다.
class CardSetting extends Component {
  constructor(props) {
    super(props);
    let storedata = store.getState();
    let time = null;
    if(storedata.lists[this.props.listno-1].cards[this.props.cardNo-1].date === undefined){
      time = new Date();
    }
    else{
      time = storedata.lists[this.props.listno-1].cards[this.props.cardNo-1].date;
    }
    this.state = {
      cardtitle: this.props.cardtitle,
      cardDescrip: "",
      cardComment: "",
      descripstate: true,
      Comments : true,
      timepicker : true,
      rowsvalue: 0,
      date : time
    };
    this.dateChange = this.dateChange.bind(this);
  }

  // 입력되는 텍스트들에 따라 카드 설명인지 카드 덧글인지 파악하여 state 값을 갱신합니다.
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
    console.log("d2ds")
    store.dispatch(card_des(this.state.cardDescrip, this.props.listno, this.props.cardNo));
    this.setState( {descripstate : true} );         
  }

  //덧글을 카드에 추가
  comSubmit = (e) =>{
    e.preventDefault();
    let time = new Date()
    var k = time.getMonth() + 1;
    const date = `${time.getFullYear()}/${k}/${time.getDate()}/${time.getHours()}시`;
    console.log(date)
    store.dispatch(card_com(this.state.cardComment, this.props.listno, this.props.cardNo, date));
    this.setState({Comments : true});
  }
  //Timepicker에서 선택한 날짜로 state 값을 변환합니다.
  dateChange = (date) => {
    this.setState({date : date});
  }
  timeSubmit = (e) =>{
    e.preventDefault();
    store.dispatch(time_add(this.props.listno, this.props.cardNo, this.state.date));
    this.setState({timepicker: true});
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
    //Timepicker에서 선택한 날짜를 원하는데로 변환하여 출력하기 위한 변수들입니다.  
    var d = this.state.date;
    var k = d.getMonth() + 1;
    const date = `${d.getFullYear()}/${k}/${d.getDate()}`

    const timestate = store.getState().lists[this.props.listno-1].cards[this.props.cardNo-1].date;
    console.log(timestate)
    return <div className = "cardsetting">
      <div>
        <img src = "./icon1.PNG"/>
        {this.state.cardtitle}
      </div>

      <img src = "./icon1.PNG"/>
      {this.state.timepicker === true ?
      (<div>{this.state.timestate === undefined ? (<div onClick ={(e) => {
        e.preventDefault(); 
        this.setState({timepicker: false})}}>완료 일자를 정해주세요</div>)
        : (<div onClick = {(e) => {
        e.preventDefault(); 
        this.setState({timepicker: false})}}>{date}</div>)}
        </div>
        ) 

      : (<div className = "timePicker">
        <input value = {date}></input>
        <DatePicker selected = {this.state.date} onChange = {this.dateChange} inline showTimeSelect />
        <button onClick = {this.timeSubmit}>확인</button>
      </div>)}      
      <div>

      <img src = "./icon1.PNG"></img>
      {this.state.descripstate === true ?
        (<h2 onClick={(e) => { e.preventDefault(); this.setState({ descripstate: false }) }}>
        
        {this.state.cardDescrip === '' ? 
        (<div>설명을 적어주세요</div>) 
        : (<div>{this.state.cardDescrip}</div>)}
        </h2>)

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
        <input type="submit" value="덧글추가"/>
      </form>)}
      </div>
      
      <ReadComment listNo = {this.props.listno} cardNo = {this.props.cardNo}></ReadComment>
    </div>
  }
}

export default CardSetting;