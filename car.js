class Car{
    constructor(type,name){
        this.type=type
        this.name=name
    }
    print(){
        console.log(`${this.name} is an ${this.type} type of car`)
    }
}

module.exports=Car
