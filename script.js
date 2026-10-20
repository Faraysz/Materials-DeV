/* ═══════════════════════════════════════════════
   Toko Bangunan Sejahtera — Main Script
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Reveal (IntersectionObserver) ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  /* ── Mobile Nav Toggle ── */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const iconMenu = `<svg class="ui-icon icon-menu" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h16"/></svg>`;
  const iconClose = `<svg class="ui-icon icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen ? iconClose : iconMenu;
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = iconMenu;
      });
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth',
        });
      }
    });
  });

  /* ── Dynamic Footer Year ── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ══════════════════════════════════════════
     PRODUCT FILTER
     ══════════════════════════════════════════ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-grid .product-card');

  if (filterBtns.length && productCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        productCards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
            // Re-trigger reveal animation
            card.classList.remove('visible');
            setTimeout(() => card.classList.add('visible'), 50);
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ══════════════════════════════════════════
     PRODUCT MODAL
     ══════════════════════════════════════════ */
  const productData = {
    semen: {
      name: 'Semen Tiga Roda',
      price: 'Rp 65.000 / sak',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop',
      desc: 'Portland Composite Cement 50kg, standar SNI 15-7064-2004. Cocok untuk segala jenis konstruksi — dari fondasi, dinding, hingga finishing. Kuat tekan tinggi dan daya rekat optimal.',
      specs: ['Berat: 50 kg/sak', 'Standar: SNI', 'Min. Order: 10 sak', 'Stok: Tersedia'],
    },
    besi: {
      name: 'Besi Beton 12mm',
      price: 'Rp 185.000 / batang',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
      desc: 'Besi beton ulir diameter 12mm, panjang 12 meter. Merek Krakatau Steel, standar SNI 2052-2017. Tersedia juga ukuran 8mm, 10mm, dan 16mm.',
      specs: ['Diameter: 12mm', 'Panjang: 12m', 'Merek: Krakatau Steel', 'Standar: SNI'],
    },
    bata: {
      name: 'Bata Merah Press',
      price: 'Rp 850 / pcs',
      img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80&auto=format&fit=crop',
      desc: 'Bata merah press berkualitas tinggi. Ukuran standar 20×10×5cm dengan kuat tekan 50 kg/cm². Cocok untuk dinding struktural maupun non-struktural.',
      specs: ['Ukuran: 20×10×5cm', 'Kuat Tekan: 50kg/cm²', 'Min. Order: 1000 pcs', 'Stok: Tersedia'],
    },
    pasir: {
      name: 'Pasir Bangka',
      price: 'Rp 350.000 / m³',
      img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format&fit=crop',
      desc: 'Pasir halus pilihan dari Bangka, ideal untuk plesteran dan acian. Kadar lumpur rendah, butiran seragam. Min. order 1 truk (5m³), pengiriman langsung ke lokasi proyek.',
      specs: ['Jenis: Pasir Halus', 'Kadar Lumpur: <5%', 'Min. Order: 5m³ (1 truk)', 'Pengiriman: Tersedia'],
    },
    batu: {
      name: 'Batu Split 1/2',
      price: 'Rp 385.000 / m³',
      img: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80&auto=format&fit=crop',
      desc: 'Agregat kasar batu split ukuran 1/2 (10-20mm) untuk campuran beton cor berkualitas tinggi. Material bersih, keras, dan bebas lumpur.',
      specs: ['Ukuran: 10–20mm', 'Jenis: Batu Pecah', 'Min. Order: 5m³ (1 truk)', 'Stok: Tersedia'],
    },
    triplek: {
      name: 'Triplek 9mm',
      price: 'Rp 180.000 / lembar',
      img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80&auto=format&fit=crop',
      desc: 'Triplek (plywood) 9mm grade A ukuran standar 122×244cm. Permukaan halus, tidak ada cacat, cocok untuk bekisting, partisi, dan furniture.',
      specs: ['Ukuran: 122×244cm', 'Tebal: 9mm', 'Grade: A', 'Stok: Tersedia'],
    },
  };

  // Create modal DOM
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <button class="modal-close" aria-label="Tutup">
        <svg class="ui-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="modal-img-wrap">
        <img class="modal-img" src="" alt="">
      </div>
      <div class="modal-body">
        <h3 class="modal-name"></h3>
        <p class="modal-price"></p>
        <p class="modal-desc"></p>
        <ul class="modal-specs"></ul>
        <a href="https://wa.me/6281234567890" class="modal-cta" target="_blank" rel="noopener">
          <svg class="ui-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
          Pesan via WhatsApp
        </a>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const modalBackdrop = modal.querySelector('.modal-backdrop');
  const modalClose = modal.querySelector('.modal-close');

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.openModal = function(key) {
    const data = productData[key];
    if (!data) return;
    modal.querySelector('.modal-img').src = data.img;
    modal.querySelector('.modal-img').alt = data.name;
    modal.querySelector('.modal-name').textContent = data.name;
    modal.querySelector('.modal-price').textContent = data.price;
    modal.querySelector('.modal-desc').textContent = data.desc;
    modal.querySelector('.modal-specs').innerHTML = data.specs
      .map(s => `<li>${s}</li>`).join('');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  };

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  /* ══════════════════════════════════════════
     CHAT WIDGET
     ══════════════════════════════════════════ */
  const chatToggle = document.getElementById('chatToggle');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatClose');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');

  if (!chatToggle || !chatWindow) return;

  /* Response database */
  const responses = {
    greeting: {
      keywords: ['halo', 'hai', 'hi', 'pagi', 'siang', 'sore', 'malam'],
      reply: 'Halo! Senang bisa membantu Anda. Apa yang ingin Anda tanyakan tentang produk kami?',
      options: ['Harga Semen', 'Stok Besi Beton', 'Cara Pemesanan', 'Info Pengiriman'],
    },
    semen: {
      keywords: ['semen', 'cement'],
      reply: 'Semen Tiga Roda 50kg: Rp 65.000/sak. Minimal pembelian 10 sak. Stok tersedia.',
      options: ['Pesan Sekarang', 'Lihat Produk Lain', 'Tanya Admin'],
    },
    besi: {
      keywords: ['besi', 'beton', 'iron', 'steel'],
      reply: 'Besi beton 12mm Krakatau Steel: Rp 185.000/batang (12m). Tersedia ukuran 8mm, 10mm, 12mm, dan 16mm.',
      options: ['Cek Stok Ukuran Lain', 'Pesan Sekarang', 'Tanya Admin'],
    },
    bata: {
      keywords: ['bata', 'brick'],
      reply: 'Bata merah press: Rp 850/pcs. Minimal 1000 pcs. Kualitas premium, kuat tekan 50kg/cm².',
      options: ['Pesan Sekarang', 'Lihat Produk Lain', 'Tanya Admin'],
    },
    pasir: {
      keywords: ['pasir', 'sand'],
      reply: 'Pasir Bangka: Rp 350.000/m³. Pasir cor: Rp 300.000/m³. Minimal order 1 truk (5m³).',
      options: ['Info Pengiriman', 'Pesan Sekarang', 'Tanya Admin'],
    },
    harga: {
      keywords: ['harga', 'price', 'berapa'],
      reply: 'Produk mana yang ingin Anda tanyakan harganya?',
      options: ['Semen', 'Besi Beton', 'Bata Merah', 'Pasir'],
    },
    pesan: {
      keywords: ['pesan', 'order', 'beli', 'buy'],
      reply: 'Untuk pemesanan, silakan hubungi: WhatsApp 0812-3456-7890 atau datang langsung ke toko kami.',
      options: ['Alamat Toko', 'Jam Operasional', 'Lihat Katalog'],
    },
    kirim: {
      keywords: ['kirim', 'delivery', 'antar', 'ongkir'],
      reply: 'Kami melayani pengiriman gratis radius 10km. Untuk jarak lebih jauh, biaya disesuaikan lokasi.',
      options: ['Cek Ongkir', 'Pesan Sekarang', 'Tanya Admin'],
    },
    default: {
      reply: 'Maaf, saya kurang paham. Bisa diperjelas pertanyaannya? Atau hubungi langsung: 0812-3456-7890',
      options: ['Lihat Katalog', 'Cara Pemesanan', 'Hubungi Admin'],
    },
  };

  /* Helpers */
  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'chat-message bot typing-indicator';
    div.innerHTML = '<span>•</span><span>•</span><span>•</span>';
    div.id = 'typingIndicator';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
  }

  function removeTypingIndicator() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
  }

  function addOptions(options) {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-options';
    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'chat-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleOptionClick(opt));
      wrapper.appendChild(btn);
    });
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleOptionClick(option) {
    document.querySelectorAll('.chat-options').forEach((el) => el.remove());
    addMessage(option, 'user');
    processMessage(option.toLowerCase());
  }

  function processMessage(text) {
    let response = responses.default;
    for (const [key, value] of Object.entries(responses)) {
      if (key !== 'default' && value.keywords && value.keywords.some((kw) => text.includes(kw))) {
        response = value;
        break;
      }
    }

    const indicator = addTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage(response.reply, 'bot');
      if (response.options) {
        addOptions(response.options);
      }
    }, 600);
  }

  /* Open / Close */
  function openChat() {
    chatWindow.classList.add('active');
    chatToggle.style.display = 'none';
    chatInput.focus();
    document.addEventListener('keydown', handleEscape);
  }

  function closeChat() {
    chatWindow.classList.remove('active');
    chatToggle.style.display = 'grid';
    document.removeEventListener('keydown', handleEscape);
  }

  function handleEscape(e) {
    if (e.key === 'Escape') closeChat();
  }

  chatToggle.addEventListener('click', openChat);
  chatClose.addEventListener('click', closeChat);

  /* Focus trap */
  chatWindow.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusable = chatWindow.querySelectorAll(
        'button, input, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* Send message */
  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    processMessage(text.toLowerCase());
    chatInput.value = '';
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  /* Initial quick replies (delayed) */
  setTimeout(() => {
    addOptions(['Lihat Harga', 'Cara Pesan', 'Info Pengiriman', 'Hubungi Kami']);
  }, 1000);
});
