<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
 // Validar Honeypot
 if (!empty($_POST['extra'])) {
 die("Error: Se detectó actividad no autorizada.");
 }
 // Captura y sanitización de datos
 $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
 $captcha = filter_input(INPUT_POST, 'captcha', FILTER_SANITIZE_NUMBER_INT);
 // Validación de los datos
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
 die("Error: El correo electrónico no es válido.");
 }
 if ($captcha != 5) {
 die("Error: La respuesta al CAPTCHA es incorrecta.");
 }
 // TODO: Aquí se guardaría el correo en la base de datos de manera segura.
 echo "¡Gracias por suscribirte! Pronto recibirás nuestras noticias.";
} else {
 die("Acceso no permitido.");
}
?>
