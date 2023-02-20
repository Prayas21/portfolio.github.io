const canvas=document.getElementById("roomimg")
const ctx=canvas.getContext("2d")
canvas.height=450
canvas.width=750

Room_bg=new img(document.getElementById("room_bg"),0,0,canvas.width,canvas.height,ctx)
Room_fg=new img(document.getElementById("room_fg"),0,0,canvas.width,canvas.height,ctx)
function animate(){
Room_bg.draw()
Room_fg.draw()
requestAnimationFrame(animate)
}
animate()