class box{
    constructor(id,text,bool)
    {
        this.box=document.getElementById(id)
        this.text=text
        this.i=0
        this.c=-1
        this.bool=bool
        // this.box.innerText=""
    }
    
    undertale(){
        if(this.bool){
            this.i++
        if(this.i%5==0){
            this.c++
            if(this.c<this.text.length){
        this.box.innerText=this.box.innerText+" "+this.text[this.c]
    }
        } 
    }
}

    
}