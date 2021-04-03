function calculatePower(x){
    var y = [];
    var z = 0;
    for(var i=0; i<x.length; i++){
        y.push(x[i]*2)
    }
    for(var i=0; i<y.length; i++){
        z = z+y[i];
    }
    return z;
}