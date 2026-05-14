// Funcionalidad básica para el reporte de equipo
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn-check');
    const statusDiv = document.getElementById('status');

    button.addEventListener('click', () => {
        statusDiv.innerText = "Sincronizando con el repositorio local...";
        
        setTimeout(() => {
            statusDiv.innerText = "¡Sistema optimizado y funcionando! - Equipo 7mo Semestre";
            console.log("Log: Verificación de versionamiento completada.");
        }, 1500);
    });
});