function mutate(x){
    var y = [];
    x.map(item=>y.push(item.toUpperCase()))
    return y;
}