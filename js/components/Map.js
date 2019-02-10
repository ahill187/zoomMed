import {h, app} from 'hyperapp'



export const initGoogleMaps = () => {
	console.log("initting the maps of the google")
	return (
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8cVX0QiIum-7ZPAVLS2Lh1fHPUNVeekA&callback=initMap" async defer></script>
		)
	}
	
	export var initMap = async (db, google, patient) => {	
		// Zen Clinic Load
		var zenClinic = db.collection("clinics").doc('zenclinic1234567@gmail.com')
		let doc = await zenClinic.get()
		if (doc.exists) { var zenClinic = doc.data()}
		var zenLoc = {lat: zenClinic.location._lat, lng: zenClinic.location._long}
		
		// var getem = await db.collection("clinics").get()
		// console.log(getem)
		// for (doc in getem) {
		// 	console.log(doc)
		// }

		var gotem = await db.collection("patients").get()
		console.log(gotem)
		for (doc in gotem) {
			console.log(doc)
		}

		// Bayswater Clinic Load
		var baysClinic = db.collection("clinics").doc('bayswaterclinicals@gmail.com')
		doc = await baysClinic.get()
		if (doc.exists) { var baysClinic = doc.data()}
		var baysLoc = {lat: baysClinic.location._lat, lng: baysClinic.location._long}
		
		
		// MSK Clinic Load
		var MSKClinic = db.collection("clinics").doc('mskmedicals@gmail.com')
		doc = await MSKClinic.get()
		if (doc.exists) { var MSKClinic = doc.data()}
		var MSKLoc = {lat: MSKClinic.location._lat, lng: MSKClinic.location._long}
		
		
		// Connect Clinic Load
		var ConnClinic = db.collection("clinics").doc('connectingclinics@gmail.com')
		doc = await ConnClinic.get()
		if (doc.exists) { var ConnClinic = doc.data()}
		var ConnLoc = {lat: ConnClinic.location._lat, lng: ConnClinic.location._long}
		
		
		// WELL Clinic Load
		var WELLClinic = db.collection("clinics").doc('wellnessclinicalisms@gmail.com')
		doc = await WELLClinic.get()
		if (doc.exists) { var WELLClinic = doc.data()}
		var WELLLoc = {lat: WELLClinic.location._lat, lng: WELLClinic.location._long}
		
		
		var startloc = {lat: 49.264219, lng: -123.168874}
		
		var map;
		var clinicMarker = require('../../assets/symbolsmol.png')//'assets/symbol.png'
		var map = new google.maps.Map(document.getElementById('map'), {
			center: startloc,
			zoom: 15
		})
		var marker = new google.maps.Marker({
			position: startloc,
			icon: '../../assets/personformap.png' ,
			map: map
		})
		var markerZen = new google.maps.Marker({position: zenLoc, icon: clinicMarker, map: map, title: 'Zen Clinic'});
		var markerBaysw = new google.maps.Marker({position: baysLoc, icon: clinicMarker, map: map});
		var markerMSK = new google.maps.Marker({position: MSKLoc, icon: clinicMarker, map: map});
		var markerConnect = new google.maps.Marker({position: ConnLoc, icon: clinicMarker, map: map});
		var markerWELL = new google.maps.Marker({position: WELLLoc, icon: clinicMarker, map: map});
		
		var infoWindowZen = new google.maps.InfoWindow({content: `<strong>Dr. Danny Devita</strong>
		Gender: Male
		Hours: 11:00am-6:00pm \ <strong>Dr. Donkey Kong</strong>
		Gender: Male
		Hours: 3:00pm-6:00pm
		<button type="button">Click Me!</button>`})
		markerZen.addListener('click', function(){
			infoWindowZen.open(map, markerZen)
		})
		
		var infoWindowBaysw = new google.maps.InfoWindow({content: `<button type="button">Click Me!</button>`})
		markerBaysw.addListener('click', function(){
			infoWindowBaysw.open(map, markerBaysw)
		})
		
	}
	