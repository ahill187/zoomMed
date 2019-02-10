import {h, app} from 'hyperapp'

var startloc = {lat: 49.264219, lng: -123.168874}
var ZenClinic = {lat: 49.264054, lng: -123.157232}
var BayswaterClinic = {lat: 49.264397, lng: -123.171408}
var MSKClinic = {lat: 49.268163, lng: -123.170301}
var ConnectClinic = {lat: 49.257293, lng: -123.167636}
var WELLClinic = {lat: 49.263690, lng: -123.211498}
var map;
var clinicMarker = 'http://maps.google.com/mapfiles/kml/shapes/hospitals.png'

export const initGoogleMaps = () => {
	console.log("initting the maps of the google")
	return (
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8cVX0QiIum-7ZPAVLS2Lh1fHPUNVeekA&callback=initMap" async defer></script>
	)
}

export var initMap = async (db, google) => {	
		var clinic = db.collection("clinics").doc('zenclinic1234567@gmail.com')
		var zenLoc = {}
		let doc = await clinic.get()
		console.log(doc.data())
		console.log(`if it worked this will be a name: ${doc.data().name}`)
		if (doc.exists) {
			var zenLocTemp = doc.data().location
			zenLoc.lat = zenLocTemp._lat
			zenLoc.lng = zenLocTemp._long
		}
		var startloc = {lat: 49.264219, lng: -123.168874}
		var ZenClinic = {lat: 49.264054, lng: -123.157232}
		var BayswaterClinic = {lat: 49.264397, lng: -123.171408}
		var MSKClinic = {lat: 49.268163, lng: -123.170301}
		var ConnectClinic = {lat: 49.257293, lng: -123.167636}
		var WELLClinic = {lat: 49.263690, lng: -123.211498}
		var map;
		var clinicMarker = 'http://maps.google.com/mapfiles/kml/shapes/hospitals.png'
		var map = new google.maps.Map(document.getElementById('map'), {
			center: startloc,
			zoom: 15
		})
		var marker = new google.maps.Marker({
			position: startloc,
			icon: 'https://maps.google.com/mapfiles/kml/shapes/man.png' ,
			map: map
		})
		var markerZen = new google.maps.Marker({position: zenLoc, icon: clinicMarker, map: map, title: 'Zen Clinic'});
		var markerBaysw = new google.maps.Marker({position: BayswaterClinic, icon: clinicMarker, map: map});
		var markerMSK = new google.maps.Marker({position: MSKClinic, icon: clinicMarker, map: map});
		var markerConnect = new google.maps.Marker({position: ConnectClinic, icon: clinicMarker, map: map});
		var markerWELL = new google.maps.Marker({position: WELLClinic, icon: clinicMarker, map: map});
		
		var infoWindow = new google.maps.InfoWindow({content: '<button type="button">Click Me!</button>'})
		markerZen.addListener('click', function(){
			infoWindow.open(map, markerZen)
		})
	
	
}