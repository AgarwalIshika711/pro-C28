class Launcher{
    constructor(bodyA,pointB){
        var options = {
            //JSON format, replace = with : and ; with ,
            "bodyA" : bodyA, 
            "pointB" : pointB, 
            "stiffness" :  0.04,
            "length" : 10,
        }
        this.pointB = pointB;
        this.chain = Constraint.create (options);
        World.add(world, this.chain);
    
    }

    display(){
        //this is called namespacing...
        if(this.chain.bodyA){

            var pointA = this.chain.bodyA.position 
            var pointB = this.pointB

            strokeWeight(8);
            line(pointA.x,pointA.y, pointB.x, pointB.y );
        }
    }
    fly(){
        this.chain.bodyA = null; 
    }
}