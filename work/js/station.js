const bg_canvas=document.getElementById("workpng")
const BG_Ctx=bg_canvas.getContext("2d")

bg_canvas.height=450
bg_canvas.width=750

work_station=new img(document.getElementById("Station"),0,0,bg_canvas.width,bg_canvas.height,BG_Ctx)
console.log(work_station)
function animate(){
work_station.draw()
requestAnimationFrame(animate)
}
animate()