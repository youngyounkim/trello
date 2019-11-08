import React from 'react';
import { Component } from 'react';
import store from '../modules/counter';
import AddCard from './AddCard';
import ReadCard from './ReadCard';
import PrintMenu from './PrintMenu';

class ReadList extends Component {
    //store의 state 값이 변경될 때 마다 갱신하귀 위해 생성자를 호출
    constructor(props) {
        super(props);
        this.state = {
            listdata: store.getState()
        }
        //store 값이 변경 될 때 마다 setState를 실행하여 state 값을 갱신
        store.subscribe(() => { 
            this.setState({ 
                listdata: store.getState()
            }) 
            console.log(store.getState())
        });
        
    }

    //state에 저장된 값들을 읽어 list를 반환
    readList = () => {
        const datas = this.state.listdata;

        return datas.lists.map((item, index) =>
        {            
            return (
            <div className = "listObject" key={item.listno}>                
                <div className = "listname">
                    <h2>{item.listtitle}</h2>                    
                </div>
                <PrintMenu item ={item} index = {index}></PrintMenu>
                <ReadCard cards = {item.cards} listno = {item.listno}></ReadCard>
                <AddCard listno = {item.listno}></AddCard>
            </div>)
        })
    }
    
    render() {        
        let readList = this.readList();        
        return readList;
    }
}
export default ReadList;