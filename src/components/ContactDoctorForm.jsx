import React from 'react'

const ContactDoctorForm = (props) => {
  return (
    <form>
      Gender:
      <input type="text" value="Gender" />
      <br/>

      Reason for Contact:
      <input type="checkbox" name="reason-for-contact" value="Consultation">Consultation</input>
      <br/>
      <input type="checkbox" name="reason-for-contact" value="Psychological Testing">Psychological Testing</input>
      <br/>
      <input type="checkbox" name="reason-for-contact" value="Therapy Session">Therapy Session</input>
      <br/>
      <input type="text" name="reason-for-contact" value="Other" />
      <br/>

      Description:
      <input type="text" value="Description" />
      <br/>

      <button type="button">Submit</button>
    </form>
  )
}

export default ContactDoctorForm
