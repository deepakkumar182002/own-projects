  
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const Lbtn = document.querySelector('.Loginbtn-popup');
        const icon = document.querySelector('.icon-clos');
    
        registerLink.addEventListener('click',()=>{
            wrapper.classList.add('active');
        });
        
        loginLink.addEventListener('click',()=>{
                wrapper.classList.remove('active');
        });

        Lbtn.addEventListener('click',()=>{
            wrapper.classList.add('active-popup');
        });

        icon.addEventListener('click',()=>{
            wrapper.classList.remove('active-popup');
        });