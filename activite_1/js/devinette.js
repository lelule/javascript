/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var nombre = 0;
var cpt = 0;
while (nombre !== solution && cpt < 6) {
    nombre = Number(prompt("Entrez un nombre svp"));
    if (nombre > solution) {
        console.log(nombre + " est trop grand.");
    } else {
        if (nombre < solution) {
            console.log(nombre + " est trop petit.");
        }
    }
    cpt++;
}
if (nombre === solution) {
    console.log("Bravo ! La solution est " + nombre);
    console.log("Vous avez trouvé en " + cpt + " essai(s)");
} else {
    console.log("Perdu... La solution etait " + solution);
}