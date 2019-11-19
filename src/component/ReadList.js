import React from 'react';
import { Component } from 'react';
import store, {list_drag} from '../modules/counter';
import AddCard from './AddCard';
import ReadCard from './ReadCard';
import PrintMenu from './PrintMenu';

var placeholder = document.createElement("li"); 
placeholder.className = "placeHolder";


class DragList extends Component {
    constructor(props) {
        super(props);
        this.state = {...props,
            drag: true
        }
    }
    // list를 선택하는 경우 실행되는 함수 dragged 변수를 만들고 선택한 list의 정보를 넣는다
    dragStart = (e) =>{
        this.dragged = e.currentTarget;
        
        this.setState({dragged: this.dragged});
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragged);
    }

    // 드래그를 완료하는 경우 완료한 곳에 list를 잘라내어 넣는 함수
    dragEnd = (e) =>{
        this.dragged.style.display = 'block';
        this.dragged.parentNode.removeChild(placeholder);

        let data = this.state.listdata.lists;
        let from = Number(this.dragged.dataset.id);
        let to = Number(this.over.dataset.id);

        if(from < to) to--;
        data.splice(to, 0, data.splice(from, 1)[0]);

        var temp = this.state.listdata;
        temp.lists = data

        this.setState({listdata: temp});
        this.dragged = null;
        this.setState({dragged: null});
        store.dispatch(list_drag());
    }

    // 드래그 중 원하는 위치에 놓기 위한 함수 드래그가 오버되는 위치의 classname을 파악하여 정해진 위치에만 드랍할 수 있도록 한다.
    dragOver = (e) =>{
        e.preventDefault();
        this.dragged.style.display = 'none';
        if(e.target.className === 'placeHolder') {
            return;
        }        
        else if(e.target.className !== 'dragable'){
            return;
        }
        this.over = e.target.parentNode;
        this.dragged.parentNode.insertBefore(placeholder, e.target.parentNode);
    }
    // list 컴포넌트 안에서 drag 기능들이 작동되지 않도록 할 수 있는 함수
    notDoingDrag = () =>{
        this.setState({drag : false});
    }
    canDoingDrag = () =>{
        this.setState({drag: true});
    }

    render(){
        var listitem = this.state.listdata.lists.map((item, i) => {
            return (
                <li style = {{float: 'left'}} className ="listObject" data-id = {i} key = {i} onDragOver = {this.dragOver.bind(this)} draggable = {this.state.drag} onDragEnd = {this.dragEnd.bind(this)} onDragStart = {this.dragStart.bind(this)}>
                    
                    <div className = "listname">
                    <h2>{item.listtitle}</h2>                    
                    </div>
                    <PrintMenu item ={item} index = {i}></PrintMenu>
                    <ReadCard notDoingDrag = {this.notDoingDrag} canDoingDrag = {this.canDoingDrag} cards = {item.cards} listno = {item.listno}></ReadCard>
                    <AddCard listno = {item.listno}></AddCard>
                    {this.state.dragged ? <div className = "dragable"/> : <div/>}
                        
                </li>
            )
        });
        return (
            <ul style = {{listStyle: 'none'}}>{listitem}</ul>
        )
    }
}


//리스트를 읽는 컴포넌트 입니다.
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
        });
        
    }   

    render() {          
        return (
            <DragList listdata = {this.state.listdata}></DragList>
        );
    }
}
export default ReadList;