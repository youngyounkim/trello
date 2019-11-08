import React from 'react';
import { Component } from 'react';
import store, { com_remove } from '../modules/counter';

class ReadComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            listNo : this.props.listNo,
            cardNo : this.props.cardNo,
            listdata : store.getState()
        }
    }    

    render() {
        let commentdata = this.state.listdata.lists[this.props.listNo -1].cards[this.props.cardNo-1].cardcom
        console.log(commentdata)
        console.log(this.state.listdata)
        return <div>
            {commentdata.map((data) => {                
                return<div key = {data.comno}>
                        <div>{data.data}</div>
                        <div>{data.date}</div>
                        <div onClick = {(e) => 
                            {e.preventDefault(); 
                            store.dispatch(com_remove(this.props.listNo, this.props.cardNo, data.comno))
                            }}>X</div>
                    </div>
            })}
        </div>
    }
}
export default ReadComment;