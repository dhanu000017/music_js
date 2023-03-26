
var liked_whole;
var played_whole;
var heroName=document.createElement("h1");
var search_val;
var liked_arr=[];
var play_arr=[];
var heart=document.getElementById("heart");
var count1=1;
var count2=1;
var timing=0.00; Attempt 
var ran=0;
var li2;
var ol2;
var li2;
var ol2;

var arr=["song","vijay.png","surya.png","arun_vijay.png","vikram.png","ajith.png","dhanush.png","simbu.png","jayam_ravi.png","kamal.png","karthi.png","rajini.png","vijay_sethupathi.png","vishal.png","sk.png","jiiva.png","jai.png","harish.png","duruv.png","atharvaa.png","aariya.png"];
 
// this array is for set images in the smaller div

var song_list=[[],["ranjithame.mp3","jollyogymkhana.mp3","halamithi_beast.mp3","kutti_story.mp3","vaathi_coming.mp3","vaathi_raid.mp3","polakatum_para.mp3","singapenney.mp3","verithanam.mp3","unakaga_bigil.mp3","bigil_bigil_bigiluma.mp3","omg_ponnu.mp3","ceo-sarkar2.mp3","ceo-sarkar1.mp3","alaporan_tamilan.mp3","maacho.mp3","mersal_arasan.mp3","neethane.mp3"],["munbe_vaa_sur.mp3","pala_palakura_sur.mp3","summa_surruna_sur.mp3","thooriga_sur.mp3","ullam_urugudhaiy_sur.mp3","vaaranam_aayiram_sur.mp3","yamma_yamma_sur.mp3"],["bodhaiya_av.mp3","deiva_magale_av.mp3","enil_paaindhidum_av.mp3","enna_othaiyilla_av.mp3","hayati_av.mp3","i'm_a_fighter_av.mp3","inayae_av.mp3","nenjellam_av.mp3","pori_vaithu_av.mp3","sandaaliye_av.mp3","thappu_thanda_av.mp3","vidhi_nadhiyae_av.mp3","yelamma_av.mp3","yennai_arindhal_av.mp3"],["chola-chola_vik.mp3","10_endrathukkulla_vik.mp3","adheera_vik.mp3","ennodu_nee_vik.mp3","kannum_kannum_vik.mp3","kodu_poatta_vik.mp3","oru_manam_vik.mp3","ottaiyanum_senja_vik.mp3","thirunelveli_halwa_vik.mp3","villathi_villangal_vik.mp3"],["aalumma_dolumma_ajith.mp3","adchithukku_ajith.mp3","arrambam_ajith.mp3","danga_danga_ajith.mp3","ival_dhaana_ajith.mp3","jing_chikka_ajith.mp3","kadhalaada_ajith.mp3","kannaana_kanney_ajith.mp3","machi_open_the_bottle_ajith.mp3","mother_ajith.mp3","my_name_is_billa_ajith.mp3","naanga_vera_maari_ajith.mp3","nallavanu_solvaaga_ajith.mp3","nanbane_ajith.mp3","nee_naan_ajith.mp3","never_give_up_ajith.mp3","red_ajith.mp3","seval_kodi_ajith.mp3","thalai_viduthalai_ajith.mp3","thalle_thillaaley_ajith.mp3","therkku_cheemmayile_ajith.mp3","vaada_binlaada_ajith.mp3","vaaney_vaaney_ajith.mp3","vathikuchi_ajith.mp3","veera_vinayaka_ajith.mp3","veriyera_ajith.mp3","vettikattu_ajith.mp3","vilayadu_manghatha_ajith.mp3"],["mayakkamma_dhanush.mp3","megham_karukkatha_dhanush.mp3","thaai_kelavi_dhanush.mp3","yaarum_illa_dhanush.mp3","kadal_rasa_dhanush.mp3","naa_sonnadum_dhanush.mp3","engeyum_eppothum_dhanush.mp3","aathadi_aathadi_dhanush.mp3","konj.mp3","vir.mp3"],["where_is _the_party.mp3","loosup.mp3","vtk1.mp3","eeswaran.mp3","mallipoo.mp3","vtk2.mp3","vtk3.mp3","thalli_pogathey.mp3","vaanamunna.mp3","hosanna.mp3"],["paisa_nota.mp3","hi_sonna_pothum.mp3","dhimu_dhimu.mp3","kannala_kannala.mp3","theemai_than_velum.mp3","uyire_uyire.mp3","kurumba.mp3","mirutha_mirutha.mp3","lolita.mp3","yeppadi_eruntha.mp3"],["pathala_pathala.mp3","porkanda_singam.mp3","yeya_en_kotttikkaraa.mp3","partha_muthal.mp3","unnai_kanatha.mp3","kallai_mattum.mp3","mukuntha_mukuntha.mp3","unna_vida.mp3","vinaa_vinaa.mp3","sundari_neeyum.mp3"],["ponni_nadhi.mp3","mere_jaan.mp3","yaerumayil.mp3","inky_pinky.mp3","ratchasa_mamaney.mp3","thuli_thuli.mp3","azhagiye.mp3","saarattu_vandiyila.mp3","kanja_poovu.mp3","madura_veera.mp3"],["aaha_kalyanam.mp3","kannula_thimiru.mp3","ilamai_thirumbuthey.mp3","ullaallaa.mp3","annaatthe_annaatthe.mp3","chumma_kizhi.mp3","neruppuda.mp3","marana_mass.mp3","maya_nathi.mp3","balleilakka.mp3"],["naan_pizlai.mp3","life_of_ram.mp3","koodamela_koodavechi.mp3","sandakari_neethan.mp3","two_two.mp3","kasu_panam.mp3","makka_kalagguthappa.mp3","aandipatti.mp3","nalla_irumma.mp3","kamala.mp3"],["tum_tum.mp3","azhagae_nee.mp3","karuvakaatu_karuvaaya.mp3","yaar_yenna_sonnalum.mp3","yaeley_yaeley_maruthu.mp3","ichu_ichu.mp3","theeratha_villaiyatupilllai.mp3","azhagho_azhaghu.mp3","enna_oru_enna_oru.mp3","ippadiye.mp3"],["bimbilikki_pilapi.mp3","private_party.mp3","Jalabulajangu.mp3","velicha_poove.mp3","chellamma.mp3","gaandakannazhagi.mp3","karuthavanlaam.mp3","oodha_kalaru.mp3","takkunu_takkunu.mp3","kattikida.mp3"],["aathangara_orathil.mp3","ennamo_yeadho.mp3","amali_thumali.mp3","pudichirukka.mp3","manamengum_maaya.mp3","thaarumaaru.mp3","othayilae.mp3","yaaradiyo.mp3","aga_naga.mp3","oru_kuchi_oru_kulfi.mp3"],["pudichirukka.mp3","thaarumaaru.mp3","oru_devathai.mp3","athu_oru_kaalam.mp3","madura_kulunga.mp3","idhu_varai.mp3","oru_kuchi_oru_kulfi.mp3","enthara_enthara.mp3","kannadi_povukku.mp3","karakkudi_ilavarasi.mp3"],["dharala_prabhu.mp3","kannamma.mp3","bodhai_kaname.mp3","high_on_love.mp3","sandaali.mp3","poriyaalan_kan.mp3","yaaru_mela.mp3","yei_kadavulae.mp3","pularum.mp3","i_want_a_girl.mp3"],["missing_me.mp3","manase.mp3","yaen_ennai_prindhaai.mp3","kannile_kannirile.mp3","soorayaatam.mp3"],["mughaiyazhi.mp3","yappa_chappa.mp3","idhayathai_oru_nodi.mp3","alunguraen_kulunguran.mp3","vilambara_idaiveli.mp3","naan_pudicha_mosakuuty.mp3","penne_penne.mp3","thaakuthey_kan.mp3","kadhalikkathey.mp3","oru_thuli.mp3"],["akkrinai.mp3","enfuse_aarya.mp3","ghajinikant.mp3","hey_baby.mp3","imaye_imaye.mp3","kani_mozhiyae.mp3","kylaa.mp3","maranthaey_aarya.mp3","nanbiyea_aarya.mp3","neethane.mp3","ninaivugal.mp3","oday_oday.mp3","otha_paarvaiyil.mp3","pookkal_pookum.mp3","thanimaye_aarya.mp3","vambula_thumbula.mp3","vasu-saravananum_aarya.mp3","vinave_vinave.mp3","yaar_intha.mp3","you_are_a_fighter.mp3"]];

//this array is for set url in the li tag 

 var song_list_name=[[],["ranjithame","jollyogymkhana","halamithi beast","kutti story","vaathi coming","vaathi raid","polakatum para","singapenney","verithanam","unakaga bigil","bigil bigil bigiluma","omg ponnu","ceo-sarkar2","ceo-sarkar1","alaporan tamilan","maacho","mersal arasan","neethane"],["munbe vaa","pala palakura","summa surruna","thooriga","ullam urugudhaiy","vaaranam aayiram","yamma yamma"],["bodhaiya","deiva magale","enil paaindhidum","enna othaiyilla","hayati","i'm a fighter","inayae","nenjellam","pori vaithu","sandaaliye","thappu thanda","vidhi nadhiyae","yelamma","yennai arindhal"],["chola chola","10 endrathukkulla","adheera ","ennodu nee","kannum kannum","kodu poatta","oru manam","ottaiyanum senja","thirunelveli halwa","villathi villangal"],["aalumma_dolumma_ajith","adchithukku_ajith","arrambam_ajith","danga_danga_ajith","ival_dhaana_ajith","jing_chikka_ajith","kadhalaada_ajith","kannaana_kanney_ajith","machi_open_the_bottle_ajith","mother_ajith","my_name_is_billa_ajith","naanga_vera_maari_ajith","nallavanu_solvaaga_ajith","nanbane_ajith","nee_naan_ajith","never_give_up_ajith","red_ajith","seval_kodi_ajith","thalai_viduthalai_ajith","thalle_thillaaley_ajith","therkku_cheemmayile_ajith","vaada_binlaada_ajith","vaaney_vaaney_ajith","vathikuchi_ajith","veera_vinayaka_ajith","veriyera_ajith","vettikattu_ajith","vilayadu_manghatha_ajith"],["mayakkamma","megham karukkatha","thaai kelavi","yaarum illa","kadal rasa","naa sonnadum","engeyum eppothum","aathadi aathadi","konjam neeram","veera soora"],["where is the party","loosu penne","marakkuma nejam","oondi viran nanadi","mallipoo","unna ninasadum","kalathukum nee","thalli pogathey","niyum naanum vera illada","hosanna"],["paisa nota","hi sonna pothum","dhimu dhimu","kannala kannala","theemai than velum","uyire uyire","kurumba","mirutha mirutha","lolita","yeppadi eruntha en mansa"],["pathala pathala","porkanda singam","Yeya en kotttikkaraa","Partha muthal","Unnai kanatha","Kallai mattum","Mukuntha mukuntha","unna vida","Vinaa vinaa","Sundari neeyum"],["ponni nadhi","mere jaan","yaerumayil","inky pinky ponky","ratchasa mamaney","thuli thuli","azhagiye","saarattu vandiyila","kanja poovu","madura veera"],["aaha kalyanam","kannula thimiru","ilamai thirumbuthey","ullaallaa","annaatthe annaatthe","chumma kizhi","neruppuda","marana mass","maya nathi","balleilakka"],["naan pizlai","life of ram","koodamela koodavechi","sandakari neethan","two two","kasu panam","makka kalagguthappa","aandipatti","nalla irumma","kamala"],["tum tum","azhagae nee","karuvakaatu karuvaaya","yaar yenna sonnalum","yaeley yaeley maruthu","ichu ichu","theeratha villaiyatupilllai","azhagho azhaghu","enna oru enna oru","ippadiye"],["bimbilikki_pilapi","private party","Jalabulajangu","velicha poove","chellamma","gaandakannazhagi","karuthavanlaam","oodha kalaru","takkunu takkunu","kattikida"],["aathangara orathi","ennamo yeadho","amali thumali","pudichirukka","manamengum maaya","thaarumaaru","othayilae","yaaradiyo","aga naga","oru kuchi oru kulfi"],["pudichirukka","thaarumaaru","oru devathai","athu oru kaalam","madura kulunga","idhu varai","oru kuchi oru kulfi","enthara enthara","kannadi povukku","karakkudi ilavarasi"],["Dharala prabhu","Kannamma","Bodhai kaname","High on love","Sandaali","Poriyaalan kan","Yaaru mela","Yei kadavulae","Pularum","I want a girl"],["Missing me","Manase","Yaen ennai prindhaai","Kannile kannirile","Soorayaatam"],["Mughaiyazhi","Yappa chappa","Idhayathai oru nodi","Alunguraen kulunguran","Vilambara idaiveli","Naan pudicha mosakuuty","Penne penne","Thaakuthey kan","Kadhalikkathey","Oru thuli"],["akkrini","enfuse_aarya","ghajinikant","hey_baby","imaye_imaye","kani_mozhiyae","kylaa","maranthaey_aarya","nanbiyea_aarya","neethane","ninaivugal","oday_oday","otha_paarvaiyil","pookkal_pookum","thanimaye_aarya","vambula_thumbula","vasu-saravananum_aarya","vinave_vinave","yaar_intha","you_are_a_fighter"]];

//this array is for set song name in the li tag

var smallboxheading=["VIJAY","SURYA","ARUN VIJAY","VIKRAM","AJITH","DHANUSH","SIMBU","JAYAM RAVI","KAMAL HASAN","KARTHI","RAJINI","SETHUPATHi","VISHAL","SK","JIIVA","JAI","HARISH","DURUV","ATHARVAA","AARYA"];

//this array is for set the name of the hero's in the smaller div

var big_img=["none","vj.jpg","surya_image.webp","arun_vijay_image.webp","vikram_image.jpg","ajith_image.jpg","dhanush_image.jpg","simbu_image.webp","jayam_ravi_image.webp","kamal_image.webp","karthi_image.jpg","rajini_image.jpg","vijay_sethupathi_image.jpg","vishal_image.jpeg","siva_image.jpg","Jiiva_image.jpeg","jai_image.jpeg","harish_image.webp","duruv_image.webp","atharvaa_image.jpg","aarya_image.jpg"];

//this array is for set the inner image of the hero's

var time_arr=[[],["4.50","3.15","4.41","5.23","4.17","3.54","3.35","7.28","4.07","2.43","1.57","3.51","4.45","4.05","6.19","3.07","4.18","2.32"],["1.04","4.52","3.40","3.49",""]]

//---------------------------------------------------------------------------------------------------------------------------------

  var topborder = document.createElement("div");
	topborder.classList.add("topborder");
  document.body.appendChild(topborder);

  //this div is in the top of the screen 

  search_val =document.createElement("h1");
  search_val.setAttribute("id","search_val");
  search_val.innerHTML="TAMIL TRENDING";
  topborder.appendChild(search_val);

   //this code is for create the heading of the home page

  var leftcorner = document.createElement("div");
	leftcorner.setAttribute("id","leftcorner");
  document.body.appendChild(leftcorner);

  //this div is in the left of the screen 

  var home = document.createElement("div");
	home.setAttribute("id","home");
  home.setAttribute("onclick","function_home()");
  home.innerText="HOME"
  leftcorner.appendChild(home);

  //this code is for create a div  in left corner 

  var liked = document.createElement("div");
	liked.setAttribute("id","liked");
  liked.setAttribute("onclick","function_liked()");
  liked.innerText="LIKED SONGS"
  leftcorner.appendChild(liked);

  //this code is for create a div  in left corner 

  var play_list = document.createElement("div");
	play_list.setAttribute("id","play_list");
  play_list.setAttribute("onclick","function_play_list()");
  play_list.innerText="MY PLAYLIST"
  leftcorner.appendChild(play_list);

  //this code is for create a div  in left corner 

  var wholecontainer = document.createElement("div");
  wholecontainer.setAttribute("id","container");
	wholecontainer.classList.add("container");
  document.body.appendChild(wholecontainer);

  //this div is containes the smaller divs

for (let i = 1; i <=20 ; i++)
 {

	   var whole = document.createElement("div");
     whole.setAttribute("id","i"+i);
     whole.classList.add("smallbox");
		 wholecontainer.appendChild(whole);
     
     //this div was the smaller divs
 
     var image = document.createElement("img");
     var img = document.getElementById("i"+i);
     img.appendChild(image);
     image.setAttribute("src", arr[i]);
     image.setAttribute("class","songs");

     //this code puts the images in the smaller divs

     var text1= document.createElement("h2");
     text1.setAttribute("id","text1");
     text1.innerText=smallboxheading[i-1]+" HITS";
     whole.appendChild(text1);

     //this code puts the heading on the smaller divs

     var text2= document.createElement("p");
     text2.setAttribute("id","text2");
     text2.innerText="latest 2022";
     whole.appendChild(text2);
  
     //this code puts the para on the smaller divs

     img.setAttribute("onclick","heros("+i+")");
  
  
 }


function heros(y)
{
  
   heroName.remove();
   heroName=document.createElement("h1");
   heroName.setAttribute("id","heroName");
   heroName.innerHTML=smallboxheading[y-1]+" HITS";
   topborder.appendChild(heroName);

   //this code is for name the page  

  if(document.getElementById("liked_whole")!=null)
  {

  document.getElementById("liked_whole").remove();

  }

  if(document.getElementById("played_whole")!=null)
  {

  document.getElementById("played_whole").remove();

  }

  var inside_whole_container = document.createElement("div");
  inside_whole_container.setAttribute("id","inside_whole_container");
  inside_whole_container.classList.add("inside_whole_container");
  document.body.appendChild(inside_whole_container);
 
  //this code is for create whole div in onclick page
  
  document.getElementById("container").style.display="none";
  search_val.style.display="none";
 
  var big_image = document.createElement("div");
	big_image.classList.add("big_image");
  big_image.style.backgroundImage="url("+big_img[y]+")";
  big_image.style.backgroundRepeat="no-repeat";
  big_image.style.backgroundSize="50% 100%";
  inside_whole_container.appendChild(big_image);
  
  //this code is for create div and inset image in onclick page
 
  var ol=document.createElement('ol');
  document.body.appendChild(inside_whole_container);
  inside_whole_container.appendChild(ol);
  
  //this code is for create ordered list

  for (var i=0; i<song_list[y].length; i++)
  {
  
    var li=document.createElement('li');
    li.setAttribute("class","li");
    var li_in_para=document.createElement('li_in_para');
    li_in_para.setAttribute("id","li_in_para");

    if (like[y][i]==1)
     {
      li_in_para.innerHTML+='<i class="fa-solid fa-heart" style="color:green" id="heart" onclick="green(this,'+i+","+y+')"></i>'
     } 

    else
     {
      li_in_para.innerHTML+='<i class="fa-solid fa-heart" id="heart" onclick="green(this,'+i+","+y+')"></i>'
     }

    if (played[y][i]==1)
     {
      li_in_para.innerHTML+='<i class="fa-solid fa-plus" id="plus" style="color:aqua"style="top:-37px;" onclick="blue(this,'+i+","+y+')"></i>'
     }

     else 
     {
      li_in_para.innerHTML+='<i class="fa-solid fa-plus" id="plus" onclick="blue(this,'+i+","+y+')"></i>'
     }

    ol.appendChild(li);
    ol.appendChild(li_in_para);
    li.innerHTML=song_list_name[y][i];
  
    var play_image = document.createElement("div");
    play_image.classList.add("play_image");
    play_image.style.backgroundImage="url(play_button.png)";
    play_image.style.backgroundRepeat="no-repeat";
    play_image.style.backgroundSize="100%";
    li.appendChild(play_image);

   //this code is for create list of songs 

    li.setAttribute("onclick","play_song("+i+","+y+")");
   
   //this code is for call the function of songs 
  }
  }

    let audio= new Audio(song_list[0][0]);
    audio.play();

   //this line is for play a empty song 

function play_song(n,y)
{
  
   audio.pause();
   audio = new Audio(song_list[y][n]);
   audio.play();
  
  // this code is for play music  

   var line = document.createElement("div");
   line.setAttribute("id","line");
   document.body.appendChild(line);

  //this code is for create a div called line to show the range bar

   var range_bar = document.createElement("input");
   range_bar.setAttribute("type","range");
   range_bar.setAttribute("id","range_bar");
   range_bar.setAttribute("min","0");
   range_bar.setAttribute("max","100");
   range_bar.setAttribute("value",0);
   range_bar.setAttribute("step",0.1);
   line.appendChild(range_bar);
  
  //this is the code to create range bar

  var pause= document.getElementById("pause_but");
  pause.style.display="block";
  line.appendChild(pause);

  //this is the code to pause button

  var playbut= document.getElementById("play_but");
  playbut.style.display="block";
  line.appendChild(playbut);
   
  //this is the code to create play button

  var playnext=document.getElementById("playnext");
  playnext.style.display="block";
  playnext.setAttribute("onclick","move_next("+n+","+y+")");
  line.appendChild(playnext);

  //this is the code to create forward button

  var playback=document.getElementById("playback");
  playback.setAttribute("onclick","move_back("+n+","+y+")");
  playback.style.display="block";
  line.appendChild(playback);
 
  //this is the code to create backward button

  var mute=document.getElementById("mute");
  mute.style.display="block";
  mute.setAttribute("onclick","mute("+n+","+y+")");
  line.appendChild(mute);

 //this is the code to create mute button

  var vol_up=document.getElementById("vol_up");
  vol_up.style.display="block";
  vol_up.setAttribute("onclick","vol_up("+n+","+y+")");
  line.appendChild(vol_up);

 //this is the code to create volume up button

  var plname=document.createElement('p');
  plname.setAttribute("id","plname");
  plname.innerHTML=song_list_name[y][n];
  line.appendChild(plname);

 //this is the code to set the name of the playing song
 var running=document.createElement('p');
 running.setAttribute("id","running");
 var run=document.getElementById("running")
 setInterval(function () 
 {timing++;
  running.innerHTML=timing;
 }, 1000);

 
 line.appendChild(running);

 var duruction=document.createElement('p');
 duruction.setAttribute("id","duruction");
 duruction.innerHTML=time_arr[y][n];
 line.appendChild(duruction);


 }
   
 
function home_page()
{
//   document.getElementById("inside_whole_container").remove();
//   document.getElementById("container").style.display="flex";
//   document.getElementById("liked_whole").remove();
//   document.getElementById("played_whole").style.display="none";
  
// //this code is for remove other div in the page

//   heroName.remove();
//   search_val.innerHTML="";
//   search_val=document.createElement("h1");
//   search_val.setAttribute("id","search_val");
//   search_val.innerHTML="TAMIL TRENDING";

//   topborder.appendChild(search_val);
//this code is for return to the home page from the arrow mark
if (document.getElementById("inside_whole_container")!=null)
   {
  document.getElementById("inside_whole_container").remove();
   }

  document.getElementById("container").style.display="flex";
  if(document.getElementById("liked_whole")){
    document.getElementById("liked_whole").remove();
  }
  
  if (document.getElementById("played_whole")) {
    document.getElementById("played_whole").style.display="none";
  }
  if(heroName!=null){
    heroName.remove();
  }
  heroName.innerHTML="";
  search_val.innerHTML="";
  search_val=document.createElement("h1");
  
  search_val.setAttribute("id","search_val");
  search_val.innerHTML="TAMIL TRENDING";
  
  topborder.appendChild(search_val);
  
}


function function_home()
{
  if (document.getElementById("inside_whole_container")!=null)
   {
  document.getElementById("inside_whole_container").remove();
   }

  document.getElementById("container").style.display="flex";
  if(document.getElementById("liked_whole")){
    document.getElementById("liked_whole").remove();
  }
  
  if (document.getElementById("played_whole")) {
    document.getElementById("played_whole").style.display="none";
  }
  if(heroName!=null){
    heroName.remove();
  }
  heroName.innerHTML="";
  search_val.innerHTML="";
  search_val=document.createElement("h1");
  
  search_val.setAttribute("id","search_val");
  search_val.innerHTML="TAMIL TRENDING";
  
  topborder.appendChild(search_val);
  
//this code is for return to the home page from the home button

}



function function_liked(){ 
  if(document.getElementById("liked_whole")!=null){
    document.getElementById("liked_whole").remove();
  }
  if(document.getElementById("played_whole")!=null){
    document.getElementById("played_whole").remove();
  }
 liked_whole=document.createElement("div");
 document.body.appendChild(liked_whole);
 liked_whole.setAttribute("id","liked_whole");
//  document.getElementById("liked_whole").style.display="block";

 var liked_image = document.createElement("div");
  
	liked_image.classList.add("liked_image");
  liked_image.style.backgroundImage="url(liked_image.jpeg)";
  liked_image.style.backgroundRepeat="no-repeat";
  liked_image.style.backgroundSize="50% 100%";

  liked_whole.appendChild(liked_image);
  ol2=document.createElement('ol');
  liked_whole.appendChild(ol2);
  if(document.getElementById("inside_whole_container")!=null){
    document.getElementById("inside_whole_container").style.display="none";
  }
  
  document.getElementById("container").style.display="none";
  search_val.innerHTML="";
  heroName.innerHTML="";
  search_val=document.createElement("h1");
  
  search_val.setAttribute("id","search_val");
  search_val.innerHTML="LIKED SONGS";

  topborder.appendChild(search_val);
  

  for(let y=0;y<like.length; y++){
   
   for (let i = 0; i < like[y].length; i++) {
    if (like[y][i]==0) {
      continue;
    }
    var li=document.createElement('li');
    
    li.setAttribute("class","li");
    var li_in_para=document.createElement('li_in_para');
    li_in_para.setAttribute("id","li_in_para");

    li_in_para.innerHTML+='<i class="fa-solid fa-heart" style="color:green" id="heart" ></i>'
    
    
    // li_in_para.innerHTML+='<i class="fa-solid fa-plus" id="plus"></i>';
    ol2.appendChild(li);

    ol2.appendChild(li_in_para);
    li.innerHTML=song_list_name[y][i];
  
    var play_image = document.createElement("div");
    play_image.classList.add("play_image");
    play_image.style.backgroundImage="url(play_button.png)";
    play_image.style.backgroundRepeat="no-repeat";
    play_image.style.backgroundSize="100%";
    li.appendChild(play_image);

   //this code is for create list of songs 

   
    li.setAttribute("onclick","play_song("+i+","+y+")");
    
   }
  }
//this code is for return to the home page from the home button

}

function function_play_list(){


  if(document.getElementById("liked_whole")!=null){
    document.getElementById("liked_whole").remove();
  }
  if(document.getElementById("played_whole")!=null){
    document.getElementById("played_whole").remove();
  }
  played_whole=document.createElement("div");
  document.body.appendChild(played_whole);
  played_whole.setAttribute("id","played_whole");
  document.getElementById("played_whole").style.display="block";
 
  var played_image = document.createElement("div");
   
  search_val.innerHTML="";
  heroName.innerHTML="";
  search_val=document.createElement("h1");
  
  search_val.setAttribute("id","search_val");
  search_val.innerHTML="MY PLAYLIST";

  topborder.appendChild(search_val)

   played_image.classList.add("played_image");
   played_image.style.backgroundImage="url(played_image.webp)";
   played_image.style.backgroundRepeat="no-repeat";
   played_image.style.backgroundSize="50% 100%";
 
   played_whole.appendChild(played_image);
   ol3=document.createElement('ol');
   played_whole.appendChild(ol3);
   if(document.getElementById("inside_whole_container")){ 
   document.getElementById("inside_whole_container").style.display="none";
   }
   document.getElementById("container").style.display="none";
 
   for(let y=0;y<like.length; y++){
    for (let i = 0; i < played[y].length; i++) {
     if (played[y][i]==0) {
       continue;
     }
     var li=document.createElement('li');
     
     li.setAttribute("class","li");
     var li_in_para=document.createElement('li_in_para');
     li_in_para.setAttribute("id","li_in_para");
 
    //  li_in_para.innerHTML='<i class="fa-solid fa-heart"  id="heart" ></i>'
     
     
     li_in_para.innerHTML+='<i class="fa-solid fa-plus" style="color:aqua" ,"top:-37px" id="plus"></i>';
     ol3.appendChild(li);
 
     ol3.appendChild(li_in_para);
     li.innerHTML=song_list_name[y][i];
   
     var play_image = document.createElement("div");
     play_image.classList.add("play_image");
     play_image.style.backgroundImage="url(play_button.png)";
     play_image.style.backgroundRepeat="no-repeat";
     play_image.style.backgroundSize="100%";
     li.appendChild(play_image);
 
    //this code is for create list of songs 
 
     li.setAttribute("onclick","play_song("+i+","+y+")");
     
    }
   }



}



function green(h,i,y){
  if(like[y][i]==0){
    h.style.color="green";
    like[y][i]=1;
  }else{
    like[y][i]=0;
    h.style.color="white"
  }
  
localStorage.setItem("like",JSON.stringify(like));

 
 
 //this code is for make the song to the liked list￼

}
function blue(p,i,y){


  if(played[y][i]==0){
    p.style.color="aqua";
    played[y][i]=1;
  }else{
    played[y][i]=0;
    p.style.color="white"
  }
  
localStorage.setItem("played",JSON.stringify(played));
  //this code is for make the song to the play list
}

function pause_song(){
  audio.pause();
}

//this function is for pause the song

function move_next(n,y){

  audio.pause();
  audio = new Audio (song_list[y][n+count1++]);
  plname.innerHTML=song_list_name[y][n+count1-1];
  audio.play();
}

//this function is for play front the song

function songwillplay(){

  audio.play();
}

//this function is for play the song

function move_back(n,y){
  audio.pause();
  audio = new Audio (song_list[y][n-count2--]);
  plname.innerHTML=song_list_name[y][n-count2-1];
  audio.play();
}

//this function is for play back the song


function mute(n,y){
audio.volume=0;
} 

//this function is for mute the song

function vol_up(n,y){
  audio.volume=1;
}

//this function is  volume up the song


var like;
// var played;

if(localStorage.like==null){
  like=[]
  for(i=0;i<song_list.length;i++){
    var t=[];
    for (let j = 0; j < song_list[i].length; j++) {
      t.push(0);
    }
    like.push(t);
  }
  
  localStorage.setItem("like",JSON.stringify(like));
}else{
  like=JSON.parse(localStorage.like);
}



if(localStorage.played==null){
  played=[]
  for(i=0;i<song_list.length;i++){
    var o=[];
    for (let j = 0; j < song_list[i].length; j++) {
      o.push(0);
    }
    played.push(o);
  }
 
  localStorage.setItem("played",JSON.stringify(played));
}else{
  played=JSON.parse(localStorage.played);
}