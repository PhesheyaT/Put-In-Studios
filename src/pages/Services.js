function Services() {
  return (
    <div className="container mt-5 pt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Our Services</h1>
        <p className="lead">Professional 3D visualization solutions</p>
      </div>
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center p-4">
              <div className="service-icon bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-house-door"></i>
              </div>
              <h4 className="text-primary">3D Interior Design</h4>
              <ul className="list-unstyled text-start">
                <li>• Kitchens</li>
                <li>• Wardrobes</li>
                <li>• TV Units</li>
                <li>• Bedrooms</li>
                <li>• Commercial Interiors</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center p-4">
              <div className="service-icon bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-camera"></i>
              </div>
              <h4 className="text-primary">Photorealistic Rendering</h4>
              <ul className="list-unstyled text-start">
                <li>• High-quality still images</li>
                <li>• Realistic lighting</li>
                <li>• Premium textures</li>
                <li>• Material accuracy</li>
                <li>• Presentation ready</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center p-4">
              <div className="service-icon bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-play-circle"></i>
              </div>
              <h4 className="text-primary">3D Animation</h4>
              <ul className="list-unstyled text-start">
                <li>• Interior walkthroughs</li>
                <li>• Design concept videos</li>
                <li>• Marketing animations</li>
                <li>• Product showcases</li>
                <li>• Virtual tours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="who-we-serve-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-primary">Who We Serve</h2>
            <p className="lead">Professional visual content for various industries</p>
          </div>
          <div className="row g-4">
            <div className="col-md-3 text-center">
              <i className="bi bi-palette who-we-serve-icon text-primary mb-3"></i>
              <h5>Interior Designers</h5>
            </div>
            <div className="col-md-3 text-center">
              <i className="bi bi-tools who-we-serve-icon text-primary mb-3"></i>
              <h5>Carpentry Companies</h5>
            </div>
            <div className="col-md-3 text-center">
              <i className="bi bi-building who-we-serve-icon text-primary mb-3"></i>
              <h5>Property Developers</h5>
            </div>
            <div className="col-md-3 text-center">
              <i className="bi bi-person who-we-serve-icon text-primary mb-3"></i>
              <h5>Private Clients</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;