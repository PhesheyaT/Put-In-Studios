import { useNavigate } from 'react-router-dom';
import { CONFIG } from '../config';

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <section 
        id="home" 
        className="hero-section text-white" 
        style={{
          backgroundImage: `linear-gradient(rgba(13, 110, 253, 0.4), rgba(13, 110, 253, 0.4)), url(${require('../assets/images/image1.jpeg')})`
        }}
      >
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-2 fw-bold mb-4">Transform Your Vision Into Reality</h1>
              <p className="lead mb-4 fs-5">Award-winning 3D visualization studio delivering photorealistic interior designs, stunning renders, and captivating animations that sell your projects before they're built.</p>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning me-3 fs-5"></i>
                  <span className="fs-6">48-hour turnaround guaranteed</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning me-3 fs-5"></i>
                  <span className="fs-6">Unlimited revisions included</span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-check-circle-fill text-warning me-3 fs-5"></i>
                  <span className="fs-6">100% satisfaction guarantee</span>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-start">
                <button onClick={() => navigate('/services')} className="btn btn-warning btn-lg px-5 fw-bold text-dark">View Our Services</button>
                <a href={`https://wa.me/${CONFIG.whatsapp.number}`} className="btn btn-outline-light btn-lg px-4">Get Quote</a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <video 
                className="hero-video rounded shadow-lg" 
                autoPlay 
                muted 
                loop
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              >
                <source src={require('../assets/images/image9.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Why Industry Leaders Choose Put-In Studios</h2>
            <p className="lead text-muted">We don't just create visuals – we create sales tools that convert prospects into clients</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-lightning-charge text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h4 className="text-primary mb-3">Lightning Fast Delivery</h4>
                <p className="text-muted">Get your renders in 24-48 hours, not weeks. Rush jobs available for urgent presentations.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-gem text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h4 className="text-primary mb-3">Photorealistic Quality</h4>
                <p className="text-muted">Indistinguishable from photography. Our renders help clients visualize and commit to purchases.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-headset text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h4 className="text-primary mb-3">Dedicated Support</h4>
                <p className="text-muted">Direct access to your project manager. Real-time updates and unlimited revisions until perfect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3">Ready to Impress Your Clients?</h2>
          <p className="lead mb-4">Join other satisfied clients who've increased their sales with our stunning 3D visualizations</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href={`https://wa.me/${CONFIG.whatsapp.number}`} className="btn btn-warning btn-lg px-5 fw-bold text-dark">Get Your Quote Now</a>
            <button onClick={() => navigate('/our-work')} className="btn btn-outline-light btn-lg px-4">View Portfolio</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;