import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class BootstrapNavBar extends Component{
	constructor(){
		super();
		this.state = {
			activeLink: ""
		}
	}

	setActiveLink(linkRoute){
		this.setState({
			activeLink: linkRoute
		})
	}

  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">WebSiteName</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><Link to="/">Home</Link></li>
						<li><Link onClick={()=>{this.setActiveLink('/atlanta')}} to="/atlanta">
						<span className={this.state.activeLink=='/atlanta' ? 'active' : ""}>Weather</span></Link></li>
		      	<li><Link onClick={()=>{this.setActiveLink('/mayormessage')}} to="/mayormessage">Mayor Message</Link></li>
		      	<li><Link onClick={()=>{this.setActiveLink('/images')}} to="/images">Images</Link></li>
		      	<li><Link onClick={()=>{this.setActiveLink('/about')}} to="/about">About</Link></li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar