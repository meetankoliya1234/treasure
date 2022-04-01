AFRAME.registerComponent("scuba-diver", {
    schema: {
      speedOfRotation: {type: "number", default: 0},
      speedOfAcent: {type: "number", default: 0}
    },
    init: function() {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAcent = this.el.getAttribute("position");
  
        var diver_rotation = this.data.speedOfRotation;
        var diver_position = this.data.speedOfAcent;
  
        if(e.key === "ArrowRight"){
          if(diver_rotation.x < 10){
            diver_rotation.x += 0.5;
  
            this.el.setAttribute("rotation", diver_rotation);
          }
        }
  
        if(e.key === "ArrowLeft"){
          if(diver_rotation.x > -10){
            diver_rotation.x -= 0.5;
  
            this.el.setAttribute("rotation", diver_rotation);
          }
        }
  
        if(e.key === "ArrowUp"){
          if(diver_rotation.x < 20){
            diver_rotation.x += 0.5;
  
            this.el.setAttribute("rotation", diver_rotation);
          }
  
          if(diver_position.y < 2){
            diver_position.y += 0.01;
  
            this.el.setAttribute("position", diver_position);
          }
        }
  
        if(e.key === "ArrowDown"){
          if(diver_rotation.x > -10){
            diver_rotation.x -= 0.5;
  
            this.el.setAttribute("rotation", diver_rotation);
          }
  
          if(diver_position.y > -2){
            diver_position.y -= 0.01;
  
            this.el.setAttribute("position", diver_position);
          }
        }
      })
    }
  })