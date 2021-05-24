
let tl = gsap.timeline();
gsap.registerPlugin(ScrollToPlugin);
tl.fromTo('.img2',4,{minHeight:0,zIndex:4},{minHeight:'100vh'})
  .fromTo('.img3',4,{minHeight:0,zIndex:5},{minHeight:'100vh'})
  .fromTo('.img4',4,{minHeight:0,zIndex:6},{minHeight:'100vh'})
  const controller = new ScrollMagic.Controller();
  const blockScroll = new ScrollMagic.Scene({
            triggerElement: ".container-fluid",
              triggerHook: "onLeave",
              duration: "300%"
  })
    .setTween(tl)
   .addTo(controller);

   let tabs = document.querySelectorAll(".main-but")
   tabs.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            //remove active from the current one 
            tabs.forEach(removes=>{
                removes.classList.remove('active')
        })
        // add acitve the current onne
        btn.classList.add('active')
      gsap.to(window, {duration: 1.5, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
    });
  });

  function sizeAll() {
	var	w = window.innerWidth;
  
  if ( w < 1024) {
      console.log('im less than 1024')
      blockScroll.enabled(false);

  } else {
    console.log('im greater than 1024')
    blockScroll.enabled(true);
	}

}

$(window).resize(sizeAll);
sizeAll();

  // ------------------------------------------re-examinejs--------------------------------
  class Examine{
    constructor(){
        this.tabs = $('.examinebox')
        this.tab()
        this.boxLoop()
        this.overlay = $('.examineoverlay')
        this.header = $('.examineheader')
        this.video = $('.examinevideo')
        this.close = $('.examinecloses')
    }

    animate(){
        let tl = gsap.timeline()
        tl.fromTo(this.overlay,0.3,{height:0},{height:'100%'})
           .fromTo(this.header,0.3,{display:'block',opacity:0},{opacity:1})
           .fromTo(this.video,0.3,{display:'block',opacity:0},{opacity:1})
           .fromTo(this.close,0.3,{opacity:0},{opacity:1})
    }
    reverse(){
        let tl = gsap.timeline()
        tl.to(this.close,0.3,{opacity:0})
        .to(this.video,0.3,{display:'block',opacity:0,display:'none'})
        .to(this.header,0.3,{display:'block',opacity:0,display:'none'})
        .to(this.overlay,0.3,{height:'0%'})
    }
    //changes tab
    tab(){ 
            $.each(this.tabs,(index,item)=>{
            $(item).click(()=>{
                $(this.tabs).each((index,item)=>{
                        $(item).removeClass('examineactive')
                })
                setTimeout(() => {
                    $(item).addClass('examineactive')
                }, 1000);
                       
            })
        })  
    }
    data(){
        const data = [
            {video: " <iframe class='youtube-video-1' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'1',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-2' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'2',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-3' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'3',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-4' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'4',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-5' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'5',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-6' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'6',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-7' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'7',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-8' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'8',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-9' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'9',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-10' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'10',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-11' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'11',
            header:'Video',
            },
            {video: " <iframe class='youtube-video-12' width='560' height='315' src='https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0' frameborder='0' allowfullscreen></iframe>  ",
            increment:'12',
            header:'Video',
            }           
          ];
          return data
    }
    boxLoop(){
        let data = this.data();
        for( let i = 0;i<data.length ;i++){
               
                $(`.examinebox${data[i].increment}`).on('click',()=>{
                    //changes the html to the correct values
                    $('.examineheader').html(`${data[i].header}`)
                    $('.examinevideo').html(`${data[i].video}`)
                    $('.examinecloses').html(` <i class="fa fa-times ${data[i].increment}" id = "times"></i>`)
                        this.animate()
                    $(`.${data[i].increment}`).on('click',()=>{
                        this.reverse()   
                        $(`.youtube-video-${data[i].increment}`)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                    })
                })
        }       
    }
}  
new Examine();

// -------------------------------


class Calendar{

    constructor(){
        this.tabs = $('.boxactive')
        this.tab()
        this.data()
        this.modal()     
    }
    tab(){ 
        $.each(this.tabs,(index,item)=>{
        
            $(item).click(()=>{
                $(this.tabs).each((index,item)=>{
                        $(item).removeClass('calendaractive')
                })
                        $(item).addClass('calendaractive')     
            })
        })  
    }
    data(){
        const modalData = [
            {
                //october12
                increment:1,
                video:'https://www.youtube.com/embed/39mW2DR3wEM?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                // october14
                increment:2,
                video:'https://www.youtube.com/embed/x1ZVccMoi90?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                //october20
                increment:3,
                video:'https://www.youtube.com/embed/Ykvv9KUOU80?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                //october22
                increment:4,
                video:'https://www.youtube.com/embed/-dXto2p8WTM?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                //october26
                increment:5,
                video:'https://www.youtube.com/embed/rlr7Hb9V3tw?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                 //october28
                 increment:6,
                 video:'https://www.youtube.com/embed/j0Qzqv_4XFU?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                // november 3
                increment:7,
                video:'https://www.youtube.com/embed/6fVmJXFrlLY?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                // november 5
                increment:8,
                video:'https://www.youtube.com/embed/KgCEM-tYMeY?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                // november 3
                increment:9,
                video:'https://www.youtube.com/embed/6fVmJXFrlLY?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            },
            {
                // november 5
                increment:10,
                video:'https://www.youtube.com/embed/KgCEM-tYMeY?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0'
            }
            
        ]
        return modalData;
    }
    modal(){
        let data = this.data()
        for(let i = 0;i<data.length;i++){
            // console.log(i)
                $('#modal').append( `
                    <div class="modal fade" id="recorded${data[i].increment}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content tv-content">
                            <div class="modal-body d-flex justify-content-center align-items-center">
                                    <svg width="781" height="741" viewBox="0 0 781 741" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M238.743 105.929C238.032 101.168 238.956 92.5244 248.34 96.0403C260.07 100.435 335.781 190.531 350.71 200.42C358.53 197.49 376.943 193.168 388.033 199.321C435.308 133.031 530.498 0.450857 533.057 0.450857C536.967 -0.647873 544.574 -0.428127 543.721 9.24069C543.681 9.69034 543.645 10.1085 543.611 10.4967L543.721 10.3395C543.382 13.8316 542.914 18.4557 543.611 10.4967L404.028 209.21C403.317 210.675 402.322 214.483 404.028 217.999L406.161 224.592H335.781V215.802L238.743 105.929Z" fill="#004281"/>
                                            <path d="M161.506 629.468H87.0592L72.6035 739.472H109.827L161.506 629.468Z" fill="#004281"/>
                                            <path d="M662.989 630.996H588.238L640.128 741H677.14L662.989 630.996Z" fill="#004281"/>
                                            <rect y="224.592" width="780.861" height="406.404" rx="49" fill="#004281"/>
                                            <ellipse cx="693.439" cy="508.769" rx="34.0793" ry="35.1402" fill="white"/>
                                            <circle cx="692.5" cy="363.5" r="23.5" fill="white"/>
                                            <circle cx="692.5" cy="429.5" r="23.5" fill="white"/>
                                            <rect x="48.896" y="267.371" width="583.793" height="316.262" fill="#004281"/>
                                            <foreignObject class="node" x="48" y="260" width="600" height="485">

                                            <iframe class="youtube${data[i].increment}" width="560" height="315" src="${data[i].video}"
                                             frameborder="0" allowfullscreen></iframe> 

                                            <button type="button" class="btn btn-secondary tv button${data[i].increment}" id = "modalBut" data-dismiss="modal">Close</button>
                                        </foreignObject>
                                    </svg>
                            </div>
                        </div>
                    </div>
                </div>
                `
                )
        }
    }
    

}
new Calendar()


class ScrollSpy{
    constructor(){
        this.tabs = $('.tab')
        this.wrapper = $('.page')
        this.tab()       
    }
    tab(){
        $.each(this.wrapper,(index,value)=>{
            index++
            $('#section'+index).on('mouseenter',()=>{
             
                this.removeUnusedTabs()

                $('#tab'+index).addClass('active')   
            })
        })
    }
    removeUnusedTabs(){
        $.each(this.tabs,(index,value)=>{
            index++
            $('#tab'+index).removeClass('active')
        })
    }
}
 
new ScrollSpy
