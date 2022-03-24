$("#userForm").submit((e) => {
  //   console.log(data);
  console.log($("#userForm").serializeArray());
  e.preventDefault();
  $(".modal").show();
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
// Submit form with name function.
function closeModal() {
  $(".modal").hide();
}

function submit_by_name() {
  const firstName1 = $.get("#fname").value;
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const phoneNumber = document.getElementById("pnumber").value;
  const userEmail = document.getElementById("email").value;
  const companyName = document.getElementById("cname").value;
  const userMessage = document.getElementById("message").value;
  const checkPhone = document.getElementById("option1").value;
  const checkEmail = document.getElementById("option2").value;
  const emailReg = "/^([w-.]+@([w-]+.)+[w-]{2,4})?$/";

  if (fname === "" || option2 === "") {
    alert("Please fill all fields!");
    return false;
  } else if (validateEmail(userEmail)) {
    alert("Please use a valid email address.");
    return false;
  } else {
    return true;
  }
}
// var x = document.getElementsByName('contactForm');
// x[0].submit(); // Form submission

// if (validation()) {
//   // Calling validation function
//   var x = document.getElementsByName(".contactForm");
//   x[0].submit(); //form submission
//   alert(
//     " Name : " +
//       name +
//       " n Email : " +
//       email +
//       " n Form Name : " +
//       document.getElementById(".contactForm").getAttribute("name") +
//       "nn Form Submitted Successfully......"
//   );
// }
