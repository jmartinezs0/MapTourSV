/* ====== Datos de ejemplo ====== */
    const LUGARES = [
      { nombre: "Volcán de San Salvador (El Boquerón)", tipo: "volcan", lat: 13.7346, lon: -89.2888, desc: "Cráter y miradores panorámicos." },
      { nombre: "Lago de Coatepeque", tipo: "lago", lat: 13.8587, lon: -89.5432, desc: "Lago craterico con aguas turquesa." },
      { nombre: "Juayúa (Ruta de las Flores)", tipo: "pueblo", lat: 13.8491, lon: -89.7456, desc: "Gastronomía y cascadas cercanas." },
      { nombre: "Joya de Cerén", tipo: "historia", lat: 13.8277, lon: -89.3566, desc: "Sitio arqueológico patrimonio de la humanidad." },
      {nombre: "Centro Histórico de San Salvador", tipo: "histórico", lat: 13.6960, lon: -89.1914, desc: "Catedral Metropolitana, Palacio Nacional, Teatro Nacional y Plaza Francisco Morazán."},
      {nombre: "Lago de Ilopango", tipo: "lago", lat: 13.6733, lon: -89.0508, desc: "Lago volcánico ideal para paseos en lancha y puestas de sol."},
      {nombre: "Playas El Tunco/El Zonte/El Sunzal", tipo: "playa", lat: 13.4942, lon: -89.3817, desc: "Playas famosas para el surf con ambiente vibrante, bares y restaurantes."},
      {nombre: "Puerto de La Libertad", tipo: "puerto", lat: 13.4884, lon: -89.3223, desc: "Malecón turístico, gastronomía y actividades acuáticas."},
      {nombre: "Cerro El Pital", tipo: "montaña", lat: 14.3885, lon: -89.1282, desc: "Punto más alto de El Salvador con 2,730 msnm y vistas impresionantes."},
      {nombre: "Turicentro Agua Fría", tipo: "parque", lat: 14.0330, lon: -88.9383, desc: "Centro recreativo familiar con piscinas y áreas de descanso."},
      {nombre: "Suchitoto", tipo: "ciudad", lat: 13.9431, lon: -89.0279, desc: "Ciudad colonial declarada conjunto histórico de interés cultural."},
      {nombre: "Lago Suchitlán", tipo: "lago", lat: 13.9330, lon: -89.0500, desc: "Embalse con paseos en lancha y observación de aves."},
      {nombre: "Costa del Sol", tipo: "playa", lat: 13.3439, lon: -88.9183,desc: "Destino popular con surf, hoteles, restaurantes y parque recreativo."},
      {nombre: "Manantiales de Jiboa", tipo: "parque acuático", lat: 13.5167, lon: -88.9500,desc: "Parque acuático familiar con diversión y ambiente seguro."},
      {nombre: "Tejutepeque", tipo: "naturaleza", lat: 13.8667, lon: -88.5167, desc: "Cerro de la Cruz, cascada El Bañadero y Cerro de los Coyotes."},
      {nombre: "Presa Hidroeléctrica 5 de Noviembre", tipo: "represa", lat: 13.8664, lon: -88.8930, desc: "Impresionantes vistas de la presa y embalses del Río Lempa."},
      {nombre: "Parque Acuático Amapulapa", tipo: "parque acuático", lat: 13.6333, lon: -88.7833,desc: "Piscinas naturales, áreas de descanso y cabañas familiares."},
      {nombre: "Laguna de Apastepeque", tipo: "laguna", lat: 13.6667, lon: -88.7833, desc: "Laguna volcánica ideal para paseos en lancha y gastronomía local."},
      {nombre: "Ruta de las Flores - Ataco", tipo: "ciudad turística", lat: 13.8706, lon: -89.8489, desc: "Calles empedradas, murales coloridos y ambiente cultural."},
      {nombre: "Parque Nacional El Imposible", tipo: "parque nacional", lat: 13.8000, lon: -89.8667, desc: "Bosques tropicales, cascadas y senderismo."},
      {nombre: "Volcán de Santa Ana", tipo: "volcán", lat: 13.8533, lon: -89.6306, desc: "Volcán más alto de El Salvador con laguna verde en el cráter."},
      {nombre: "Sitios Arqueológicos de Tazumal y Casa Blanca", tipo: "arqueología", lat: 13.9789, lon: -89.5575, desc: "Vestigios de la rica historia precolombina."},
      {nombre: "Playa La Bocana", departamento: "Sonsonate", tipo: "playa", lat: 13.5500, lon: -89.3667, desc: "Playa tranquila con aguas cristalinas y deportes acuáticos."},
      {nombre: "Reserva Natural El Imposible (Sonsonate)", tipo: "reserva", lat: 13.8167, lon: -89.8667, desc: "Reserva con biodiversidad única y especies de flora y fauna."}
    ];

    /* ====== Estado/refs ====== */
    let map, markers = [], myPos = null;
    const details = document.getElementById('details');
    const chipsWrap = document.getElementById('chips');
    const searchInput = document.getElementById('q');
    const sortSel = document.getElementById('sort');
    const toast = document.getElementById('toast');
    const modalHelp = document.getElementById('modalHelp');

    /* ====== Init mapa ====== */
    function initMap() {
      map = L.map('map', { zoomControl: true }).setView([13.6929, -89.2182], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '© OpenStreetMap contributors' }
      ).addTo(map);
      renderMarkers(LUGARES);
    }

    /* ====== Render de marcadores según filtro/búsqueda ====== */
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
        <a href="https://www.google.com/maps/dir/?api=1&destination=${dest}" target="_blank" rel="noopener">
          Cómo llegar (Google Maps)
        </a>
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

    /* ====== Filtros / búsqueda / ordenar ====== */
    function applyFilters() {
      const q = searchInput.value.trim().toLowerCase();
      const activeCats = [...chipsWrap.querySelectorAll('.chip[aria-pressed="true"]')].map(x => x.dataset.cat);

      let list = LUGARES.filter(l => {
        const hitQ = !q || l.nombre.toLowerCase().includes(q) || (l.desc||"").toLowerCase().includes(q);
        const hitCat = activeCats.length === 0 || activeCats.includes(l.tipo);
        return hitQ && hitCat;
      });

      const sort = sortSel.value;
      if (sort === 'az') list.sort((a,b)=> a.nombre.localeCompare(b.nombre));
      if (sort === 'za') list.sort((a,b)=> b.nombre.localeCompare(a.nombre));
      if (sort === 'tipo') list.sort((a,b)=> a.tipo.localeCompare(b.tipo) || a.nombre.localeCompare(b.nombre));

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

    /* ====== Mi ubicación ====== */
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

    /* ====== Modal ayuda ====== */
    document.getElementById('btnHelp').addEventListener('click', () => modalHelp.showModal());

    /* ====== Añadir lugar (placeholder para futuro CRUD) ====== */
    document.getElementById('btnAdd').addEventListener('click', () => {
      modalHelp.showModal();
      modalHelp.querySelector('.modal-body').innerHTML = `
        <p><strong>Propuesta:</strong> en futuras iteraciones, abre un formulario aquí para añadir lugares al arreglo <code>LUGARES</code> y persistirlos (por ejemplo, en JSON o backend).</p>
      `;
    });

    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(()=> toast.classList.remove('show'), 2200);
    }

    // Start
    window.addEventListener('DOMContentLoaded', initMap);