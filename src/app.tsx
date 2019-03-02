import React, { Suspense } from 'react'
import { ThemeProvider } from 'emotion-theming'

import theme from './config/theme'
import Container from './components/container'
import Content from './components/content'
import Footer from './components/footer'
import Loader from './components/loader'
import ExchangeRate from './components/exchange-rate'

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Content>
          <Suspense maxDuration={250} fallback={<Loader />}>
            <ExchangeRate />
          </Suspense>
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
