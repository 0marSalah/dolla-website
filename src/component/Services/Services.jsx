import React from 'react'
import { Card, CardWrapper, Servicescontainer, Title } from './ServicesStyle'
import img1 from '../../images/srv-2.svg'
import img2 from '../../images/svg-2.svg'
import img4 from '../../images/srv-1.svg'

function Services() {
  return (
    <Servicescontainer  id={"services"}>
      <Title>
        Our Services
      </Title>
      <CardWrapper>
        <Card>
          <div className="img-wrap">
            <img src={img1} alt="CardThree" />
          </div>
          <h3>Redux Expenses</h3>
          <p>We help reduce your fees 
            and increase your overall revenue.
          </p>
        </Card>
        <Card>
          <div className="img-wrap">
            <img src={img2} alt="CardTwo" />
          </div>
          <h3>Virtual Offices</h3>
          <p>You can access our platform online
            anywhere in the world
          </p>
        </Card>
        <Card>
          <div className="img-wrap">
            <img src={img4} alt="CardOne" />
          </div>
          <h3>Premium Benefits</h3>
          <p>Unlock our special membership card that
            return 5% cash back
          </p>
        </Card>
      </CardWrapper>
    </Servicescontainer>
  )
}

export default Services