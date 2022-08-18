var b = document.querySelectorAll(".drum").length;
for (var i = 0; i < b; i++) {
    // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //     alert("im clicked");
    // })
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var c = this.innerHTML;
        makesound(c);
        buttonanimations(c);

        //    if(c==="w")
        //    {

        //        new Audio("sounds/crash.mp3").play();
        //    }
        //    if(c==="a")
        //    {
        //     this.style.borderColor="red";
        //        new Audio("sounds/tom-1.mp3").play();
        //    }
        //    if(c==="s")
        //    {
        //        new Audio("sounds/tom-2.mp3").play();
        //    }
        //    if(c==="d")
        //    {
        //        new Audio("sounds/tom-3.mp3").play();
        //    }
        //    if(c==="j")
        //    {
        //        new Audio("sounds/tom-4.mp3").play();
        //    }
        //    if(c==="k")
        //    {
        //        new Audio("sounds/kick-bass.mp3").play();
        //    }
        //    if(c==="l")
        //    {
        //        new Audio("sounds/snare.mp3").play();
        //    }
        //      })

        

    })

    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonanimations(event.key);
    })
    function makesound(c)
    {
        switch (c) {
            case "w": new Audio("sounds/crash.mp3").play();
                break;
            case "a": new Audio("sounds/tom-1.mp3").play();
                break;
            case "s": new Audio("sounds/tom-2.mp3").play();
                break;
            case "d": new Audio("sounds/tom-3.mp3").play();
                break;
            case "j": new Audio("sounds/tom-4.mp3").play();
                break;
            case "k": new Audio("sounds/kick-bass.mp3").play();
                break;
            case "l": new Audio("sounds/snare.mp3").play();
                break;
                default:alert("key pressed is "+c);

            }
    }
    function buttonanimations(c)
    {
        var act =document.querySelector("."+c);
        act.classList.add("pressed");
        setTimeout(function(){
            act.classList.remove("pressed");
        },100);
    }
}