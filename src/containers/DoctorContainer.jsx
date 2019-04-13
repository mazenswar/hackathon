import React, {Component} from 'react'
import DoctorCard from '../components/DoctorCard.jsx'
import  cards  from '../helpers'

export default class DoctorContainer extends Component {

    constructor(props) {
    	super(props);
        this.state = {
            doctors: []
        }

        this.getDoctorCards = this.getDoctorCards.bind(this)
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
            return <DoctorCard doctor={doctor}/>
        })
    }
    render(){
        return(
            <div>
                {this.getDoctorCards()}
            </div>
        )
    }
}
