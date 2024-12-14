// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set , get, child  } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkGsIfvc7VvLG1m82OpyMq6C-ZcBmWQwk",
  authDomain: "mon-projet-9a526.firebaseapp.com",
  projectId: "mon-projet-9a526",
  storageBucket: "mon-projet-9a526.firebasestorage.app",
  messagingSenderId: "149961784280",
  appId: "1:149961784280:web:72ce7869d1dbb5259c90ad",
  measurementId: "G-7TCQDDHL0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
document.getElementById(" submit").addEventListener('click', function(e){
    set(ref(db, 'nom/' + document.getElementById("nom").value),{
    Nom : document.getElementById("nom").value,
    Prénoms :  document.getElementById("prenom").value,
    Date de Naissance : document.getElementById("date_naissance").value,
    Adresse : document.getElementById("address").value,
    Numéro de Téléphone : document.getElementById("numero").value,
    Email : document.getElementById("email").value,
    Filière : document.getElementById("filiere").value,
    Semestre en Cours : document.getElementById("semestre").value,
        });
  
    // Envoyer les données à Firestore
    db.collection('etudiants').add(formData)
        .then(() => {
            console.log("Document écrit avec succès !");
            // Afficher la page de connexion après l'enregistrement
            registrationContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        })
        .catch((error) => {
            console.error("Erreur lors de l'ajout du document : ", error);
        });

});
