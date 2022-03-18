(function(){
    "use strict";
    // 
    var $form = document.querySelector("#formC");
    var $userUserC = document.querySelector("#userUserC");
    var $userPassC = document.querySelector("#userPassC");
    var $userEmailC = document.querySelector("#userEmailC");
    // 
    $form.addEventListener("submit", function(e){
        if(
            !$userUserC.value ||
            !$userEmailC.value ||
            !$userPassC.value
        ){
            alert("fill in all login fields.");
            e.preventDefault();
        }
    });
})();
