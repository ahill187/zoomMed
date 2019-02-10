import { CONFIG } from './config'
import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp(CONFIG);

var db = firebase.firestore();

// example patient

db.collection("patients").doc("darkchild69@vt.edu").get()
	.then(doc => {
		if (doc.exists) {
			console.log("already exists")
		} else {
			db.collection("patients").doc("darkchild69@vt.edu").set({
				firstName: "Gogo",
				lastName: "Skweezy",
				gender: "panromantic",
				insured: true,
				symptoms: ["too angelic"],
				homeLocation: new fb.firestore.GeoPoint(49.2901592, -122.7938798),
				currentLocation: new fb.firestore.GeoPoint(48.2901592, -122.5938798),
			})
			.then(docRef => {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(error => {
				console.error("Error adding document: ", error);
			})
		}
	})
	.catch(err => console.log(err))

	db.collection("patients").doc("healthyhumanbean@vt.edu").get()
	.then(doc => {
		if (doc.exists) {
			console.log("already exists")
		} else {
			db.collection("patients").doc("healthyhumanbean@vt.edu").set({
				firstName: "John",
				lastName: "Mcbain",
				gender: "male",
				insured: false,
				symptoms: ["neck pain"],
				homeLocation: new fb.firestore.GeoPoint(49.262644, -123.208380),
			})
			.then(docRef => {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(error => {
				console.error("Error adding document: ", error);
			})
		}
	})
	.catch(err => console.log(err))

	db.collection("patients").doc("sickystylez@vt.edu").get()
	.then(doc => {
		if (doc.exists) {
			console.log("already exists")
		} else {
			db.collection("patients").doc("sickystylez@vt.edu").set({
				firstName: "Mannah",
				lastName: "Hontana",
				gender: "female",
				insured: true,
				symptoms: ["medium sized flesh wound"],
				homeLocation: new fb.firestore.GeoPoint(49.268612, -123.174661),
			})
			.then(docRef => {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(error => {
				console.error("Error adding document: ", error);
			})
		}
	})
	.catch(err => console.log(err))

// example clinic

db.collection("clinics").doc("zenclinic1234567@gmail.com").set({
    name: "Zen Clinic",
    location: new fb.firestore.GeoPoint(49.264054, -123.157232),
	status: "open",
	openHour: 1000,
	closeHour: 1800,
	doctors: [
		{
			firstName: "Danny",
			lastName: "Devita",
			gender: "male",
			startHour: 1100,
			endHour: 1800,
			lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		},		{
			firstName: "Donkey",
			lastName: "Kong",
			gender: "male",
			startHour: 1500,
			endHour: 1800,
			lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		}
	]
})

db.collection("clinics").doc("bayswaterclinicals@gmail.com").set({
    name: "Bayswater Clinic",
    location: new fb.firestore.GeoPoint(49.264397, -123.171408),
	status: "open",
	openHour: 800,
	closeHour: 1500,
	doctors: [
		{
			firstName: "Felicia",
			lastName: "O'Connaught",
			gender: "female",
			startHour: 800,
			endHour: 1500,
			lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		}
	]
})

db.collection("clinics").doc("mskmedicals@gmail.com").set({
    name: "MSK Clinic",
    location: new fb.firestore.GeoPoint(49.268163, -123.170301),
	status: "open",
	openHour: 900,
	closeHour: 1600,
	doctors: [
		{
			firstName: "Alexis",
			lastName: "Doctorman",
			gender: "male",
			startHour: 900,
			endHour: 1400,
			lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		}
	]
})

db.collection("clinics").doc("connectingclinics@gmail.com").set({
    name: "Connect Clinic",
    location: new fb.firestore.GeoPoint(49.257293, -123.167636),
	status: "open",
	openHour: 1000,
	closeHour: 1900,
	doctors: [
		{
			firstName: "Bob",
			lastName: "Thebuilder",
			gender: "male",
			startHour: 1000,
			endHour: 1900,
			lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		}
	]
})

db.collection("clinics").doc("wellnessclinicalisms@gmail.com").set({
    name: "WELL Clinic",
    location: new fb.firestore.GeoPoint(49.263690, -123.211498),
	status: "open",
	openHour: 900,
	closeHour: 2000,
	doctors: [
		{
			firstName: "Roger",
			lastName: "Wabbitus",
			gender: "male",
			startHour: 900,
			endHour: 1200,
			lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		}, {
			firstName: "Dana",
			lastName: "Adams",
			gender: "female",
			startHour: 1200,
			endHour: 2000,
			lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		}
	]
})

// example read
db.collection("patients").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
		console.log(`info for ${doc.id}:`)
		console.log(doc.data())
    });
});

