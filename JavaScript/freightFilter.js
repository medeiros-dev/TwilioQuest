function scanAndFilter(x,y){
    for(var i = 0; i<x.length; i++){
        if(x[i]===y){
            x.splice(i, 1);
        }
    }
    return x;
}