
var nomAdherent = adherent.get("1").nom;
var zoneNom = document.getElementById("zoneNom");
zoneNom.innerText = nomAdherent;


var prenomAdherent = adherent.get("1").prenom;
var zonePrenom = document.getElementById("zonePrenom");
zonePrenom.innerText = prenomAdherent;

var adresseAdherent = adherent.get("1").adresse;
var zoneAdresse = document.getElementById("zoneAdresse");
zoneAdresse.innerText = adresseAdherent;

var villeAdherent = adherent.get("1").codePostal;
var zoneVille = document.getElementById("zoneVille");
zoneVille.innerText = villeAdherent;

var mailAdherent = adherent.get("1").mail;
var zoneMail = document.getElementById("zoneMail");
zoneMail.innerText = mailAdherent;

var cotisationAdherent = adherent.get("1").cotisation;
var cotisationStatut = document.getElementById("cotisationStatut");
cotisationStatut.innerText = cotisationAdherent

var amamdeAdherent = adherent.get("1").amende;
var soldeEnEuro = document.getElementById("soldeEnEuro");
soldeEnEuro.innerText = amamdeAdherent;