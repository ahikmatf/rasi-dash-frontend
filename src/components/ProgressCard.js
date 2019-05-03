import React, { Component } from 'react'

import Columns from 'react-bulma-components/lib/components/columns'
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading'
import Content from 'react-bulma-components/lib/components/content';
import Media from 'react-bulma-components/lib/components/media';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../styles/Card.scss'

export default class ClassCard extends Component {
    constructor() {
        super();
        this.state = { 
            checked: false,
            volume: 0,
        };
        this.handleChange = this.handleChange.bind(this)        
    }

    handleChange(checked) {
        this.setState({ checked });
    }
    
    handleOnChange = (value) => {
        console.log(value)
        this.setState({
          status: value
        })
      }

    render() {
        let cardData = this.props.cardData
        let cardCSS

        switch (this.state.status) {
            case 0:
                cardCSS = ""
                break
            case 1:
                cardCSS = `blink-${this.props.divisionName.toLowerCase()}`
                break
            case 2:
                cardCSS = `blink-${this.props.divisionName.toLowerCase()}`
                break
            case 3:
                cardCSS = `card-${this.props.divisionName.toLowerCase()}`
                break
            default:
                cardCSS = ""
                break
        }

        return (
            <Columns.Column 
                mobile={{
                    size: 'full',
                }}
                tablet={{
                    size: 'one-third',
                }}
                desktop={{
                    size: 'one-quarter',
                }}
                widescreen={{
                    size: 'one-fifth',
                }}
                fullhd={{
                    size: 2,
                }}
            >
                <Card className={cardCSS}>
                    <Card.Header>
                        <Media className="sop-item-card-header">
                            <Media.Item className="sop-item-card-title">
                                <Card.Header.Title>{this.props.step}</Card.Header.Title>
                            </Media.Item>
                            <Media.Item className="sop-item-card-switch">
                                <Slider 
                                    max={3} 
                                    defaultValue={0} 
                                    marks={{ 0: "halt", 1: "draft", 2: "progress", 3: "done" }} 
                                    step={null} 
                                    trackStyle={{ backgroundColor: 'white'}}
                                    onChange={this.handleOnChange}
                                />
                            </Media.Item>
                        </Media>
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
                            <Heading size={3}>{cardData["item-name"]}</Heading>
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
        )
    }
}