import './HomePage.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import {AppConstants} from "../../AppConstants";
import LoaderComponent from "../../components/loader/LoaderComponent";
import SliderComponent from "../../components/slider/SliderComponent";

class HomePage extends Component {

  request = new HttpRequest();

  constructor() {
    super();
    this.state = HomePage.defaultState();
  }

  static defaultState() {
    return { isLoading: true, content: {} }
  }

  componentWillMount() {
    this.request.get(AppConstants.ENDPOINT_HOME).then( (res) => {
      this.setState({ isLoading: false, content: JSON.parse(res['text']) });
    });
  }

  render() {
    const { isLoading, content } = this.state;
    const paddingStyle = { paddingTop: '800px', clear: 'both' };
    if (isLoading) {
      return (<LoaderComponent />);
    }
    return (
        <section>
          <SliderComponent slides={ content['slides'] } />
          <div style={paddingStyle}></div>
        </section>
    )
  }

}

export default HomePage;