import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'
import { h, app } from 'hyperapp'

import { CONFIG } from './config'
import { addToDb } from './database'
import { initMap } from './components/Map'
import { dateConvert } from './util'

firebase.initializeApp(CONFIG)

window.db = firebase.firestore()

window.dbAdd = addToDb

window.initMap = () => { 
	if (!google) { 
		console.log("google not present, restart") 
	} 
	initMap(firebase.firestore(), google)
}
const state = {
	count: 0,
	time: -1,
	mapping: false,
	mapLoaded: false,
}

const actions = {
	down: () => state => ({ count: state.count - 1 }),
	up: () => state => ({ count: state.count + 1 }),
	map: () => state => {
		initMap(firebase.firestore(), google)
		return { mapping: true }
	},
	loadMap: () => state => { 
		console.log("YATE")
		return { mapLoaded: true } 
	},
	setTime: (time) => state => ({ time: time })
}

window.loadMap = actions.loadMap


const view = (state, actions) => (
		<div id="map">
			{ initMap(firebase.firestore(), google) }
		</div>
	)

	// var newTime = dateConvert(state.time)
	// console.log(newTime)

app(state, actions, view, document.getElementById("fitter"))
