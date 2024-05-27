function calcDesc(toy, cant, prec) {

  switch (toy) {
    case "monopolio":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-mono").innerHTML =
         "S/" + total.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-mono").innerHTML = 
         "S/" + total.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-mono").innerHTML =
         "S/" + total.toFixed(2);
      }
      break;

    case "ajedrez":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-ajedrez").innerHTML =
          "S/" + total.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-ajedrez").innerHTML =
          "S/" + total.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-ajedrez").innerHTML =
          "S/" + total.toFixed(2);
      }
      break;

    case "lego":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-lego").innerHTML =
         "S/" + total.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-lego").innerHTML =
          "S/" + total.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-lego").innerHTML =
          "S/" + total.toFixed(2);
      }
      break;

    case "dama":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-dama").innerHTML =
          "S/" + total.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-dama").innerHTML =
          "S/" + total.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-dama").innerHTML =
          "S/" + total.toFixed(2);
      }
      break;

    case "laberinto":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-laberinto").innerHTML =
          "S/" + total.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-laberinto").innerHTML =
          "S/" + total.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        let total = prec - desc.toFixed(2);
        document.getElementById("desc-laberinto").innerHTML =
          "S/" + total.toFixed(2);
      }
      break;

    default:
      console.log("Error");
      break;
  }
}

function total() {
  console.log("Total");	
}