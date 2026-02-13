(function() {
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // 1. Applica subito il tema salvato (per evitare il flash bianco)
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // 2. Collega lo switch dopo che il DOM è caricato
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('theme-toggle');
        
        if (toggle) {
            // Imposta lo stato iniziale dello switch
            toggle.checked = (savedTheme === 'dark');

            // Ascolta il cambiamento
            toggle.addEventListener('change', () => {
                const newTheme = toggle.checked ? 'dark' : 'light';
                applyTheme(newTheme);
            });
        } else {
            console.error("Switch 'theme-toggle' non trovato nella pagina!");
        }
    });
})();