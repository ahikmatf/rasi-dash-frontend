import React, { Component } from 'react'

import Columns from 'react-bulma-components/lib/components/columns'
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading'
import Content from 'react-bulma-components/lib/components/content';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class ClassCard extends Component {
    constructor() {
        super();
        this.state = { 
            checked: false,
            volume: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(checked) {
        this.setState({ checked });
    }
    
    handleOnChange = (value) => {
        this.setState({
          volume: value
        })
      }

  render() {
    return (
        <Columns>
            <Columns.Column size={3}>
            <Card className={this.state.checked ? 'card-production' : ''}>
                <Card.Header>
                    {/* <Media className="sop-item-card-header">
                        <Media.Item className="sop-item-card-title">
                            <Card.Header.Title>2 Days Left</Card.Header.Title>
                        </Media.Item>
                        <Media.Item className="sop-item-card-switch">
                        </Media.Item>
                    </Media> */}
                    <Slider 
                        max={3} 
                        defaultValue={0} 
                        marks={{ 0: "halt", 1: "draft", 2: "on-progress", 3: "done" }} 
                        step={null} 
                        trackStyle={{ backgroundColor: 'white'}}
                        onChange={this.handleOnChange}
                    />
                </Card.Header>
                
                <Card.Content>
                    {/* <Media>
                        <Media.Item position="left">
                            <Heading size={1}>01</Heading>                        
                        </Media.Item>
                        <Media.Item>
                            <Heading subtitle size={6}>
                            Bootcamp
                            </Heading>
                            <Heading size={5}>PeopleInc</Heading>
                        </Media.Item>
                    </Media> */}
                    <Content>
                        <Heading size={3}>Kurikulum Making</Heading>
                    </Content>
                </Card.Content>
                {/* <Card.Footer>
                    <Card.Footer.Item renderAs="a" href="#Yes">
                        <Heading size={6}>STATUS: <b>Production</b></Heading>
                    </Card.Footer.Item>
                    <Card.Footer.Item renderAs="a" href="#No">
                    No
                    </Card.Footer.Item>
                    <Card.Footer.Item renderAs="a" href="#Maybe">
                    Maybe
                    </Card.Footer.Item>
                </Card.Footer> */}
            </Card>
        </Columns.Column>
    </Columns>
    )
  }
}