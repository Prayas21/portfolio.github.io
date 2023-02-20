class circle{
    constructor(x,y,r,ctx){
        this.x=x
        this.y=y
        this.r=r
        this.ctx=ctx
        this.outs=false
    }
    golo(){
        this.ctx.beginPath()
        this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
        this.ctx.fillStyle="black"
        this.ctx.fill()
        this.ctx.closePath()
    }
    out(){
        this.outs=true
        this.r+=20;
        
    }
    in(){
        
        if(this.r>0 && this.outs==false){
        this.r-=20;}
        else{
            this.r=0
        }
        
    }
}