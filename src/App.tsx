import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <LinkShortening />
      <AdvancedStatistics />
      <Footer />
    </div>
  )
}

export default App
