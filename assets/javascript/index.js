let openedModal = false;

$('.open-modal').click(() => {
    openedModal = true;
});

$('.close-modal').click(() => {
    openedModal = false;
});

$('#about-me').click(() => {
    animation(0, false);
});

$('.Web-Development').click(() => {
    if (!openedModal){
        animation(1);
    }
});

$('.python-development').click(() => {
    animation(2);
});

$('.Minecraft').click(() => {
    animation(3, false);
});

async function animation(index, wrap=true) {

    if($('#fishing-site').is(':visible') || $('#track-my-time').is(':visible')){
        return -1;
    }

    const selectedDisplayGrid = document.getElementsByClassName("display-grid")[index];
    
    const selectedSlider = selectedDisplayGrid.getElementsByClassName("slider")[0];
    const selectedContentContainer = selectedDisplayGrid.getElementsByClassName("content-container")[0];

    selectedSlider.classList.add('slider-active');
    selectedDisplayGrid.classList.add('display-grid-active');
    selectedContentContainer.classList.add('content-container-active');

    if (wrap) selectedContentContainer.classList.add('no-wrap');

    setTimeout(function(){
        selectedSlider.classList.remove('slider-active');
        selectedContentContainer.classList.remove('content-container-active');
        setTimeout(function(){
            if (wrap) selectedContentContainer.classList.remove('no-wrap');
            selectedDisplayGrid.classList.remove('display-grid-active');
        }, 2000); 
    }, 4000); 

}
