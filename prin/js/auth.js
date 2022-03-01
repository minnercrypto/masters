function observador(){
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Existe usuario activo');
    // Navbar
    var itemsNavbar = document.getElementById('items-nav');
    itemsNavbar.innerHTML = `<li class="nav-item dropdown dropdown-hover mx-2">
    <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ver Planes" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
      Planes
    </a>
  </li>
  <li class="nav-item ms-lg-auto">
    <a class="nav-link nav-link-icon me-2" onclick="logout()" href="">
      <i class=""></i>
      <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="logout">Cerrar Sesión</p>
    </a>
  </li>
  <li class="nav-item my-auto ms-3 ms-lg-0">
    <a href="./dash/dashboard.html" class="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0">Dashboard</a>
  </li>`;
    var itemsNavbar = document.getElementById('signupModal');
    itemsNavbar.innerHTML = `
    <div></div>
    `;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(user);
  } else {
    // User is signed out
    console.log('No existe usuario activo');
    // ...
  }
});
}
observador();

async function logout(){
  return await firebase.auth().signOut()
  .then(function(){
    location = '#'
    console.log('Saliendo...')
  })
  .catch(function(error){
    console.log(error)
  });
}

async function setupUI(user) {
  if (user) {
    if (user.admin) {
      adminItems.forEach(el => (el.style.display = "block"));
    }
    const userCollection = (await db
      .collection("users")
      .doc(user.uid)
      .get()).data();

    const html = `
      
      `;

    accountDetails.innerHTML = html;
    loggedInMenu.forEach(menu => (menu.style.display = "block"));
    loggedOutMenu.forEach(menu => (menu.style.display = "none"));
  } else {
    quotesUl.innerHTML += "<h3 class='center-align'>Please, login to enjoy our quotes!</h3>";
    loggedInMenu.forEach(menu => (menu.style.display = "none"));
    loggedOutMenu.forEach(menu => (menu.style.display = "block"));
    adminItems.forEach(el => (el.style.display = "none"));
  }
}