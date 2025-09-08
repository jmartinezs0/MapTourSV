/* ====== Datos de ejemplo ====== */
    const LUGARES = [
  { "nombre": "Volcán de San Salvador (El Boquerón)", "departamento": "San Salvador", "tipo": "volcán", "lat": 13.7346, "lon": -89.2888, "desc": "Cráter y miradores panorámicos." },
  { "nombre": "Lago de Coatepeque", "departamento": "Santa Ana", "tipo": "lago", "lat": 13.8587, "lon": -89.5432, "desc": "Lago craterico con aguas turquesa." },
  { "nombre": "Juayúa (Ruta de las Flores)", "departamento": "Sonsonate", "tipo": "pueblo", "lat": 13.8491, "lon": -89.7456, "desc": "Gastronomía y cascadas cercanas." },
  { "nombre": "Joya de Cerén", "departamento": "La Libertad", "tipo": "historia", "lat": 13.8277, "lon": -89.3566, "desc": "Sitio arqueológico patrimonio de la humanidad." },
  { "nombre": "Centro Histórico de San Salvador", "departamento": "San Salvador", "tipo": "histórico", "lat": 13.6960, "lon": -89.1914, "desc": "Catedral Metropolitana, Palacio Nacional, Teatro Nacional y Plaza Francisco Morazán." },
  { "nombre": "Lago de Ilopango", "departamento": "San Salvador", "tipo": "lago", "lat": 13.6733, "lon": -89.0508, "desc": "Lago volcánico ideal para paseos en lancha y puestas de sol." },
  { "nombre": "Playas El Tunco / El Zonte / El Sunzal", "departamento": "La Libertad", "tipo": "playa", "lat": 13.4942, "lon": -89.3817, "desc": "Playas famosas para el surf con ambiente vibrante, bares y restaurantes." },
  { "nombre": "Puerto de La Libertad", "departamento": "La Libertad", "tipo": "puerto", "lat": 13.4884, "lon": -89.3223, "desc": "Malecón turístico, gastronomía y actividades acuáticas." },
  { "nombre": "Cerro El Pital", "departamento": "Chalatenango", "tipo": "montaña", "lat": 14.3885, "lon": -89.1282, "desc": "Punto más alto de El Salvador con 2,730 msnm y vistas impresionantes." },
  { "nombre": "Turicentro Agua Fría", "departamento": "Chalatenango", "tipo": "parque", "lat": 14.0330, "lon": -88.9383, "desc": "Centro recreativo familiar con piscinas y áreas de descanso." },
  { "nombre": "Suchitoto", "departamento": "Cuscatlán", "tipo": "ciudad", "lat": 13.9431, "lon": -89.0279, "desc": "Ciudad colonial declarada conjunto histórico de interés cultural." },
  { "nombre": "Lago Suchitlán", "departamento": "Cuscatlán", "tipo": "lago", "lat": 13.9330, "lon": -89.0500, "desc": "Embalse con paseos en lancha y observación de aves." },
  { "nombre": "Costa del Sol", "departamento": "La Paz", "tipo": "playa", "lat": 13.3439, "lon": -88.9183, "desc": "Destino popular con surf, hoteles, restaurantes y parque recreativo." },
  { "nombre": "Manantiales de Jiboa", "departamento": "La Paz", "tipo": "parque acuático", "lat": 13.5167, "lon": -88.9500, "desc": "Parque acuático familiar con diversión y ambiente seguro." },
  { "nombre": "Tejutepeque", "departamento": "Cabañas", "tipo": "naturaleza", "lat": 13.8667, "lon": -88.5167, "desc": "Cerro de la Cruz, cascada El Bañadero y Cerro de los Coyotes." },
  { "nombre": "Presa Hidroeléctrica 5 de Noviembre", "departamento": "Cabañas / Chalatenango", "tipo": "represa", "lat": 13.8664, "lon": -88.8930, "desc": "Impresionantes vistas de la presa y embalses del Río Lempa." },
  { "nombre": "Parque Acuático Amapulapa", "departamento": "San Vicente", "tipo": "parque acuático", "lat": 13.6333, "lon": -88.7833, "desc": "Piscinas naturales, áreas de descanso y cabañas familiares." },
  { "nombre": "Laguna de Apastepeque", "departamento": "San Vicente", "tipo": "laguna", "lat": 13.6667, "lon": -88.7833, "desc": "Laguna volcánica ideal para paseos en lancha y gastronomía local." },
  { "nombre": "Ruta de las Flores - Ataco", "departamento": "Ahuachapán", "tipo": "ciudad turística", "lat": 13.8706, "lon": -89.8489, "desc": "Calles empedradas, murales coloridos y ambiente cultural." },
  { "nombre": "Parque Nacional El Imposible", "departamento": "Ahuachapán", "tipo": "parque nacional", "lat": 13.8000, "lon": -89.8667, "desc": "Bosques tropicales, cascadas y senderismo." },
  { "nombre": "Volcán de Santa Ana", "departamento": "Santa Ana", "tipo": "volcán", "lat": 13.8533, "lon": -89.6306, "desc": "Volcán más alto de El Salvador con laguna verde en el cráter." },
  { "nombre": "Sitios Arqueológicos de Tazumal y Casa Blanca", "departamento": "Santa Ana", "tipo": "arqueología", "lat": 13.9789, "lon": -89.5575, "desc": "Vestigios de la rica historia precolombina." },
  { "nombre": "Playa La Bocana", "departamento": "Sonsonate", "tipo": "playa", "lat": 13.5500, "lon": -89.3667, "desc": "Playa tranquila con aguas cristalinas y deportes acuáticos." },
  { "nombre": "Reserva Natural El Imposible (Sonsonate)", "departamento": "Sonsonate", "tipo": "reserva", "lat": 13.8167, "lon": -89.8667, "desc": "Reserva con biodiversidad única y especies de flora y fauna." },
  { "nombre": "Laguna de Alegría", "departamento": "Usulután", "tipo": "laguna", "lat": 13.5167, "lon": -88.4667, "desc": "Laguna volcánica en el cráter de Tecapa, conocida como la Esmeralda de América." },
  { "nombre": "Bahía de Jiquilisco", "departamento": "Usulután", "tipo": "bahía", "lat": 13.2833, "lon": -88.5667, "desc": "Área natural protegida con manglares, aves y tortugas marinas." },
  { "nombre": "Cascada El Chorrerón", "departamento": "San Vicente", "tipo": "cascada", "lat": 13.6333, "lon": -88.7833, "desc": "Cascada rodeada de naturaleza en Apastepeque." },
  { "nombre": "Playa El Cuco", "departamento": "San Miguel", "tipo": "playa", "lat": 13.2667, "lon": -88.1833, "desc": "Playa famosa para surf, pesca y vida nocturna." },
  { "nombre": "Volcán Chaparrastique", "departamento": "San Miguel", "tipo": "volcán", "lat": 13.4320, "lon": -88.2710, "desc": "Volcán activo con impresionantes vistas de San Miguel." },
  { "nombre": "San Miguel Centro Histórico", "departamento": "San Miguel", "tipo": "ciudad", "lat": 13.4833, "lon": -88.1833, "desc": "Catedral Basílica Reina de la Paz y arquitectura colonial." },
  { "nombre": "Cacaopera", "departamento": "Morazán", "tipo": "cultural", "lat": 13.7667, "lon": -88.1167, "desc": "Pueblo indígena con tradiciones, artesanías y gastronomía típica." },
  { "nombre": "Museo de la Revolución", "departamento": "Morazán", "tipo": "historia", "lat": 13.7667, "lon": -88.1000, "desc": "Espacio que documenta la historia del conflicto armado en El Salvador." },
  { "nombre": "Playas del Golfo de Fonseca", "departamento": "La Unión", "tipo": "playa", "lat": 13.3500, "lon": -87.8500, "desc": "Playas vírgenes y vistas a Honduras y Nicaragua." },
  { "nombre": "Isla Zacatillo", "departamento": "La Unión", "tipo": "isla", "lat": 13.3050, "lon": -87.8520, "desc": "Isla en el Golfo de Fonseca, ideal para turismo ecológico y playas tranquilas." },
  { "nombre": "Espíritu de la Montaña (Conchagua)", "departamento": "La Unión", "tipo": "mirador", "lat": 13.3075, "lon": -87.8453, "desc": "Mirador ecológico en el Volcán de Conchagua, famoso por sus vistas al Golfo de Fonseca y campamentos en la cima." }
];

const ZONAS = {
  occidente: ["Ahuachapán", "Santa Ana", "Sonsonate"],
  centro: ["San Salvador", "La Libertad", "Cuscatlán", "La Paz", "Chalatenango", "Cabañas", "San Vicente"],
  oriente: ["Usulután", "San Miguel", "Morazán", "La Unión"]
};

function norm(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

LUGARES.forEach(l => {
  l._departamentos = (l.departamento || '').split('/').map(s => s.trim());
  l._departamentosNorm = l._departamentos.map(norm);
  l._tipoNorm = norm(l.tipo);

  l.zona = null;
  for (const [zona, deps] of Object.entries(ZONAS)) {
    const depsNorm = deps.map(norm);
    if (l._departamentosNorm.some(dn => depsNorm.includes(dn))) {
      l.zona = zona;
      break;
    }
  }
});

    let map, markers = [], myPos = null;
    const details = document.getElementById('details');
    const chipsWrap = document.getElementById('chips');
    const searchInput = document.getElementById('q');
    const sortSel = document.getElementById('sort');
    const toast = document.getElementById('toast');
    const modalHelp = document.getElementById('modalHelp');

    const chipsZonaWrap = document.getElementById('chipsZona');

    chipsZonaWrap.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip'); 
      if (!chip) return;
      const pressed = chip.getAttribute('aria-pressed') === 'true';
      chip.setAttribute('aria-pressed', String(!pressed));
      applyFilters();
    });

    function initMap() {
      map = L.map('map', { zoomControl: true }).setView([13.6929, -89.2182], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '© OpenStreetMap contributors' }
      ).addTo(map);
      renderMarkers(LUGARES);
    }

    function renderMarkers(data) {
      markers.forEach(m => m.remove());
      markers = [];

      data.forEach(l => {
        const m = L.marker([l.lat, l.lon]).addTo(map);
        m.bindPopup(popupHTML(l));
        m.on('click', () => showDetails(l));
        markers.push(m);
      });
    }

    function popupHTML(l) {
      const dest = `${l.lat},${l.lon}`;
      return `
        <b>${l.nombre}</b><br>
        <small>${l.desc ?? ""}</small><br>
        <center><a class="btn-maps" href="https://www.google.com/maps/dir/?api=1&destination=${dest}" target="_blank" rel="noopener">
          Cómo llegar (Google Maps)
        </a></center>
      `;
    }

    function showDetails(l) {
      const dest = `${l.lat},${l.lon}`;
      details.innerHTML = `
        <div class="card">
          <h4>${l.nombre}</h4>
          <p class="muted">${l.desc ?? ""}</p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${dest}" target="_blank" rel="noopener">Cómo llegar</a>
            ${myPos ? `<a class="btn primary" href="https://www.google.com/maps/dir/?api=1&origin=${myPos.lat},${myPos.lon}&destination=${dest}" target="_blank" rel="noopener">Ruta desde mi ubicación</a>` : ""}
          </div>
        </div>
      `;
    }

    function getActiveFilters() {
  const active = [...document.querySelectorAll('.chip[aria-pressed="true"]')];
  const filters = { tipo: new Set(), zona: new Set(), departamento: new Set() };

  active.forEach(chip => {
    if (chip.dataset.cat) filters.tipo.add(norm(chip.dataset.cat));
    if (chip.dataset.zona) filters.zona.add(norm(chip.dataset.zona));
    if (chip.dataset.departamento) filters.departamento.add(norm(chip.dataset.departamento)); 
  });

  return filters;
}

    function applyFilters() {
  const q = norm(searchInput.value);
  const filters = getActiveFilters();

  let list = LUGARES.filter(l => {
    if (q) {
      const name = norm(l.nombre);
      const desc = norm(l.desc || '');
      if (!name.includes(q) && !desc.includes(q)) return false;
    }

    if (filters.tipo.size > 0) {
      if (!filters.tipo.has(l._tipoNorm)) return false;
    }

    if (filters.zona.size > 0) {
      if (!l.zona || !filters.zona.has(norm(l.zona))) return false;
    }

    if (filters.departamento.size > 0) {
      if (!l._departamentosNorm.some(dn => filters.departamento.has(dn))) return false;
    }

    return true;
  });

  const sort = sortSel.value;
  if (sort === 'az') list.sort((a,b)=> a.nombre.localeCompare(b.nombre));
  if (sort === 'za') list.sort((a,b)=> b.nombre.localeCompare(a.nombre));
  if (sort === 'tipo') list.sort((a,b)=> (a.tipo||'').localeCompare(b.tipo||'') || a.nombre.localeCompare(b.nombre));

  renderMarkers(list);
}

    chipsWrap.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip'); if (!chip) return;
      const pressed = chip.getAttribute('aria-pressed') === 'true';
      chip.setAttribute('aria-pressed', String(!pressed));
      applyFilters();
    });

    searchInput.addEventListener('input', applyFilters);
    sortSel.addEventListener('change', applyFilters);
    document.getElementById('btnReset').addEventListener('click', () => {
      searchInput.value = '';
      chipsWrap.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed','false'));
      sortSel.value = 'az';
      applyFilters();
    });


    document.getElementById('btnMyLoc').addEventListener('click', () => {
      if (!navigator.geolocation) return showToast('Geolocalización no disponible');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          myPos = { lat: pos.coords.latitude, lon: pos.coords.longitude };
          L.circleMarker([myPos.lat, myPos.lon], { radius: 8 }).addTo(map).bindPopup('Estás aquí');
          map.setView([myPos.lat, myPos.lon], 11);
          showToast('Ubicación activada');
        },
        () => showToast('No se pudo obtener tu ubicación')
      );
    });


    document.getElementById('btnHelp').addEventListener('click', () => modalHelp.showModal());

    /* ====== Añadir lugar (placeholder para futuro CRUD) ====== 
    document.getElementById('btnAdd').addEventListener('click', () => {
      modalHelp.showModal();
      modalHelp.querySelector('.modal-body').innerHTML = `
        <p><strong>Propuesta:</strong> en futuras iteraciones, abre un formulario aquí para añadir lugares al arreglo <code>LUGARES</code> y persistirlos (por ejemplo, en JSON o backend).</p>
      `;
    });  */

    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(()=> toast.classList.remove('show'), 2200);
    }

    window.addEventListener('DOMContentLoaded', initMap);