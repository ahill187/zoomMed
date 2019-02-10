import { CONFIG } from './config'
import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'
import { addToDb } from './database'

window.db = firebase.firestore()

console.log("let's roll")

window.pushPatientData = (id, fn, ln, msp, sy, hl) => {
	addToDb(window.db, "patients", id, {
		firstName: fn,
		lastName: ln,
		insured: msp,
		symptoms: sy,
		homeLocation: hl // geocode this!!
	})
}
