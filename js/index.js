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

// example clinic
db.collection("clinics").doc("clinic@umbrella.co").set({
	name: "Umbrella Corp. Health",
	status: "open",
	openHour: 800,
	closeHour: 1800,
	doctors: [
		{
			firstName: "Seamus",
			lastName: "O'Toole",
			gender: "demisexual",
			startHour: 900,
			endHour: 1700,
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

