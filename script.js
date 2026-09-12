const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {threshold: 0.15});

document.querySelectorAll(".reveal").forEach(e => observer.observe(e));


const galleryImages = [
    ["https://cdn.modrinth.com/data/qkFICiSk/images/0a1c4fe85ef50552c54802bd6f1687173a68ebf4.png", "DC Metro Gull II"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/0d6984f8b4cef3eb39ed991e2efe7bcd4114dfe2.png", "DC Metro General Peak"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/10a0717ee4b227ea5faa29774955dd9275c13b93.png", "DC Metrobus Shelter"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/15a507e47fe186429a3d231bc6a1bc6c41126c0b.png", "DC Metro Tysons Peak"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/1a2ec45f757e4571f5ff9ab095f80031ec6abe01.png", "DC Metro West Hyattsville"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/56263b2c11824eaa7671f6a53115566d2dd1bfc0.png", "DC Metro High Peak"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/575b54d46682dd1a56fe4c51851b05d1187ae323.png", "DC Metro Gambrel"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/68fb7598d7188772f81ac0e45b5a6f418dccbeb1.png", "DC Metro Waffle"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/75f57b0cfa5da2e7b3a3fd66194334ec26e5c177.png", "DC Metro Gull I"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/7921b9fbbd3b6f4604d7538b3954907199850f99.png", "DC Metro Dulles Airport"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/83bbba8aeff2e705d0b2e1d6e5e9b79768246521.png", "DC Metro platform screen doors"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/9aac182db6b1e8ae9d7a5fc94339b0c597a4cce6.png", "DC Metro Arch I"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/b6f7f3302ceefaf4b8e5fdfff6733ed4c116e2cc.png", "DC Metro station pylon"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/c0b81ebf8353c6787e5c668473d588ca06aa663d.png", "DC Metro Alexandria Peak"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/d0f5e03b97cb133b32b7de9dc4e5c2c77ef89b64.png", "DC Metro Huntington"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/e57f1ce6873b91b5c0fcafb0870fe6eb732177b5.png", "DC Metro Arlington Cemetery"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/e84d33cb8760413f75a725699828eec6d3f3fc0a.png", "DC Metro fare gates"],
    ["https://cdn.modrinth.com/data/qkFICiSk/images/ef1200bf5b798008a7334a10d600d52fd1262bcf.png", "DC Metro National Airport"]
];

for (let i = 0; i < galleryImages.length; i++) {
    let divEl = document.createElement("div");
    divEl.classList.add("image");
    divEl.setAttribute("title", galleryImages[i][1]);
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", galleryImages[i][0]);
    imgEl.setAttribute("alt", galleryImages[i][1]);
    divEl.appendChild(imgEl);
    gallery.appendChild(divEl);
}