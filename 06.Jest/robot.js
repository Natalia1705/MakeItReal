const counter = function createRobot (x=0,y=0) {
 
      if (x < 0 && x > 10 || y < 0 && y > 10) {
	    throw new Error("Error")
}
    return {
	   moveRight() {
		return x + 1
	},
	   moveLeft() {
		return x - 1
	},
	   moveUp() {
		return y + 1
	},
	   moveDown() {
		return y - 1
	},
	  getX() {
		return x
	},
	   getY() {
		return y
	},
 }
}

module.exports = { counter }