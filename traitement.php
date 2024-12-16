<?php
// Connexion à la base de données SQLite
try {
    $pdo = new PDO('sqlite:etudiants.db');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $date_naissance = $_POST['date_naissance'];
    $adresse = $_POST['address'];
    $numero = $_POST['numero'];
    $email = $_POST['email'];
    $filiere = $_POST['filiere'];
    $semestre = $_POST['semestre'];

    // Gérer le téléchargement de la photo
    $photo = null;
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] == UPLOAD_ERR_OK) {
        $photo = file_get_contents($_FILES['photo']['tmp_name']);
    }

    // Insérer les données dans la base de données
    $sql = "INSERT INTO utilisateurs (nom, prenom, date_naissance, adresse, numero, email, filiere, semestre, photo) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$nom, $prenom, $date_naissance, $adresse, $numero, $email, $filiere, $semestre, $photo]);

    echo "Données enregistrées avec succès !";
}
?>
