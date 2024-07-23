import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"



function App() {

  const [investment, setInvestment] = useState({
    initialInvestment: 11110,
    annualInvestment: 22320,
    expectedReturn: 430,
    duration: 10
  })
  
  const inputIsValid = investment.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setInvestment(prevInvestment => {
        return { ...prevInvestment, [inputIdentifier]: +newValue }
    }
    )
}

  return (<>
    <Header />
    <UserInput investment={investment} handleChange={handleChange} />
    {inputIsValid ? <Result investment={investment} /> : <p className="center">Please give a year greater than 0</p>}
  </>
  )
}

export default App
