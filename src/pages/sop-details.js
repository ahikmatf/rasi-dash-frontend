import React, { Component } from 'react';
import DivisionCard from '../components/DivisionCard'
import Heading from 'react-bulma-components/lib/components/heading'
import Box from 'react-bulma-components/lib/components/box'

import summary from '../data/checklist/summary.json'

class SOPDetails extends Component {
    render() {
        let classId = this.props.match.params.id
        let className = summary["data"][classId]["class-name"]

        return (
            <div>
                <Heading size={1}>{className}</Heading>
                <Box>
                    <DivisionCard name={"Production"} classId={classId}/>
                </Box>
                <Box>
                    <DivisionCard name={"Operation"} classId={classId}/>
                </Box>
                <Box>
                    <DivisionCard name={"Marketing"} classId={classId}/>
                </Box>
            </div>
        );
    }
}

export default SOPDetails;