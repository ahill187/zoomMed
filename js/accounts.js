export var universal = { // universal account functions
	email: e =>
	photoURL: p =>
}

export var patient = { // patient account functions
	firstName: fn =>
	lastName: ln =>
	gender: g =>
	insured: i =>
	listSymptoms: () =>
	addSymptom: sy =>
	removeSymptom: sy =>
	homeLocation: hl =>
	currentLocation: cl =>
}

export var clinic = { // clinic account functions
	name: n =>
	location: l =>
	status: s =>
	openHour: h =>
	closeHour: h =>
	listDoctors: () =>
	addDoctor: ind =>
	removeDoctor: ind =>
	editDoctor: (ind, key, val) =>
}
