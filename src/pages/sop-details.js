import React, { Component } from 'react';
import DivisionCard from '../components/DivisionCard'


class SOPDetails extends Component {
    render() {
        let classId = this.props.match.params.id

        return (
            <div>
                <DivisionCard name={"Production"} classId={classId}/>
                <DivisionCard name={"Operation"} classId={classId}/>
                <DivisionCard name={"Marketing"} classId={classId}/>
            </div>
        );
    }
}

export default SOPDetails;