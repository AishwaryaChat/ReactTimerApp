const React = require('react')
const {Link, IndexLink} = require('react-router') // provide the links to route to different paths

export default class Nav extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li className='brand-logo center'>React Timer App</li>
              <li><IndexLink to='/' activeClassName='active'>Timer</IndexLink></li>
              <li><Link to='/' activeClassName='active'>Count Down</Link></li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>Created By</li>
              <li><a href="https://github.com/AishwaryaChat" target='_blank'>Aishwarya</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
