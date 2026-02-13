const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Controlla se c'è una preferenza salvata
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if(toggle) toggle.checked = true;
}

// Gestione del click
if(toggle) {
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}