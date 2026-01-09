const APP_ID = "1458271432654983169";

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const authForm = document.getElementById('authForm');
    const discordBtn = document.getElementById('discordBtn');

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = authForm.querySelector('button');
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        btn.innerText = "...";
        btn.disabled = true;

        console.log("Account Creation:", { user, pass, id: APP_ID });

        setTimeout(() => {
            window.location.href = "/homepage";
        }, 1000);
    });

    discordBtn.addEventListener('click', () => {
        console.log("Discord Login:", APP_ID);
        alert("Discord login is ready.");
    });
});
