import { CONFIG } from '../config';

function WhatsAppButton() {
  return (
    <a 
      href={`https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.defaultMessage)}`} 
      className="btn whatsapp-btn text-white rounded-circle shadow-lg"
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        fontSize: '1.5rem'
      }}
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;