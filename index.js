let header = $("#header");
let btnBoy = $("#btn-boy");
let btnGirl = $("#btn-girl");
let image = $("img");

btnBoy.click(()=>{
    header.text("Leider falsch :)");
    image.attr("src", "./images/color.jpg")
});
    

btnGirl.click(()=>{
    header.text("Richtig :)");
    image.attr("src", "./images/color.jpg")
});

