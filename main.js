var canvas=new fabric.Canvas("mycanvas")
var block_width=30;
var block_height=30;
var player_x=10;
var player_y=20;
var player_image="";
var block_image="";
function player_update(){
    fabric.Image.from_URL("player.png",function(Img){
player_image=Img;
player_image.scaleToWidth(150);
player_image.scaleToHeight(140);
player_image.set({
    top:player_y,
    left:player_x
});
canvas.add(player_image);

    });

}


function new_image(get_image){
    fabric.Image.from_URL(get_image,function(Img){
block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image);

    });
    
}
window.addEventListener("keydown", keydownf);
function keydownf(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p and shift pressed");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_height").innerHTML=block_height;
        document.getElementById("current_width").innerHTML=block_width;

    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("m and shift pressed");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_height").innerHTML=block_height;
        document.getElementById("current_width").innerHTML=block_width;

    }
   if(keypressed=='38'){
       up();
       console.log("up");
   }
   if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(keypressed=='87'){
    new_image('wall.jpg');
    console.log("w");
}
if(keypressed=='71'){
    new_image('ground.png');
    console.log("g");
}
if(keypressed=='76'){
    new_image('light_green.png');
    console.log("l");
}
if(keypressed=='84'){
    new_image('trunk.jpg');
    console.log("t");
}
if(keypressed=='82'){
    new_image('roof.jpg');
    console.log("r");
}
if(keypressed=='89'){
    new_image('yellow_wall.png');
    console.log("y");
}
if(keypressed=='68'){
    new_image('dark_green.png');
    console.log("d");
}
if(keypressed=='85'){
    new_image('unique.png');
    console.log("u");
}
if(keypressed=='67'){
    new_image('cloud.jpg');
    console.log("c");
}
}