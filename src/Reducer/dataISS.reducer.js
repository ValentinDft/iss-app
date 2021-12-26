export default function(data = {}, action) {
    switch (action.type) {
        case 'dataIss':
            let copyData = {...action.pos, success: true}
            return copyData;
        default:
           return data;
    }
}