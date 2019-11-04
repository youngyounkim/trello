import React from 'react';
import {Component} from 'react';
import store, {card_add} from '../modules/counter';

class AddCard extends Component {    
    constructor(props) {
        super(props);
        this.state = {
          condition: true,
          test : false,
          text : '',
          listno: this.props.listno
        };
      }
      // input 바에 값 입력 시 state에 값 저장
      handleChange = (event) => {
        this.setState({text : event.target.value});
        console.log(event.target.value);
      }
      // add 버튼 클릭 시 현재 state에 저장된 text와 수정중인 listno를 전달
      handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(card_add(this.state));
        this.setState({condition : true, text: ''})
      }
      //버튼의 상태를 변환하는 메서드
      btnCange = () => {
        let btndata = null;        
        if (this.state.condition === true) {
          btndata =
            <button type="button" title="addcard" onClick={(e) => {
              e.preventDefault();          
              this.setState({ condition: false });
            }}>add card</button>;
        }
        else if (this.state.condition === false){
          btndata =
          <div>
            <form onSubmit = {this.handleSubmit}>
              <label>
                <input type ="text" placeholder ="" value = {this.state.text} onChange = {this.handleChange}></input>
              </label>
              <input type = "submit" value = "submit" />
              </form>
          </div>     
        }
        return btndata;
      }
    
    render(){
        let add = this.btnCange();
        return add;
    }
}
export default AddCard;