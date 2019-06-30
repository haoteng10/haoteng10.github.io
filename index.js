function animation(index) {
    var selectedDisplayGrid = document.getElementsByClassName("display-grid")[index];
    
    var selectedSlider = selectedDisplayGrid.getElementsByClassName("slider")[0];
    var selectedContentContainer = selectedDisplayGrid.getElementsByClassName("content-container")[0];

    selectedSlider.classList.add('slider-active');
    selectedDisplayGrid.classList.add('display-grid-active');
    selectedContentContainer.classList.add('content-container-active');

    setTimeout(function(){
        selectedSlider.classList.remove('slider-active');
        selectedContentContainer.classList.remove('content-container-active');
        setTimeout(function(){
            selectedDisplayGrid.classList.remove('display-grid-active');
        }, 2000); 
    }, 4000); 

}
