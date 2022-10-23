   function openNav() {
       document.getElementById("mySidenav").style.left = "0px";
       document.getElementById("mySidenav").style.zIndex = "100";





   }

   function closeNav() {
       document.getElementById("mySidenav").style.left = "-255px";
       document.getElementById("mySidenav").style.zIndex = "0";
       // document.getElementsByClassName("block").style.zIndex = "0";


   }


//    const btn =;
   const sidebar = document.getElementById("test");

   btn.addEventListener('click', () => {
       sidebar-focus.classList.toggle('test')
   })