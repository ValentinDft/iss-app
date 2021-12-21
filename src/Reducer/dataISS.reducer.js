export default function(data = {}, action) {
    if(action.type == 'dataIss'){
        let copyData = {...action.pos, success: true}
        return copyData;
    } else {
        return data;
    }
}