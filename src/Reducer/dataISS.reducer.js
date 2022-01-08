export default function(data = {}, action) {
    switch (action.type) {
        case 'GET_POSITION_ISS':
            let copyData = {...action.pos, success: true}
            return copyData;
        default:
           return data;
    }
}