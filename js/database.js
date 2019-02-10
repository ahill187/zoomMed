import { CONFIG } from './config'
import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp(CONFIG);


export var addToDb = (db, collection, id, data) => {
	db.collection(collection).doc(id).get()
		.then(doc => {
			if (doc.exists) {
				console.log(`${id} already exists`)
			} else {
				db.collection(collection).doc(id).set(data)
					.then(() => {
						console.log("document", id, "written to", collection);
					})
					.catch(err => {
						console.error("Error adding document: ", err);
					})
			}
		})
		.catch(err => console.log(err))
}

// example read
// db.collection("patients").get().then((querySnapshot) => {
    // querySnapshot.forEach((doc) => {
		// console.log(`info for ${doc.id}:`)
		// console.log(doc.data())
    // });
// });

// example write
// db.collection("patients").doc("darkchild69@vt.edu").get()
	// .then(doc => {
		// if (doc.exists) {
			// console.log("already exists")
		// } else {
			// db.collection("patients").doc("darkchild69@vt.edu").set({
				// firstName: "Gogo",
				// lastName: "Skweezy",
				// gender: "panromantic",
				// insured: true,
				// symptoms: ["too angelic"],
				// homeLocation: new fb.firestore.GeoPoint(49.2901592, -122.7938798),
				// currentLocation: new fb.firestore.GeoPoint(48.2901592, -122.5938798),
			// })
			// .then(docRef => {
				// console.log("Document written with ID: ", docRef.id);
			// })
			// .catch(error => {
				// console.error("Error adding document: ", error);
			// })
		// }
	// })
	// .catch(err => console.log(err))

// db.collection("clinics").doc("zenclinic1234567@gmail.com").set({
    // name: "Zen Clinic",
    // location: new fb.firestore.GeoPoint(49.264054, -123.157232),
	// status: "open",
	// openHour: 1000,
	// closeHour: 1800,
	// doctors: [
		// {
			// firstName: "Danny",
			// lastName: "Devita",
			// gender: "male",
			// startHour: 1100,
			// endHour: 1800,
			// lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		// },		{
			// firstName: "Donkey",
			// lastName: "Kong",
			// gender: "male",
			// startHour: 1500,
			// endHour: 1800,
			// lastSeeingTime: new fb.firestore.Timestamp(1549839832)
		// }
	// ]
// })
