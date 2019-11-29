const portfolio = document.getElementById("portfolio");

function modalOpen() {

    // instanciate new modal
    let modal = new tingle.modal({
        // 푸터 적용 안함.
        footer: true,
        stickyFooter: true,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
            console.log('modal open');
        },
        onClose: function() {
            console.log('modal closed');
        },
        // beforeClose: function() {
        //     console.log("beforeClose");
        //     // here's goes some logic
        //     // e.g. save content before closing the modal
        //     return true; // close the modal
        //     //return false; // nothing happens
        // }
    });

// set content
    modal.setContent('<h1>Java Portfolio(Pokemon Game)</h1>\n' +
        '    <iframe src="https://player.vimeo.com/video/376314294" width="100%" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>');

// add a button
    modal.addFooterBtn('More Detail(Github)', 'tingle-btn tingle-btn--primary', function() {
        location.href = "https://github.com/stevenkim18/PokeMonGame";
    });

// add another button
    modal.addFooterBtn('close', 'tingle-btn tingle-btn--danger', function() {
        // here goes some logic
        modal.close();
    });

// open modal
    modal.open();

// close modal
    //modal.close();
}

function portfolioImageClick() {
    console.log("portfolio_click");

    modalOpen();
}

function init() {
    portfolio.addEventListener('click', portfolioImageClick);
}

init();