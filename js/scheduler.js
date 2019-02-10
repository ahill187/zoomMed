// {
//     start: 1300
//     end: 1400
// } for time objects

export var chooseBestSched = async (db, patient, currentTime) => {
    var patientObj = db.collection("patients").doc('USREMAIL')    
    let doc = await patientObj.get()
    if (doc.exists) {var patientObj = doc.data()}
   // var patientdata ...

}


function addSchedule(patient, clinic, doctor, time){

    // get schedule for clinic from doctor
    if (!clinic.doctors.includes(doctor)) 
    {
        return console.error("Doctor does not exist in this clinic!\n")
    }

    let doctorSchedule = clinic.doctors[doctor].schedule // an array of objects, sorted
    // see if conflicts
    let sTime = time.sTime
    let fTime = time.fTime

    if (sTime >= fTime) 
    {
        return console.error("Start time cannot be later than finish time!\n")
    }
    // add if not, return error if conflict
    let prevSTime = 0
    

    // create schedule object with time, patient name etc, add to doctors schedule, sort 
}

function removeSchedule(clinic, doctor, time)
{
    // removes schedule object that is in that spot
}

function editSchedule(clinic, doctor, newSchedule)
{

}

function checkConflicts(clinic, doctor, time)
{
    // check that doctor exists for that clinic

    // access the  doctors schedule for the day

    // compare the shit
}

