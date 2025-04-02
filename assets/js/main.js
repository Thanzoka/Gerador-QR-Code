function gerarQRCode() {
  let link = document.getElementById("link").value;
  let qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = "";

  if (link) {
    new QRCode(qrcodeDiv, {
      text: link,
      width: 200,
      height: 200,
    });
  } else {
    alert("Por favor, insira um link válido.");
  }
}
