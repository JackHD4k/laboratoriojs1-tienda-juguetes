function calcDesc(cant) {
  let cant = document.getElementById("input-cant").value;
  if (cant < 10) {
    document.getElementById("desc-mono").innerHTML = cant * 3.5 + " %";
  } else if (cant >= 10 && cant <= 20) {
    document.getElementById("desc-mono").innerHTML = cant * 7.0 + " %";
  } else if (cant > 20) {
    document.getElementById("desc-mono").innerHTML = cant * 9.5 + " %";
  }
}