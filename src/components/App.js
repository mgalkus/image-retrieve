import unsplash from "../api/unsplash";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ErrorMessage from "./ErrorMessage";


class App extends React.Component {
  state = { images: [], loadingClass: "", loadingFinished: false };

  onSearchSubmit = async term => {
    this.setState({
      loadingClass: "loading"
    });
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 30 }
    });
    this.setState({
      images: response.data.results,
      loadingClass: "",
      loadingFinished: true
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          submitProp={this.onSearchSubmit}
          loading={this.state.loadingClass}
        />
        {this.state.images.length < 1 && this.state.loadingFinished == true && <ErrorMessage/>}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
