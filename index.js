function animation(index) {
    var selectedDisplayGrid = document.getElementsByClassName("display-grid")[index];
    
    var selectedSlider = selectedDisplayGrid.getElementsByClassName("slider")[0];
    console.log(selectedSlider);

    selectedSlider.classList.add('slider-active');
    console.log(selectedSlider.classList);
    setTimeout(function(){
        selectedSlider.classList.remove('slider-active');
    }, 4000); 

    var selectedContentContainer = selectedDisplayGrid.getElementsByClassName("content-container")[0];
    selectedContentContainer.classList.add('content-container-active');
    setTimeout(function(){
        selectedContentContainer.classList.remove('content-container-active');
    }, 4000); 
}
