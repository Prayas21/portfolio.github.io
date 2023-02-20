class character{
    constructor(id,ctx,rate){
        this.image=document.getElementById(id)
        this.sx=0
        this.sy=0
        this.sWidth=500
        this.sHeight=500
        this.dx=250
        this.dy=350
        this.dWidth=130
        this.dHeight=130

        this.rate=rate
        this.count=0;
        this.c=7
        this.ctx=ctx
    }
    Image(){
        this.ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight)
    }
    move(){
        if(this.c>=7){
            this.c=0
        }
        if(this.count % this.rate==0){
        this.c++}
        this.count++
        this.sx=500*this.c
    }

    }
