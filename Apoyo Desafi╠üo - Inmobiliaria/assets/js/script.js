const propiedades_venta = [
    {
      nombre: 'Casa moderna en zona residencial',
      src: 'https://images.unsplash.com/photo-1562153927-f31e65ff8fd0',
      descripcion: 'Hermosa casa moderna de 4 habitaciones, ideal para una familia. Amplio jardín y piscina.',
      ubicacion: 'Av. Primavera 345, Los Pinos, Ciudad de México, MX',
      habitaciones: 4,
      costo: 320000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento de lujo en el centro',
      src: 'https://images.unsplash.com/photo-1572600130211-9fd7e13028d3',
      descripcion: 'Departamento con vista panorámica al mar, 3 habitaciones, 2 baños, ideal para ejecutivos.',
      ubicacion: 'Calle Libertad 786, Torre Central, Cancún, MX',
      habitaciones: 3,
      costo: 420000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Casa con amplio terreno en las afueras',
      src: 'https://images.unsplash.com/photo-1561693439-d33c6eacaf7a',
      descripcion: 'Casa en las afueras con terreno amplio, perfecta para aquellos que buscan privacidad y naturaleza.',
      ubicacion: 'Carretera El Sol 156, Suburbio, Guadalajara, MX',
      habitaciones: 5,
      costo: 500000,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza',
      src: 'https://images.unsplash.com/photo-1577208466623-d21361ba56fe',
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
      src: 'https://images.unsplash.com/photo-1521791145564-94f545bc1899',
      descripcion: 'Apartamento de 2 habitaciones, totalmente amueblado, ubicado a pasos de las principales tiendas y restaurantes.',
      ubicacion: 'Calle Bolívar 245, Centro Histórico, Lima, PE',
      habitaciones: 2,
      costo: 800,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Departamento con vista al mar',
      src: 'https://images.unsplash.com/photo-1555645130-d2346be4bfe2',
      descripcion: 'Departamento de 1 habitación en un edificio frente al mar, ideal para solteros o parejas.',
      ubicacion: 'Calle del Mar 432, Punta Cana, República Dominicana',
      habitaciones: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Casa en alquiler para vacaciones',
      src: 'https://images.unsplash.com/photo-1610302572520-37a039a92d98',
      descripcion: 'Casa vacacional de 3 habitaciones, con piscina privada y vista al lago. Ideal para escapadas familiares.',
      ubicacion: 'Calle del Lago 789, Costa Azul, Acapulco, MX',
      habitaciones: 3,
      costo: 1800,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento en edificio moderno',
      src: 'https://images.unsplash.com/photo-1577227735851-e1b45e0da7c6',
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