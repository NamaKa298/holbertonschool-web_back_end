export default class HolbertonCourse {
	constructor(name, length, students) {
	if (typeof name !== 'string') {
		new TypeError('name', 'string');
	}
	this.name=name;
	if (typeof length !== 'number') {
		new TypeError('length', 'number');
	}
	this._length=length;
	if (typeof students !== 'array of strings') {
		new TypeError('student', 'array of strings');
	}
	this._students=students;
	}
}