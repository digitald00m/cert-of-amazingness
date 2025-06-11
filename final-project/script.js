function display() {
    // Open the certificate in a new window
    dispWin = window.open('certificate.html', 'NewWin',
      'toolbar=no,status=no,titlebar=no,width=800,height=600');
  
    // Assign the name to a global variable accessible from the popup
    awardee = document.form1.name.value;
  
    // Clear the form input
    document.form1.name.value = "";
  }
