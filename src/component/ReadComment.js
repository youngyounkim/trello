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
        return <div className = "commentbox" >
            {commentdata.map((data) => {                
                return<div className = "combox" key = {data.comno}>
                        <div className = "comdate">{data.date}</div>
                        <div className = "commentexit" onClick = {(e) => 
                            {e.preventDefault(); 
                            store.dispatch(com_remove(this.props.listNo, this.props.cardNo, data.comno))
                            }}>덧글 제거</div>
                        <h4 className = "commenttext">{data.data}</h4>
                    </div>
            })}
        </div>
    }
}
export default ReadComment;