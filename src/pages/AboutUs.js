function AboutUs() {
  return (
    <div className="container mt-5 pt-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-4 text-primary">About Put-In Studios</h1>
        <p className="about-content mb-5 mx-auto">
          Put-in Studios is a South African–based creative studio focused on 3D interior design, rendering, and animation. 
          We exist to bridge the gap between ideas and reality by transforming concepts, sketches, and measurements into visually stunning 3D designs.
          Our studio works closely with interior designers, carpentry companies, architects, property developers, and private clients who need professional visual content for presentations, marketing, and client approvals.
          We understand that visuals play a critical role in decision-making. That’s why we prioritize accuracy, realism, and detail in every project. Whether it’s a single kitchen render or a full animated walkthrough, Put-in Studios delivers visuals that tell a clear story and add real value to your business or project.
          </p>
        
        <h2 className="fw-bold mb-4 text-primary">We Offer</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-3 col-sm-6">
            <div className="text-center">
              <i className="bi bi-check-circle-fill about-feature-icon text-primary mb-3"></i>
              <h6>Professional 3D Visualization</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="text-center">
              <i className="bi bi-check-circle-fill about-feature-icon text-primary mb-3"></i>
              <h6>Accuracy & Realism</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="text-center">
              <i className="bi bi-check-circle-fill about-feature-icon text-primary mb-3"></i>
              <h6>Fast Turnaround</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="text-center">
              <i className="bi bi-check-circle-fill about-feature-icon text-primary mb-3"></i>
              <h6>Remote Consultations</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;