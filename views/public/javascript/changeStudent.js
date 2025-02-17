let originalData = {};

// Funktion zum Bearbeiten der Zeile
function editStudent(id) {

  // Alle student Divs auswählen
  const studentDivs = document.querySelectorAll('.student');

  // Alle Buttons in jedem Div deaktivieren
  studentDivs.forEach(studentDiv => {
    studentDiv.querySelector('.edit-btn').style.display = 'none';  // Button deaktivieren
  });

  // Zeile anhand der ID auswählen
  const studentDiv = document.getElementById('student-' + id);

  // Sichtbarkeit der Buttons anpassen
  studentDiv.querySelector('.cancel-btn').style.display = 'inline-block';
  studentDiv.querySelector('.save-btn').style.display = 'inline-block';

  // Eingabefelder für Bearbeitung einblenden
  const firstNameSpan = studentDiv.querySelector('.first-name');
  const lastNameSpan = studentDiv.querySelector('.last-name');
  const emailSpan = studentDiv.querySelector('.email');

  const originalData = {
    id,
    firstName: firstNameSpan.innerText,
    lastName: lastNameSpan.innerText,
    email: emailSpan.innerText
  };

  sessionStorage.setItem('studentData', JSON.stringify(originalData));

  console.log(originalData);

  firstNameSpan.innerHTML = `<input type="text" value="${firstNameSpan.innerHTML}" class="edit-input">`;
  lastNameSpan.innerHTML = `<input type="text" value="${lastNameSpan.innerHTML}" class="edit-input">`;
  emailSpan.innerHTML = `<input type="email" value="${emailSpan.innerHTML}" class="edit-input">`;
}

// Funktion zum Abbrechen der Bearbeitung
function cancelEdit(id) {

  // Alle student Divs auswählen
  const studentDivs = document.querySelectorAll('.student');

  // Alle Buttons in jedem Div deaktivieren
  studentDivs.forEach(studentDiv => {
    studentDiv.querySelector('.edit-btn').style.display = 'inline-block';  // Button deaktivieren
  });

  // Zeile anhand der ID auswählen
  const studentDiv = document.getElementById('student-' + id);

  // Sichtbarkeit der Buttons zurücksetzen
  studentDiv.querySelector('.cancel-btn').style.display = 'none';
  studentDiv.querySelector('.save-btn').style.display = 'none';

  originalData = JSON.parse(sessionStorage.getItem('studentData'));
  // Eingabefelder zurücksetzen
  const firstNameSpan = studentDiv.querySelector('.first-name');
  const lastNameSpan = studentDiv.querySelector('.last-name');
  const emailSpan = studentDiv.querySelector('.email');

  firstNameSpan.innerHTML = originalData.firstName;
  lastNameSpan.innerHTML = originalData.lastName
  emailSpan.innerHTML = originalData.email
}

// Funktion zum Speichern der Änderungen
function saveStudent(id) {

  // Zeile anhand der ID auswählen
  const studentDiv = document.getElementById('student-' + id);

  // Neue Werte aus den Eingabefeldern holen
  const firstName = studentDiv.querySelector('.first-name input').value;
  const lastName = studentDiv.querySelector('.last-name input').value;
  const email = studentDiv.querySelector('.email input').value;
  const studentId = studentDiv.querySelector('.student-id').value;

  // Hier kannst du die Daten über AJAX an den Server senden oder anderweitig speichern
  console.log("Speichern:", { id: studentId, first_name: firstName, last_name: lastName, email: email });


  fetch('/student/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: studentId, fname: firstName, lname: lastName, email: email })
  }).then(response => response.json())  // Antwort als JSON parsen
    .then(data => {
      console.log("Erfolgreich gespeichert:", data);
      studentDiv.querySelector('.first-name').innerHTML = firstName;
      studentDiv.querySelector('.last-name').innerHTML = lastName;
      studentDiv.querySelector('.email').innerHTML = email;

      // Sichtbarkeit der Buttons zurücksetzen
      studentDiv.querySelector('.cancel-btn').style.display = 'none';
      studentDiv.querySelector('.save-btn').style.display = 'none';

      // Alle student Divs auswählen
      const studentDivs = document.querySelectorAll('.student');

      // Alle Buttons in jedem Div deaktivieren
      studentDivs.forEach(studentDiv => {
        studentDiv.querySelector('.edit-btn').style.display = 'inline-block';  // Button deaktivieren
      });
    })
    .catch(error => {
      console.error("Fehler beim Speichern:", error);

      const errorMessageDiv = document.getElementById("error-message");
      errorMessageDiv.innerText = "Fehler beim Speichern. Bitte versuchen Sie es erneut.";
      errorMessageDiv.style.display = "block";  // Sichtbar machen

      setTimeout(() => {
        errorMessageDiv.style.display = "none";  // Nach 5 Sekunden ausblenden
      }, 5000);
    });



}
