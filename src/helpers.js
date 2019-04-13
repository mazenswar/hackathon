import React from 'react'

const cards = (doctors) => {
    return doctors.map(doctor => {
        return <DoctorCard doctor={doctor}/>
    })
}


export default  cards
