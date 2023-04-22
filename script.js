function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
  
    // Convierte la hora en formato de 12 horas y determina si es AM o PM
    
    if (hours === 0) {
      hours = 12;
    }
  
    // Agrega un cero delante de los minutos si son menores que 10
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    // Agrega un cero delante de los segundos si son menores que 10
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
   
  
    // Crea una cadena de texto que muestre la hora actual
    var timeString = hours + ":" + minutes;
  
    // Actualiza el contenido del elemento div con la hora actual
    document.getElementById("clock").innerHTML = timeString;
  }
  
  // Llama a la función displayTime cada segundo
  setInterval(displayTime, 1000);