export const campos = [
    {name: "documento", required: true, minLength: 8, maxLength: 11},
    {name: "nombre", required: true, minLength: 3, maxLength: 20},
    {name: "apellido", required: true, minLength: 3, maxLength: 20},
    {name: "telefono", required: true, minLength: 10, maxLength: 11},
    {name: "contrasena", required: true, minLength: 5, maxLength: 20},
    {name: "id_genero", required: true,type: "number", minLength: 1, maxLength: 20},
    {name: "id_ciudad", required: true,type: "number", minLength: 1, maxLength: 20}
]