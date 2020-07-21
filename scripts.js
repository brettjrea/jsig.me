///quad button
function myFunction(x) {
  x.classList.toggle("change");
};

///drawer
$(".drawer-toggle").click(function (e) {
  $(".drawer").toggleClass("active");
  e.preventDefault();
});
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    $(".drawer").toggleClass("active");
  }
};

///accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

///parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  invertX: false,
  invertY: false,
  frictionX: .04,
  frictionY: .04,
});

(function () {

  var img = document.getElementById('container').firstChild;
  img.onload = function () {
    if (img.height > img.width) {
      img.height = '100%';
      img.width = 'auto';
    }
  };

}());
