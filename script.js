const XENES_ID = "1458271432654983169";

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const mainForm = document.getElementById('mainForm');
    const discordAuth = document.getElementById('discordAuth');

    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userValue = document.getElementById('username').value;
        const passValue = document.getElementById('password').value;
        const submitBtn = mainForm.querySelector('button');

        submitBtn.innerText = "...";
        submitBtn.disabled = true;

        const requestData = {
            id: XENES_ID,
            action: "register",
            user: userValue,
            pass: passValue
        };

        console.log("Request sent:", requestData);

        setTimeout(() => {
            alert(`You are now signed in.`);
            submitBtn.innerText = "Submit.";
            submitBtn.disabled = false;
        }, 1200);
    });

    discordAuth.addEventListener('click', () => {
        console.log("Discord link sent for client:", XENES_ID);
        window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${XENES_ID}&scope=identify`;
    });
});
