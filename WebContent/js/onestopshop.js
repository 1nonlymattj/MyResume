$(function() {
   $("#foot-placeholder").load("footer.html");
});

function showITResumes() {
   var x = document.getElementById("ITResumes");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}