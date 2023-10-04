const DEG2RAD = Math.PI / 180;

AFRAME.registerComponent('spin', {
    schema: {
      startSpeed: {type: 'number'},
      accel: {type: 'number'}
    },
  
    init: function () {
      // Do something when component first attached.
      this.currentSpeed = this.data.startSpeed;
    },
  
    update: function () {
      // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something when the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    //   console.log (this.data.startSpeed);
      var obj3D = this.el.object3D;
      this.currentSpeed = this.currentSpeed + this.data.accel * timeDelta/1000;
      // console.log(this.currentSpeed);
      obj3D.rotateOnAxis(new THREE.Vector3(0,1,0), this.currentSpeed * timeDelta/1000 * DEG2RAD);
    }
  });