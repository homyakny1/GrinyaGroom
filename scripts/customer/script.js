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
// Rewference customers collection
var customersRef = firebase.database().ref("customers");
var exCustomerKey;
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var searchPhone;
var custPetName;
var date = new Date().toDateString();
var choosenService;
var checked = "";
var totalPrice;
// Dog Breeds
var dogBreeds = {
  Affenpinscher: 35,
  Afghan: 50,
  Akita: 45,
  American_Eskimo_mini: 30,
  American_Eskimo_standart: 35,
  Australian_Shepherd: 40,
  Beagle: 25,
  Bernese_Mountain: 45,
  Bichon_Frise: 35,
  Bloodhound: 35,
  Border_Collie: 40,
  Borzoi: 40,
  Bouvier: 45,
  Boxer: 30,
  Brittany: 35,
  Bull_Terrier_miniature: 30,
  Bull_Terrier: 35,
  Bulldog: 30,
  Bullmastiff: 40,
  Cairn_Terrier: 30,
  Cavalier: 30,
  Chihuahua: 20,
  Chow_Chow: 50,
  Cocker: 35,
  Collie_rough: 50,
  Collie_smooth: 45,
  Corgi: 35,
  Dachshund: 25,
  Dalmatian: 30,
  Doberman: 30,
  Doodle: 40,
  Fox_Terrier: 30,
  German_Shepherd: 45,
  Golden: 45,
  Great_Dane: 35,
  Great_Pyrenees: 50,
  Husky: 50,
  Jack_Russell: 25,
  Keeshond: 45,
  Labrador: 35,
  Labradoodle: 45,
  Malamute: 50,
  Maltese: 30,
  Newfoundland: 55,
  Old_English: 45,
  Pekingese: 30,
  Pomeranian: 30,
  Poodle_toy: 30,
  Poodle_miniature: 35,
  Poodle_Standard: 45,
  Portuguese_Water_Dog: 30,
  Pug: 25,
  Rottweiler: 35,
  Samoyed: 50,
  Schnauzer_Mini: 30,
  Schnauzer_Standard: 35,
  Schnauzer_Giant: 40,
  Scottie: 30,
  Setters: 40,
  Sheltie: 45,
  Shih_Tzu: 30,
  Silkie: 30,
  Springer: 35,
  Saint_Bernard: 50,
  Vizsla: 30,
  Weimaraner: 35,
  Westie: 30,
  Wheaten: 40,
  Whippet: 25,
  Yorkie: 25
};

// Fubction when next button is clicked
$(".next").click(function() {
  var form = $(".msform");
  form.validate({
    rules: {
      firstName: "required",
      lastName: "required",
      email: {
        required: true,
        email: true
      },
      phoneNumber: {
        required: true,
        minlength: 10,
        maxlength: 10
      },
      petName: "required",
      petWeight: "required",
      petBreed: "required",
      petAge: "required",
      petSex: "required"
    },
    messages: {
      firstName: "*required",
      lastName: "*required",
      email: "*required",
      petName: "*required",
      petWeight: "*required",
      petBreed: "*required",
      petAge: "*required",
      petSex: "*required",
      phoneNumber: {
        required: "*required",
        minlength: "Please provide your phone number with area code",
        maxlength: "Please dont use spaces or dashes (1234567890)"
      }
    },
  });
  if (form.valid() == true) {
  current_fs = $(this).parent();
  next_fs = $(this)
    .parent()
    .next();

  //activate next step on progressbar using the index of next_fs
  $(".progressbar li")
    .eq($("fieldset").index(next_fs))
    .addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function (now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = now * 50 + "%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        transform: "scale(" + scale + ")",
        position: "absolute"
      });
      next_fs.css({
        left: left,
        opacity: opacity
      });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: "easeInOutBack"
  });
  }
  else{console.log('not valid')}
});
// Function when previous button is clicked
$(".previous").click(function() {
  $(".checked").each(function(i, obj) {
    totalPrice = totalPrice - obj.value;
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).removeClass("checked");
  });
  $(".chosen").each(function(i, obj) {
    totalPrice = totalPrice - obj.name;
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).removeClass("chosen");
  });

  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this)
    .parent()
    .prev();

  //de-activate current step on progressbar
  $(".progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    {
      opacity: 0
    },
    {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          left: left
        });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack"
    }
  );
});
// Functoin when existing customer button is pressed
$(".exCust").click(function() {
  current_fs = $(this).parent();
  next_fs = $(this)
    .parent()
    .next();
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    {
      opacity: 0
    },
    {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute"
        });
        next_fs.css({
          left: left,
          opacity: opacity
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack"
    }
  );
});
// Function when add pet button is clicked
$("#addPet").click(function() {
  $("#2ndPet").toggle("blind");
  $("#2ndPetInfo").toggle();
  if ($("#addPet").val() == "Add Pet") {
    $("#addPet").val("Remove Pet");
  } else {
    $("#addPet").val("Add Pet");
  }
});
// Function when validation shoud be showed
$("#finalNext").click(function() {
  // Display owners information
  $("#v_firstName").text($("input[name=firstName]").val());
  $("#v_lastName").text($("input[name=lastName]").val());
  $("#v_email").text($("input[name=email]").val());
  $("#v_phoneNumber").text($("input[name=phoneNumber]").val());
  // Display Pet's Information
  $("#v_petName").text($("input[name=petName]").val());
  $("#v_petBreed").text($("#petBreed option:selected").text());
  $("#v_petWeight").text($("input[name=petWeight]").val());
  $("#v_petAge").text($("#petAge option:selected").val());
  $("#v_petSex").text($("#petSex option:selected").val());
  // 2nd pet information
  $("#v_petName1").text($("input[name=petName1]").val());
  $("#v_petBreed1").text($("#petBreed1 option:selected").val());
  $("#v_petWeight1").text($("input[name=petWeight1]").val());
  $("#v_petAge1").text($("#petAge1 option:selected").val());
  $("#v_petSex1").text($("#petSex1 option:selected").val());
  // Display Medical Problems
  $("#v_petAllergies").text($("textarea[name=petAllergies]").val());
  $("#v_petSickness").text($("textarea[name=petSickness]").val());
  // Display Other Comments
  $("#v_petOther").text($("textarea[name=petOther]").val());
});
//Function when service button is clicked
$(".serviceButton").click(function() {
  if ($(this).val() == "Spa") {
    choosenService = $(this).val();
    totalPrice = Number(totalPrice) + Number(this.name);
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).addClass("chosen");
    $("#serviceType").text("Spa");
    $("#serviceDes").text(
      "Our Spa service includes a bath with a flavored shampoo. Your pet will be dryed using towels and fluff air dryer with no heating element. We will also provide eye and ear cleaning, fresh breath spray, nail clipping/grinding and brush out."
    );
    $(".extraServices").html(
      '<table> <tr><td class="serviceCheckBox"><input type="checkbox" id="condTreat" name="Conditioner Treatment" value="4"/><label for="condTreat"></label></td><td>Conditioner Treatment</td><td class="extraServicePrice">$4</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="analGlands" name="Anal Glands" value="6"/><label for="analGlands"></label></td><td>Anal Glands</td><td class="extraServicePrice">$6</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blueFacial" name="Blueberry Facial" value="5"/><label for="blueFacial"></label></td><td>Blueberry Facial</td><td class="extraServicePrice">$5</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="dishShampoo" name="Dishading Shampoo" value="10"/><label for="dishShampoo"></label></td><td>Dishading Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="defleaShampoo" name="Deflea Shampoo" value="10"/><label for="defleaShampoo"></label></td><td>Deflea Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="whiteShampoo" name="White Shampoo" value="3"/><label for="whiteShampoo"></label></td><td>Whitening Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blackShampoo" name="Black Shampoo" value="3"/><label for="blackShampoo"></label></td><td>Black Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="medShampoo" name="Medical Shampoo" value="0"/><label for="medShampoo"></label></td><td>Medical Shampoo</td><td class="extraServicePrice">Free</td></tr></table>'
    );
  } else if ($(this).val() == "Deluxe Spa") {
    choosenService = $(this).val();
    totalPrice = Number(totalPrice) + Number(this.name);
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).addClass("chosen");
    $("#serviceType").text("Deluxe Spa");
    $("#serviceDes").text(
      "Our Deluxe Spa service includes a bath with a flavored shampoo. While your pet is in bath, we will do an anal glands, facial bluebbery treatment and conditioner treatment, which will keep your pet fresh and clean. Your pet will be dryed using towels and fluff air dryer with no heating element. We will also provide eye and ear cleaning, fresh breath spray, nail clipping/grinding and brush out."
    );
    $(".extraServices").html(
      '<table><tr><td class="serviceCheckBox"><input type="checkbox" id="dishShampoo" name="Dishading Shampoo" value="10"/><label for="dishShampoo"></label></td><td>Dishading Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="defleaShampoo" name="Deflea Shampoo" value="10"/><label for="defleaShampoo"></label></td><td>Deflea Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="whiteShampoo" name="White Shampoo" value="3"/><label for="whiteShampoo"></label></td><td>Whitening Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blackShampoo" name="Black Shampoo" value="3"/><label for="blackShampoo"></label></td><td>Black Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="medShampoo" name="Medical Shampoo" value="0"/><label for="medShampoo"></label></td><td>Medical Shampoo</td><td class="extraServicePrice">Free</td></tr></table>'
    );
  } else if ($(this).val() == "Mini") {
    choosenService = $(this).val();
    totalPrice = Number(totalPrice) + Number(this.name);
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).addClass("chosen");
    $("#serviceType").text("Mini");
    $("#serviceDes").text(
      "Our Mini Groom service includes a bath with a flavored shampoo. Your pet will be dryed using towels and fluff air dryer with no heating element. We will also provide eye and ear cleaning, fresh breath spray, nail clipping/grinding and brush out. Our experianced groomer will shave the paw pads and perform a haircut around the face."
    );
    $(".extraServices").html(
      '<table> <tr><td class="serviceCheckBox"><input type="checkbox" id="condTreat" name="Conditioner Treatment" value="4"/><label for="condTreat"></label></td><td>Conditioner Treatment</td><td class="extraServicePrice">$4</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="analGlands" name="Anal Glands" value="6"/><label for="analGlands"></label></td><td>Anal Glands</td><td class="extraServicePrice">$6</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blueFacial" name="Blueberry Facial" value="5"/><label for="blueFacial"></label></td><td>Blueberry Facial</td><td class="extraServicePrice">$5</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="dishShampoo" name="Dishading Shampoo" value="10"/><label for="dishShampoo"></label></td><td>Dishading Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="defleaShampoo" name="Deflea Shampoo" value="10"/><label for="defleaShampoo"></label></td><td>Deflea Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="whiteShampoo" name="White Shampoo" value="3"/><label for="whiteShampoo"></label></td><td>Whitening Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blackShampoo" name="Black Shampoo" value="3"/><label for="blackShampoo"></label></td><td>Black Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="medShampoo" name="Medical Shampoo" value="0"/><label for="medShampoo"></label></td><td>Medical Shampoo</td><td class="extraServicePrice">Free</td></tr></table>'
    );
  } else if ($(this).val() == "Deluxe Mini") {
    choosenService = $(this).val();
    totalPrice = Number(totalPrice) + Number(this.name);
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).addClass("chosen");
    $("#serviceType").text("Deluxe mini");
    $("#serviceDes").text(
      "Our Deluxe Mini Groom service includes a bath with a flavored shampoo. While your pet is in bath, we will do an anal glands, facial bluebbery treatment and conditioner treatment, which will keep your pet fresh and clean. Your pet will be dryed using towels and fluff air dryer with no heating element. We will also provide eye and ear cleaning, fresh breath spray, nail clipping/grinding and brush out. Our experianced groomer will shave the paw pads and perform a haircut around the face."
    );
    $(".extraServices").html(
      '<table><tr><td class="serviceCheckBox"><input type="checkbox" id="dishShampoo" name="Dishading Shampoo" value="10"/><label for="dishShampoo"></label></td><td>Dishading Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="defleaShampoo" name="Deflea Shampoo" value="10"/><label for="defleaShampoo"></label></td><td>Deflea Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="whiteShampoo" name="White Shampoo" value="3"/><label for="whiteShampoo"></label></td><td>Whitening Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blackShampoo" name="Black Shampoo" value="3"/><label for="blackShampoo"></label></td><td>Black Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="medShampoo" name="Medical Shampoo" value="0"/><label for="medShampoo"></label></td><td>Medical Shampoo</td><td class="extraServicePrice">Free</td></tr></table>'
    );
  } else if ($(this).val() == "Full") {
    choosenService = $(this).val();
    totalPrice = Number(totalPrice) + Number(this.name);
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).addClass("chosen");
    $("#serviceType").text("Full");
    $("#serviceDes").text(
      "Our Full Groom service includes a bath with a flavored shampoo. Your pet will be dryed using towels and fluff air dryer with no heating element. We will also provide eye and ear cleaning, fresh breath spray, nail clipping/grinding and brush out. Our experianced groomer will perform a full haircut."
    );
    $(".extraServices").html(
      '<table> <tr><td class="serviceCheckBox"><input type="checkbox" id="condTreat" name="Conditioner Treatment" value="4"/><label for="condTreat"></label></td><td>Conditioner Treatment</td><td class="extraServicePrice">$4</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="analGlands" name="Anal Glands" value="6"/><label for="analGlands"></label></td><td>Anal Glands</td><td class="extraServicePrice">$6</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blueFacial" name="Blueberry Facial" value="5"/><label for="blueFacial"></label></td><td>Blueberry Facial</td><td class="extraServicePrice">$5</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="dishShampoo" name="Dishading Shampoo" value="10"/><label for="dishShampoo"></label></td><td>Dishading Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="defleaShampoo" name="Deflea Shampoo" value="10"/><label for="defleaShampoo"></label></td><td>Deflea Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="whiteShampoo" name="White Shampoo" value="3"/><label for="whiteShampoo"></label></td><td>Whitening Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blackShampoo" name="Black Shampoo" value="3"/><label for="blackShampoo"></label></td><td>Black Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="medShampoo" name="Medical Shampoo" value="0"/><label for="medShampoo"></label></td><td>Medical Shampoo</td><td class="extraServicePrice">Free</td></tr></table>'
    );
  } else if ($(this).val() == "Deluxe Full") {
    choosenService = $(this).val();
    totalPrice = Number(totalPrice) + Number(this.name);
    $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    $(this).addClass("chosen");
    $("#serviceType").text("Deluxe Full");
    $("#serviceDes").text(
      "Our Deluxe Full Groom service includes a bath with a flavored shampoo. While your pet is in bath, we will do an anal glands, facial bluebbery treatment and conditioner treatment, which will keep your pet fresh and clean. Your pet will be dryed using towels and fluff air dryer with no heating element. We will also provide eye and ear cleaning, fresh breath spray, nail clipping/grinding and brush out. Our experianced groomer will perform a full haircut."
    );
    $(".extraServices").html(
      '<table><tr><td class="serviceCheckBox"><input type="checkbox" id="dishShampoo" name="Dishading Shampoo" value="10"/><label for="dishShampoo"></label></td><td>Dishading Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="defleaShampoo" name="Deflea Shampoo" value="10"/><label for="defleaShampoo"></label></td><td>Deflea Shampoo</td><td class="extraServicePrice">$10</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="whiteShampoo" name="White Shampoo" value="3"/><label for="whiteShampoo"></label></td><td>Whitening Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="blackShampoo" name="Black Shampoo" value="3"/><label for="blackShampoo"></label></td><td>Black Shampoo</td><td class="extraServicePrice">$3</td></tr><tr><td class="serviceCheckBox"><input type="checkbox" id="medShampoo" name="Medical Shampoo" value="0"/><label for="medShampoo"></label></td><td>Medical Shampoo</td><td class="extraServicePrice">Free</td></tr></table>'
    );
  } else if ($(this).val() == "Other") {
    choosenService = $(this).val();
    $(this).addClass("chosen");
    $("#serviceType").text("Other");
    $("#serviceDes").text(
      "Here we will have the services that customer wants to do without bathing a pet. Such as: nail cut, etc."
    );
  }
  $("input[type=checkbox]").change(function() {
    if ($(this).is(":checked")) {
      $(this).addClass("checked");
      totalPrice = Number(totalPrice) + Number(this.value);
      $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    } else if (!$(this).is(":checked")) {
      $(this).removeClass("checked");
      totalPrice = Number(totalPrice) - Number(this.value);
      $("#totalPrice").html("<h3>Est. total price: $" + totalPrice + "</h3>");
    }
  });
});
// Create drop down with dog breeds
$.each(dogBreeds, function(key, value) {
  $(".petBreed").append(
    $("<option>", {
      value: value
    }).text(key.replace(/_/g, " "))
  );
});
// Function to find customer by phone number
$("#formPhoneSearch").submit(function(event) {
  event.preventDefault();
  searchPhone = $("input[name=searchPhone]").val().toUpperCase();
  if (searchPhone == "") {
    $("#showErrorMessage").text("Please enter your phone number.");
  } else {
    findUsersMatchingPhone(searchPhone);
  }
});
// When customer form is submited
$("#customerForm").submit(function(event) {
  event.preventDefault();
  // get Values
  // Owner's information
  var firstName = $("input[name=firstName]").val().toUpperCase();
  var lastName = $("input[name=lastName]").val().toUpperCase();
  var email = $("input[name=email]").val().toUpperCase();
  var phoneNumber = $("input[name=phoneNumber]").val().toUpperCase();
  // Pet'sInformation
  var petName = $("input[name=petName]").val().toUpperCase();
  var petBreed = $("#petBreed option:selected").text().toUpperCase();
  var petPrice = $("#petBreed option:selected").val().toUpperCase();
  var petWeight = $("input[name=petWeight]").val().toUpperCase();
  var petAge = $("#petAge option:selected").val().toUpperCase();
  var petSex = $("#petSex option:selected").val().toUpperCase();
  //Medical Problems
  var petAllergies = $("textarea[name=petAllergies]").val().toUpperCase();
  var petSickness = $("textarea[name=petSickness]").val().toUpperCase();
  //Other Comments
  var other = $("textarea[name=petOther]").val().toUpperCase();

  saveCustomer(
    firstName,
    lastName,
    email,
    phoneNumber,
    petName,
    petBreed,
    petPrice,
    petWeight,
    petAge,
    petSex,
    petAllergies,
    petSickness,
    other,
    date
  );
  $("#verifyField").hide();
  $("#verification").show();
  $("#verifyTitle").text("Thank you " + firstName);
  $("#verifyDesc").text("Please continue to choose a service for " + petName);
  setTimeout(function() {
    window.location.replace("index.html");
  }, 5000);
});
// Remove all checkboxes when previous button pressed
$("#removeCheckBoxes").click(function() {
  if ($("input[type=checkbox]").is(":checked")) {
    $("input[type=checkbox]").prop("checked", false);
  }
});
// Find customer by matching phone number
function findUsersMatchingPhone() {
  customersRef
    .orderByChild("phoneNumber")
    .equalTo(searchPhone)
    .on("value", function(snap) {
      if (!snap.val()) {
        $("#showErrorMessage").text(
          $("input[name=searchPhone]").val() +
            " was not found, please try again."
        );
        $("input[name=searchNumber]").val("");
      } else {
        snap.forEach(function(childSnapshot) {
          exCustomerKey = childSnapshot.key;
          var custEmail = childSnapshot.val().email;
          var custFN = childSnapshot.val().firstName;
          var custLN = childSnapshot.val().lastName;
          var custPN = childSnapshot.val().phoneNumber;
          custPetName = childSnapshot.val().petName;
          var custPetBreed = childSnapshot.val().petBreed;
          totalPrice = childSnapshot.val().petPrice;
          var custPetAge = childSnapshot.val().petAge;
          var custPetWeight = childSnapshot.val().petWeight;
          var custPetSex = childSnapshot.val().petSex;
          var custPetAllergies = childSnapshot.val().petAllergies;
          var custPetSickness = childSnapshot.val().petSickness;
          var custOther = childSnapshot.val().other;
          $("#testID").html(
            "<h2 class='fs-title'>Hi " +
              custFN +
              " " +
              custLN +
              "</h2><h3 class='fs-subtitle'>We are happy to see you and " +
              custPetName +
              " in our grooming. Please press continue to choose services you would like to use today.</h3><a href='index.html'><input style='width: 40%' type='button' name='home' class='action-button' value='Home' /></a><input style='width: 40%' type='button' id='continue' class='action-button' value='Continue' />"
          );
          $("#continue").click(function() {
            $("#formPhoneSearch").html("");
            $("#serviceForm").toggle("slide");
          });
        });
      }
    });
}
// save customer to firebase.customers
function saveCustomer(
  firstName,
  lastName,
  email,
  phoneNumber,
  petName,
  petBreed,
  petPrice,
  petWeight,
  petAge,
  petSex,
  petAllergies,
  petSickness,
  other,
  date
) {
  var newCustomersRef = customersRef.push();
  newCustomersRef.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    petName: petName,
    petPhoto: 'https://image.ibb.co/cEEsjf/1542565176029.jpg',
    petBreed: petBreed,
    petPrice: petPrice,
    petWeight: petWeight,
    petAge: petAge,
    petSex: petSex,
    petAllergies: petAllergies,
    petSickness: petSickness,
    other: other,
    date:date
  });
}

function saveServiceRecord(choosenService, totalPrice, date, checked) {
  var newServiceRecordRef = firebase.database().ref("serviceRecord").push();
  newServiceRecordRef.set({
    customerKey: exCustomerKey,
    date: date,
    totalPrice: totalPrice,
    choosenService: choosenService,
    checked: checked,
    groomerName: "no groomer selected",
    groomerNotes: "No groomer notes"
  });
    firebase.database().ref("customers/" + exCustomerKey).update({ date: date });
}

$('input[name="submitService"]').click(function() {
  event.preventDefault();
  $(".checked").each(function() {
    checked += this.name + ", ";
  });
  $("#serviceType").text("Thank you");
  $("#serviceDes").text(
    "We received your application and will contact you when " +
      custPetName +
      " is ready. Your estemated total price is $" +
      totalPrice +
      "."
  );
  $(".extraServices").html("");
  $(".action-button").hide();
  saveServiceRecord(choosenService, totalPrice, date, checked);
  setTimeout(function() {
    window.location.replace("index.html");
  }, 10000);
});
