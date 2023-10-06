MyApp = {
  loadingPrincipal: {
    init: function () {
      setTimeout(() => {
        document.querySelector(".loading").classList.add("active");
        setTimeout(() => {
          document.querySelector(".loading").classList.add("ocultar");
        }, 1500);
      }, 500);
    }
  },
  fondoHomeSticky: {
    init: function () {
      $("section.home .fondo").stick_in_parent({
        offset_top: 0,
        offset_right: 52,
      });
    }
  },
  swiperNegocios: {
    init: function () {
      var swiper = new Swiper(".swiperNegocios", {
        slidesPerView: 4.29,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
      });
    }
  },
  imgStickyProyectoInterna: {
    init: function () {
      $(".proyectosInterna .part2 .img").stick_in_parent({
        offset_top: 0,
        offset_right: 52,
      });
    }
  },
  menuDinamico: {
    init: function () {
      var header = document.querySelector('header');
      var headerClass = 'hLTFFw';
      var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      function handleScroll() {
        var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        var isAtTop = currentScrollPos === 0;
        var isScrollingUp = prevScrollPos > currentScrollPos;

        if (isAtTop) {
          headerClass = 'hLTFFw';
        } else if (isScrollingUp) {
          headerClass = 'leoCdG';
        } else {
          headerClass = 'bVLcxx';
        }

        header.className = headerClass;
        prevScrollPos = currentScrollPos;
      }

      window.addEventListener('scroll', handleScroll);
    }
  },
  categorias: {
    init: function () {
      document.querySelector(".categorias li").classList.add("select");
      let listaTitle = [];
      const enlaces = document.querySelectorAll('.categorias li');//original
      for (let i = 0; i < enlaces.length; i++) {
        textoitem = enlaces[i].textContent.toLowerCase().replace(/(\r\n|\n|\r| )/gm, "").trimStart().trimEnd();
        listaTitle.push(textoitem);
      }

      $('.itemArticulo').hide();
      const categoryMainoff = document.querySelector('.categorias li.select')
      const categoryMain = categoryMainoff.getAttribute("data-categoria");
      if (categoryMain === "Todos") {
        $(`.itemArticulo.modulo-mas`).hide();
        $(`.itemArticulo.modulo-mas`).slice(0, 6).show(0);
        conditionTodos = $(`.itemArticulo.modulo-mas`);
        $("#cargarMasModulo").attr("style", "display:flex;");
        if (conditionTodos.length <= 6) {
          $("#cargarMasModulo").attr("style", "display:none;");
        } else {
          $("#cargarMasModulo").attr("style", "display:flex;");
        }
      } else {
        $(`.itemArticulo.modulo-mas[data-categoria="${categoryMain}"]`).slice(0, 6).show(0);
      }

      enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
          evento.preventDefault();
          enlaces.forEach((enlace) => enlace.classList.remove('select'));
          evento.target.classList.add('select');
          var categoria = evento.target.getAttribute("data-categoria");
          $("#cargarMasModulo").attr("style", "display:flex;");
          if (categoria === "Todos") {
            $(`.itemArticulo.modulo-mas`).hide();
            $(`.itemArticulo.modulo-mas`).slice(0, 6).show(0);
            conditionTodos = $(`.itemArticulo.modulo-mas`);
            if (conditionTodos.length <= 6) {
              $("#cargarMasModulo").attr("style", "display:none;");
            } else {
              $("#cargarMasModulo").attr("style", "display:flex;");
            }
          } else {
            $(`.itemArticulo`).not(`[data-categoria="${categoria}"]`).hide();
            $(`.itemArticulo.modulo-mas[data-categoria="${categoria}"]`).slice(0, 6).show(0);
            condition6 = $(`.itemArticulo.modulo-mas[data-categoria="${categoria}"]`);
            if (condition6.length <= 6) {
              $("#cargarMasModulo").attr("style", "display:none;");
            } else {
              $("#cargarMasModulo").attr("style", "display:flex;");
            }
          }
        });
      });

      var nameCategory = $(`.itemArticulo[data-categoria="${categoryMain}"]`).attr("data-categoria");
      var select = $(`#categoryPortfolio`)
      $("#categoryPortfolio").val(`${nameCategory}`)

      if (categoryMain === "Todos") {
        condition6 = $(`.itemArticulo.modulo-mas`);
        if (condition6.length <= 6) {
          $("#cargarMasModulo").attr("style", "display:none;");
        } else {
          $("#cargarMasModulo").attr("style", "display:flex;");
        }
      } else {
        condition6 = $(`.itemArticulo.modulo-mas[data-categoria="${categoryMain}"]`);
        if (condition6.length <= 6) {
          $("#cargarMasModulo").attr("style", "display:none;");
        } else {
          $("#cargarMasModulo").attr("style", "display:flex;");
        }
      }


      $("#cargarMasModulo").click(function (e) {
        e.preventDefault();
        const categoryMain2 = document.querySelector('.categorias li.select').getAttribute("data-categoria");
        if (categoryMain2 === "Todos") {
          $(`.modulo-mas:hidden`).slice(0, 6).slideDown(0);
          if ($(`.modulo-mas:hidden`).length == 0) {
            $("#cargarMasModulo").attr("style", "display:none;");
          }
        } else {
          $(`.modulo-mas[data-categoria="${categoryMain2}"]:hidden`).slice(0, 6).slideDown(0);
          if ($(`.modulo-mas[data-categoria="${categoryMain2}"]:hidden`).length == 0) {
            $("#cargarMasModulo").attr("style", "display:none;");
          }
        }
      });

    }
  },
  sliderBlog: {
    init: function () {
      var swiper = new Swiper(".sliderNoticias", {
        slidesPerView: 3.3,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: ".noticiasRelacionadas .flechas .swiper-button-next",
          prevEl: ".noticiasRelacionadas .flechas .swiper-button-prev",
        },
      });
    }
  },
  tabsOficina: {
    init: function () {

      document.querySelector(".cabecera").closest(".itemTab").classList.add("open");
      const cabeceras = document.querySelectorAll('.cabecera');

      cabeceras.forEach(cabecera => {
        cabecera.addEventListener('click', () => {
          const itemTabs = document.querySelectorAll('.itemTab');
          itemTabs.forEach(itemTab => {
            itemTab.classList.remove('open');
          });
          cabecera.parentElement.classList.add('open');
        })
      });

      $(".oficinas .part1 .img").stick_in_parent({
        offset_top: 0,
        offset_right: 52,
      });

    }
  },
  validate: {
    init: function () {
      $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });
      var formespacioinput = document.querySelectorAll('.form-input.required');
      var inputPoliticas = document.querySelector('input#politicas');

      function validateInput(e) {
        for (let y = 0; y < formespacioinput.length; y++) {
          if (!formespacioinput[y].value) {
            formespacioinput[y].classList.add("error");
            e.preventDefault();
          } else {
            formespacioinput[y].classList.remove("error");
          }
        }
      }

      function validateInputCorreo(e) {
        var inputCorreo = document.querySelector('input[type=email]');
        var valueCorreo = inputCorreo.value;
        if (valueCorreo.includes("@") && (valueCorreo.includes(".com") || valueCorreo.includes(".pe") || valueCorreo.includes(".gob") || valueCorreo.includes(".net") || valueCorreo.includes(".org") || valueCorreo.includes(".edu") || valueCorreo.includes(".gov") || valueCorreo.includes(".mil"))) {
          inputCorreo.classList.remove("error");
        } else {
          inputCorreo.classList.add("error");
          e.preventDefault();
        }
      }

      function validateInputPoliticas(e) {
        if (!inputPoliticas.ckecked) {
          inputPoliticas.classList.add("error");
        }else{
          inputPoliticas.classList.remove("error"); 
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest("form button")) {
          validateInput(e)
          validateInputCorreo(e)
          validateInputPoliticas(e)
        }
      })
    }
  }
}

if ($('body.page-home').length > 0) {
  MyApp.menuDinamico.init();
}


if ($('.loading').length > 0) {
  MyApp.loadingPrincipal.init();
}

if ($('section.home .fondo').length > 0) {
  MyApp.fondoHomeSticky.init();
}

if ($('.swiperNegocios').length > 0) {
  MyApp.swiperNegocios.init();
}

if ($('.proyectosInterna .part2 .img').length > 0) {
  MyApp.imgStickyProyectoInterna.init();
}

if ($('.listaBlog .categorias').length > 0) {
  MyApp.categorias.init();
}

if ($('.noticiasRelacionadas').length > 0) {
  MyApp.sliderBlog.init();
}

if ($('.oficinas .contentTads').length > 0) {
  MyApp.tabsOficina.init();
}

if ($('.formulario').length > 0) {
  MyApp.validate.init();
}









