// let applicationForm = document.getElementById('application_form');

//Requests for the available job offers to the admin server.
fetch('http://localhost/middleware/job_offer.php').then(response => {
  response.text().then(result => {
    document.getElementById('job_offer').innerHTML = result;
  })
})
