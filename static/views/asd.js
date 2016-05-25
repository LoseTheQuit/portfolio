  function sideBarResize() {


      if (($(window).width() + 17) > 1200) {

          console.log('DO ACTION A - Align the sidebar to the right of the content - sticky');

      } else {


          $(window).scroll(function () {



              if (!($('.navbar-toggle').hasClass('collapsed'))) {
                  console.log('DO ACTION B - close the sidebar and turn it into a button');

              } else {
                  console.log('DO ACTION C - open the side bar and remove the button');
              }

          });

      }
  }

  $(window).resize(function () {
      sideBarResize();
  });