import React, { Component } from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns'
import ProgressCard from '../components/ProgressCard'


import production from '../data/checklist/production'
import operation from '../data/checklist/operation'
import marketing from '../data/checklist/marketing'

class DivisionCard extends Component {
    render() {
        let divisionName = this.props.name
        let classId = this.props.classId


        let dataSource
        
        switch(divisionName.toLowerCase()) {
            case "production":
                // code block
                dataSource = production
                break;
            case "operation":
                // code block
                dataSource = operation
                break;
            case "marketing":
                dataSource = marketing
                break
            default:
                // code block
                dataSource = production
                break
        }

        let progressCard = Object.keys(dataSource["data"][classId]["step-items"]).map(key => {
            let cardData = dataSource["data"][classId]["step-items"][key]
            return <ProgressCard key={key} divisionName={divisionName} cardData={cardData} step={key}/>
        })


        return (
            <div>
                <Heading size={4}>{divisionName}</Heading>
                <Columns>
                    {progressCard}
                </Columns>
            </div>
        );
    }
}

export default DivisionCard;