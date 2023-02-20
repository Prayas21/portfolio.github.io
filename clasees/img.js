class img{
    constructor(id,x,y,w,h,ctx){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.ctx=ctx
    this.source=id
}
    draw(){
        this.ctx.drawImage(this.source,this.x,this.y,this.w,this.h)
    }
}