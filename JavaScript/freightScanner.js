function scan(x){
    var count = 0;
    for(var i = 0; i < x.length; i++){
        if(x[i]==="contraband"){
            count = count + 1;
        }
    }
    return count;
}