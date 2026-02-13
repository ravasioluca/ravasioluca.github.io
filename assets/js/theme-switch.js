(function() {
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // 1. Applica subito il tema salvato (evita il flash bianco)
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // 2. Attendi che il DOM sia pronto per collegare lo switch
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.checked = (savedTheme === 'dark');
            toggle.addEventListener('change', () => {
                applyTheme(toggle.checked ? 'dark' : 'light');
            });
        }
    });
})();