AFRAME.registerComponent('car', {
    tick: function(){
        var rotation = this.el.getAttribute("rotation")
        rotation.y += 0.9
        console.log(rotation)
        this.el.setAttribute("rotation", rotation)
    }
})