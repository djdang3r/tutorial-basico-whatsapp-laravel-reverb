$(".toast-close").on('click', function () {
  toastclose();
});

const toastclose = () => {
  $(".app-toast").addClass('d-block');
}

const handleToast = (ele) => {
  $("." + ele.id).removeClass('d-none');
  console.log(ele)
  setTimeout(function () {
      $("." + ele.id).addClass("d-none");
  }, 5000);
}

//  **------close-button**
document.getElementById("toastbtn").onclick = function() {
  var toastElList = [].slice.call(document.querySelectorAll('.toastbtn'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show()) 
}

  document.getElementById("new-toast").addEventListener("click", function() {
      Toastify({
        text: "Welcome Back ! This is a Toast Notification",
        duration: 3000,
        position: "center",
        style: {
          background: "rgb(var(--primary),1)",
        }
      }).showToast();
 
    });

    document.getElementById("left-toast").addEventListener("click", function() {
      Toastify({
        text: "Welcome Back ! This is a Toast Notification",
        duration: 3000,
        position: "leftToast",
        style: {
          background: "rgb(var(--success),1)",
        }
      }).showToast();

    });

    document.getElementById("right-toast").addEventListener("click", function() {
      Toastify({
        text: "Welcome Back ! This is a Toast Notification",
        duration: 3000,
        position: "right",
        style: {
          background: "rgb(var(--info),1)",
        }
      }).showToast();
  
    });

    document.getElementById("bottom-toast").addEventListener("click", function() {
      Toastify({
        text: "Welcome Back ! This is a Toast Notification",
        duration: 3000,
        gravity: "bottom",
        position: "bottom",
        style: {
          background: "rgb(var(--warning),1)",
        }
      }).showToast();

    });

    document.getElementById("center-toast").addEventListener("click", function() {
      Toastify({
        text: "Welcome Back ! This is a Toast Notification",
        duration: 3000,
        gravity: "centerToast",
        position: "center",
        style: {
          background: "rgb(var(--secondary),1)",
        }
      }).showToast();

    });