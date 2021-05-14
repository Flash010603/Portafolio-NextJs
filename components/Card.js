import React from 'react'

export const Card = () => {
    return (
        <div className="card rounded my-3 col-3 mx-1">
          <div className="row">
            <div className="col-12 m-0 p-0">
            <img src="https://image.freepik.com/vector-gratis/web-login-ui-diseno-plantilla-vector_14791-141.jpg" className="img-fluid rounded" alt="..." />
            </div>
          </div>
          <div className="card-body p-0 pt-4">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <button className="btn btn-block btn-outline-dark rounded"> About this</button>
          </div>
      </div>
    )
}
