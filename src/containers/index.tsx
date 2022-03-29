import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layout/index'

import Image from '../components/Image'
import Heading from '../components/Heading'
import {TextComponent} from "../components/Text";
import img from "../images/homepage-section4.png";

import { GatsbyImageFluidProps } from 'gatsby-image'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: GatsbyImageFluidProps
    }
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.spacing.unit * 3}px;

 background: transparent url(${img}) 0% 0% no-repeat padding-box;

`


export default ({ data, location }: IndexPageProps) => {
  const { image, site } = data
  console.log("location ",location)
  return (
    <Layout location={location}>
      <Wrapper>
     <div style={{width:"30%"}}> <TextComponent.Title>Nostalgické kouzl hrubého Jeseníku</TextComponent.Title></div>
      
       <div style={{width:"40%",textAlign:"center"}}> <TextComponent.Text >Hrubý Jeseník je druhým největším pohořím České republiky. Na rozdíl od Krkonoš a Šumavy není ale tak turisticky navštěvovaný, což má své velké výhody. Úchvatný ráz krajiny ještě nestihla pozměnit ruka člověka a zdejší neposkvrněná příroda má v sobě léčivou sílu. Nadechněte se a objevujte čistou krásu jesenických hor. Záleží jen na vás, zda pěšky, na kole či na lyžích.</TextComponent.Text></div>
    
      </Wrapper>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    image: file(relativePath: { eq: "icon.png" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
