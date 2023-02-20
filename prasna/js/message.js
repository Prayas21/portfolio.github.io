const message_canavas=document.getElementById("message_canavas")
console.log(message_canavas)
const ctx=message_canavas.getContext("2d")

fav_book=document.getElementById("fav_book")
fav_movie=document.getElementById("fav_movie")
fav_tv=document.getElementById("fav_tv")
fav_player=document.getElementById("fav_player")
fav_guitarist=document.getElementById("fav_guitarist")
fav_band=document.getElementById("fav_band")
fav_singer=document.getElementById("fav_singer")
fav_qoutes=document.getElementById("fav_qoutes")
dialoge=document.getElementById("Dialoge")

book=new box("Dialoge","favourite_book_ta_khai_k_vanni_probably_Dorian_grey_huna_sakxa.Iamnot_trying_to_cool_andbe_different.It_should_be_one_of_the_boring_book_but_as_I_finished_the_book_I_thought_I_will_forget_about_this_book_after_few_days_but_no.It_was_stuck_with_me_forever_I_keep_resonating_my_life_with_Dorian_sometimes_and_If_a_book_gives_your_life_something_I_mean_this_is_gooooooooooood",false)
movie=new box("Dialoge","It's_gotta_be_lord_of_the_rings_trilogy.Mata_purai_ufreko_ho_tyo_movie_herna.Most_exicting_and-Breath-taking_trilogy_ever.The_GOAT_trilogy.Ahile_chai_Inside_lewin_Davis_lastai_man_parya_xa.Love_Folk_music=Love_that_movie.+Depressingly_funny_movie and_cannot_forget_3-Idiots",false)
guitarist=new box("Dialoge","hands_down_John_Mayer.If_someone_likes_John_Mayer_that_means_he_loves_John_influence_as_much_as_Jhon_does.David_gilmour_too.")
band=new box("Dialoge","The_beatles.Who_doesnot_love_the_beatles.Their_songs_are_the_best.cezzy_hunxa_tara_so_good.Pink_floyd_ra_The_beatles_chai_neck_to_neck_hola.Nepali_band_bhulna_vayena_ni.Gauley_bhai_the_best.Mata_suru_ma_sunda_la_my_favroutive_band_socheko_thiye.Lastai_kada.Tait",false)
singer=new box("Dialoge","Singer_chai_Khai_probably_Arthur_Gunn(Dibesh_Pokhrel).So_cool.He_makes_so_good_music.Khoj_vanni_geet_chai_lastai_kada.Arko_chai_Steve_wonder_hola.Dude_got_a_kadaaaaaa_voice.",false)
tv=new box("Dialoge","Series_ma_ta_probably_Breaking_bad_hola.Khai_IDK.Over_the_garden_wall_ki_Gravity_falls_ma_euta_hola.Love_cartoon",false)
player= new box("Dialoge","ABDE",false)
qoute=new box("Dialoge"," “Choose_not_to_be_harmed — and_you_won't_feel_harmed. Don't_feel_harmed — and_you_haven't_been.”____“Best_revenge_is_not_to_be_like_them”-----Marus_Aurelius",false)

fav_book.onclick=()=>{
    dialoge.innerText=""
    book.c=-1
    movie.bool=false
    book.bool=true
    tv.bool=false
    qoute.bool=false
    player.bool=false
    guitarist.bool=false
    singer.bool=false
    band.bool=false
    console.log("book")
}
fav_movie.onclick=()=>{
    dialoge.innerText=""
    movie.c=-1

    movie.bool=true
    book.bool=false
    tv.bool=false
    qoute.bool=false
    player.bool=false
    guitarist.bool=false
    singer.bool=false
    band.bool=false

    console.log("movi")
}
fav_tv.onclick=()=>{
    dialoge.innerText=""
    tv.c=-1
    movie.bool=false
    book.bool=false
    tv.bool=true
    qoute.bool=false
    player.bool=false
    guitarist.bool=false
    singer.bool=false
    band.bool=false
    console.log("tv")
}
fav_player.onclick=()=>{
    dialoge.innerText=""
    player.c=-1
    movie.bool=false
    book.bool=false
    tv.bool=false
    qoute.bool=false
    player.bool=true
    guitarist.bool=false
    singer.bool=false
    band.bool=false

    console.log("player")
}
fav_guitarist.onclick=()=>{
    dialoge.innerText=""
    guitarist.c=-1
    movie.bool=false
    book.bool=false
    tv.bool=false
    qoute.bool=false
    player.bool=false
    guitarist.bool=true
    singer.bool=false
    band.bool=false
    console.log("guitarist")
}
fav_band.onclick=()=>{
    dialoge.innerText=""
    band.c=-1
    movie.bool=false
    book.bool=false
    tv.bool=false
    qoute.bool=false
    player.bool=false
    guitarist.bool=false
    singer.bool=false
    band.bool=true

    console.log("band")
}
fav_singer.onclick=()=>{
    dialoge.innerText=""
    singer.c=-1
    movie.bool=false
    book.bool=false
    tv.bool=false
    qoute.bool=false
    player.bool=false
    guitarist.bool=false
    singer.bool=true
    band.bool=false
    console.log("singer")
}
fav_qoutes.onclick=()=>{
    dialoge.innerText=""
    qoute.c=-1
    movie.bool=false
    book.bool=false
    tv.bool=false
    qoute.bool=true
    player.bool=false
    guitarist.bool=false
    singer.bool=false
    band.bool=false
    console.log("quotes")
}

function animate(){
    book.undertale()
    movie.undertale()
    player.undertale()
    tv.undertale()
    band.undertale()
    singer.undertale()
    qoute.undertale()
    guitarist.undertale()
    requestAnimationFrame(animate)
}
animate()