const imagem = document.getElementById("imagem");
const img = document.querySelector("img");

// adicionar função para que quando passe o mouse por cima ativar o zoom
imagem.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft; //configurando x do plano cartesiano
    const y = e.clientY - e.target.offsetTop;   //configurando y do plano cartesiano

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(3)"; //quantidade de zoom
});

//função para quando mouse sair de cima da imagem remover o efeito de zoom
imagem.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});

const respositories = document.querySelector(".content-main");

function getApiGitHub() {
    fetch('https://api.github.com/users/murilofrnd/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            let data = await res.json();
            data.map(item => {
                let project = document.createElement('div');

                project.innerHTML = `
                <div class="project">
                    <div>
                        <h4 class="title">${item.name}</h4>
                        <span class="date-create">${Intl.DateTimeFormat('PT-BR').format(new Date(item.created_at))}</span>
                    </div>
                    <div>
                        <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                        <span class="language"><span class="circle"></span>${item.language}</span>
                    </div>
                </div>
                `

                respositories.appendChild(project);
            })
        })
}

getApiGitHub()