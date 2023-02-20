class collision{
    constructor(x,y,w,h,ctx){
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        this.ctx=ctx
    }

    Block(){
        this.ctx.beginPath()
        this.ctx.rect(this.x,this.y,this.width,this.height)
        this.ctx.closePath()
    }
}