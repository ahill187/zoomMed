function register(type, name, email, password) 
{
    let account = {
        Name = name,
        email = email,
        Password = password
    }

    if (type === 'clinic') 
    {
        // add account to list of clinics
    } else if (type === 'patient')
    {
        // add account to patient list, have to handle FName, LName
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

