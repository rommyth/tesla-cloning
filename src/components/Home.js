import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Section1 from './satu/Section1'
import models from '../images/model-s.jpg'
import modely from '../images/model-y.jpg'
import model3 from '../images/model-3.jpg'
import modelx from '../images/model-x.jpg'
import spanel from '../images/solar-panel.jpg'
import sroof from '../images/solar-roof.jpg'
import acc from '../images/accessories.jpg'

function Home() {
    return (
        <Container>

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={models}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={modely}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={model3}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={modelx}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg={spanel}
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg={sroof}
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg={acc}
                leftBtnText="Shop now"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;
