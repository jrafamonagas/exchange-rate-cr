import React, { Suspense } from 'react'
import { unstable_createRoot as createRoot } from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider } from 'emotion-theming'

import theme from './config/theme'
import Container from './components/container'
import Content from './components/content'
import Footer from './components/footer'
import Loader from './components/loader'
import ExchangeRate from './components/exchange-rate'

function App(): JSX.Element {
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

library.add(faExchangeAlt)
createRoot(document.getElementById('root')).render(<App />)
