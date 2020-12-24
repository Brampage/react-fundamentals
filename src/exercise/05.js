// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const backgroundColor = (color) => ({backgroundColor: color})

// const smallBox = <div className="box box--small" style={backgroundColor('lightBlue')}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={backgroundColor('lightpink')}>medium pink box</div>
// const largeBox = <div className="box box--large" style={backgroundColor('orange')}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

function Box({className = '', style, children, ...other}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...other}
    >
      {children ?? 'Box'}
    </div>
  )

  // We are using className here, this is because we're changing it through javascript
  // If you would console.log the element you can see className on the element, but not class.
  // That's probably why we don't need to have the children inside the div itself because
  // it will map children to the element's property that is responsible for showing the data (check EnforcedStyledComponent).
}

function EnforcedStyledComponent({style, ...otherProps}) {
  return (
    <div
      className="box box--medium"
      style={{...style, backgroundColor: 'red'}}
      {...otherProps}
    />
  )
  // If a background color was passed in props.style, it would be overwritten by component itself.
  // The passed styles are first spreaded on the style, if there's something the same it will overwrite
  // e.g. the background color.

  // The children don't have to be inside the div, you can also just do something like <div ...props />
  // as you can see above.
}

function SizedBox({size = 'small', className = '', style, ...otherProps}) {
  const boxClasses = `box box--${size}`
  return (
    <div
      className={`${boxClasses} ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
  // Advantage of this component is that the styling is an implementation detail of this component
  // you don't have to pass in correct styles inside the consuming component.
}

function TestComponent({children}) {
  return <div className="box box--medium">{children}</div>
}

function App() {
  return (
    <div>
      <Box className="box--medium" style={{backgroundColor: 'lightblue'}}>
        Hello Box Medium
      </Box>
      <Box className="box--small" style={{backgroundColor: 'red'}} />
      <Box className="box--small" />

      <br />
      <br />

      <EnforcedStyledComponent style={{backgroundColor: 'purple'}}>
        Enforced Styled Component (purple won't get applied)
      </EnforcedStyledComponent>

      <br />
      <br />

      <SizedBox size="medium" style={{backgroundColor: 'green'}}>
        SizedBox Small
      </SizedBox>

      <br />
      <br />

      <TestComponent style={{backgroundColor: 'black', color: 'white'}}>
        Props can be applied on the Component Tag, however if not used inside
        the Component's function it will not be used.
      </TestComponent>
    </div>
  )
}

export default App
