import styled, { createGlobalStyle } from 'styled-components'
import Stats from '../components/stats'
import CountrySelector from '../components/CountrySelector'

const Wrapper = styled.p`
  color: blue;
`

const GlocalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default function IndexPage() {
  return (
    <div>Next
      <GlocalStyle/>
      {/* <Wrapper>
        Hello World
      </Wrapper> */}
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector />
    </div>
  )
}