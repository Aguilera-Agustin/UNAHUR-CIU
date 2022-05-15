let agregando = false;
let modalTemporadasInput = "";
let modalNombreInput = "";
let nombreSeleccionado = "";
let temporadaSeleccionada = "";
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
  switchModal();
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
    class="transition-all text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm ml-2"
  >
    Salir
  </button>
    `
  );
};

const agregar = () => {
  const nombreInput = document.getElementById("nombreInput").value;
  const temporadasInput = document.getElementById("temporadasInput").value;
  if (
    nombreInput === "" ||
    temporadasInput === "" ||
    !esNumeroNatural(temporadasInput)
  ) {
    return alert(
      "Por favor, ingrese un nombre y una cantidad de temporadas vistas válidos."
    );
  }

  agregarColumna({ nombre: nombreInput, temporadas: temporadasInput });

  salirModoAgregar();
};

const agregarColumna = ({ nombre, temporadas }) => {
  const nombreSinEspacios = `${nombre.split(" ").join("")}`;
  document.getElementById("cuerpoDeTabla").insertAdjacentHTML(
    "beforebegin",
    `
    <tr id="tabla${nombreSinEspacios}">
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex gap-2">
        <button
          onclick="eliminar(tabla${nombreSinEspacios})"
          class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
          >
          <?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="19px" height="19px">
            <path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M20,4H4"/>
            <path d="M15 3v1H9V3l.429-.429C9.795 2.205 10.29 2 10.807 2h2.386c.517 0 1.012.205 1.377.571L15 3zM4.366 7l1.527 13.264C6.025 21.254 6.877 22 7.875 22h8.249c.998 0 1.85-.746 1.983-1.745L19.634 7H4.366z"/>
          </svg>
        </button>
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
      </div>
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
      <div class="flex gap-3">
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
      </div>
    </td>
  </tr>
    `
  );
};

const salirModoAgregar = () => {
  agregando = false;
  botonAgregar.innerHTML = "Nueva serie";
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

const switchModal = () => {
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
  if (!esNumeroNatural(modalTemporadasInput)) {
    return alert("La cantidad de temporadas debe ser un número natural");
  }
  if (modalTemporadasInput !== "") {
    temporadaSeleccionada.innerHTML = modalTemporadasInput;
  }
  if (modalNombreInput !== "") {
    nombreSeleccionado.innerHTML = modalNombreInput;
  }
  switchModal();
  limpiarInputs();
});

const eliminar = (tabla) => {
  tabla.remove();
};

const buscar = () => {
  let tablaVacia = true;
  const tabla = document.getElementById("tabla");
  const texto = document.getElementById("buscador").value.toLowerCase();
  for (let i = 1; i < tabla.rows.length; i++) {
    let encontrado = false;
    const celda = tabla.rows[i].getElementsByTagName("td");
    for (let j = 0; j < celda.length; j++) {
      if (
        celda[j]?.firstElementChild?.id.includes("nombre") &&
        celda[j].firstElementChild.nodeName === "P"
      ) {
        tablaVacia = false;
        if (
          celda[j].firstElementChild.textContent
            .trim()
            .toLowerCase()
            .includes(texto.toLowerCase())
        ) {
          encontrado = true;
        }
      }
    }
    if (encontrado) {
      return (tabla.rows[i].style.display = "");
    }
    if (tablaVacia) {
      return;
    }
    return (tabla.rows[i].style.display = "none");
  }
};

const esNumeroNatural = (numero) => {
  return /^\d+$/.test(numero);
};
