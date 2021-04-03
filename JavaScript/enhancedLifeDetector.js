var x = process.argv[2];
var x1 = Number(x);

if(x1 === 0){
    return console.log('alive');
}else if(x1 === 1){
    return console.log('flowering')
}else if(x1 === 2){
     console.log('shedding')
}else{
    console.log('other')
}