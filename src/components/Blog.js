// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './blog.css'; // Optional: for any custom CSS

const blog = () => {
  return (
    <div className="container my-5">
      <section className="testimonials mb-5">
        <h2 className="mb-4">Testimonials</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="path-to-image" alt="Josh Brollins" className="rounded-circle mr-3" width="50" height="50" />
                  <div>
                    <h5 className="card-title">Josh Brollins</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="path-to-image" alt="Josh Brollins" className="rounded-circle mr-3" width="50" height="50" />
                  <div>
                    <h5 className="card-title">Josh Brollins</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Blogs</h2>
          <a href="#" className="btn btn-link">View All</a>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="path-to-image" className="card-img-top" alt="Blog 1" />
              <div className="card-body">
                <h5 className="card-title">Account Management Tips</h5>
                <p className="card-text"><small className="text-muted">May 13, 2019 by Allison Fox</small></p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur sadipscing elit...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="path-to-image" className="card-img-top" alt="Blog 2" />
              <div className="card-body">
                <h5 className="card-title">Account Management Tips</h5>
                <p className="card-text"><small className="text-muted">May 13, 2019 by Allison Fox</small></p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur sadipscing elit...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="path-to-image" className="card-img-top" alt="Blog 3" />
              <div className="card-body">
                <h5 className="card-title">Account Management Tips</h5>
                <p className="card-text"><small className="text-muted">May 13, 2019 by Allison Fox</small></p>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur sadipscing elit...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default blog;
