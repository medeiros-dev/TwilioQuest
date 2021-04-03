class Materializer{
    constructor(target) { 
        this.activated = false;
        this.target = target;
     }
     activate(){
        this.activated = true;
     }
     materialize(){
         if(this.activated === true){
             return this.target;
         }
         return undefined;
     }
}

