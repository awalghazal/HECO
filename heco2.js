<?php header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo json_encode($phparray); 


let body = document.querySelector('body');
let divHeader = document.createElement('div');
body.appendChild(divHeader)
let spanH = document.createElement('span');
spanH.textContent = 'مستشفى الامير عون ياسر - قسم تنمية الإيرادات';
spanH.id = 'Hospital_Name';
divHeader.appendChild(spanH)
