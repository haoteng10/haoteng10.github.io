function animation(index) {
    var selectedDisplayGrid = document.getElementsByClassName("display-grid")[index];
    
    var selectedSlider = selectedDisplayGrid.getElementsByClassName("slider")[0];

    selectedSlider.classList.add('slider-active');
    setTimeout(function(){
        selectedSlider.classList.remove('slider-active');
    }, 4000); 

    selectedDisplayGrid.classList.add('display-grid-active');
    setTimeout(function(){
        selectedDisplayGrid.classList.remove('display-grid-active');
        console.log("executed!");
    }, 4000); 
    
    var selectedContentContainer = selectedDisplayGrid.getElementsByClassName("content-container")[0];
    selectedContentContainer.classList.add('content-container-active');
    setTimeout(function(){
        selectedContentContainer.classList.remove('content-container-active');
    }, 4000); 

    
}
