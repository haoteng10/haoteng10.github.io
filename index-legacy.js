document.addEventListener('DOMContentLoaded', function() {
    var displayGrids = document.getElementsByClassName("display-grid");
    for (var i = 0; i < displayGrids.length; i++) {
        displayGrids[i].addEventListener("click", addStyles(displayGrids[i]));
        console.log(displayGrids[i]);
    }

    function addStyles(selectedDisplayGrid){
        selectedDisplayGrid.classList.add('display-grid-active');
        setTimeout(function(){
            selectedDisplayGrid.classList.remove('display-grid-active');
        }, 4000); 

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
}, false);

