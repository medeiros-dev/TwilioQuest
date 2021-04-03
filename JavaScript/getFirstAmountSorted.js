function getFirstAmountSorted(x, y) {

    var x1 = x.sort();
    var x2 = [];
    for(var i = 0; i < y; i++){
        x2.push(x1[i])
    }
    return x2;
}