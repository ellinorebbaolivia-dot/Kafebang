// Vänta tills DOM:en har laddats helt
document.addEventListener("DOMContentLoaded", function() {
    
    // Hantera formulärinskickningar (förberedelse för konverteringsmätning)
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", function(e) {
            // Om formuläret ska skickas till thank-you.html låter vi standardbeteendet köra,
            // men vi kan logga händelsen i konsolen för felsökning/kursanalys.
            console.log("Formulär triggat för inskick: " + form.id);
            
            // Här kan du senare lägga till anpassade spårnings-events:
            // dataLayer.push({'event': 'form_submission', 'form_id': form.id});
        });
    });

    // Markera aktiv sida i navigationen baserat på URL
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});