
export default class Vector {
	value;
	get 0() {return this.value[0]}; set 0(_value) {this.value[0] = _value};
	get 1() {return this.value[1]}; set 1(_value) {this.value[1] = _value};
	get 2() {return this.value[2]}; set 2(_value) {this.value[2] = _value};
	
	get length() {
		return this.value.length;
	}

	constructor() {
		this.value = arguments;
	}

	add(_vector) {
		if (_vector.length !== this.length) return console.error('Vector: cannot add to vectors of different length');
		for (let i = 0; i < this.length; i++) this.value[i] += _vector.value[i];
		return this;
	}

	difference(_vector) {
		if (_vector.length !== this.length) return console.error('Vector: cannot dif to vectors of different length');
		let newValues = [];
		for (let i = 0; i < this.length; i++) newValues[i] = this.value[i] - _vector.value[i];
		return new Vector(...newValues);
	}

	scale(_scalar) {
		for (let i = 0; i < this.length; i++) this.value[i] *= _scalar;
		return this;
	}

	copy() {
		return new Vector(...Object.assign([], this.value));
	}
}


// (_param = [0, 0]) {
// 	this.value = [..._param];

// 	this.add = function(_vector) {
// 		this.value[0] += _vector.value[0];
// 		this.value[1] += _vector.value[1];
// 		return this;
// 	}
// 	this.dotProduct = function(_vector) {
// 		return 	this.value[0] * _vector.value[0] + 
// 				this.value[1] * _vector.value[1];
// 	}

// 	this.crossProduct = function(_vector) {
// 		return this.value[0] * _vector.value[1] - this.value[1] * _vector.value[0];
// 	}

	
// 	this.difference = function(_vector) {
// 		return new Vector(
// 			_vector.value[0] - this.value[0],
// 			_vector.value[1] - this.value[1],
// 		);
// 	}

// 	this.getPerpendicular = function() {
// 		return new Vector(
// 			this.value[1],
// 			-this.value[0]
// 		);
// 	}

// 	this.scale = function(_scalar) {
// 		this.value[0] *= _scalar;
// 		this.value[1] *= _scalar;
// 		return this;
// 	}


// 	this.copy = function() {
// 		return new Vector(this.value[0], this.value[1]);
// 	}



// 	this.rotate = function(_angle) {
// 		this.setAngle(this.getAngle() + _angle, this.getLength());
// 		return this;
// 	}

// 	this.getSquaredLength = function() {
// 		return this.dotProduct(this);
// 	}
// 	this.getLength = function() {
// 		return Math.sqrt(this.dotProduct(this));
// 	}
	
// 	this.setLength = function(_length) {
// 		let length = this.getLength();
// 		if (length == 0) return this;
		
// 		this.scale(_length / length);
// 		return this;
// 	}


// 	this.getAngle = function() { // check
// 		return Math.atan2(this.value[1], this.value[0]);
// 	}
	
// 	this.setAngle = function(_angle, _radius = 1) {
// 		_angle = .5 * Math.PI - _angle;

// 		this.value[0] = Math.sin(_angle) * _radius;
// 		this.value[1] = Math.cos(_angle) * _radius;
// 		return this;
// 	}

// 	this.getProjection = function(_projectionVector) {
// 		let dAngle = _projectionVector.getAngle() - this.getAngle();
// 		let length = _projectionVector.getLength() * Math.cos(dAngle);
// 		return new Vector(0, 0).setAngle(this.getAngle(), length);
// 	}
	
// }