import styles from './App.css';
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import React from "react";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
    state = {
        data: {},
        country: "",
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    };
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <br />
                <p>
                    <b>Global and Country Wise Cases of Corona Virus</b>
                </p>
                <br />
                <p>
                    <i>(For a particular select a Country from below)</i>
                </p>
                <br />
                <br />
                <Cards data={data} country={country} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
