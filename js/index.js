import { CONFIG } from './config'
import * as firebase from 'firebase'
import * as fb from 'firebase/app'
import 'firebase/firestore'
import { h, app } from 'hyperapp'

import { addToDb } from './database'

firebase.initializeApp(CONFIG)

window.db = firebase.firestore()

window.dbAdd = addToDb

const state = {
	user: {},
}

