var instances
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  instances = M.Sidenav.init(elems, "edge");

  if (window.location.hash == "") loadpage()
});

const loadpage = () => {
  let page = window.location.hash.substr(1)
  if (page == "") page = "home"
  let  url = window.location.origin + "/pages/" + page + ".html"

  fetch(url).then(res => res.text()
  .then(data => document.getElementById('content').innerHTML = data)
  );
  if (instances[0].isOpen) instances[0].close()
};
