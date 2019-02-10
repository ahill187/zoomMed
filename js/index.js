import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'
import { h, app } from 'hyperapp'

import { CONFIG } from './config'
import { addToDb } from './database'
import { initMap } from './components/Map'

firebase.initializeApp(CONFIG)

window.db = firebase.firestore()

window.dbAdd = addToDb

window.initMap = console.log(google)

const state = {
	count: 0,
	mapping: false,
	mapLoaded: false,
}

const actions = {
	down: () => state => ({ count: state.count - 1 }),
	up: () => state => ({ count: state.count + 1 }),
	map: () => state => {
		return { mapping: true }
	},
	loadMap: () => state => { 
		console.log("YATE")
		return { mapLoaded: true } 
	},
}

window.loadMap = actions.loadMap

const view = (state, actions) => (
	<div>
		<p>bizza</p>
		{state.count}
		<button onclick={() => actions.down()}>ー</button>
		<button onclick={() => actions.up()}>＋</button>
		<button onclick={() => actions.map()}>map</button>
		<div id="map"></div>
		{ state.mapping ? initMap(google) : '' }
	</div>
)

app(state, actions, view, document.body)
