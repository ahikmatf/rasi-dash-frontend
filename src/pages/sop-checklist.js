import React, { Component } from 'react'
import data from '../data/draft-flow.json'

import Columns from 'react-bulma-components/lib/components/columns'
// import Content from 'react-bulma-components/lib/components/content'

import ClassCard from '../components/ClassCard'

export default class SOPChecklist extends Component {
  render() {
    return (
      <div>
        SOPChecklist
        <ClassCard/>
        { console.log(data) }
      </div>
    )
  }
}
