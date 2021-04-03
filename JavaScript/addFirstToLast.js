function addFirstToLast(x){
    let firstAndLast = '';

    if(x.length>0){
    var x1 = x[0];
    var x2 = x[x.length-1];

    firstAndLast = (x1+x2);
    }
    return firstAndLast;
}