function calcDesc(toy, cant, prec) {
  //let cant = document.getElementById("input-cant").value;
  //let prec = document.getElementById("precio").value;

  switch (toy) {
    case "monopolio":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        document.getElementById("desc-mono").innerHTML = "S/" + desc.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        document.getElementById("desc-mono").innerHTML = "S/" + desc.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        document.getElementById("desc-mono").innerHTML = "S/" + desc.toFixed(2);
      }
      break;

    case "ajedrez":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        document.getElementById("desc-ajedrez").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        document.getElementById("desc-ajedrez").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        document.getElementById("desc-ajedrez").innerHTML =
          "S/" + desc.toFixed(2);
      }
      break;

    case "lego":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        document.getElementById("desc-lego").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        document.getElementById("desc-lego").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        document.getElementById("desc-lego").innerHTML =
          "S/" + desc.toFixed(2);
      }
      break;

    case "dama":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        document.getElementById("desc-dama").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        document.getElementById("desc-dama").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        document.getElementById("desc-dama").innerHTML =
          "S/" + desc.toFixed(2);
      }
      break;

    case "laberinto":
      if (cant < 10) {
        let desc = (prec * 3.5) / 100;
        document.getElementById("desc-laberinto").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant >= 10 && cant <= 20) {
        let desc = (prec * 7.0) / 100;
        document.getElementById("desc-laberinto").innerHTML =
          "S/" + desc.toFixed(2);
      } else if (cant > 20) {
        let desc = (prec * 9.5) / 100;
        document.getElementById("desc-laberinto").innerHTML =
          "S/" + desc.toFixed(2);
      }
      break;

    default:
      break;
  }
}
