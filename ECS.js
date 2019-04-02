var ECS = {}

ECS.Systems = {}

ECS.RegisterSystem = function(system){
    // Add component data to the entity
    // NOTE: The component must have a name property (which is defined as 
    // a prototype protoype of a component function)
    this.Systems[system.id] = component;

    system.Awake();
}

ECS.GlobalUpdate = function(){
    this.Systems.array.forEach(element => {
        element.Update();
    });
}