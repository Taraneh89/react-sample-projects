export default function(state=null, action){
    switch(action.type){
        case 'BOOK_SeLECTED':
            return action.payload;
    }
    return state;
}