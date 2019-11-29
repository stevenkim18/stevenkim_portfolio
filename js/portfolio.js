const portfolio = document.getElementById("portfolio");

function portfolioImageClick() {
    console.log("portfolio_click");
}

function init() {
    portfolio.addEventListener('click', portfolioImageClick);
}

init();