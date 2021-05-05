import React from 'react'
import "./LoadingComponent.css"
import Loader from "react-loader-spinner";

function LoadingComponent() {
    return (
        <div className="loadingComponent">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          <h1>Loading</h1>
        </div>
      );
}

export default LoadingComponent
