function aafw_open() {
  document.getElementById("main").style.marginLeft = "50%";
  document.getElementById("mySidebar").style.width = "50%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
  }

  function aafw_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  }