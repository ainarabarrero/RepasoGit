const persona = {
  nombre: "Aina",
  edad: 20,
  profesion: "Programadora",
  presentarse: function () {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
  }
};

persona.presentarse();
