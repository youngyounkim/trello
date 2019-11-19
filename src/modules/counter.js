import {createStore} from 'redux';
import { stat } from 'fs';

const LIST_ADD = 'LISTADD';
const LIST_REMOVE = 'LISTREMOVE';
const CARD_ADD = 'CARDADD';
const COPY_LIST = 'COPYLIST';
const MOVE_LIST = 'MOVELIST';
const CARD_DES = 'CARDDES';
const CARD_COM = 'CARDCOM';
const COM_REMOVE = 'COMREMOVE'
const TIME_ADD = 'TIMEADD';
const LIST_DRAG = 'LISTDRAG'

export const list_add = (data) => ({
    type: LIST_ADD,
    data
});

export const list_remove = (data) => ({
    type: LIST_REMOVE,
    data
});

export const card_add = (data) => ({
    type: CARD_ADD,
    data
});

export const copy_list = (data) => ({
    type: COPY_LIST,
    data
});

export const move_list = (data, listdata) => ({
    type: MOVE_LIST,
    data,
    listdata
})
export const card_des = (data, listno, cardno) => ({
    type: CARD_DES,
    data,
    listno,
    cardno
})

export const card_com = (data, listno, cardno, date) => ({
    type: CARD_COM,
    data,
    listno,
    cardno,
    date
})
export const com_remove = (listno, cardno, comno) => ({
    type: COM_REMOVE,
    listno,
    cardno,
    comno
})
export const time_add = (listno, cardno, date) => ({
    type: TIME_ADD,
    listno,
    cardno,
    date
})
export const list_drag = () => ({
    type: LIST_DRAG
})

var initialState = {
    maxNo: 1,
    lists: [
        
    ]
};
//reducer 함수 생성
function reducer(state = initialState, action){
    const lists = state.lists; 
    switch(action.type){
        case LIST_ADD:            
            const data = action.data;
            const maxno = state.maxNo;
            lists.push({listno : maxno, listtitle: data, cardMaxno: 1, cards : []});
            state.maxNo = maxno + 1;
            return  state;
        case LIST_REMOVE:            
            lists.map(function(element, index){
                if(element.listno === action.data.listno){
                    state.lists.splice(index, 1)
                }                            
            });
            for(var i = 0; i < lists.length; i++){
                lists[i].listno = i + 1;
            }            
            return state;
        case CARD_ADD:
            const carddata = action.data.text;
            const cardmaxno = lists[action.data.listno - 1].cardMaxno;
            lists[action.data.listno-1].cards.push(
                {cardNo : cardmaxno, cardtitle: carddata, cardcomno: 1, cardcom: []}
            );
            lists[action.data.listno-1].cardMaxno = cardmaxno + 1            
            return state;
        case COPY_LIST:
            const copydata = action.data.listtitle;
            const copycard = action.data.cards;
            const copymaxno = state.maxNo;
            lists.push({listno : copymaxno, listtitle: copydata, cardMaxno: copycard.length+1, cards : copycard});
            state.maxNo = copymaxno + 1;
            return state;
        case MOVE_LIST:            
            const movedata = lists.splice(action.listdata-1, 1);            

            lists.splice(action.data-1, 0, {listno : movedata[0].listno, listtitle: movedata[0].listtitle, cardMaxno: movedata[0].cardMaxno, cards : movedata[0].cards});
            
            for(var i = 0; i < lists.length; i++){
                lists[i].listno = i + 1;
            }
            
            return state;
        case CARD_DES:            
            lists[action.listno-1].cards[action.cardno-1].carddes = action.data;            
            return state;
        case CARD_COM:
            const cardcom = lists[action.listno-1].cards[action.cardno-1];
            cardcom.cardcom.push({comno: lists[action.listno-1].cards[action.cardno-1].cardcomno, data : action.data, date: action.date});
            cardcom.cardcomno = cardcom.cardcomno + 1;
            return state;
        case COM_REMOVE:
            const com = lists[action.listno-1].cards[action.cardno-1].cardcom;
            com.map(function(element, index){
                if(element.comno === action.comno){
                    com.splice(index, 1)
                }                            
            });
            for(var i = 0; i < com.length; i++){
                com[i].comno = i + 1;
            }
        case TIME_ADD:
            lists[action.listno-1].cards[action.cardno-1].date = action.date;
            return state;
        case LIST_DRAG:
            for(var i = 0; i < lists.length; i++){
                lists[i].listno = i + 1;
            }
            console.log(state)         
            return state;
        default:
            return state;
    }
}
//store 생성
const store = createStore(reducer);

export default store;