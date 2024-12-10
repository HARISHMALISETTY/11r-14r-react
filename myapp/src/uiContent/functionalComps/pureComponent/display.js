// import React from 'react'

//  function Display(props) {
//     console.log("display-comp is rendering")
//   return (
//     <div>
//         <h1>{props.value}</h1>
//     </div>
//   )
// }

// export default React.memo(Display);


import React, { PureComponent } from 'react'

export default class display extends PureComponent {
  render(props) {
    console.log("display-rendering")
    return (
      <div>{this.props.value}</div>
    )
  }
}
