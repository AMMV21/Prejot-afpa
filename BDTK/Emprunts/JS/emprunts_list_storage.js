var listEmprunts = {};
var tlistEmprunts = [];

if (!localStorage.listEmprunts){ localStorage.setItem("listEmprunts", JSON.stringify(Array.from(tlistEmprunts))); }
//localStorage.setItem('listEmprunts', JSON.stringify(tlistEmprunts));
let listEmpruntsStorage = JSON.parse(localStorage.getItem('listEmprunts'));
