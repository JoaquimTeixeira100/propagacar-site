/* ══════════ PARTNERS DATA ══════════ */
const PARTNERS = [
  {
    id: 1,
    emoji: '🍕',
    gradient: 'linear-gradient(135deg,#c0392b,#e74c3c)',
    logo: 'empresas/empresa 1 - Pizzaria Morumbi/logo.svg',
    preview: 'empresas/empresa 1 - Pizzaria Morumbi/preview.svg',
    photos: [
      'empresas/empresa 1 - Pizzaria Morumbi/fotos/1.svg',
      'empresas/empresa 1 - Pizzaria Morumbi/fotos/2.svg',
      'empresas/empresa 1 - Pizzaria Morumbi/fotos/3.svg',
    ],
    name: 'Pizzaria Morumbi',
    category: 'Alimentação',
    neighborhood: 'Morumbi',
    city: 'São Paulo, SP',
    desc: 'A melhor pizza artesanal do bairro. Mais de 40 sabores com massa de fermentação natural, assada em forno a lenha.',
    longDesc: 'Nascida no coração do Morumbi em 2019, a Pizzaria Morumbi se tornou referência na região pela qualidade dos ingredientes e o atendimento caloroso. Com mais de 40 sabores de pizza — das clássicas às autorais —, cada pedido é uma experiência única. Delivery disponível para toda a região com embalagem térmica e rastreamento em tempo real.',
    offer: '20% OFF em qualquer pizza',
    phone: '(11) 99123-4567',
    whatsapp: '5511991234567',
    website: 'pizzariamorumbi.com.br',
    instagram: '@pizzariamorumbi',
    email: 'contato@pizzariamorumbi.com.br',
    hours: 'Ter–Dom: 18h às 23h',
    since: '2019',
    tags: ['Pizza', 'Delivery', 'Artesanal', 'Forno a Lenha'],
    featured: true,
  },
  {
    id: 2,
    emoji: '💇',
    gradient: 'linear-gradient(135deg,#6c3483,#9b59b6)',
    logo: 'empresas/empresa 2 - Salão Bella Vista/logo.svg',
    preview: 'empresas/empresa 2 - Salão Bella Vista/preview.svg',
    photos: [
      'empresas/empresa 2 - Salão Bella Vista/fotos/1.svg',
      'empresas/empresa 2 - Salão Bella Vista/fotos/2.svg',
      'empresas/empresa 2 - Salão Bella Vista/fotos/3.svg',
    ],
    name: 'Salão Bella Vista',
    category: 'Beleza',
    neighborhood: 'Vila Olímpia',
    city: 'São Paulo, SP',
    desc: 'Salão premium especializado em coloração, corte moderno e tratamentos capilares com produtos importados de alta performance.',
    longDesc: 'O Salão Bella Vista é o destino certo para quem busca excelência em beleza capilar. Nossa equipe de profissionais certificados utiliza as melhores técnicas e produtos do mercado — de colorações balayage a tratamentos de queratina — para garantir um resultado impecável. Agendamento online disponível.',
    offer: 'Combo corte + escova com valor especial',
    phone: '(11) 98765-4321',
    whatsapp: '5511987654321',
    website: 'salaоbellavista.com.br',
    instagram: '@salaobellavista',
    email: 'contato@salaobellavista.com.br',
    hours: 'Seg–Sáb: 9h às 19h',
    since: '2021',
    tags: ['Cabelo', 'Coloração', 'Escova', 'Manicure'],
    featured: false,
  },
  {
    id: 3,
    emoji: '🏥',
    gradient: 'linear-gradient(135deg,#117a65,#1abc9c)',
    logo: 'empresas/empresa 3 - Clínica Vida+/logo.svg',
    preview: 'empresas/empresa 3 - Clínica Vida+/preview.svg',
    photos: [
      'empresas/empresa 3 - Clínica Vida+/fotos/1.svg',
      'empresas/empresa 3 - Clínica Vida+/fotos/2.svg',
      'empresas/empresa 3 - Clínica Vida+/fotos/3.svg',
    ],
    name: 'Clínica Vida+',
    category: 'Saúde',
    neighborhood: 'Pinheiros',
    city: 'São Paulo, SP',
    desc: 'Clínica multidisciplinar com especialistas em clínica geral, cardiologia, dermatologia e ortopedia. Atendimento humanizado.',
    longDesc: 'A Clínica Vida+ oferece atendimento médico completo com foco em saúde preventiva e qualidade de vida. Contamos com equipe multidisciplinar, equipamentos de última geração e ambiente acolhedor. Aceitamos os principais planos de saúde e oferecemos consultas particulares com preço acessível.',
    offer: '1ª consulta com valor especial',
    phone: '(11) 3456-7890',
    whatsapp: '5511934567890',
    website: 'clinicavidamais.com.br',
    instagram: '@clinicavidamais',
    email: 'contato@clinicavidamais.com.br',
    hours: 'Seg–Sex: 8h às 18h | Sáb: 8h às 13h',
    since: '2018',
    tags: ['Medicina', 'Cardiologia', 'Dermatologia', 'Planos'],
    featured: false,
  },
  {
    id: 4,
    emoji: '☕',
    gradient: 'linear-gradient(135deg,#5d4037,#8d6e63)',
    logo: 'empresas/empresa 4 - Café do Bairro/logo.svg',
    preview: 'empresas/empresa 4 - Café do Bairro/preview.svg',
    photos: [
      'empresas/empresa 4 - Café do Bairro/fotos/1.svg',
      'empresas/empresa 4 - Café do Bairro/fotos/2.svg',
      'empresas/empresa 4 - Café do Bairro/fotos/3.svg',
    ],
    name: 'Café do Bairro',
    category: 'Alimentação',
    neighborhood: 'Itaim Bibi',
    city: 'São Paulo, SP',
    desc: 'Café especializado em grãos de origem única, com blend exclusivo torrado artesanalmente. Espaço aconchegante para trabalho e reuniões.',
    longDesc: 'O Café do Bairro é um refúgio no agitado Itaim Bibi. Servimos cafés especiais de origem única, preparados por baristas certificados, ao lado de pães artesanais, bolos e snacks. O espaço conta com Wi-Fi de alta velocidade, tomadas em todas as mesas e sala de reuniões disponível para reserva.',
    offer: 'Pontos em dobro no programa fidelidade',
    phone: '(11) 97654-3210',
    whatsapp: '5511976543210',
    website: 'cafedodobairro.com.br',
    instagram: '@cafedodobairro',
    email: 'contato@cafedodobairro.com.br',
    hours: 'Seg–Sex: 7h às 20h | Sáb–Dom: 8h às 18h',
    since: '2020',
    tags: ['Café Especial', 'Brunch', 'Wi-Fi', 'Artesanal'],
    featured: true,
  },
  {
    id: 5,
    emoji: '🏋️',
    gradient: 'linear-gradient(135deg,#1a3a5c,#2471a3)',
    logo: 'empresas/empresa 5 - Academia FitLife/logo.svg',
    preview: 'empresas/empresa 5 - Academia FitLife/preview.svg',
    photos: [
      'empresas/empresa 5 - Academia FitLife/fotos/1.svg',
      'empresas/empresa 5 - Academia FitLife/fotos/2.svg',
      'empresas/empresa 5 - Academia FitLife/fotos/3.svg',
    ],
    name: 'Academia FitLife',
    category: 'Fitness',
    neighborhood: 'Brooklin',
    city: 'São Paulo, SP',
    desc: 'Academia completa com musculação, spinning, pilates, crossfit e personal trainers certificados. Equipamentos de última geração.',
    longDesc: 'A FitLife é mais que uma academia — é um estilo de vida. Com mais de 3.000 m² de área, oferecemos musculação, crossfit, pilates, yoga, natação e aulas em grupo. Personal trainers disponíveis para avaliação física gratuita para novos alunos. Planos mensais, trimestrais e anuais.',
    offer: 'Primeira semana totalmente grátis',
    phone: '(11) 96543-2109',
    whatsapp: '5511965432109',
    website: 'academiafit.com.br',
    instagram: '@academiafit',
    email: 'contato@academiafit.com.br',
    hours: 'Seg–Sex: 6h às 23h | Sáb–Dom: 7h às 20h',
    since: '2017',
    tags: ['Musculação', 'Crossfit', 'Pilates', 'Personal Trainer'],
    featured: false,
  },
  {
    id: 6,
    emoji: '💊',
    gradient: 'linear-gradient(135deg,#1a7a41,#27ae60)',
    logo: 'empresas/empresa 6 - Farmácia Saúde Total/logo.svg',
    preview: 'empresas/empresa 6 - Farmácia Saúde Total/preview.svg',
    photos: [
      'empresas/empresa 6 - Farmácia Saúde Total/fotos/1.svg',
      'empresas/empresa 6 - Farmácia Saúde Total/fotos/2.svg',
      'empresas/empresa 6 - Farmácia Saúde Total/fotos/3.svg',
    ],
    name: 'Farmácia Saúde Total',
    category: 'Saúde',
    neighborhood: 'Campo Belo',
    city: 'São Paulo, SP',
    desc: 'Farmácia de manipulação com farmacêutico responsável em horário integral. Medicamentos manipulados com entrega em até 48h.',
    longDesc: 'A Farmácia Saúde Total é especializada em manipulação personalizada e oferece portfólio completo de medicamentos, suplementos, dermocosméticos e produtos naturais. Com farmacêutico responsável em horário integral e delivery próprio, garantimos o melhor atendimento para a sua saúde.',
    offer: '10% OFF em todos os manipulados',
    phone: '(11) 95432-1098',
    whatsapp: '5511954321098',
    website: 'farmaciasaudetotal.com.br',
    instagram: '@farmaciasaudetotal',
    email: 'contato@farmaciasaudetotal.com.br',
    hours: 'Seg–Sáb: 8h às 22h | Dom: 9h às 18h',
    since: '2015',
    tags: ['Manipulação', 'Suplementos', 'Dermocosméticos', 'Delivery'],
    featured: false,
  },
  {
    id: 7,
    emoji: '🍖',
    gradient: 'linear-gradient(135deg,#784212,#ba4a00)',
    logo: 'empresas/empresa 7 - Sabor do Sul/logo.svg',
    preview: 'empresas/empresa 7 - Sabor do Sul/preview.svg',
    photos: [
      'empresas/empresa 7 - Sabor do Sul/fotos/1.svg',
      'empresas/empresa 7 - Sabor do Sul/fotos/2.svg',
      'empresas/empresa 7 - Sabor do Sul/fotos/3.svg',
    ],
    name: 'Sabor do Sul',
    category: 'Alimentação',
    neighborhood: 'Moema',
    city: 'São Paulo, SP',
    desc: 'Churrascaria gaúcha autêntica com rodízio completo, buffet de frios e carta de vinhos selecionados. Referência em Moema há 8 anos.',
    longDesc: 'O Sabor do Sul traz toda a tradição gaúcha para o coração de Moema. Com rodízio ininterrupto de mais de 20 cortes especiais, buffet de frios premium e carta de vinhos criteriosamente selecionada, é o lugar perfeito para celebrar momentos especiais ou realizar almoços executivos.',
    offer: 'Sobremesa cortesia no jantar',
    phone: '(11) 94321-0987',
    whatsapp: '5511943210987',
    website: 'sabordosul.com.br',
    instagram: '@sabordosulsp',
    email: 'contato@sabordosul.com.br',
    hours: 'Seg–Sex: 12h–15h e 18h–23h | Sáb–Dom: 12h–23h',
    since: '2016',
    tags: ['Churrasco', 'Rodízio', 'Gaúcho', 'Vinho'],
    featured: false,
  },
  {
    id: 8,
    emoji: '🐾',
    gradient: 'linear-gradient(135deg,#0d6b6b,#148a8a)',
    logo: 'empresas/empresa 8 - Animais e Cia/logo.svg',
    preview: 'empresas/empresa 8 - Animais e Cia/preview.svg',
    photos: [
      'empresas/empresa 8 - Animais e Cia/fotos/1.svg',
      'empresas/empresa 8 - Animais e Cia/fotos/2.svg',
      'empresas/empresa 8 - Animais e Cia/fotos/3.svg',
    ],
    name: 'Animais & Cia',
    category: 'Pets',
    neighborhood: 'Jardins',
    city: 'São Paulo, SP',
    desc: 'Pet shop completo com banho e tosa, atendimento veterinário, loja de produtos premium e hotelaria com câmeras ao vivo.',
    longDesc: 'O Animais & Cia é o melhor amigo do seu melhor amigo! Serviços completos: banho e tosa com agendamento online, atendimento veterinário clínico e cirúrgico, loja com produtos premium nacionais e importados, e hotelaria para cães e gatos com câmeras ao vivo para os tutores acompanharem tudo.',
    offer: '1º banho com 50% de desconto',
    phone: '(11) 93210-9876',
    whatsapp: '5511932109876',
    website: 'animaisecia.com.br',
    instagram: '@animaisecia',
    email: 'contato@animaisecia.com.br',
    hours: 'Seg–Sáb: 8h às 20h | Dom: 9h às 17h',
    since: '2022',
    tags: ['Banho e Tosa', 'Veterinária', 'Hotelaria', 'Ração Premium'],
    featured: false,
  },
];

/* ══════════ CATEGORIES ══════════ */
const CATEGORIES = ['Todos', ...new Set(PARTNERS.map(p => p.category))];

/* ══════════ STATE ══════════ */
let activeCategory = 'Todos';
let searchTerm = '';

/* ══════════ INIT ══════════ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1600);
});

document.addEventListener('DOMContentLoaded', () => {
  initStats();
  initNav();
  renderFilters();
  renderPartners(PARTNERS);
  initSearch();
  initModal();
  initReveal();
  document.getElementById('clearBtn').addEventListener('click', clearSearch);
});

function initStats() {
  const targets = [
    { el: document.getElementById('statTotal'),         value: PARTNERS.length },
    { el: document.getElementById('statCategories'),    value: new Set(PARTNERS.map(p => p.category)).size },
    { el: document.getElementById('statNeighborhoods'), value: new Set(PARTNERS.map(p => p.neighborhood)).size },
  ];

  function countUp(el, target, duration) {
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
      el.textContent = Math.round(ease * target);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Fire after loader disappears
  setTimeout(() => targets.forEach(s => countUp(s.el, s.value, 900)), 1650);
}

function initNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50), { passive: true });
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ══════════ FILTERS ══════════ */
function renderFilters() {
  const container = document.getElementById('filterPills');
  container.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-pill${cat === activeCategory ? ' active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');
  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => { activeCategory = btn.dataset.cat; applyFilters(); });
  });
}

function getFiltered() {
  return PARTNERS.filter(p => {
    const matchCat = activeCategory === 'Todos' || p.category === activeCategory;
    const q = searchTerm.toLowerCase();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.neighborhood.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function applyFilters() {
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === activeCategory);
  });
  renderPartners(getFiltered());
}

/* ══════════ RENDER CARDS ══════════ */
function renderPartners(list) {
  const grid   = document.getElementById('partnersGrid');
  const empty  = document.getElementById('emptyState');
  const count  = document.getElementById('resultsCount');

  count.textContent = `${list.length} parceiro${list.length !== 1 ? 's' : ''} encontrado${list.length !== 1 ? 's' : ''}`;

  if (!list.length) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  const sorted = [...list].sort((a, b) => b.featured - a.featured);

  grid.innerHTML = sorted.map((p, i) => `
    <article
      class="partner-card${p.featured ? ' featured' : ''}"
      style="animation-delay:${i * 55}ms"
      data-id="${p.id}"
      role="button"
      tabindex="0"
      aria-label="Ver detalhes de ${p.name}"
    >
      ${p.featured ? '<div class="card-featured-tag">⭐ Destaque</div>' : ''}

      <div class="card-header">
        ${p.preview
          ? `<div class="card-header-bg" style="background-image:url('${p.preview}');background-size:cover;background-position:center"></div>
             <div class="card-header-overlay" style="background:${p.gradient};opacity:.45"></div>`
          : `<div class="card-header-bg" style="background:${p.gradient}"></div>`
        }
        <span class="card-category-badge">${p.category}</span>
        <div class="card-emoji-wrap">
          ${p.logo
            ? `<img src="${p.logo}" alt="${p.name}" class="card-logo-img">`
            : p.emoji
          }
        </div>
      </div>

      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-location">📍 ${p.neighborhood}, SP</div>
        <p class="card-desc">${p.desc}</p>
        <div class="card-offer">🏷️ ${p.offer}</div>
      </div>

      <div class="card-footer">
        <a class="card-contact-btn" href="https://wa.me/${p.whatsapp}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" aria-label="WhatsApp de ${p.name}">
          💬 ${p.phone}
        </a>
        <span class="card-detail-btn">Ver mais →</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.partner-card').forEach(card => {
    const open = () => openModal(+card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

/* ══════════ SEARCH ══════════ */
function initSearch() {
  const input    = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');

  input.addEventListener('input', () => {
    searchTerm = input.value.trim();
    clearBtn.classList.toggle('visible', !!searchTerm);
    applyFilters();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    searchTerm  = '';
    clearBtn.classList.remove('visible');
    applyFilters();
    input.focus();
  });
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  searchTerm     = '';
  activeCategory = 'Todos';
  renderFilters();
  applyFilters();
}

/* ══════════ MODAL ══════════ */
function initModal() {
  const overlay = document.getElementById('partnerModal');
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(id) {
  const p = PARTNERS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modalBox').innerHTML = `
    <div class="modal-head" style="${p.preview ? `background-image:url('${p.preview}');background-size:cover;background-position:center` : `background:${p.gradient}`}">
      ${p.preview ? `<div class="modal-head-photo-overlay" style="background:${p.gradient};opacity:.6;position:absolute;inset:0"></div>` : ''}
      <div class="modal-head-emoji" style="position:relative;z-index:2">
        ${p.logo ? `<img src="${p.logo}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:14px">` : p.emoji}
      </div>
      <div class="modal-head-info" style="position:relative;z-index:2">
        <div class="modal-head-category">${p.category}</div>
        <div class="modal-head-name">${p.name}</div>
        <div class="modal-head-location">📍 ${p.neighborhood}, ${p.city}</div>
      </div>
      <button class="modal-close" onclick="closeModal()" aria-label="Fechar">✕</button>
    </div>

    <div class="modal-content">
      <div class="modal-offer">
        <div class="modal-offer-icon">🏷️</div>
        <div>
          <div class="modal-offer-label">Oferta exclusiva PropagaCar</div>
          <div class="modal-offer-text">${p.offer}</div>
        </div>
      </div>

      ${p.photos && p.photos.length > 1 ? `
      <div class="modal-section">
        <div class="modal-section-title">Fotos</div>
        <div class="modal-photos-wrap">
          <div class="modal-photos">
            ${p.photos.map((src, i) => `<img src="${src}" alt="Foto ${i+1} de ${p.name}" class="modal-photo">`).join('')}
          </div>
        </div>
        <div class="modal-photos-hint">deslize para ver mais</div>
      </div>` : ''}

      <div class="modal-section">
        <div class="modal-section-title">Sobre o estabelecimento</div>
        <p class="modal-desc">${p.longDesc}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Informações</div>
        <div class="modal-info-grid">
          <div class="modal-info-item">
            <div class="modal-info-icon">⏰</div>
            <div class="modal-info-label">Horário</div>
            <div class="modal-info-val">${p.hours}</div>
          </div>
          <div class="modal-info-item modal-info-link">
            <div class="modal-info-icon">📍</div>
            <div class="modal-info-label">Localização</div>
            <div class="modal-info-val">
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ', ' + p.neighborhood + ', ' + p.city)}" target="_blank" rel="noopener noreferrer">${p.neighborhood}, ${p.city} ↗</a>
            </div>
          </div>
          <div class="modal-info-item modal-info-link">
            <div class="modal-info-icon">💬</div>
            <div class="modal-info-label">WhatsApp</div>
            <div class="modal-info-val">
              <a href="https://wa.me/${p.whatsapp}" target="_blank" rel="noopener noreferrer">${p.phone} ↗</a>
            </div>
          </div>
          <div class="modal-info-item">
            <div class="modal-info-icon">📅</div>
            <div class="modal-info-label">Parceiro desde</div>
            <div class="modal-info-val">${p.since}</div>
          </div>
          ${p.email ? `
          <div class="modal-info-item modal-info-link">
            <div class="modal-info-icon">✉️</div>
            <div class="modal-info-label">E-mail</div>
            <div class="modal-info-val">
              <a href="mailto:${p.email}">${p.email} ↗</a>
            </div>
          </div>` : ''}
          ${p.instagram ? `
          <div class="modal-info-item modal-info-link">
            <div class="modal-info-icon">📸</div>
            <div class="modal-info-label">Instagram</div>
            <div class="modal-info-val">
              <a href="https://instagram.com/${p.instagram.replace('@','')}" target="_blank" rel="noopener noreferrer">${p.instagram} ↗</a>
            </div>
          </div>` : ''}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Especialidades</div>
        <div class="modal-tags">
          ${p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <a href="https://wa.me/${p.whatsapp}" class="btn btn-orange" target="_blank" rel="noopener noreferrer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.573-1.46A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.319 0-4.5-.648-6.358-1.772l-.456-.272-2.715.867.882-2.658-.298-.473A9.958 9.958 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
        WhatsApp
      </a>
      <a href="https://${p.website}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
        🌐 Visitar site
      </a>
      ${p.instagram ? `
      <a href="https://instagram.com/${p.instagram.replace('@','')}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
        📸 Instagram
      </a>` : ''}
    </div>
  `;

  document.getElementById('partnerModal').classList.add('show');

  // Lock background scroll without positional jump
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  // Attach lightbox listeners to photos after render
  document.querySelectorAll('.modal-photo').forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const srcs = [...document.querySelectorAll('.modal-photo')].map(el => el.src);
      window.openLightbox(srcs, i);
    });
  });
}

function closeModal() {
  document.getElementById('partnerModal').classList.remove('show');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

window.closeModal = closeModal;

/* ══════════ LIGHTBOX ══════════ */
function initLightbox() {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = `
    <button class="lb-nav prev" id="lbPrev">&#8592;</button>
    <img id="lbImg" src="" alt="">
    <button class="lb-nav next" id="lbNext">&#8594;</button>
    <button class="lb-close" id="lbClose">✕</button>
    <div class="lb-counter" id="lbCounter"></div>
  `;
  document.body.appendChild(lb);

  let photos = [], current = 0;

  function show(srcs, index) {
    photos = srcs;
    current = index;
    render();
    lb.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function render() {
    const img = document.getElementById('lbImg');
    img.style.opacity = '0';
    img.src = photos[current];
    img.onload = () => { img.style.opacity = '1'; };
    document.getElementById('lbCounter').textContent = `${current + 1} / ${photos.length}`;
    document.getElementById('lbPrev').classList.toggle('hidden', current === 0);
    document.getElementById('lbNext').classList.toggle('hidden', current === photos.length - 1);
  }

  function close() {
    lb.classList.remove('show');
    document.body.style.overflow = 'hidden'; // modal still open
  }

  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', () => { if (current > 0) { current--; render(); } });
  document.getElementById('lbNext').addEventListener('click', () => { if (current < photos.length - 1) { current++; render(); } });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('show')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft' && current > 0) { current--; render(); }
    if (e.key === 'ArrowRight' && current < photos.length - 1) { current++; render(); }
  });

  window.openLightbox = show;
}

initLightbox();
