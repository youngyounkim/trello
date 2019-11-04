import React from 'react';
import { Component } from 'react';
import store, { list_add } from '../modules/counter';


class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true,
      test: false,
      text: ''
    };
  }
  //입력 바에 값이 입력 될 때마다 현재 입력된 값을 state에 저장
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }
  //add 버튼을 클릭하는 경우 현재 state에 저장된 값을 store의 state에 추가 및 입력 바를 리셋
  handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(list_add(this.state.text));
    this.setState({ condition: true, text: '' })
  }
  render() {
    // const addclass = "";
    // if(condition === true){
    //   addclass = "listadd";
    // }
    // else if(condition === false){
      
    // }
    return <div class = "listadd">
      {this.state.condition === true ?
        (<div class = "addbtn" type="button" title="addlist" onClick={(e) => {
          e.preventDefault();
          this.setState({ condition: false });
        }}>일정 추가</div>)
        : (<form class = "addform" onSubmit={this.handleSubmit}>
          <label>
            <input class = "listinput" type="text" placeholder="제목을 입력해주세요" value={this.state.text} onChange={this.handleChange}></input>
          </label>
          <input class = "addinput" type="submit" value="추가" />
        </form>)}
    </div>;
  }
}
export default AddList;