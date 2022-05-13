let agregando = false;
let modalTemporadasInput = "";
let modalNombreInput = "";
let nombreSeleccionado = "";
let temporadaSeleccionada = "";
const tablaAgregar = document.getElementById("tablaAgregar");
const botonAgregar = document.getElementById("botonAgregar");
const botonEditar = document.getElementById("botonEditar");

const nueva = () => {
  if (agregando) {
    agregar();
  } else {
    activarModoAgregar();
  }
};

const editar = (nombre, temporadas) => {
  document.getElementById("modal").classList.toggle("hidden");
  nombreSeleccionado = nombre;
  temporadaSeleccionada = temporadas;
};

const activarModoAgregar = () => {
  agregando = true;
  document.getElementById("tablaAgregar").classList.toggle("hidden");
  botonAgregar.innerHTML = "Agregar";
  botonAgregar.insertAdjacentHTML(
    "afterend",
    `
    <button
    id="botonSalir"
    onclick={salirModoAgregar()}
    class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-r"
  >
    Salir
  </button>
    `
  );
};

const agregar = () => {
  const nombreInput = document.getElementById("nombreInput").value;
  const temporadasInput = document.getElementById("temporadasInput").value;
  agregarColumna({ nombre: nombreInput, temporadas: temporadasInput });
  salirModoAgregar();
};

const agregarColumna = ({ nombre, temporadas }) => {
  const nombreSinEspacios = `${nombre.split(" ").join("")}`;
  document.getElementById("cuerpoDeTabla").insertAdjacentHTML(
    "beforebegin",
    `
  <tr>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  <button
  onclick="editar(nombre${nombreSinEspacios}, temporadasTotales${nombreSinEspacios})"
    name="editar"
    class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
  >
    <?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
    <svg
      enable-background="new 0 0 19 19"
      height="19px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 19 19"
      width="14px"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          d="M8.44,7.25C8.348,7.342,8.277,7.447,8.215,7.557L8.174,7.516L8.149,7.69   C8.049,7.925,8.014,8.183,8.042,8.442l-0.399,2.796l2.797-0.399c0.259,0.028,0.517-0.007,0.752-0.107l0.174-0.024l-0.041-0.041   c0.109-0.062,0.215-0.133,0.307-0.225l5.053-5.053l-3.191-3.191L8.44,7.25z"
          fill="#231F20"
        />
        <path
          d="M18.183,1.568l-0.87-0.87c-0.641-0.641-1.637-0.684-2.225-0.097l-0.797,0.797l3.191,3.191l0.797-0.798   C18.867,3.205,18.824,2.209,18.183,1.568z"
          fill="#231F20"
        />
        <path
          d="M15,9.696V17H2V2h8.953l1.523-1.42c0.162-0.161,0.353-0.221,0.555-0.293   c0.043-0.119,0.104-0.18,0.176-0.287H0v19h17V7.928L15,9.696z"
          fill="#231F20"
        />
      </g>
    </svg>
  </button>
</td>  
<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <p id="nombre${nombreSinEspacios}" class="text-gray-900 whitespace-no-wrap">
      ${nombre}
    </p>
  </td>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <p id="temporadasTotales${nombreSinEspacios}" class="text-gray-900 whitespace-no-wrap">${temporadas}</p>
  </td>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <p
      class="text-gray-900 whitespace-no-wrap"
      id="temporadasVistas${nombreSinEspacios}"
      
    >
      0
    </p>
  </td>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <p id="porcentaje${nombreSinEspacios}" class="text-gray-900 whitespace-no-wrap">0</p>
  </td>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <button
      onclick="aumentarCantidad(temporadasVistas${nombreSinEspacios}, porcentaje${nombreSinEspacios}, temporadasTotales${nombreSinEspacios})"
      class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 1792 1792"
      >
        <path
          d="M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"
        />
      </svg>
    </button>
  </td>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <button
      name="bajar"
      class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
      onclick="reducirCantidad(temporadasVistas${nombreSinEspacios}, porcentaje${nombreSinEspacios}, temporadasTotales${nombreSinEspacios})"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 1792 1792"
      >
        <path
          d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"
        />
      </svg>
    </button>
  </td>
</tr>
    `
  );
};

const salirModoAgregar = () => {
  agregando = false;
  botonAgregar.innerHTML = "Nueva";
  document.getElementById("botonSalir").remove();
  const tablaAgregar = document.getElementById("tablaAgregar");
  tablaAgregar.classList.toggle("hidden");
  limpiarInputs();
};

const limpiarInputs = () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
};

const aumentarCantidad = (temporadasVistas, porcentaje, temporadasTotales) => {
  const cantidadesTotales = parseInt(temporadasTotales.innerHTML);
  const cantidad = parseInt(temporadasVistas.innerHTML);
  if (cantidad < cantidadesTotales) {
    porcentaje.innerHTML = parseFloat(
      ((cantidad + 1) / cantidadesTotales) * 100
    ).toFixed(2);
    temporadasVistas.innerHTML = cantidad + 1;
  }
};

const reducirCantidad = (temporadasVistas, porcentaje, temporadasTotales) => {
  const cantidadesTotales = parseInt(temporadasTotales.innerHTML);
  const cantidad = parseInt(temporadasVistas.innerHTML);
  if (cantidad > 0) {
    porcentaje.innerHTML = parseFloat(
      ((cantidad - 1) / cantidadesTotales) * 100
    ).toFixed(2);
    temporadasVistas.innerHTML = cantidad - 1;
  }
};

const cerrarModal = () => {
  document.getElementById("modal").classList.toggle("hidden");
};

const inputTemporadas = document.getElementById("modalTemporadasInput");
inputTemporadas.addEventListener("change", (e) => {
  modalTemporadasInput = e.target.value;
});
const inputNombre = document.getElementById("modalNombreInput");
inputNombre.addEventListener("change", (e) => {
  modalNombreInput = e.target.value;
});

const finalizarEdicion = document.getElementById("finalizarEdicion");
finalizarEdicion.addEventListener("click", () => {
  if (modalTemporadasInput === "" && modalNombreInput === "") {
    return;
  }
  if (modalTemporadasInput !== "") {
    temporadaSeleccionada.innerHTML = modalTemporadasInput;
  }
  if (modalNombreInput !== "") {
    nombreSeleccionado.innerHTML = modalNombreInput;
  }
  cerrarModal();
  limpiarInputs();
});

const buscar = () => {
  const tabla = document.getElementById("tabla");
  const texto = document.getElementById("buscador").value.toLowerCase();
  let total = 0;
  for (let i = 1; i < tabla.rows.length; i++) {
    let encontrado = false;
    const celda = tabla.rows[i].getElementsByTagName("td");
    for (let j = 0; j < celda.length; j++) {
      if (celda[j].innerHTML.toLowerCase().indexOf(texto) > -1) {
        encontrado = true;
        total++;
      }
    }
    if (encontrado) {
      tabla.rows[i].style.display = "";
    } else {
      tabla.rows[i].style.display = "none";
    }
  }
};
