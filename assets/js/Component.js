ECS.Components = class{
    constructor(name){
        if (this.constructor === Components) {
            throw new TypeError('Abstract class "Components" cannot be instantiated directly');
        }
        
        this.name = name;

        //Data
        this.entity = null;
    }

    get(name) {
        if (!this.has(name)) {
          throw new Error(`Property ${name} not found`);
        }
        return this.properties[name];
    }

    setEntity(ent){
      if (!this.has(ent)) {
        throw new Error(`Property ${ent} not found`);
      }
      this.entity = ent;
    }
}

