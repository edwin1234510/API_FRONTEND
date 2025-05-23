export const campos = [
  { name: "documento", required: true, minLength: 8, maxLength: 11 },
  { name: "nombre", required: true, minLength: 3, maxLength: 50 },
  { name: "apellido", required: true, minLength: 3, maxLength: 50 },
  { name: "telefono", required: true, minLength: 10, maxLength: 10 },
  { name: "contrasena", required: true, minLength: 8 },
  { name: "id_genero", required: true, type: "number" },
  { name: "id_ciudad", required: true, type: "number" }
]