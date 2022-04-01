AFRAME.registerComponent("treasure-box", {
    init: function(){
        for(var i = 1; i <= 20; i++){
            var id = `treasure${i}`

            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + (-1000));

            var position = {x: posX, y: posY, z: posZ};

            this.createTreasure(id, position);
        }
    },

    createTreasure: function(id, position){
        var terrainEl = document.querySelector("#terrain");

        var treasureEl = document.createElement("a-entity");

        treasureEl.setAttribute("id",id);
        treasureEl.setAttribute("position",position);
    
        treasureEl.setAttribute("gltf-model", './assetst/reasure/scene.gltf');

        terrainEl.appendChild(treasureEl);
    }
})