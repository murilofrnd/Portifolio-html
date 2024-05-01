const imagem = document.getElementById("imagem");
const img = document.querySelector("img");

// adicionar função para que quando passe o mouse por cima ativar o zoom
imagem.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft; //configurando x do plano cartesiano
    const y = e.clientY - e.target.offsetTop;   //configurando y do plano cartesiano

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(3)"; //quantidade de zoom
});

//função para quando mouse sair de cima da imagem remover o efeito de zoom
imagem.addEventListener("mouseleave", ()=>{ 
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});