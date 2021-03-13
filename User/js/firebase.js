  // Your web app's Firebase configuration
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();
 
    var requestRef = database.ref('reports');
//Listen for Form Elements
document.getElementById('reportForm').addEventListener('reportSubmit', submitRequest);

function submitRequest(e){
    e.preventDefault();

    var crime = getInputValues('reportCrime');
    var add = getInputValues('reportAddress');
    var description = getInputValues('reportDescription');
    var area = getInputValues('reportArea');

    saveRequest(crime, add, description, area);

   
    //Clear Form
    document.getElementById('reportForm').reset();

}

function getInputValues(id){
    return document.getElementById(id).value;
}

//Save to Firebase

function saveRequest(crime, add, description, area){
    var newRequestRef = requestRef.push();
    newRequestRef.set({
        crime: crime,
        add: add,
        description: description,
        area: area
    });
}