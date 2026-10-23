       // responsive navbar 
       const menuIcon = document.getElementById("menu-icon");
        const links = document.querySelector(".links");
        
        if(menuIcon && links){
        menuIcon.onclick = () => {
            links.classList.toggle("active")
        }
        }
         // after click link  navbar will disappear
        const allLinks = document.querySelectorAll(".links a");
        allLinks.forEach( link=>{
        link.addEventListener("click",(e)=>{
            // smooth scrolling + stop jumping
            e.preventDefault();
          const targetId = link.getAttribute("href");
          if (targetId && targetId.startsWith("#")&& targetId.length > 1) {
            const targetSect = document.querySelector(targetId);
            if (targetSect) {
                targetSect.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });
            }
          }

           links.classList.remove("active");
        });
    })
        // dark mode + localStorage
        const moon = document.getElementById("moon");
        const sun = document.getElementById("sun");

         if(localStorage.getItem("themes") ==="dark"){
             document.body.classList.add("dark");
            if(moon) moon.style.display = "none";
            if(sun) sun.style.display = "block";
         }
        if(moon) moon.addEventListener('click',()=>{
            document.body.classList.add("dark");
            localStorage.setItem("themes","dark")
            moon.style.display = "none";
            if(sun) sun.style.display = "block"
        });
        if(sun) sun.addEventListener('click',()=>{
            document.body.classList.remove("dark");
            localStorage.setItem("themes","white")
            sun.style.display = "none";
            if(moon) moon.style.display = "block"
        })
        // animation for home page
         
        const h1 = document.getElementById("animeH1");
        const p = document.getElementById("animeP");
        const btn = document.getElementById("animeBtn")

        if(h1 && p && btn) window.addEventListener('load',()=>{
            h1.style.opacity='1'
            h1.style.transform ='translateY(0)'

            setTimeout(()=>{
             p.style.opacity='1'
             p.style.transform='translateY(0)'

            },400)
            setTimeout(()=>{
              btn.style.opacity='1'
              btn.style.transform='translateY(0)'
            },400)
        });
    
       
        
        const nav = document.querySelector("header nav");
        //  about page
         const aboutH1 = document.getElementById("aboutH1");
            const aboutH3 = document.getElementById("aboutH3");
            const vdo = document.querySelector('.about-vdo video');
            const aboutSection = document.querySelector(".aboutSection");
            const aboutP = document.querySelector('#aboutP');
            const aboutF = document.querySelector('#aboutF');
            //  hall page animation
            const aboutHalls = document.querySelector(".aboutHalls");
            const hallpara = document.getElementById("hallpara");
            const hallh1 = document.getElementById("hallh1");
            const hallsp1 = document.getElementById("hallV");
            const hallDev = document.querySelectorAll(".hallsDev");
            // services page animation
            const services = document.getElementById("services");
            const serviceP = document.querySelector(".serviceHead p");
            // gallery page animation
            const gallery = document.querySelector(".gallerySection");
            const galleryP = document.querySelector(".gallery-head p")
            // lighbox image
            const images = document.querySelectorAll(".gallery div img");
            const lightBox = document.getElementById('lightbox');
            const lightBoxImg = document.getElementById('lightboxImg');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const closeBtn = document.getElementById('closeBtn');
            



              let lastScroll = 0;
        
        window.addEventListener('scroll',()=>{
            let currentScroll = window.scrollY;
            if (nav) {
                if (currentScroll > lastScroll && currentScroll > 100) {
                    nav.style.transform='translateY(-100%)'
                } else {
                    nav.style.transform='translateY(0%)'
                }
            }
            lastScroll = currentScroll;
            // about page
            if (aboutSection) {
                const sectionTop = aboutSection.getBoundingClientRect().top;
                if (sectionTop < 400) {
                    [aboutH1, aboutH3, aboutP, aboutF].forEach(element => {
                        if (element) {
                            element.style.opacity = '1';
                            element.style.transform = 'translateX(0)';
                        }
                    });
                    // video animation
                    if (vdo) vdo.play();
                } else if (vdo) {
                    vdo.pause();
                }
            }

            if(aboutHalls){
              const hallTop = aboutHalls.getBoundingClientRect().top;
              if(hallTop < 400) {
                [hallpara,hallh1,hallsp1].forEach(e =>{
                    if (e) {
                            e.style.opacity='1'
                            e.style.transform = 'translateX(0)';
                        
                    }
                   
                });

                 hallDev.forEach(box=>{
                        if (box) {
                            box.style.opacity='1';
                            box.style.transform = 'translateY(0)'
                        }
                  });
              }
            }

            if (services) {
                const serviceTop = services.getBoundingClientRect().top;
                if (serviceTop < 400) {

                    if (serviceP) {
                        serviceP.style.opacity='1';
                        serviceP.style.transform='translateY(0)'
                    }
                    // targeted all service boxes
                    const serviceBoxes = document.querySelectorAll(".servce-box");

                    serviceBoxes.forEach((box,idx)=>{
                       setTimeout(() => {
                        box.style.opacity='1'
                        box.style.transform ='translateX(0) scale(1)';
                       }, idx * 300);
                    })
                }
            }
            
             if (gallery){
                const galleryTop = gallery.getBoundingClientRect().top;
                if (galleryTop < 400) {
                    if (galleryP) {
                        galleryP.style.opacity='1'
                        galleryP.style.transform='translateX(0)'
                    }
                    
                }
               
            }
        });
         let currentIndex = 0;
            images.forEach((img,idx)=>{
                img.addEventListener('click',()=>{
                currentIndex = idx ;
                 
                 showImage();
                });
            });

            function showImage(){
              lightBoxImg.src = images[currentIndex].src;
              lightBox.classList.add('active');
            }

            function closeLightbox() {
                lightBox.classList.remove('active');
            }

            closeBtn.addEventListener('click',closeLightbox);
             nextBtn.addEventListener('click',()=>{
                currentIndex = (currentIndex + 1) % images.length;
                showImage();
             });

            prevBtn.addEventListener('click',()=>{
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage();
             });

            lightBoxImg.addEventListener('click',closeLightbox);

            lightBox.addEventListener('click',(e)=>{
                if (e.target === lightBox){ closeLightbox();
                }  
            })
        
           
        

        

        
       

    
             // arrow back dissable
                history.pushState(null, null, location.href);

                window.onpopstate = function () {
                       history.go(1);
                  };



       
        
           
       