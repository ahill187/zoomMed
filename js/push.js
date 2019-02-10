import { CONFIG } from './config'
import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'
import { addToDb } from './database'

window.db = firebase.firestore()

console.log("let's roll")

window.pushPatientData = (id, msp, sy, hl) => {
	addToDb(window.db, "patients", id, {
		insured: msp,
		symptoms: sy,
		homeLocation: hl // geocode this!!
	})
}
