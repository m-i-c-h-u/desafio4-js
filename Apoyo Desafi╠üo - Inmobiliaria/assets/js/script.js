const propiedades_venta = [
    {
      nombre: 'Casa moderna en zona residencial',
      src: 'https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1453219822/p/photo/image/1255680/Arquiteta_Camila_Castilho-84.jpg',
      descripcion: 'Hermosa casa moderna de 4 habitaciones, ideal para una familia. Amplio jardín y piscina.',
      ubicacion: 'Av. Primavera 345, Los Pinos, Ciudad de México, MX',
      habitaciones: 4,
      costo: 320000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento de lujo en el centro',
      src: 'https://assets.easybroker.com/property_images/3174681/50834143/EB-LE4681.jpg?version=1660065784',
      descripcion: 'Departamento con vista panorámica al mar, 3 habitaciones, 2 baños, ideal para ejecutivos.',
      ubicacion: 'Calle Libertad 786, Torre Central, Cancún, MX',
      habitaciones: 3,
      costo: 420000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Casa con amplio terreno en las afueras',
      src: 'https://www.cjpuga.com/wp-content/uploads/2017/06/20-2.jpg',
      descripcion: 'Casa en las afueras con terreno amplio, perfecta para aquellos que buscan privacidad y naturaleza.',
      ubicacion: 'Carretera El Sol 156, Suburbio, Guadalajara, MX',
      habitaciones: 5,
      costo: 500000,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza',
      src: 'https://media.admagazine.com/photos/631035d3566c6ec729d474df/16:9/w_2560%2Cc_limit/DSC_8555.jpg',
      descripcion: 'Penthouse con 3 habitaciones y terraza privada. Vistas espectaculares a la ciudad.',
      ubicacion: 'Avenida de las Torres 99, Piso 21, Monterrey, MX',
      habitaciones: 3,
      costo: 750000,
      smoke: false,
      pets: true
    }
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const contenedorVenta = document.querySelector('#venta-lista');
    propiedades_venta.forEach(propiedad => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
        <img src="${propiedad.src}" class="card-img" alt="${propiedad.nombre}"/>
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          <p style="color: ${propiedad.smoke ? 'green' : 'red'};">
            <i class="fas fa-smoking${propiedad.smoke ? '' : '-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p style="color: ${propiedad.pets ? 'green' : 'red'};">
            <i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
          </p>
        </div>
      `;
      contenedorVenta.appendChild(div);
    });
  });

  // Alquiler

  const propiedades_alquiler = [
    {
      nombre: 'Apartamento acogedor en el centro',
      src: 'https://www.citymax-mx.com/wp-content/uploads/sites/21/2018/03/decorar-departemento-peque%C3%B1o.jpg',
      descripcion: 'Apartamento de 2 habitaciones, totalmente amueblado, ubicado a pasos de las principales tiendas y restaurantes.',
      ubicacion: 'Calle Bolívar 245, Centro Histórico, Lima, PE',
      habitaciones: 2,
      costo: 800,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Departamento con vista al mar',
      src: 'https://http2.mlstatic.com/D_NQ_NP_2X_617050-MLC80654537977_112024-N.webp',
      descripcion: 'Departamento de 1 habitación en un edificio frente al mar, ideal para solteros o parejas.',
      ubicacion: 'Calle del Mar 432, Punta Cana, República Dominicana',
      habitaciones: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Casa en alquiler para vacaciones',
      src: 'https://www.hola.com/horizon/landscape/74bc562faa10-casa-lago-1t-t.jpg',
      descripcion: 'Casa vacacional de 3 habitaciones, con piscina privada y vista al lago. Ideal para escapadas familiares.',
      ubicacion: 'Calle del Lago 789, Costa Azul, Acapulco, MX',
      habitaciones: 3,
      costo: 1800,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento en edificio moderno',
      src: 'https://img.freepik.com/fotos-premium/edificios-apartamentos-modernos-dia-soleado-fachada-cielo-azul-edificio-apartamentos-moderno_844516-5206.jpg',
      descripcion: 'Apartamento moderno en un edificio de lujo, con gimnasio, área social y seguridad las 24 horas.',
      ubicacion: 'Avenida Reforma 222, Polanco, Ciudad de México, MX',
      habitaciones: 2,
      costo: 1500,
      smoke: false,
      pets: false
    }
  ];
  

  document.addEventListener('DOMContentLoaded', function() {
    const contenedorAlquiler = document.querySelector('#alquiler-lista');
    propiedades_alquiler.forEach(propiedad => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
        <img src="${propiedad.src}" class="card-img" alt="${propiedad.nombre}"/>
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          <p style="color: ${propiedad.smoke ? 'green' : 'red'};">
            <i class="fas fa-smoking${propiedad.smoke ? '' : '-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p style="color: ${propiedad.pets ? 'green' : 'red'};">
            <i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
          </p>
        </div>
      `;
      contenedorAlquiler.appendChild(div);
    });
  });