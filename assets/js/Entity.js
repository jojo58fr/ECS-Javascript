ECS.Entity = class{
    constructor(){
        this.id = (+new Date()).toString(16) + 
        (Math.random() * 100000000 | 0).toString(16) +
        ECS.Entity.prototype.countEntity;

        // increment counter
        ECS.Entity.prototype.countEntity++;

        // The component data will live in this object
        this.components = {};

        // The system that is used by the Entity
        this.systems = {};
    }

    addComponent(component){
        // Add component data to the entity
        // NOTE: The component must have a name property (which is defined as 
        // a prototype protoype of a component function)
        this.components[component.name] = component;
        component.setEntity(this);
    }

    removeComponent(componentName){
        // Remove component data by removing the reference to it.
        // Allows either a component function or a string of a component name to be
        // passed in
        var name = componentName; // assume a string was passed in

        if(typeof componentName === 'function'){ 
            // get the name from the prototype of the passed component function
            name = componentName.prototype.name;
        }

        // Remove component data by removing the reference to it
        delete this.components[name];
    }

    addSystem(system){
        // Add component data to the entity
        // NOTE: The component must have a name property (which is defined as 
        // a prototype protoype of a component function)
        this.components[system.id] = component;

        ECS.RegisterSystem(system);
    }

    removeSystem(systemId){
        // Remove component data by removing the reference to it.
        // Allows either a component function or a string of a component name to be
        // passed in
        var id = systemId; // assume a string was passed in

        if(typeof systemId === 'function'){ 
            // get the name from the prototype of the passed component function
            id = systemId.id;
        }

        // Remove component data by removing the reference to it
        delete this.components[idValue];
    }

    print() {
        // Function to print / log information about the entity
        console.log(JSON.stringify(this, null, 4));
        return this;
    };
}

ECS.Entity.prototype.countEntity = 0;


