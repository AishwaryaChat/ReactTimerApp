const React = require('react')
import Navigation from 'Navigation'

const Main = (props) => {
    return (
      <div>
        <div>
          <div>
            <Navigation />
            <p>Main.jsx rendered</p>
            {/*{this.props.children} this can be removed as the props is already passed as argument */}
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default Main
