import unsplash from "../api/unsplash";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], loadingClass: "" };

  onSearchSubmit = async term => {
    this.setState({
      loadingClass: "loading"
    });
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 30 }
    });
    this.setState({
      loadingClass: ""
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          submitProp={this.onSearchSubmit}
          loading={this.state.loadingClass}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
