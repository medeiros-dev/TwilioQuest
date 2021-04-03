var x = process.argv[2];
const x1 = Number(x);

if(x1 === 0){
    return console.log("alive");
}else{
    return console.log("other")
}