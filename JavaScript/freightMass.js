function calculateMass(x){
    var y = 0;
    for(var i = 0; i<x.length; i++){
        y = y+x[i].length;
    }
    return y;
}