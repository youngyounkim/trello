import React from 'react';
import { Component } from 'react';
import store, { list_remove, copy_list, move_list } from '../modules/counter';

class PrintMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            storestate : store.getState(),
            item : this.props.item,
            index : this.props.index,
            menu : false,
            selectbox : false
        }
    }
    //메뉴의 상태를 변경
    changeType = (e) => {
        e.preventDefault();
        if(this.state.menu === false){
            this.setState({menu : true});            
        }
        else if(this.state.menu === true){
            this.setState({menu : false})            
        }
    }
    // 리스트 제거
    archiveList = (e) =>{
        e.preventDefault();
        store.dispatch(list_remove(this.state.item));
        this.setState({menu : false});
    }
    addCard = () =>{

    }
    // 리스트 복사 후 리스트 끝에 붙여 넣기를 실행
    copyList = (e) =>{
        e.preventDefault();
        store.dispatch(copy_list(this.state.item));
        this.setState({menu : false});
    }
    // 리스트를 원하는 위치로 이동
    moveList = (e) =>{
        e.preventDefault();
        const target = document.getElementById("selbox");        
        store.dispatch(move_list(target.value, this.props.item.listno));
    }
    render(){
        var selectdata = this.state.storestate.lists.map((data) => {            
            if (data.listno === this.state.index + 1){
                return <option key = {data.listno} value = {data.listno} selected = "selected">{data.listno}(현재 리스트)</option>
            }
            else{
                return <option key = {data.listno} value = {data.listno}>{data.listno}</option>
            }
             
        });            
        return (
            <div>
                <div>
                <button type ="button" onClick = {this.changeType}>메뉴</button>            
                </div>
                {this.state.menu === true ? (<div>
                    <button type = "button" onClick = {this.copyList}>리스트 복사</button>
                    <button type = "button" onClick = {this.addCard}>카드 추가</button>
                    {this.state.selectbox === false ? 
                    (<button type = "button" onClick = {(e) => {e.preventDefault(); this.setState({selectbox : true})}}>리스트 이동</button>) 
                    : (<div>
                        <h2>원하는 위치로 이동해주세요</h2>
                        <select id = "selbox" name = "selbox">{selectdata}
                        </select>
                        <button onClick ={this.moveList}>이동</button>
                        </div>)}                    
                    <button type = "button" onClick = {this.archiveList}>일정 완료</button>
                </div>): (<div></div>)}
            </div>
            )
    }
}

export default PrintMenu;