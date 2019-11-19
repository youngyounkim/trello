import React from 'react';
import { Component } from 'react';
import CardSetting from './CardSetting';


class ReadCard extends Component {
    //store의 state 값이 변경될 때 마다 갱신하기 위해 생성자를 호출
    constructor(props) {
        super(props);
        this.state = {
            cardtype: true
        };
    }
    cardSettingExit = (e) => {
        e.preventDefault();        
        this.setState({ cardtype: true });
        this.props.canDoingDrag();
    }

    render() {
        console.log(this.props)
        const datas = this.props.cards;
        const listno = this.props.listno;
        let ReadCard = datas.map(({ cardNo, cardtitle }) =>
            <div key={cardNo}>                
                <div className = "cardtext" onClick={(e) => { 
                    e.preventDefault(); 
                    this.setState({ cardtype: false }); 
                    this.props.notDoingDrag() }}>{cardtitle}</div>
                {this.state.cardtype === false ?
                    (<div className = "boardbase">
                    <div className = "cardboard">                   
                    <CardSetting cardNo={cardNo} cardtitle={cardtitle} listno={listno} cardexit = {this.cardSettingExit} >                      
                    </CardSetting>                    
                    </div></div>)
                    : (<div></div>)}
            </div>)
        return ReadCard;
    }
}

export default ReadCard;