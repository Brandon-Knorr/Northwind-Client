document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  document.getElementById('greeting').addEventListener("animationstart", function(e){
    e.target.classList.remove("animate__heartBeat");
    const classArray = ["animate__flash", "animate__rubberBand", "animate__wobble", "animate__bounce", "animate__heartBeat", "animate__shakeX"];
    const randomClass = Math.floor(Math.random() * classArray.length);
    if (e.target.classList.contains("animate__animated")) {
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

  document.getElementById('submit').addEventListener('click', function(e){
      const checkboxes = document.querySelectorAll('input[name=checkbox-balloon]:checked');
      if (checkboxes.length === 0) {
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        return false;
      }
      return true;
  });


  document.getElementById('selectAll').addEventListener('click', function(e){
    console.log("select clicked");
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

      checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
        toggleAnimations(checkbox);
      });
    }
  );


  function toggleAnimations(e) {
    const elem = document.getElementById(e.id + 'Img');
    if (!elem) return;

    elem.style.visibility = "visible";
    elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");

    if (e.checked){
      elem.classList.add("animate__animated", "animate__bounceInDown");
    } else {
      elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  };

}); 

