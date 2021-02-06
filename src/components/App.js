import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Input } from '@material-ui/core'

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [message, setMessage] = useState(props.message)

  return (
    <>
      <Header count={count}/>
      <p>
        {" "}
        {message} : {count}{" "}
      </p>
      <Button onClick={() => setCount(() => count + 1)}> + </Button>
      <Button onClick={() => setCount(() => count - 1)}> - </Button>
      <div>
        message : {" "}
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage((msg) => (msg = e.target.value))}
        />
      </div>
      <Footer message={message}/>
    </>
  )
}

App.defaultProps = {
  message : "hello",
  count : 0,
}

export default App