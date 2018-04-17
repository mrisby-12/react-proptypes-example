import React from "react";
import axios from "axios";

const withPeople = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        people: []
      };
    }
    componentDidMount() {
      axios
        .get("https://www.swapi.co/api/people")
        .then(response => this.setState({ people: response.data.results }));
    }
    render() {
      return (
        <div>
          <Component {...this.props} list={this.state.people} />
        </div>
      );
    }
  };
};

export default withPeople;
