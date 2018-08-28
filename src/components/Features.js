import React from 'react'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import Container from './Container'

const Features = () => {
  return (
    <section>
      <Container>
        <Flex mx={-3} flexWrap="wrap" justifyContent="center">
          <Box width={[1, 1 / 2, 1 / 3]} p={3}>
            <Feature>
              <h4>Mailer Integrations</h4>
              <p>
                Stack comes with integration for Mail Chimp and Campaign Monitor
                forms - ideal for modern marketing campaigns
              </p>
            </Feature>
          </Box>
          <Box width={[1, 1 / 2, 1 / 3]} p={3}>
            <Feature>
              <h4>Mailer Integrations</h4>
              <p>
                Stack comes with integration for Mail Chimp and Campaign Monitor
                forms - ideal for modern marketing campaigns
              </p>
            </Feature>
          </Box>
          <Box width={[1, 1 / 2, 1 / 3]} p={3}>
            <Feature>
              <h4>Mailer Integrations</h4>
              <p>
                Stack comes with integration for Mail Chimp and Campaign Monitor
                forms - ideal for modern marketing campaigns
              </p>
            </Feature>
          </Box>
        </Flex>
      </Container>
    </section>
  )
}

const Feature = styled.div`
  border-radius: 3px;
  border: 1px solid #ececec;
  padding: 2.5rem;
`

export default Features
