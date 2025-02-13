document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  document.getElementById('greeting').addEventListener("animationstart", function(e){
    console.log("Hey man it worked");
    e.target.classList.remove("animate__heartBeat");
    console.log("Hey man that worked");
    const classArray = ["animate__flash", "animate__rubberBand", "animate__wobble", "animate__bounce", "animate__heartBeat", "animate__shakeX"];
    console.log(classArray);
    const randomClass = Math.floor(Math.random() * classArray.length);
    console.log(randomClass, classArray[randomClass]);
    if (e.target.classList.contains("animate__animated")) {
      console.log("hell yes it does");
      e.target.classList.add(classArray[randomClass]);
    }
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
});