function scan(x){
    var y = [];
    for(var i = 0; i<x.length; i++){
        if(x[i] === "contraband"){
            y.push(i)
        }
    }
    return y;
}