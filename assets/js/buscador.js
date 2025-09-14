/* ====== Datos de ejemplo (Se agregaron más datos para llenar la categoria de montaña y se agregaron imagenes) ====== */
    const LUGARES = [
  { "nombre": "Volcán de San Salvador (El Boquerón)", "departamento": "San Salvador", "tipo": "volcán", "lat": 13.7326317, "lon": -89.2854686, "desc": "Cráter y miradores panorámicos.", "img": "https://corsatur.gob.sv/wp-content/uploads/2021/06/El-Boqueron-scaled.jpg" },
  { "nombre": "Lago de Coatepeque", "departamento": "Santa Ana", "tipo": "lago", "lat": 13.8694159, "lon": -89.5804902, "desc": "Lago craterico con aguas turquesa.", "img": "https://www.ambiente.gob.sv/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-20-at-09.51.48-1-scaled.jpeg" },
  { "nombre": "Juayúa (Ruta de las Flores)", "departamento": "Sonsonate", "tipo": "pueblo", "lat": 13.8435506, "lon": -89.746311, "desc": "Gastronomía y cascadas cercanas.", "img": "https://www.visitcentroamerica.com/wp-content/uploads/2025/04/Juayua-El-Salvador-Centroamerica-01.webp" },
  { "nombre": "Joya de Cerén", "departamento": "La Libertad", "tipo": "historia", "lat": 13.8282279, "lon": -89.3570249, "desc": "Sitio arqueológico patrimonio de la humanidad.", "img": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/3a/78.jpg" },
  { "nombre": "Centro Histórico de San Salvador", "departamento": "San Salvador", "tipo": "histórico", "lat": 13.6976797, "lon": -89.1943712, "desc": "Catedral Metropolitana, Palacio Nacional, Teatro Nacional y Plaza Francisco Morazán.", "img": "https://investinelsalvador.gob.sv/wp-content/uploads/2024/07/chistorico-2-1.jpg" },
  { "nombre": "Lago de Ilopango", "departamento": "San Salvador", "tipo": "lago", "lat": 13.6594347, "lon": -89.1025326, "desc": "Lago volcánico ideal para paseos en lancha y puestas de sol.", "img": "https://elsalvador.travel/system/wp-content/uploads/2021/04/20210130_135810-1.jpg" },
  { "nombre": "Playa El Tunco / El Zonte / El Sunzal", "departamento": "La Libertad", "tipo": "playa", "lat": 13.4922217, "lon": -89.3917101, "desc": "Playas famosas para el surf con ambiente vibrante, bares y restaurantes.", "img": "https://i0.wp.com/passporterapp.com/es/blog/wp-content/uploads/2022/05/que-ver-en-el-tunco-scaled.jpg?fit=2560%2C1707&ssl=1" },
  { "nombre": "Puerto de La Libertad", "departamento": "La Libertad", "tipo": "puerto", "lat": 13.4866487, "lon": -89.3222825, "desc": "Malecón turístico, gastronomía y actividades acuáticas.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/01/muelle-turistico-puertolibertad-scaled.jpg" },
  { "nombre": "Cerro El Pital", "departamento": "Chalatenango", "tipo": "montaña", "lat": 14.3850593, "lon": -89.1332004, "desc": "Punto más alto de El Salvador con 2,730 msnm y vistas impresionantes.", "img": "https://upload.wikimedia.org/wikipedia/commons/4/41/Pital_un_Lunes_por_la_tarde..JPG" },
  { "nombre": "Turicentro Agua Fría", "departamento": "Chalatenango", "tipo": "parque", "lat": 14.0319265, "lon": -88.9755832, "desc": "Centro recreativo familiar con piscinas y áreas de descanso.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/09/Parque-recreativo-Agua-Fri%CC%81a-10032022-ISTU-DJI_0517-1.jpg" },
  { "nombre": "Suchitoto", "departamento": "Cuscatlán", "tipo": "ciudad", "lat": 13.9344731, "lon": -89.0291047, "desc": "Ciudad colonial declarada conjunto histórico de interés cultural.", "img": "https://elsalvador.travel/system/wp-content/uploads/2024/05/suchitoto.jpg" },
  { "nombre": "Lago Suchitlán", "departamento": "Cuscatlán", "tipo": "lago", "lat": 14.0835254, "lon": -89.1284496, "desc": "Embalse con paseos en lancha y observación de aves.", "img": "https://www.visitcentroamerica.com/wp-content/uploads/2025/04/Lake-Suchitlan-El-Salvador-Centroamerica-03.webp" },
  { "nombre": "Costa del Sol", "departamento": "La Paz", "tipo": "playa", "lat": 13.3436079, "lon": -89.0780378, "desc": "Destino popular con surf, hoteles, restaurantes y parque recreativo.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/09/Costa-del-Sol-La-Paz-3-scaled.jpg" },
  { "nombre": "Manantiales de Jiboa", "departamento": "La Paz", "tipo": "parque acuático", "lat": 13.4891239, "lon": -89.0094581, "desc": "Parque acuático familiar con diversión y ambiente seguro.", "img": "https://www.manantialesdejiboa.com.sv/Manantiales%20Jiboa_files/DSC9801.jpg" },
  { "nombre": "Tejutepeque", "departamento": "Cabañas", "tipo": "naturaleza", "lat": 13.8512467, "lon": -88.9165164, "desc": "Cerro de la Cruz, cascada El Bañadero y Cerro de los Coyotes.", "img": "https://guanacos.com/wp-content/uploads/2023/10/GUANACOS-TEJUTEPEQUE-4.jpg" },
  { "nombre": "Presa Hidroeléctrica 5 de Noviembre", "departamento": "Cabañas / Chalatenango", "tipo": "represa", "lat": 13.9912032, "lon": -88.7668117, "desc": "Impresionantes vistas de la presa y embalses del Río Lempa.", "img": "https://www.cel.gob.sv/wp-content/uploads/2023/04/Ftdry9ZWcAE69GT-1024x576.jpg" },
  { "nombre": "Parque Acuático Amapulapa", "departamento": "San Vicente", "tipo": "parque acuático", "lat": 13.6263297, "lon": -88.7791992, "desc": "Piscinas naturales, áreas de descanso y cabañas familiares.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/09/Amapulapa-1.jpg" },
  { "nombre": "Laguna de Apastepeque", "departamento": "San Vicente", "tipo": "laguna", "lat": 13.6903335, "lon": -88.7508548, "desc": "Laguna volcánica ideal para paseos en lancha y gastronomía local.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/09/Apastepeque3.jpg" },
  { "nombre": "Ruta de las Flores - Ataco", "departamento": "Ahuachapán", "tipo": "pueblo", "lat": 13.8518975, "lon": -89.8229228, "desc": "Calles empedradas, murales coloridos y ambiente cultural.", "img": "https://elsalvador.travel/system/wp-content/uploads/2024/10/rutadelasflores.jpg" },
  { "nombre": "Parque Nacional El Imposible", "departamento": "Ahuachapán", "tipo": "parque nacional", "lat": 13.8232351, "lon": -89.9835249, "desc": "Bosques tropicales, cascadas y senderismo.", "img": "https://univonews.com/wp-content/uploads/2025/01/Parque-Nacional-El-Imposible.jpeg" },
  { "nombre": "Volcán de Santa Ana", "departamento": "Santa Ana", "tipo": "volcán", "lat": 13.850228, "lon": -89.6392926, "desc": "Volcán más alto de El Salvador con laguna verde en el cráter.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/01/Volca%CC%81n-Ilamatepeq-Santa-Ana-2.jpg" },
  { "nombre": "Sitios Arqueológicos de Tazumal y Casa Blanca", "departamento": "Santa Ana", "tipo": "arqueología", "lat": 13.979596, "lon": -89.6767344, "desc": "Vestigios de la rica historia precolombina.", "img": "https://www.visitcentroamerica.com/wp-content/uploads/2025/04/Tazumal-Archaeological-Site-El-Salvador-01.webp" },
  { "nombre": "Playa La Bocana", "departamento": "Sonsonate", "tipo": "playa", "lat": 13.6592401, "lon": -89.9414169, "desc": "Playa tranquila con aguas cristalinas y deportes acuáticos.", "img": "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mp8M21voj1TxVezR/playa-bocana-marquelia-guerrero-costa-chica-bonita-paraiso-barata-YbNa1Mjk0KIMyRqx.jpg" },
  { "nombre": "Volcan de Izalco", "departamento": "Sonsonate", "tipo": "volcán", "lat": 13.813678, "lon": -89.6429379, "desc": "Reserva con biodiversidad única y especies de flora y fauna.", "img": "https://elsalvador.travel/system/wp-content/uploads/2022/12/DestinationVolcanIzalco02.jpg" },
  { "nombre": "Laguna de Alegría", "departamento": "Usulután", "tipo": "laguna", "lat": 13.4915903, "lon": -88.4942433, "desc": "Laguna volcánica en el cráter de Tecapa, conocida como la Esmeralda de América.", "img": "https://elsalvador.travel/system/wp-content/uploads/2021/04/Laguna-de-Alegri%CC%81a-edicio%CC%81n-chris.jpg"  },
  { "nombre": "Bahía de Jiquilisco", "departamento": "Usulután", "tipo": "bahía", "lat": 13.2904184, "lon": -88.7263603, "desc": "Área natural protegida con manglares, aves y tortugas marinas.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/02/jiquilisco-1.jpg" },
  { "nombre": "Cascada El Chorrerón", "departamento": "San Vicente", "tipo": "cascada", "lat": 13.6455794, "lon": -88.9448523, "desc": "Cascada rodeada de naturaleza en Apastepeque.", "img": "https://juanlievano.com/wp-content/uploads/2021/02/DSC_0104.jpg" },
  { "nombre": "Playa El Cuco", "departamento": "San Miguel", "tipo": "playa", "lat": 13.1724812, "lon": -88.1070038, "desc": "Playa famosa para surf, pesca y vida nocturna.", "img": "https://elsalvador.travel/esp/wp-content/uploads/2025/03/cuco-03.jpg" },
  { "nombre": "Volcán Chaparrastique", "departamento": "San Miguel", "tipo": "volcán", "lat": 13.4341947, "lon": -88.254387, "desc": "Volcán activo con impresionantes vistas de San Miguel.", "img": "https://media.diariolahuella.com/wp-content/uploads/2023/05/11104155/IMG_1244.jpeg" },
  { "nombre": "San Miguel Centro Histórico", "departamento": "San Miguel", "tipo": "ciudad", "lat": 13.4723143, "lon": -88.1943427, "desc": "Catedral Basílica Reina de la Paz y arquitectura colonial.", "img": "https://upload.wikimedia.org/wikipedia/commons/9/92/San_Miguel_El_Salvador.png" },
  { "nombre": "Cacaopera", "departamento": "Morazán", "tipo": "pueblo", "lat": 13.7670249, "lon": -88.0887663, "desc": "Pueblo indígena con tradiciones, artesanías y gastronomía típica.", "img": "https://univonews.com/wp-content/uploads/2021/01/08.jpg" },
  { "nombre": "Museo de la Revolución", "departamento": "Morazán", "tipo": "historia", "lat": 13.9584666, "lon": -88.1670704, "desc": "Espacio que documenta la historia del conflicto armado en El Salvador.", "img": "https://elsalvador.travel/system/wp-content/uploads/2021/04/MUSEO-LA-REVOLUCION-scaled.jpg" },
  { "nombre": "Playas del Golfo de Fonseca", "departamento": "La Unión", "tipo": "playa", "lat": 13.1897158, "lon": -88.0016377, "desc": "Playas vírgenes y vistas a Honduras y Nicaragua.", "img": "https://elsalvador.travel/system/wp-content/uploads/2020/02/golfo-fonseca-01.jpg" },
  { "nombre": "Isla Zacatillo", "departamento": "La Unión", "tipo": "isla", "lat": 13.3051881, "lon": -87.7662993, "desc": "Isla en el Golfo de Fonseca, ideal para turismo ecológico y playas tranquilas.", "img": "https://elsalvador.travel/system/wp-content/uploads/2021/04/Isla-Zacatillo-La-Union-3.jpg" },
  { "nombre": "Espíritu de la Montaña (Conchagua)", "departamento": "La Unión", "tipo": "mirador", "lat": 13.272143, "lon": -87.8282623, "desc": "Mirador ecológico en el Volcán de Conchagua, famoso por sus vistas al Golfo de Fonseca y campamentos en la cima.", "img": "https://juanlievano.com/wp-content/uploads/2020/02/DSC_0400_opt.jpg" },
  { "nombre": "Parque Recreativo Los Chorros", "departamento": "La Libertad", "tipo": "parque acuático", "lat": 13.6957246, "lon": -89.3221392, "desc": "A pocos minutos de la capital, este destino con aguas de nacimiento natural y procedentes de laderas volcánicas es una excelente opción para relajarte y disfrutar con tu familia y amigos", "img": "https://static.elmundo.sv/wp-content/uploads/2021/12/Los-Chorros-5.png" },
  { "nombre": "El Peñón de Comasagua", "departamento": "La Libertad", "tipo": "montaña", "lat": 13.6227344, "lon": -89.3709082, "desc": "Es una formación rocosa natural de gran tamaño, que se eleva más de 900 metros sobre el nivel del mar. El Peñón se ubica en el municipio de Comasagua, departamento de La Libertad aproximadamente a 27-30 km de San Salvador", "img": "https://elsalvador.travel/system/wp-content/uploads/2021/04/10012021-produccio%CC%81n-Comasagua-APPEX-15.jpg" },
  { "nombre": "La Puerta del Diablo", "departamento": "San Salvador", "tipo": "montaña", "lat": 13.6248575, "lon": -89.1925745, "desc": "La puerta del diablo es un destino turístico icónico en Panchimalco, San Salvador, El Salvador, conocido por sus dos grandes peñascos que forman un arco natural, ofreciendo vistas espectaculares de la capital, el océano y los lagos.", "img": "https://istu.gob.sv/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-08-at-10.46.10-AM.jpeg" }
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
         ${l.img ? `<img src="${l.img}" alt="${l.nombre}" style="width:100%;max-height:150px;object-fit:cover;margin-top:6px;border-radius:6px;">` : ""}
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
          ${l.img ? `<img src="${l.img}" alt="${l.nombre}" style="width:100%;max-height:220px;object-fit:cover;margin-bottom:8px;border-radius:8px;">` : ""}
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