function registerUser(Fname, Lname, email, gender, password, 
    symptoms, insurance, homeLoc) 
{
    let userAccount = {
        firstName: Fname,
        lastName: Lname,
        gender: gender,
        insured: insurance,
        symptom: symptoms,
        homeLocation: homeLoc
    }

    db.collection("patients").doc(email).get()
	.then(doc => {
		if (doc.exists) {
			console.log("already exists")
		} else {
			db.collection("patients").doc(email).set(
                userAccount
            )
			.then(docRef => {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(error => {
				console.error("Error adding document: ", error);
			})
		}
	})
	.catch(err => console.log(err))
}

function registerClinic(name, email, password) 
{
    let account = {
        Name = name,
        email = email,
        Password = password
    }

}

function setOpenhours(sTime, fTime, clinic)
{
    let hours = {
        sTime = sTime,
        fTime = fTime
    }

    // clinic hours = hours
}

