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
            menu : true,
            selectbox : true
        }
    }
    //메뉴의 상태를 변경
    changeType = (e) => {
        e.preventDefault();
        if(this.state.menu === true){
            this.setState({menu : false});            
        }
        else if(this.state.menu === false){
            this.setState({menu : true})            
        }
    }
    // 리스트 제거
    archiveList = (e) =>{
        e.preventDefault();
        store.dispatch(list_remove(this.state.item));
        this.setState({menu : true});
    }
    addCard = () =>{

    }
    // 리스트 복사 후 리스트 끝에 붙여 넣기를 실행
    copyList = (e) =>{
        e.preventDefault();
        store.dispatch(copy_list(this.state.item));
        this.setState({menu : true});
    }
    // 리스트를 원하는 위치로 이동
    moveList = (e) =>{
        e.preventDefault();
        const target = document.getElementById("selbox");        
        store.dispatch(move_list(target.value, this.props.item.listno));
        this.setState({menu: true, selectbox : true})
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
            <div >                
                <div className ="listmenu"  onClick = {this.changeType} >...</div> 
                {this.state.menu === false ? (<div className ="menu" >
                    <div className = "menutitle">리스트 관리</div>
                    <div className = "menuexit" onClick = {this.changeType}>X</div>
                    <div className = "menubutton" type = "button" onClick = {this.copyList}>리스트 복사</div>
                    <div className = "menubutton" type = "button" onClick = {this.addCard}>카드 추가</div>
                    {this.state.selectbox === true ? 
                    (<div className = "menubutton" type = "button" onClick = {(e) => {e.preventDefault(); this.setState({selectbox : false})}}>리스트 이동</div>) 
                    : (<div className = "movelist">
                        <h3>원하는 위치로 이동해주세요</h3>
                        <select id = "selbox" name = "selbox">{selectdata}
                        </select>
                        <button className = "addinput" onClick ={this.moveList}>이동</button>
                        </div>)}                    
                    <div className = "menubutton" type = "button" onClick = {this.archiveList}>일정 완료</div>
                </div>): (<div></div>)}
            </div>
            )
    }
}

export default PrintMenu;