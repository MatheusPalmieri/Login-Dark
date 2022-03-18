(function(){
    "use strict";
    // 
    var $form = document.querySelector("#form");
    var $userName = document.querySelector("#userName");
    var $userPass = document.querySelector("#userPass");
    // 
    $form.addEventListener("submit", function(e){
        if(!$userName.value || !$userPass.value){
            alert("Fill in all login fields.");
            e.preventDefault();
        }
    })
})();
