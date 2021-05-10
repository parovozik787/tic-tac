export const checkWin = (arr) => {
    if((arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]) && (arr[0][1] && arr[0][1] && arr[0][2])) return true;
    if((arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]) && (arr[1][1] && arr[1][1] && arr[1][2])) return true;
    if((arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2]) && (arr[2][1] && arr[2][1] && arr[2][2])) return true;
    if((arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) && (arr[1][0] && arr[1][0] && arr[2][0])) return true;
    if((arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) && (arr[1][1] && arr[1][1] && arr[2][1])) return true;
    if((arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2]) && (arr[1][2] && arr[1][2] && arr[2][2])) return true;
    if((arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) && (arr[0][0] && arr[1][1] && arr[2][2])) return true;
    if((arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) && (arr[0][2] && arr[1][1] && arr[2][0])) return true;
    return false
};


export const fillArr = (arr, pos, value) => {
    switch (pos){
        case 1:
            arr[0][0] = value;
            break;
        case 2:
            arr[0][1] = value;
            break;
        case 3:
            arr[0][2] = value;
            break;
        case 4:
            arr[1][0] = value;
            break;
        case 5:
            arr[1][1] = value;
            break;
        case 6:
            arr[1][2] = value;
            break;
        case 7:
            arr[2][0] = value;
            break;
        case 8:
            arr[2][1] = value;
            break;
        case 9:
            arr[2][2] = value;
            break;
    }
    return arr
};