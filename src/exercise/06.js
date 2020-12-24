// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const refContainer = React.useRef('Brampage');
  // function handleFormSubmitWithRef(event) {
  //   event.preventDefault();
  //   console.dir(refContainer.current.value);
  // }

  // const [error, setError] = React.useState(null)
  const [username, setUserName] = React.useState('');

  function handleFormSubmit(event) {
    event.preventDefault()
    // onSubmitUsername(event.target.elements.username.value)
    onSubmitUsername(username)

    console.dir(event.target) // Console.log would show us the dom node, dir shows us the object.
  }

  function handleChange(event) {
    // const {value} = event.target
    // const isLowerCase = value === value.toLowerCase()
    // setError(isLowerCase ? null : 'Username must be lower case')

    const {value} = event.target;
    setUserName(value.toLowerCase());
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={refContainer}
          onChange={handleChange}
          value={username}
          id="username"
          type="text"
        />
      </div>
      {/* {error ? <div role="alert" style={{color: 'red'}}>{error}</div> : null} */}
      {/* <button disabled={!!error} type="submit">Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  // Prop gets passed to the UsernameForm (which is in this case a function)
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
