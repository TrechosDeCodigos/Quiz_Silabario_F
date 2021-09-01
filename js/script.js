const container=document.querySelector(".app");

const myApp=[

              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraF",
               structure:[
                              {question:"FU",options:['FADA.jpg','FENO.jpg','FELINOS.jpg','FUTEBOL.jpg'],key:3},

                              {question:"FA",options:['FOTO.jpg','FUMACA.jpg','FABRICA.jpg','FILA.jpg'],key:2},

                              {question:"FO",options:['FACA.jpg','FORMIGA.jpg','FIVELA.jpg','FUSCA.jpg'],key:1},
  
                              {question:"FI",options:['FILE.jpg','FAMILIA.jpg','FORNO.jpg','FEIJAO.jpg'],key:0},

                              {question:"FA",options:['FILHOTE.jpg','FIGO.jpg','FOSFOROS.jpg','FABULAS.jpg'],key:3},                                                                           

                              {question:"FU",options:['FORTUNA.jpg','FORMATURA.jpg','FUSCA.jpg','FOGUETE.jpg'],key:2},

                              {question:"FA",options:['FANTASMA.jpg','FOLHA.jpg','FOFOCA.jpg','FOCA.jpg'],key:0},

                              {question:"FE",options:['FIGO.jpg','FAZENDA.jpg','FAXINA.jpg','FERRARI.jpg'],key:3},

                              {question:"FO",options:['FEBRE.jpg','FAROL.jpg','FOCA.jpg','FELICIDADE.jpg'],key:2},
  
                              {question:"FI",options:['FESTA.jpg','FIVELA.jpg','FAROFA.jpg','FABRICA.jpg'],key:1},
                        
                              {question:"FE ",options:['FIVELA.jpg','FANTASIA.jpg','FAZENDEIRO.jpg','FERRADURA.jpg'],key:3},
                                                                                
                              {question:"FA",options:['FAROL.jpg','FILHOTE.jpg','FOFOCA.jpg','FESTA.jpg'],key:0},

                              {question:"FO",options:['FUMACA.jpg','FUNIL.jpg','FORMATURA.jpg','FUTEBOL.jpg'],key:2},

                              {question:"FA",options:['FACA.jpg','FERRARI.jpg','FORNO.jpg','FOGUEIRA.jpg'],key:0},

                              {question:"FO",options:['FAMILIA.jpg','FACA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:2},

                              {question:"FU",options:['FANTOCHES.jpg','FUMACA.jpg','FESTA.jpg','FERIMENTO.jpg'],key:1},

                              {question:"FI",options:['FEIJAO.jpg','FEBRE.jpg','FILA.jpg','FOCA.jpg'],key:2},       
                                              
                              {question:"FE",options:['FOFOCA.jpg','FOGAO.jpg','FOLHA.jpg','FELICIDADE.jpg'],key:3},

                              {question:"FO",options:['FOSFOROS.jpg','FAROL.jpg','FELICIDADE.jpg','FUNIL.jpg'],key:0},
                           
                              {question:"FA",options:['FUSCA.jpg','FOSFOROS.jpg','FAMILIA.jpg','FELINOS.jpg'],key:2},                               

                              {question:"FI",options:['FOGUEIRA.jpg','FILHOTE.jpg','FOCA.jpg','FOLHA.jpg'],key:1},                       
                          
                              {question:"FA",options:['FERRARI.jpg','FERIMENTO.jpg','FILE.jpg','FANTOCHES.jpg'],key:3},

                              {question:"FO",options:['FAROFA.jpg','FELICIDADE.jpg','FOTO.jpg','FAMILIA.jpg'],key:2},
                           
                              {question:"FA",options:['FERIAS.jpg','FADA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:1},

                              {question:"FE",options:['FESTA.jpg','FILHOTE.jpg','FOFOCA.jpg','FOGAO.jpg'],key:0}, 

                              {question:"FA",options:['FUNIL.jpg','FERIAS.jpg','FOGAO.jpg','FAZENDA.jpg'],key:3},

                              {question:"FU",options:['FELICIDADE.jpg','FUNIL.jpg','FERIAS.jpg','FILHOTE.jpg'],key:1},

                              {question:"FO",options:['FOGUEIRA.jpg','FANTASIA.jpg','FANTASMA.jpg','FILE.jpg'],key:0},

                              {question:"FI",options:['FANTOCHES.jpg','FOTO.jpg','FIGO.jpg','FACA.jpg'],key:2},

                              {question:"FE",options:['FARINHA.jpg','FERIMENTO.jpg','FADA.jpg','FIVELA.jpg'],key:1},

                              {question:"FÁ",options:['FEIJAO.jpg','FOSFOROS.jpg','FUTEBOL.jpg','FABULAS.jpg'],key:3},
 
                              {question:"FO",options:['FILHOTE.jpg','FAZENDEIRO.jpg','FOGUETE.jpg','FANTASIA.jpg'],key:2},

                              {question:"FE",options:['FEBRE.jpg','FORNO.jpg','FIVELA.jpg','FABULAS.jpg'],key:0},

                              {question:"FO",options:['FAROL.jpg','FILA.jpg','FOGAO.jpg','FERRADURA.jpg'],key:2},

                              {question:"FE",options:['FAXINA.jpg','FEIJAO.jpg','FAMILIA.jpg','FABRICA.jpg'],key:1},

                              {question:"FA",options:['FANTASIA.jpg','FUTEBOL.jpg','FEIRANTE.jpg','FORMIGA.jpg'],key:0},

                              {question:"FO",options:['FUMACA.jpg','FESTA.jpg','FONE.jpg','FILE.jpg'],key:2},
                              
                              {question:"FA",options:['FAROFA.jpg','FEBRE.jpg','FUNIL.jpg','FORTUNA.jpg'],key:0},

                              {question:"FE",options:['FAXINA.jpg','FELINOS.jpg','FAROESTE.jpg','FIGO.jpg'],key:1},

                              {question:"FA",options:['FOSFOROS.jpg','FORTE.jpg','FORMIGA.jpg','FARAO.jpg'],key:3},

                              {question:"FO",options:['FAMILIA.jpg','FACA.jpg','FARINHA.jpg','FORNO.jpg'],key:3},

                              {question:"FA",options:['FENO.jpg','FARINHA.jpg','FORMATURA.jpg','FOGUETE.jpg'],key:1},

                              {question:"FO",options:['FORTE.jpg','FELINOS.jpg','FERIMENTO.jpg','FENO.jpg'],key:0},

                              {question:"FÉ",options:['FOGAO.jpg','FERIAS.jpg','FOSFOROS.jpg','FADA.jpg'],key:1},

                              {question:"FO",options:['FUMACA.jpg','FESTA.jpg','FOCA.jpg','FILE.jpg'],key:2},

                              {question:"FE",options:['FANTASMA.jpg','FARAO.jpg','FILHOTE.jpg','FEIRANTE.jpg'],key:3},

                              {question:"FO",options:['FABULAS.jpg','FAROESTE.jpg','FANTOCHES.jpg','FOLHA.jpg'],key:3},

                              {question:"FA",options:['FAROESTE.jpg','FORMIGA.jpg','FUSCA.jpg','FERRADURA.jpg'],key:0},

                              {question:"FO",options:['FIVELA.jpg','FOFOCA.jpg','FAXINA.jpg','FANTASIA.jpg'],key:1},

                              {question:"FA",options:['FERRARI.jpg','FORTUNA.jpg','FAXINA.jpg','FUMACA.jpg'],key:2}
 
                   ]
              },

              {

               type:" PALAVRAS ",
               msg:" ",
               path:"images/letraF",
               structure:[
                              {question:"FUTEBOL",options:['FADA.jpg','FENO.jpg','FELINOS.jpg','FUTEBOL.jpg'],key:3},

                              {question:"FÁBRICA",options:['FOTO.jpg','FUMACA.jpg','FABRICA.jpg','FILA.jpg'],key:2},

                              {question:"FORMIGA",options:['FACA.jpg','FORMIGA.jpg','FIVELA.jpg','FUSCA.jpg'],key:1},
  
                              {question:"FILÉ",options:['FILE.jpg','FAMILIA.jpg','FORNO.jpg','FEIJAO.jpg'],key:0},

                              {question:"FÁBULAS",options:['FILHOTE.jpg','FIGO.jpg','FOSFOROS.jpg','FABULAS.jpg'],key:3},                                                                           

                              {question:"FUSCA",options:['FORTUNA.jpg','FORMATURA.jpg','FUSCA.jpg','FOGUETE.jpg'],key:2},

                              {question:"FANTASMA",options:['FANTASMA.jpg','FOLHA.jpg','FOFOCA.jpg','FOCA.jpg'],key:0},

                              {question:"FERRARI",options:['FIGO.jpg','FAZENDA.jpg','FAXINA.jpg','FERRARI.jpg'],key:3},

                              {question:"FUMAÇA",options:['FEBRE.jpg','FOTO.jpg','FUMACA.jpg','FELICIDADE.jpg'],key:2},
  
                              {question:"FIVELA",options:['FESTA.jpg','FIVELA.jpg','FAROFA.jpg','FABRICA.jpg'],key:1},
                        
                              {question:"FERRADURA",options:['FIVELA.jpg','FANTASIA.jpg','FAZENDEIRO.jpg','FERRADURA.jpg'],key:3},
                                                                                
                              {question:"FAROL",options:['FAROL.jpg','FILHOTE.jpg','FELINOS.jpg','FESTA.jpg'],key:0},

                              {question:"FORMATURA",options:['FUMACA.jpg','FUNIL.jpg','FORMATURA.jpg','FUTEBOL.jpg'],key:2},

                              {question:"FACA",options:['FACA.jpg','FERRARI.jpg','FORNO.jpg','FOGUEIRA.jpg'],key:0},

                              {question:"FORTUNA",options:['FAMILIA.jpg','FACA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:2},

                              {question:"FUMAÇA",options:['FANTOCHES.jpg','FUMACA.jpg','FESTA.jpg','FERIMENTO.jpg'],key:1},

                              {question:"FILA",options:['FEIJAO.jpg','FEBRE.jpg','FILA.jpg','FOCA.jpg'],key:2},       
                                              
                              {question:"FELICIDADE",options:['FOFOCA.jpg','FOGAO.jpg','FOLHA.jpg','FELICIDADE.jpg'],key:3},

                              {question:"FÓSFOROS",options:['FOSFOROS.jpg','FAROL.jpg','FELICIDADE.jpg','FUNIL.jpg'],key:0},
                           
                              {question:"FAMÍLIA",options:['FUSCA.jpg','FOSFOROS.jpg','FAMILIA.jpg','FELINOS.jpg'],key:2},                               

                              {question:"FELINOS",options:['FOGUEIRA.jpg','FELINOS.jpg','FOCA.jpg','FOLHA.jpg'],key:1},                       
                          
                              {question:"FANTOCHES",options:['FERRARI.jpg','FERIMENTO.jpg','FILE.jpg','FANTOCHES.jpg'],key:3},

                              {question:"FOTO",options:['FAROFA.jpg','FELICIDADE.jpg','FOTO.jpg','FAMILIA.jpg'],key:2},
                           
                              {question:"FADA",options:['FERIAS.jpg','FADA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:1},

                              {question:"FESTA",options:['FESTA.jpg','FILHOTE.jpg','FOFOCA.jpg','FOGAO.jpg'],key:0}, 

                              {question:"FAZENDA",options:['FUNIL.jpg','FERIAS.jpg','FOGAO.jpg','FAZENDA.jpg'],key:3},

                              {question:"FUNIL",options:['FELICIDADE.jpg','FUNIL.jpg','FERIAS.jpg','FILHOTE.jpg'],key:1},

                              {question:"FOGUEIRA",options:['FOGUEIRA.jpg','FANTASIA.jpg','FANTASMA.jpg','FILE.jpg'],key:0},

                              {question:"FIGO",options:['FANTOCHES.jpg','FOTO.jpg','FIGO.jpg','FACA.jpg'],key:2},

                              {question:"FERIMENTO",options:['FARINHA.jpg','FERIMENTO.jpg','FADA.jpg','FIVELA.jpg'],key:1},

                              {question:"FOCA",options:['FUMACA.jpg','FESTA.jpg','FOCA.jpg','FILE.jpg'],key:2},

                              {question:"FÁBULAS",options:['FEIJAO.jpg','FOSFOROS.jpg','FUTEBOL.jpg','FABULAS.jpg'],key:3},
 
                              {question:"FOGUETE",options:['FELINOS.jpg','FAZENDEIRO.jpg','FOGUETE.jpg','FANTASIA.jpg'],key:2},

                              {question:"FEBRE",options:['FEBRE.jpg','FORNO.jpg','FIVELA.jpg','FABULAS.jpg'],key:0},

                              {question:"FOGÃO",options:['FAROL.jpg','FILA.jpg','FOGAO.jpg','FERRADURA.jpg'],key:2},

                              {question:"FEIJÃO",options:['FAXINA.jpg','FEIJAO.jpg','FAMILIA.jpg','FABRICA.jpg'],key:1},

                              {question:"FANTASIA",options:['FANTASIA.jpg','FUTEBOL.jpg','FEIRANTE.jpg','FORMIGA.jpg'],key:0},

                              {question:"FONE",options:['FUMACA.jpg','FESTA.jpg','FONE.jpg','FILE.jpg'],key:2},
                              
                              {question:"FEIRANTE",options:['FANTASMA.jpg','FARAO.jpg','FILHOTE.jpg','FEIRANTE.jpg'],key:3},

                              {question:"FAROFA",options:['FAROFA.jpg','FEBRE.jpg','FUNIL.jpg','FORTUNA.jpg'],key:0},

                              {question:"FILHOTE",options:['FERRARI.jpg','FILHOTE.jpg','FERIAS.jpg','FOLHA.jpg'],key:1},

                              {question:"FARAÓ",options:['FOSFOROS.jpg','FORTE.jpg','FORMIGA.jpg','FARAO.jpg'],key:3},

                              {question:"FORNO",options:['FAMILIA.jpg','FACA.jpg','FARINHA.jpg','FORNO.jpg'],key:3},

                              {question:"FARINHA",options:['FENO.jpg','FARINHA.jpg','FORMATURA.jpg','FOGUETE.jpg'],key:1},

                              {question:"FORTE",options:['FORTE.jpg','FELINOS.jpg','FERIMENTO.jpg','FENO.jpg'],key:0},

                              {question:"FÉRIAS",options:['FOGAO.jpg','FERIAS.jpg','FOSFOROS.jpg','FADA.jpg'],key:1},

                              {question:"FOLHA",options:['FABULAS.jpg','FAROESTE.jpg','FANTOCHES.jpg','FOLHA.jpg'],key:3},

                              {question:"FAROESTE",options:['FAROESTE.jpg','FORMIGA.jpg','FUSCA.jpg','FERRADURA.jpg'],key:0},

                              {question:"FOFOCA",options: ['FIVELA.jpg','FOFOCA.jpg','FAXINA.jpg','FANTASIA.jpg'],key:1},

                              {question:"FAXINA",options:['FERRARI.jpg','FORTUNA.jpg','FAXINA.jpg','FUMACA.jpg'],key:2}
 
                              

                        ]
              }

    ] 



     // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();

                
                
                
              

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
               var options=this.optionEle.children;
               for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }
           
           
           
           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              if (this.score > this.quizSize/2){
              this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
           
  
            

              }
               
             
           //Confetti começa aqui
             var confetti={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};
             !function(){confetti.start=s,confetti.stop=w,confetti.toggle=function(){e?w():s()},confetti.pause=u,confetti.resume=m,confetti.togglePause=function(){i?m():u()},confetti.isPaused=function(){return i},confetti.remove=function(){stop(),i=!1,a=[]},confetti.isRunning=function(){return e};
             var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,n=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],e=!1,i=!1,o=Date.now(),a=[],r=0,l=null;
             function d(t,e,i){return t.color=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.color2=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.x=Math.random()*e,t.y=Math.random()*i-i,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function u(){i=!0}function m(){i=!1,c()}function c(){if(!i)if(0===a.length)l.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var n=Date.now(),u=n-o;
             (!t||u>confetti.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,n=window.innerWidth,i=window.innerHeight;r+=.01;
             for(var o=0;o<a.length;o++)t=a[o],!e&&t.y<-15?t.y=i+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(r)-.5,t.y+=.5*(Math.cos(r)+t.diameter+confetti.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>n+20||t.x<-20||t.y>i)&&(e&&a.length<=confetti.maxCount?d(t,n,i):(a.splice(o,1),o--))}(),function(t){for(var n,e,i,o,r=0;r<a.length;r++){if(n=a[r],t.beginPath(),t.lineWidth=n.diameter,i=n.x+n.tilt,e=i+n.diameter/2,o=n.y+n.tilt+n.diameter/2,confetti.gradient){var l=t.createLinearGradient(e,n.y,i,o);l.addColorStop("0",n.color),l.addColorStop("1.0",n.color2),t.strokeStyle=l}else t.strokeStyle=n.color;
             t.moveTo(e,n.y),t.lineTo(i,o),t.stroke()}}(l),o=n-u%confetti.frameInterval),requestAnimationFrame(c)}}function s(t,n,o){var r=window.innerWidth,u=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,confetti.frameInterval)};
             var m=document.getElementById("confetti-canvas");
             null===m?((m=document.createElement("canvas")).setAttribute("id","confetti-canvas"),m.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(m),m.width=r,m.height=u,window.addEventListener("resize",function(){m.width=window.innerWidth,m.height=window.innerHeight},!0),l=m.getContext("2d")):null===l&&(l=m.getContext("2d"));
             var s=confetti.maxCount;
             if(n)if(o)if(n==o)s=a.length+o;
             else{if(n>o){var f=n;
             n=o,o=f}s=a.length+(Math.random()*(o-n)+n|0)}else s=a.length+n;
             else o&&(s=a.length+o);
             for(;a.length<s;)a.push(d({},r,u));
             e=!0,i=!1,c(),t&&window.setTimeout(w,t)}function w(){e=!1}}();
              
       
       
// custom js        
  const startit = () => {
   setTimeout(function() {
    confetti.start();
   },1000);
  };
 // Stops
   const stopit = () => {
       setTimeout(function(){
         confetti.stop();
       }, 5000);
     };
     //playing start
     startit();
     //stoping it
     stopit();
              
       
           
       }


      
      
 
     }
    
      

       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

     



