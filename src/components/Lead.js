import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'
import { Flex, Box } from 'rebass'
import Container from './Container'

const Lead = () => {
  return (
    <LeadWrapper>
      <Container>
        <Flex justifyContent="center">
          <Box width={[1, 2 / 3]}>
            <LeadHead>All the tools you'll need</LeadHead>
            <LeadText>
              Whether you’re building a welcome mat for your SaaS or a clean,
              corporate portfolio, Stack has your design needs covered.
            </LeadText>
          </Box>
        </Flex>
      </Container>
    </LeadWrapper>
  )
}

const LeadHead = styled.h3`
  text-align: center;
  font-size: ${between('23px', '33px')};
  margin-bottom: ${between('16px', '24px')};
  color: #252525;
`

const LeadText = styled.p`
  text-align: center;
  font-size: ${between('16px', '19px')};
  color: #808080;
`

const LeadWrapper = styled.section`
  margin: 5.5rem 0;
`

export default Lead
