
cricket=document.getElementById("cricket")
music=document.getElementById("music")
lamp=document.getElementById("lamp")
bed=document.getElementById("bed")
guitar=document.getElementById("guitar")
movie=document.getElementById("movie")
dialoge=document.getElementById("Dialoge")

cric=new box("Dialoge","halka_fulka_bowling_handinxu_lyapa_lyapa_wicket_lina_ta_sakkina_tara_average_gully_player.Cricket_has_so_many_great_memories.",false)
musi=new box("Dialoge","Love_music_cannot_imagine_life_without_music.Uthda,sutna,khada,kam_garda,padhda.",false)
lam=new box("Dialoge","Just_a_lamp.TUK_TUK",false)
be=new box("Dialoge","Bed_where_I_sleep",false)
guita=new box("Dialoge","Guitar_bajauna_auuxa_halka_fulka.Tei_ho_pentatonic_scale_ma_halka_solos_hanni.Halka_fulka_geet_sikni.Dhukha_ko_sathi(guitar).Something_I_can't_resemble_through_words_can_be_said_through_just_some_notes.",false)
movi=new box("Dialoge","love_cinema.Really_hope_to_make_my_own_movie_someday.",false)

cricket.onclick=()=>{
    cric.c=-1
    cric.bool=true
    musi.bool=false
    be.bool=false
    guita.bool=false
    movi.bool=false
    lam.bool=false
    dialoge.innerText=""
}
music.onclick=()=>{
    musi.c=-1
    cric.bool=false
    musi.bool=true
    be.bool=false
    guita.bool=false
    movi.bool=false
    lam.bool=false
    dialoge.innerText=""
}
bed.onclick=()=>{
    be.c=-1
    cric.bool=false
    musi.bool=false
    be.bool=true
    guita.bool=false
    movi.bool=false
    lam.bool=false
    dialoge.innerText=""
}
guitar.onclick=()=>{
    guita.c=-1
    cric.bool=false
    musi.bool=false
    be.bool=false
    guita.bool=true
    movi.bool=false
    lam.bool=false
    dialoge.innerText=""
}
movie.onclick=()=>{
    movi.c=-1
    cric.bool=false
    musi.bool=false
    be.bool=false
    guita.bool=false
    movi.bool=true
    lam.bool=false
    dialoge.innerText=""
}
lamp.onclick=()=>{
    lam.c=-1
    dialoge.innerText=""
    cric.bool=false
    musi.bool=false
    be.bool=false
    guita.bool=false
    movi.bool=false
    lam.bool=true
    
}
function again(){
    cric.undertale()
    musi.undertale()
    be.undertale()
    guita.undertale()
    movi.undertale()
    lam.undertale()
    requestAnimationFrame(again)
}
again()