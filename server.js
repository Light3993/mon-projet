form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = {};
    steps.forEach(step => {
        formData[step.id] = document.getElementById(step.id).value;
    });

    // Enregistrer les données dans Firebase
    database.ref('inscriptions').push(formData)
        .then(() => {
            alert('Données envoyées avec succès!');
            form.reset(); // Réinitialiser le formulaire
            summaryDiv.classList.add('hidden'); // Cacher le résumé
        })
        .catch((error) => {
            console.error('Erreur lors de l\'envoi des données :', error);
        });
});
