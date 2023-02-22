import {Component}from "react";
import './PersonalCard.css'

class PersonalCard extends Component {
    render () {
        const lastName = this.props.lastName
        const firstName = this.props.firstName
        const age = this.props.age
        const hairColor = this.props.hairColor

        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p> {age}</p>
                <p> {hairColor}</p>
            </div>
        )
    }
}

export default PersonalCard