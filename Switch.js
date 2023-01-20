function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(color) {
      case "blue":
        return "This is blue";
      case "red": 
        return "This is red";
      case "green":
        return "This is green";
      case "orange":
        return "This is orange";
      default: 
      return "Color not found";
    }
  }