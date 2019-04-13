import React from 'react'

const DoctorCard = props => {

    return(
        <div className="doctor-card">
            <img src={props.doctor.img_url}/>
        </div>
    )
}
export default DoctorCard
