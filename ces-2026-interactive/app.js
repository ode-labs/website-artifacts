// Modal functionality
const modal = document.getElementById('modal');
const modalSense = document.getElementById('modal-sense');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const modalValue = document.getElementById('modal-value');
const modalValueBox = document.getElementById('modal-value-box');
const modalWhy = document.getElementById('modal-why');
const modalSkepticism = document.getElementById('modal-skepticism');

// SVG Pan and Zoom
const svg = document.getElementById('graph');
let viewBox = { x: 0, y: 0, w: 1400, h: 900 };
let isPanning = false;
let startPoint = { x: 0, y: 0 };
let scale = 1;
const minScale = 0.5;
const maxScale = 3;

function updateViewBox() {
  svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
}

svg.addEventListener('mousedown', (e) => {
  if (e.target.closest('.product-node') || e.target.closest('.node')) return;
  isPanning = true;
  startPoint = { x: e.clientX, y: e.clientY };
  svg.style.cursor = 'grabbing';
});

svg.addEventListener('mousemove', (e) => {
  if (!isPanning) return;
  const dx = (e.clientX - startPoint.x) * (viewBox.w / svg.clientWidth);
  const dy = (e.clientY - startPoint.y) * (viewBox.h / svg.clientHeight);
  viewBox.x -= dx;
  viewBox.y -= dy;
  startPoint = { x: e.clientX, y: e.clientY };
  updateViewBox();
});

svg.addEventListener('mouseup', () => {
  isPanning = false;
  svg.style.cursor = 'grab';
});

svg.addEventListener('mouseleave', () => {
  isPanning = false;
  svg.style.cursor = 'grab';
});

svg.addEventListener('wheel', (e) => {
  e.preventDefault();
  const rect = svg.getBoundingClientRect();
  const mouseX = viewBox.x + (e.clientX - rect.left) * (viewBox.w / rect.width);
  const mouseY = viewBox.y + (e.clientY - rect.top) * (viewBox.h / rect.height);
  
  const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
  const newScale = scale * (e.deltaY > 0 ? 0.9 : 1.1);
  
  if (newScale < minScale || newScale > maxScale) return;
  scale = newScale;
  
  const newW = 1400 / scale;
  const newH = 900 / scale;
  
  viewBox.x = mouseX - (mouseX - viewBox.x) * (newW / viewBox.w);
  viewBox.y = mouseY - (mouseY - viewBox.y) * (newH / viewBox.h);
  viewBox.w = newW;
  viewBox.h = newH;
  
  updateViewBox();
}, { passive: false });

// Touch support for mobile
let lastTouchDistance = 0;

svg.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    isPanning = true;
    startPoint = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  } else if (e.touches.length === 2) {
    lastTouchDistance = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
  }
});

svg.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (e.touches.length === 1 && isPanning) {
    const dx = (e.touches[0].clientX - startPoint.x) * (viewBox.w / svg.clientWidth);
    const dy = (e.touches[0].clientY - startPoint.y) * (viewBox.h / svg.clientHeight);
    viewBox.x -= dx;
    viewBox.y -= dy;
    startPoint = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    updateViewBox();
  } else if (e.touches.length === 2) {
    const distance = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    const zoomFactor = distance / lastTouchDistance;
    const newScale = scale * zoomFactor;
    
    if (newScale >= minScale && newScale <= maxScale) {
      scale = newScale;
      const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const rect = svg.getBoundingClientRect();
      const mouseX = viewBox.x + (centerX - rect.left) * (viewBox.w / rect.width);
      const mouseY = viewBox.y + (centerY - rect.top) * (viewBox.h / rect.height);
      
      const newW = 1400 / scale;
      const newH = 900 / scale;
      
      viewBox.x = mouseX - (mouseX - viewBox.x) * (newW / viewBox.w);
      viewBox.y = mouseY - (mouseY - viewBox.y) * (newH / viewBox.h);
      viewBox.w = newW;
      viewBox.h = newH;
      
      updateViewBox();
    }
    lastTouchDistance = distance;
  }
}, { passive: false });

svg.addEventListener('touchend', () => {
  isPanning = false;
});

// Set initial cursor
svg.style.cursor = 'grab';

const modalLink = document.getElementById('modal-link');
const modalLinkSection = document.getElementById('modal-link-section');

function openModal(productId) {
  const product = productData[productId];
  if (!product) return;

  modalSense.className = `modal-sense sense-${product.sense}`;
  modalSense.innerHTML = `${product.emoji} ${product.sense.charAt(0).toUpperCase() + product.sense.slice(1)}`;
  
  modalName.textContent = product.name;
  modalDescription.textContent = product.description;
  modalValue.textContent = product.value;
  modalValueBox.className = `modal-value border-${product.sense}`;
  modalWhy.textContent = product.why;
  modalSkepticism.textContent = product.skepticism;

  if (product.link) {
    modalLink.href = product.link;
    modalLinkSection.style.display = 'block';
  } else {
    modalLinkSection.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Sense modal elements
const senseModal = document.getElementById('sense-modal');
const senseModalName = document.getElementById('sense-modal-name');
const senseModalEmoji = document.getElementById('sense-modal-emoji');
const senseModalDescription = document.getElementById('sense-modal-description');

function openSenseModal(senseId) {
  const sense = senseData[senseId];
  if (!sense) return;

  senseModalEmoji.textContent = sense.emoji;
  senseModalName.textContent = sense.name;
  senseModalDescription.innerHTML = sense.description.replace(/\n\n/g, '</p><p>');

  senseModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSenseModal() {
  senseModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event listeners for product nodes
document.querySelectorAll('.product-node').forEach(node => {
  node.addEventListener('click', (e) => {
    e.stopPropagation();
    const productId = node.getAttribute('data-product');
    openModal(productId);
  });
});

// Event listeners for sense nodes (including center node)
document.querySelectorAll('.node[data-sense]').forEach(node => {
  node.addEventListener('click', (e) => {
    e.stopPropagation();
    const senseId = node.getAttribute('data-sense');
    openSenseModal(senseId);
  });
});

// Close sense modal on overlay click
senseModal.addEventListener('click', (e) => {
  if (e.target === senseModal) {
    closeSenseModal();
  }
});

// Close modal on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeSenseModal();
  }
});

// Add hover effects for product nodes
document.querySelectorAll('.product-node').forEach(node => {
  const circle = node.querySelector('.product-circle');
  const originalR = circle.getAttribute('r');
  
  node.addEventListener('mouseenter', () => {
    circle.setAttribute('r', parseInt(originalR) + 4);
  });
  
  node.addEventListener('mouseleave', () => {
    circle.setAttribute('r', originalR);
  });
});
