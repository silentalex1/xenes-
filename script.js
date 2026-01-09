const CLIENT_ID = "1458271432654983169";

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const authForm = document.getElementById('authForm');
    const switchBtn = document.getElementById('switch-btn');
    const switchText = document.getElementById('switch-text');
    const titleText = document.getElementById('title-text');
    const submitBtn = document.getElementById('main-submit');
    const card = document.getElementById('auth-card');
    const discordBtn = document.getElementById('discord-btn');

    let isLoginMode = false;

    if (switchBtn) {
        switchBtn.addEventListener('click', () => {
            if (!card) return;
            card.classList.add('card-flip');
            
            setTimeout(() => {
                isLoginMode = !isLoginMode;
                
                if (isLoginMode) {
                    titleText.innerText = "login to you're account here.";
                    submitBtn.innerText = "Login here.";
                    switchText.innerText = "don't have a account? Create one here.";
                } else {
                    titleText.innerText = "Create a account here :)";
                    submitBtn.innerText = "Submit.";
                    switchText.innerText = "login to your account.";
                }
                
                card.classList.remove('card-flip');
            }, 300);
        });
    }

    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const user = document.getElementById('username').value.trim().toLowerCase();
            const pass = document.getElementById('password').value;

            if (!user || !pass) return;

            let existingUsers = JSON.parse(localStorage.getItem('xenes_users') || '[]');

            if (!isLoginMode) {
                if (existingUsers.includes(user)) {
                    alert("This username is already taken by a user or discord account.");
                    return;
                }
                existingUsers.push(user);
                localStorage.setItem('xenes_users', JSON.stringify(existingUsers));
            }

            submitBtn.innerText = "...";
            submitBtn.disabled = true;

            setTimeout(() => {
                window.location.href = "/homepage";
            }, 800);
        });
    }

    if (discordBtn) {
        discordBtn.addEventListener('click', () => {
            window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&scope=identify`;
        });
    }
});
