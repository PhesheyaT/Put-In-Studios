import { CONFIG } from '../config';

function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-box me-2 text-light"></i>
              {CONFIG.business.name}
            </h5>
            <p className="mb-3">
              South African-based 3D design and visualization studio specializing in interior design, 
              rendering, and animation services.
            </p>
            <div className="d-flex gap-3">
              <a href={CONFIG.social.instagram} className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href={CONFIG.social.facebook} className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href={CONFIG.social.twitter} className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href={CONFIG.social.whatsapp} className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp" style={{fontSize: '1.5rem'}}></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">3D Interior Design</li>
              <li className="mb-2">3D Rendering</li>
              <li className="mb-2">3D Animation</li>
              <li className="mb-2">Custom Modeling</li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="mb-2">
              <i className="bi bi-geo-alt-fill text-light me-2"></i>
              {CONFIG.contact.location}
            </div>
            <div className="mb-2">
              <i className="bi bi-telephone-fill text-light me-2"></i>
              {CONFIG.contact.phone}
            </div>
            <div className="mb-2">
              <i className="bi bi-envelope-fill text-light me-2"></i>
              <a href={`mailto:${CONFIG.contact.email}`} className="text-light text-decoration-none">{CONFIG.contact.email}</a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Business Hours</h6>
            <div className="mb-1">{CONFIG.business.hours}</div>
            <div className="mb-3">{CONFIG.business.availability}</div>
            <a href={`https://wa.me/${CONFIG.whatsapp.number}`} className="btn btn-light btn-sm text-primary fw-bold">Get Quote</a>
          </div>
        </div>
      </div>
      
      <div className="border-top border-light border-opacity-25">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <small>© 2024 {CONFIG.business.name}. All rights reserved.</small>
            </div>
            <div className="col-md-6 text-md-end">
              <small>{CONFIG.business.tagline}</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;