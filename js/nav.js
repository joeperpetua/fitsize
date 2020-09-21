window.onload = () => {

    //nav
    let expanded = false;
    let navExpand = document.getElementById('nav-expand');
    let navToggler = document.getElementById('nav-toggler');
    let togglerIcon = document.getElementById('toggler-icon');
    let navElement = document.getElementsByClassName('nav-el');
    
    navToggler.onclick = () => {
        
        if (expanded) {
            expanded = false;
            togglerIcon.classList.remove('up');
            togglerIcon.classList.add('down');
            navExpand.classList.toggle('none');
        }else{
            expanded = true;
            togglerIcon.classList.remove('down');
            togglerIcon.classList.add('up');
            navExpand.classList.toggle('none');
        }
        
    };

    for (let i = 0; i < navElement.length; i++) {
        navElement[i].onclick= () => {
            if (expanded) {
                expanded = false;
                togglerIcon.classList.remove('up');
                togglerIcon.classList.add('down');
                navExpand.classList.toggle('none');
            }else{
                expanded = true;
                togglerIcon.classList.remove('down');
                togglerIcon.classList.add('up');
                navExpand.classList.toggle('none');
            }
        }
        
    }


    //goup
    let btn = document.getElementById('goUp');

    window.onscroll = () => {
        
        if(scrollY > 500){
            btn.classList.remove('bounceOutRight', 'none');
            btn.classList.add('animated', 'bounceInRight');
        }
    
        if(scrollY < 500){
            btn.classList.remove('bounceInRight');
            btn.classList.add('bounceOutRight'); 
        }
    }
};