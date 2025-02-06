document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
      if (e.target.classList.contains('discount')) {
        e.preventDefault();
        document.getElementById('product').innerHTML = e.target.dataset['product'];
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
      if (e.target.classList.contains('discount')) {
        e.preventDefault();
        document.getElementById('discount-title').innerHTML = e.target.dataset['title'];
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
      }
    });
  }); 

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
      if (e.target.classList.contains('discount')) {
        e.preventDefault();
        document.getElementById('code').innerText = e.target.dataset['code'];
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
      }
    });
  }); 