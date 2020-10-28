// Initialize Firebase
var config = {
  apiKey: "AIzaSyAcsQtfKYcE4S_wWU5TCuLBXzv_4XDisRY",
  authDomain: "my-awesome-project-24604.firebaseapp.com",
  databaseURL: "https://my-awesome-project-24604.firebaseio.com",
  projectId: "my-awesome-project-24604",
  storageBucket: "my-awesome-project-24604.appspot.com",
  messagingSenderId: "236505507474"
};
firebase.initializeApp(config);
$(document).ready(function(change, context) {
    findTodayApts()
});
// Rewference customers collection
var customersRef = firebase.database().ref("customers");
var customersRecordRef = firebase.database().ref("serviceRecord");
// Progress bar update funtions
var customerKeyForPhoto;
const progressBar = $("#progres-bar");
const updater = intervalFunc => {
  let barval = progressBar.val();
  return barval !== 100 ? (barval += 1) : clearInterval(intervalFunc);
};
const initProgressBar = updater => {
  const updateProgressBarValue = () => updater(initProgressBar);
  return setInterval(updateProgressBarValue, 10);
};
initProgressBar(updater);
// Adding active class to navigation button when it was clicked
$(".nav-button a").on("click", function() {
  $("#navbarSupportedContent")
    .find(".active")
    .removeClass("active");
  $(this)
    .parent()
    .addClass("active");
});
// Showing only one div when button pressed
$("#todayButton").click(function() {
  $("#todayField").fadeIn();
  $("#appoitField").hide();
  $("#customerField").hide();
  $("#todayApts").html("");
  findTodayApts()
});
$("#appoitButton").click(function() {
  $("#todayField").hide();
  $("#appoitField").fadeIn();
  $("#todayApts").html("");
  $("#customerField").hide();
  findTodayApts();
});
$("#customerButton").click(function() {
  $("#todayField").hide();
  $("#appoitField").hide();
  $("#customerField").fadeIn();
  $("#todayApts").html("");
});
// When done button pressed groomer get's assigned to the record and customer gets a text message on their phone
$("#todayApts").on("click","tr .doneBtn",function(){
  var recordKeyId = $(this).val();
  var groomerName = $("select[name="+recordKeyId+"] option:selected").val();
  var updatedPrice = parseInt($("#price"+recordKeyId).text());
  if(groomerName == 'Melissa' || groomerName == 'Helen'){
    firebase.database().ref("serviceRecord/"+recordKeyId).update({
      groomerName:groomerName
    });
  }
  $("#td"+recordKeyId).html(groomerName);
  $("#todayApts").html("");
  findTodayApts();
})
// If price updated push it to firebase
$("#todayApts").on("focusout","tr .grommerNotes", function(){
    var notesVal = $(this).text();
    var noteServiceKey = this.getAttribute("value");
    firebase.database().ref("serviceRecord/"+noteServiceKey).update({
      groomerNotes:notesVal
    });
    $("#todayApts").html("");
    findTodayApts();
});
// If groomer notes updated push them to firebase
$("#todayApts").on("focusout","tr .priceChange", function(){
    var newPrice = parseInt($(this).text());
    var priceServiceKey = this.getAttribute("value");
    firebase.database().ref("serviceRecord/"+priceServiceKey).update({
      totalPrice:newPrice
    });
    $("#todayApts").html("");
    findTodayApts();
});
// Populate appointments div
var date = new Date().toDateString();
$('#date').attr('value', date)
$('#date').datepicker({dateFormat: "D M dd yy",
                      onSelect: function(dateText) {
                        date = dateText;
                        $('#todayApts').html('');
                        findTodayApts();
    }});
// Find matching customers
$("#searchCustomers").click(function() {
  var searchUsing = $("#searchBy option:selected").val();
  var searchValue = $("#searchValue")
    .val()
    .toUpperCase();
  $("#customerInfo").html(
    '<tr id="trInfo"><th scope="col">Owner</th><th scope="col">Pet Name</th><th scope="col">Phone Number</th><th scope="col">Email</th><th scope="col"></th></tr>'
  );
  $("#trInfo").hide();
  findMatchingUsers(searchUsing, searchValue);
});
// Upload a new photo
$("#customerInfo").on("touchstart click", ".collapse .overlayDiv", function() {
  $(".overlayDiv").css("opacity", 0.9);
});
$("#customerInfo").on("touchend click", ".collapse .overlayDiv", function() {
  $(".overlayDiv").css("opacity", 0);
  $("#modal").modal();
  customerKeyForPhoto = this.getAttribute("value");
});
$("#submitPhotoURL").on("click", function() {
  var imageURL = $("#newImageLink").val();
  function saveNewImageURL() {
    firebase
      .database()
      .ref("customers/" + customerKeyForPhoto)
      .update({ petPhoto: imageURL });
  }
  saveNewImageURL();
  $("#newImageLink").val("");
  $("#modal").modal("hide");
});
// Show more info when td clicked
$("#todayApts").on("click", "tr .moreInfoTd", function() {
  var tdKey = (this.getAttribute("value"));
  $("#more"+tdKey).toggle("blide");
});
// Find customers function
function findMatchingUsers(searchUsing, searchValue, modalUpload) {
  customersRef
    .orderByChild(searchUsing)
    .startAt(searchValue)
    .endAt(searchValue + "\uf8ff")
    .on("value", function(snap) {
      if (!snap.val()) {
        $("#showErrorMessage").show();
        $("#showErrorMessage").text("Customer can't be found, try again.");
      } else {
        snap.forEach(function(childSnapshot) {
          var customerKey = childSnapshot.key;
          var custEmail = childSnapshot.val().email;
          var custFN = childSnapshot.val().firstName;
          var custLN = childSnapshot.val().lastName;
          var custPN = childSnapshot.val().phoneNumber;
          var petName = childSnapshot.val().petName;
          var petPhoto = childSnapshot.val().petPhoto;
          var custPetBreed = childSnapshot.val().petBreed;
          var totalPrice = childSnapshot.val().petPrice;
          var custPetAge = childSnapshot.val().petAge;
          var custPetWeight = childSnapshot.val().petWeight;
          var custPetSex = childSnapshot.val().petSex;
          var custPetAllergies = childSnapshot.val().petAllergies;
          var custPetSickness = childSnapshot.val().petSickness;
          var custOther = childSnapshot.val().other;
          var lastService = childSnapshot.val().date;
          $("#trInfo").show();
          $("#showErrorMessage").hide();
          $("#customerInfo").append(
            "<tr><td>" +
              custLN +
              " " +
              custFN +
              "</td><td>" +
              petName +
              "</td><td>" +
              custPN +
              "</td><td>" +
              custEmail +
              '</td><td><a id="moreButton" class="btn btn-dark" data-toggle="collapse" href="#' +
              customerKey +
              '" role="button" aria-expanded="false">More</a></td></tr><tr class="collapse" id="' +
              customerKey +
              '"><td colspan=' +
              5 +
              '><table style="min-width: 100%;" class="table-dark table-striped text-left moreTable"><tbody><td value="' +
              customerKey +
              '" class="imageOverlay" scope="col"><img class="h200px" src="' +
              petPhoto +
              '"><div value="' +
              customerKey +
              '" class="overlayDiv"><div value="' +
              customerKey +
              '" class="hoverEffect">Add Image</div></td><td scope="col"><table><tbody><tr><td>Breed: </td><td>' +
              custPetBreed +
              "</td></tr><tr><td>Age: </td><td> " +
              custPetAge +
              "</td></tr><tr><td>Weight: </td><td>" +
              custPetWeight +
              " lb</td></tr><tr><td>Sex: </td><td>" +
              custPetSex +
              '</td></tr></tbody></table></td><td scope="col"><table><tbody><tr><td>Allergies: </td><td>' +
              custPetAllergies +
              "</td></tr><tr><td>Sickness: </td><td>" +
              custPetSickness +
              "</td></tr><tr><td>Other: </td><td>" +
              custOther +
              "</td></tr><tr><td>Last Visit:</td><td>" +
              lastService +
              "</td></tr><tbody></table></td></tbody></table></td></tr>"
          );
        });
      }
    });
}
// Find today appointments
function findTodayApts() {
  var rowNumber = 1;
  var todayIncome = 0;
  var customersDone = 0;
  var soFarIncome = 0;
  $('#todayApts').html('');
  customersRecordRef
    .orderByChild("date")
    .equalTo(date)
    .on("value", function(snap) {
      if (!snap.val()) {
        $("#noApts").show();
        $('#numberOfApp').html(0);
        $("#progres-bar").attr({"max" : rowNumber});
        $("#progres-bar").val(customersDone);
        $("#completeApp").html(customersDone);
        $("#expectedIncome").html(todayIncome);
        $("#totalNow").html(soFarIncome);
      } else {
        $("#noApts").hide();
        $('#todayApts').html('');
        snap.forEach(function(childSnapshot) {
          var serviceKey = childSnapshot.key;
          var customerKey = childSnapshot.val().customerKey;
          var checked = childSnapshot.val().checked;
          var choosenService = childSnapshot.val().choosenService;
          var totalPrice = childSnapshot.val().totalPrice;
          var lastApptDate = childSnapshot.val().date;
          var groomerName = childSnapshot.val().groomerName;
          var groomerNotes = childSnapshot.val().groomerNotes;
          checked = $.trim(checked);
          var checkedLastComma = checked.slice(-1);
          if (checkedLastComma == ',') {
            checked = checked.slice(0, -1);
          } else if(checked == ''){
                    checked = "No add-ons were selected"
                    }
          todayIncome = parseInt(todayIncome+totalPrice);
          function findCurrentCust() {
            firebase
              .database()
              .ref("customers/")
              .orderByKey()
              .equalTo(customerKey)
              .on("value", function(snapCustomer) {
                if (!snapCustomer.val()) {
                  console.log("All Done");
                } else {
                  snapCustomer.forEach(function(childSnapshot) {
                    var custEmail = childSnapshot.val().email;
                    var custFN = childSnapshot.val().firstName;
                    var custLN = childSnapshot.val().lastName;
                    var custPN = childSnapshot.val().phoneNumber;
                    var petName = childSnapshot.val().petName;
                    var petPhoto = childSnapshot.val().petPhoto;
                    var custPetBreed = childSnapshot.val().petBreed;
                    var custPetAge = childSnapshot.val().petAge;
                    var custPetWeight = childSnapshot.val().petWeight;
                    var custPetSex = childSnapshot.val().petSex;
                    var custPetAllergies = childSnapshot.val().petAllergies;
                    var custPetSickness = childSnapshot.val().petSickness;
                    var custOther = childSnapshot.val().other;
                    $("#todayApts").append(
                      '<tr><th class="moreInfoTd" scope="row">' +
                        rowNumber +
                        '</th><td class="moreInfoTd" value="'+serviceKey+'">' +
                        custFN +
                        ' ' +
                        custLN +
                        '</td><td class="moreInfoTd" value="'+serviceKey+'">' +
                        petName +
                        '</td><td class="moreInfoTd" value="'+serviceKey+'">' +
                        custPetBreed +
                        '</td><td class="moreInfoTd" value="'+serviceKey+'">' +
                        choosenService +
                        '</td><td >$<span value="'+serviceKey+'" id="price'+serviceKey+'" class="priceChange" contenteditable="true">' +
                        totalPrice +
                        '</span></td><td id="td'+serviceKey+'"><select name='+serviceKey+' class="btn btn-dark" typy="button"><option disabled selected>Choose Groomer</option><option value="Melissa">Melissa</option><option value="Helen">Helen</option</select></td><td id="check'+serviceKey+'"><button id="btn'+serviceKey+'" value="'+serviceKey+'" type="button" class="btn btn-dark doneBtn">DONE</button></td></tr><tr id="more'+serviceKey+'"><td class="text-left" colspan="4"><b>Add-ons: </b>'+checked+'</td><td colspan="3" class="text-left"><b>Groomer notes: </b><span class="grommerNotes" value="'+serviceKey+'" contenteditable="true">'+groomerNotes+'</span></td><td><a id="historyButton" class="btn btn-dark" data-toggle="collapse" href="#his' +
              customerKey +
              '" role="button" aria-expanded="false">HISTORY</a></td></tr>'
                    );
                    if(groomerName == 'Melissa' || groomerName == 'Helen'){
                      $("#td"+serviceKey).html(groomerName);
                      $("#check"+serviceKey).html('<i class="fa fa-check"></i>');
                      $("#more"+serviceKey).hide();
                      $("#price"+serviceKey).attr("contenteditable", false);
                      soFarIncome = parseInt(soFarIncome + totalPrice);
                      customersDone ++;
                    };
                    $('#numberOfApp').html(rowNumber);
                    $("#progres-bar").attr({"max" : rowNumber});
                    $("#progres-bar").val(customersDone);
                    $("#completeApp").html(customersDone);
                    $("#expectedIncome").html(todayIncome);
                    $("#totalNow").html(soFarIncome);
                    rowNumber++;
                  });
                }
              });
          }
          findCurrentCust();
        });
      }
    });
}
