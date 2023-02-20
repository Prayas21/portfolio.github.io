sprinkels_array=[]
for(i=0;i<=40;i++){
    sprinkels_array.push(new sprinkels(canvas.width,canvas.height,ctx,0.2,true))
}
animation=new character("Animation",ctx,4)
collide_array=[]

work=false
life=false
more_life=false
enter=false

function arr(){
collide_array.push(new collision(270,360,120,107,ctx))
collide_array.push(new collision(630,360,130,107,ctx))
collide_array.push(new collision(1301,360,130,107,ctx))
collide_array.push(new collision(2000,360,130,107,ctx))
}
arr()

console.log(collide_array)
let back={
    x:0,
    y:0,
}
c=0
function fg(){

const img = document.getElementById("fg")
ctx.drawImage(img,back.x,back.y,6200,600*2,0,0,3100,600)
}
function draw_Blocks(){
    for(k=0;k<4;k++){
        collide_array[k].Block()
}
}
function collide(){
    for(i=1;i<collide_array.length;i++){
        if(collide_array[0].x+collide_array[0].width>=collide_array[i].x){
        if(collide_array[0].x<=collide_array[i].x+collide_array[i].width){
        if(collide_array[0].y+collide_array[0].height>=collide_array[i].y){
        if(collide_array[0].y<=collide_array[i].y+collide_array[i].height){
            if(collide_array[i]==collide_array[1]){
                work=true
                life=false
                more_life=false
                console.log(work || life || work)
            }
            else if(collide_array[i]==collide_array[2]){
                work=false
                life=true
                more_life=false
            }

            else if(collide_array[i]==collide_array[3]){
                work=false
                life=false
                more_life=true
                console.log(more_life)
            }
            else{
                work=false
                life=false
                more_life=false
                
            }
        }
        }
        }
        }
    }
}
function bg(){

    const img = document.getElementById("bg")
    ctx.drawImage(img,back.x,back.y,6200,600*2,0,0,3100,600)
    }
document.addEventListener("keypress", function(e){
    if(e.key=='Enter'){
        enter=true
    }
    else{
        enter=false
    }
    if(e.key=='d'&& back.x<4400){
        back.x+=15
        animation.sy=500;
        for(i=1;i<collide_array.length;i++){
            collide_array[i].x-=6.5
        }
        
    }
    
    else if(e.key=='a' && back.x>0){
        back.x-=15
        animation.sy=500;
        for(i=1;i<collide_array.length;i++){
            collide_array[i].x+=6.5
        }
        
    }
    else{
        animation.sy=0;
    }
})
document.addEventListener("keyup", function(e){

        animation.sy=0;
})
function animate(){
    c++;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg()
    for(i=0;i<=40;i++){
        sprinkels_array[i].circle()
        sprinkels_array[i].move()
    }
    fg()
    
    animation.Image()
    animation.move()
    collide()
    draw_Blocks()
    
    requestAnimationFrame(animate)
}
animate()