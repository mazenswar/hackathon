import React from 'react'

const Form = (props) => {
  return (
    <form>
      Gender:
      <input type="text" value="Gender" />
      <br/>

      Psychological Issue(s):
      <input type="checkbox" name="psychological-issues" value="Depression">Depression</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Anxiety">Anxiety</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Panic Attacks">Panic Attacks</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Dietary">Dietary</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Phobia">Phobia</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="PTSD">PTSD</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Psychosis">Psychosis</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Schizophrenia">Schizophrenia</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Self-Esteem">Self-Esteem</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Sleep">Sleep</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Suicidal">Suicidal</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Substance Dependency">Substance Dependency</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Dissociative">Dissociative</input>
      <br/>
      <input type="checkbox" name="psychological-issues" value="Unknown">Unknown</input>
      <br/>
      <input type="text" name="psychological-issues" value="Other" />
      <br/>

      <button type="button">Submit</button>
    </form>
  )
}

export default Form
