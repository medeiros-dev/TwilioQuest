var x = process.argv[2];
var y = process.argv[3];

if(x<y){
    return console.log('-1');
}else if(x.toLowerCase()===y.toLowerCase()){
    return console.log('0')
}else if(y<x){
    return console.log('1');
}