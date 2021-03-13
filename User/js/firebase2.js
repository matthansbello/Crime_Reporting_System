  // Your web app's Firebase configuration
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();
 
    var requestRef = database.ref('blower');
//Listen for Form Elements
document.getElementById('blowerForm').addEventListener('blowerSubmit', submitRequest);

function submitRequest(e){
    e.preventDefault();

    var crime = getInputValues('blowerCrime');
    var add = getInputValues('blowerAddress');
    var num = getInputValues('blowerNumber')
    var description = getInputValues('blowerDes');
    var area = getInputValues('blowerArea');

    saveRequest(crime, add, num, description, area);

   
    //Clear Form
    document.getElementById('blowerForm').reset();

}

function getInputValues(id){
    return document.getElementById(id).value;
}

//Save to Firebase

function saveRequest(crime, add, num, description, area){
    var newRequestRef = requestRef.push();
    newRequestRef.set({
        crime: crime,
        add: add,
        num: num,
        description: description,
        area: area
    });
}