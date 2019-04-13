import React, {Component} from 'react'
import DoctorCard from '../components/DoctorCard.jsx'
import  cards  from '../helpers'
import {Route, Switch} from 'react-router-dom'
export default class DoctorContainer extends Component {

    constructor(props) {
    	super(props);
        this.state = {
            doctors: []
        }

        // this.getDoctorCards = this.getDoctorCards.bind(this)
    }

    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/doctors`)
        .then(res => res.json())
        .then(doctors => {
            this.setState({
                doctors: doctors
            })
        })
    }

    // getDoctorCards() {
    //     this.fetch.then(() => {
    //
    //     })
    //     return <div>hello world </div>
    // }

    getDoctorCards(){
        return this.state.doctors.map(doctor => {
            return <DoctorCard key={doctor.id} doctor={doctor}/>
        })
    }
    // <Switch>

    showPage(renderProps){
        console.log(renderProps);
        // if(this.state.doctors.length > 0){
        //     const doctorIdUrl = renderProps.match.params.id
        //     const doctor = this.state.doctor.find(doctor){return doctor.id. === doctorIdUrl})
        //     return <RapCard doctor={doctor} />
        // } else {
        //   return null
        // }
    }
    // <Switch>
    // <Route path="/doctor/:id" render={DoctorContainer}/>
    // <Route path="/doctors" component={DoctorContainer}/>
    // </Switch>

    render(){
        return(
            <section className="doctor-container">
                {this.getDoctorCards()}
            </section>
        )
    }
    // </Switch>
}
