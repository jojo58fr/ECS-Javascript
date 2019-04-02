ECS.System = class{
    constructor(){
        this.id = (+new Date()).toString(16) + 
        (Math.random() * 100000000 | 0).toString(16) +
        ECS.System.prototype.countSystem;

        ECS.System.prototype.countSystem++;
    }

    Awake(){
        throw new Error('You have to implement the method start !');
    }
    
    Start(){
        throw new Error('You have to implement the method start !');
    }

    Update(){
        throw new Error('You have to implement the method update !');
    }

}

ECS.System.prototype.countSystem = 0;