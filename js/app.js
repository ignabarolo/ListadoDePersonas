const personas = [];

function mostrarPersonas() {
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];

  if ((nombre.value != "" || apellido.value != "")) {
    const persona = new Persona(nombre.value, apellido.value);

    console.log(nombre.value);
    personas.push(persona);

    console.clear();
    mostrarPersonas();
  } else {
    alert("Debe ingresar un nombre y apellido válidos");
  }
}

// && (typeof nombre.value == string || typeof apellido.value == string)