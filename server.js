import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk'; // Importer chalk
import ExcelJS from 'exceljs'; // Importer exceljs
import fs from 'fs'; // Importer fs pour écrire des fichiers

const app = express();
const PORT = 3001;

// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
    const { nom, prenom, date_naissance, address, numero, email, filiere, semestre } = req.body;

    // Créer un objet pour les données
    const data = {
        Nom: nom,
        Prénom: prenom,
        "Date de Naissance": date_naissance,
        Adresse: address,
        "Numéro de Téléphone": numero,
        Email: email,
        Filière: filiere,
        Semestre: semestre
    };

    // Afficher les informations dans la console en vert
    console.log(chalk.green('Informations reçues :'));
    console.table(data); // Afficher les données sous forme de tableau

    // Vous pouvez également créer un objet pour les noms des filières et des semestres
    const filieres = {
        1: "Logistique & Transport",
        2: "Intelligence Artificielle & Big Data",
        3: "Informatique & Systèmes",
        4: "LF Génie Civil",
        5: "LF Génie Mécanique",
        6: "LF Génie Électrique"
    };

    const semestres = {
        1: "Semestre 1",
        2: "Semestre 2"
    };

    // Récupérer les noms des filières et semestres
    const filiereNom = filieres[filiere] || "Non spécifié";
    const semestreNom = semestres[semestre] || "Non spécifié";

    // Afficher les noms dans la console
    console.log(chalk.green(`Filière (Nom): ${filiereNom}`));
    console.log(chalk.green(`Semestre (Nom): ${semestreNom}`));

    // Créer un nouveau classeur Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Informations');

    // Ajouter les en-têtes
    worksheet.columns = [
        { header: 'Nom', key: 'nom', width: 30 },
        { header: 'Prénom', key: 'prenom', width: 30 },
        { header: 'Date de Naissance', key: 'date_naissance', width: 20 },
        { header: 'Adresse', key: 'address', width: 50 },
        { header: 'Numéro de Téléphone', key: 'numero', width: 20 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Filière', key: 'filiere', width: 40 },
        { header: 'Semestre', key: 'semestre', width: 20 }
    ];

    // Ajouter les données
    worksheet.addRow({
        nom: nom,
        prenom: prenom,
        date_naissance: date_naissance,
        address: address,
        numero: numero,
        email: email,
        filiere: filiereNom,
        semestre: semestreNom
    });

    // Définir le chemin du fichier Excel
    const excelPath = `./${nom}_${prenom}_informations.xlsx`;

    // Enregistrer le fichier Excel
    await workbook.xlsx.writeFile(excelPath);

    // Répondre au client
    res.send(`Données reçues avec succès ! Fichier Excel généré à l'adresse : ${excelPath}`);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(chalk.green(`Serveur en cours d'exécution sur http://localhost:${PORT}`));
});
