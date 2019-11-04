import React from 'react';
import { Component } from 'react';
import CardSetting from './CardSetting';
import store from '../modules/counter';


class ReadCard extends Component {
    //store의 state 값이 변경될 때 마다 갱신하기 위해 생성자를 호출
    constructor(props) {
        super(props);
        this.state = {
            cardtype: true
        };
    }
    
    render() {
        console.log(this.props)
        const datas = this.props.cards;
        const listno = this.props.listno;
        let ReadCard = datas.map(({ cardNo, cardtitle }) =>
            <div key={cardNo}>
                <div>
                    <h2 onClick={(e) => { e.preventDefault(); this.setState({ cardtype: false }) }}>{cardtitle}</h2>
                </div>
                <div>
                    {this.state.cardtype === false ?
                        (<CardSetting cardNo={cardNo} cardtitle={cardtitle} listno = {listno} ></CardSetting>)
                        : (<div></div>)}
                </div>
            </div>)
        return ReadCard;
    }
}

export default ReadCard;