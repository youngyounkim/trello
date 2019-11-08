import React from 'react';
import {Component} from 'react';
import store, {card_add} from '../modules/counter';

// 카드를 추가하는 컴포넌트 입니다. 카드 추가 기능이 있습니다.
class AddCard extends Component {    
    constructor(props) {
        super(props);
        this.state = {
          condition: true,
          test : false,
          text : '',
          listno: this.props.listno,
          rowsvalue : 2
        };
      }
      // input 바에 값 입력 시 state에 값 저장 저장된 값은 카드의 이름으로 사용됩니다.
      handleChange = (event) => {
        this.setState({text : event.target.value});        
      }
      // add 버튼 클릭 시 현재 state에 저장된 text와 수정중인 listno를 store에 전달, 
      // 카드의 이름을 저장하고 추가합니다.
      handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(card_add(this.state));
        this.setState({condition : true, text: ''})
      }
       
    render(){
        let length = this.state.text.length;     
        //textarea의 세로 사이즈 조절을 위한 if문입니다. 35는 textarea의 cols와 동일한 수 입니다.
        //입력된 수에 따라 textarea의 세로 사이즈가 늘었다 줄었다 작동합니다.
        if (length / this.state.rowsvalue > 35) {
          const value = this.state.rowsvalue
          this.setState({ rowsvalue: value + 1 });          
        }
        else if (35 * (this.state.rowsvalue - 2) > length) {
          const value = length % this.state.rowsvalue;
          this.setState({ rowsvalue: value });
        }
        
        return <div className = "cardarea">
          {this.state.condition === true ? 
          (<div className = "addcard" type="button" title="addcard" onClick={(e) => {
            e.preventDefault();          
            this.setState({ condition: false });
          }}>카드 추가</div>)

          : (<form className = "addform" onSubmit = {this.handleSubmit}>
          <label>
            <textarea className = "listinput" type ="text" placeholder ="카드 이름을 입력해주세요" cols ="35" rows = {this.state.rowsvalue} value = {this.state.text} onChange = {this.handleChange}></textarea>
          </label>
          <input className = "addinput" type = "submit" value = "카드 추가" />
          <div className = "addexit" onClick = {(e) =>{e.preventDefault(); this.setState({condition: true, text: ''})}}>x</div>
          </form>)
          }
        </div>
    }
}
export default AddCard;