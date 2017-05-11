const React = require('react')

const Main = (props) => {
    return (
      <div>
        <div>
          <div>
            <p>Main.jsx rendered</p>
            {/*{this.props.children} this can be removed as the props is already passed as argument */}
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default Main
