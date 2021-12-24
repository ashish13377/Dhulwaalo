import React, { Component } from "react";

export default class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      removed: false
    };
  }

  componentDidMount() {
    window.onload = () => {
      this.setState({ loaded: true });
      setTimeout(() => {
        this.setState({ remove: true });
      }, 2000);
    };
  }

  render() {
    return this.state.removed ? null : (
      <div id="preloader">
        <div id="ctn-preloader" className={("ctn-preloader", {
            loaded: this.state.loaded
          })}>
          <div className="animation-preloader">
            <div className="spinner" />
            <div class="txt-loading">
            <span data-text-preloader="D" class="letters-loading">
            D
            </span>
            <span data-text-preloader="H" class="letters-loading">
            H
            </span>
            <span data-text-preloader="U" class="letters-loading">
            U
            </span>
            <span data-text-preloader="L" class="letters-loading">
            L
            </span>
            <span data-text-preloader="W" class="letters-loading">
            W
            </span>
            <span data-text-preloader="A" class="letters-loading">
            A
            </span>
            <span data-text-preloader="A" class="letters-loading">
            A
            </span>
            <span data-text-preloader="L" class="letters-loading">
            L
            </span>
            <span data-text-preloader="O" class="letters-loading">
              O
              </span>
          </div>
            <p className="text-center">Loading</p>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
