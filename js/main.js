

  const galeria = (imgs) => {
      let imgPrincipal = document.getElementById("imgPrincipal");
      let imgText = document.getElementById("imgtext");
      imgPrincipal.src = imgs.src;
      imgText.innerHTML = imgs.alt;
      imgPrincipal.parentElement.style.display = "block";
  }
