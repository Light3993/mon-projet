// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkGsIfvc7VvLG1m82OpyMq6C-ZcBmWQwk",
  authDomain: "mon-projet-9a526.firebaseapp.com",
  projectId: "mon-projet-9a526",
  storageBucket: "mon-projet-9a526.firebasestorage.app",
  messagingSenderId: "149961784280",
  appId: "1:149961784280:web:72ce7869d1dbb5259c90ad",
  measurementId: "G-7TCQDDHL0L"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Gestionnaire de soumission du formulaire
const form = document.getElementById('registrationForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupérer les données du formulaire
    const studentData = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        date_naissance: document.getElementById('date_naissance').value,
        address: document.getElementById('address').value,
        numero: document.getElementById('numero').value,
        email: document.getElementById('email').value,
        filiere: document.getElementById('filiere').value,
        semestre: document.getElementById('semestre').value
    };

    // Envoyer les données à Firebase
    firebase.database().ref('students').push(studentData)
        .then(() => {
            alert('Données enregistrées avec succès !');
            form.reset();
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement des données :', error);
        });
});

const summaryDiv = document.getElementById('summary');
const nextButton = document.getElementById('nextButton');
let currentStep = 0;

const steps = [
    { label: "Nom:", type: "text", id: "nom" },
    { label: "Prénoms:", type: "text", id: "prenom" },
    { label: "Date de Naissance:", type: "date", id: "date_naissance" },
    { label: "Adresse:", type: "text", id: "address" },
    { label: "Numéro de Téléphone:", type: "tel", id: "numero" },
    { label: "Email:", type: "email", id: "email" },
    { label: "Filière:", type: "select", id: "filiere", options: [
        { value: "", text: "Sélectionnez votre Filière" },
        { value: "1", text: "Logistique & Transport" },
        { value: "2", text: "Intelligence Artificielle & Big Data" },
        { value: "3", text: "Informatique & Systèmes" },
        { value: "4", text: "LF Génie Civil" },
        { value: "5", text: "LF Génie Mécanique" },
        { value: "6", text: "LF Génie Électrique" }
    ]},
    { label: "Semestre en Cours:", type: "select", id: "semestre", options: [
        { value: "", text: "Sélectionnez un semestre" },
        { value: "1", text: "Semestre 1" },
        { value: "2", text: "Semestre 2" }
    ]}
];

nextButton.addEventListener('click', showNextStep);

function showNextStep() {
    if (currentStep < steps.length) {
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('field');

        const step = steps[currentStep];
        const label = document.createElement('label');
        label.setAttribute('for', step.id);
        label.textContent = step.label;
        fieldContainer.appendChild(label);

        let inputElement;

        if (step.type === 'select') {
            inputElement = document.createElement('select');
            inputElement.id = step.id;
            inputElement.name = step.id;
            step.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.text;
                inputElement.appendChild(opt);
            });
        } else {
            inputElement = document.createElement('input');
            inputElement.type = step.type;
            inputElement.id = step.id;
            inputElement.name = step.id;
            inputElement.required =[_{{{CITATION{{{_1{](https://github.com/wf3-fullstack/cours/tree/7499c92239d3ef3543147adf883b5734826b46bc/vuejs%2F_cours.md)
