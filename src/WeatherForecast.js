import React from "react";

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
        console.log(this.forecasts);
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
                </thead>
                <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ? <span>Loading...</span> : WeatherForecast.renderForecastsTable(this.state.forecasts)

        return (
            <div>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        //API CALL
        const response = await fetch("https://menuapi.tycho.dev/WeatherForecast");
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}

export default WeatherForecast;