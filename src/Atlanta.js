import React, { Component } from 'react';
// import $ from 'jquery'
import axios from 'axios';

class About extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		const axiosPromise = axios.get(url);
		
		axiosPromise.then((weatherData) =>{
			console.log(weatherData);
			this.setState({
				icon: weatherData.data.weather[0].icon,
				temp: weatherData.data.main.temp,
				temp_min: weatherData.data.main.temp_min,
				temp_max: weatherData.data.main.temp_max,
				desc: weatherData.data.weather[0].description,
			})
		});
	}

	render(){
		let iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<h1><img src={iconUrl} /></h1>
				<h1>{this.state.temp}</h1>
				<h1>{this.state.temp_min}</h1>
				<h1>{this.state.temp_max}</h1>
				<h1>{this.state.desc}</h1>
			</div>
		);
	}
}

export default About;
