MyApp = {
  loadingPrincipal: {
    init: function () {
      document.querySelector("body").classList.add("scrollHidden");
      setTimeout(() => {
        document.querySelector(".loading").classList.add("active");
        setTimeout(() => {
          document.querySelector(".loading").classList.add("ocultar");
          setTimeout(() => {
            document.querySelector("body").classList.remove("scrollHidden");
          }, 1500);
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

      /* gsap para la animacion */

      var content = document.querySelector("section.home");
      var imgElement = document.querySelector(".animacion");

      var sticky = gsap.timeline({
        scrollTrigger: {
          //markers: true,
          trigger: content,
          start: '0% 0%',
          end: '80% 50%',
          scrub: true,
        },
      });
      sticky.to(imgElement, { "clip-path": "inset(0%)" })

    }
  },
  swiperNegocios: {
    init: function () {
      var swiper = new Swiper(".swiperNegocios", {
        slidesPerView: 4.29,
        spaceBetween: 30,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiperNegocios .swiper-pagination",
          dynamicBullets: true,
        },
        loop: true,
        breakpoints: {
          1601: {
            slidesPerView: 4.29,
          },
          1441: {
            slidesPerView: 3.5,
          },
          1281: {
            slidesPerView: 3.12,
          },
          1025: {
            slidesPerView: 2.6,
          },
          851: {
            slidesPerView: 2.4,
            spaceBetween: 30,
          },
          769: {
            slidesPerView: 2.15,
            spaceBetween: 30,
          },
          651: {
            slidesPerView: 1.9,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 1.6,
            spaceBetween: 30,
          },
          381: {
            slidesPerView: 1.38,
            spaceBetween: 25,
          },
          0: {
            slidesPerView: 1.07,
            spaceBetween: 25,
          },
        },
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
            $(`.itemArticulo`).hide();
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
        pagination: {
          el: ".noticiasRelacionadas .swiper-pagination",
          dynamicBullets: true,
        },
        breakpoints: {
          1441: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
          1281: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1180: {
            slidesPerView: 2.9,
            spaceBetween: 25,
          },
          1025: {
            slidesPerView: 2.6,
            spaceBetween: 25,
          },
          851: {
            slidesPerView: 2.48,
            spaceBetween: 25,
          },
          769: {
            slidesPerView: 2.2,
            spaceBetween: 25,
          },
          650: {
            slidesPerView: 1.75,
            spaceBetween: 25,
          },
          501: {
            slidesPerView: 1.3,
            spaceBetween: 25,
          },
          381: {
            slidesPerView: 1.15,
            spaceBetween: 25,
          },
          0: {
            slidesPerView: 1.05,
            spaceBetween: 25,
          },
        },
      });
    }
  },
  tabsOficina: {
    init: function () {

      document.querySelector(".cabecera").closest(".itemTab").classList.add("open");
      const firstTab = document.querySelector("section.oficinas .part2 .itemTab .mapa .iframe").innerHTML;
      const fondoElement = document.querySelector("section.oficinas .part1 .img .fondo");
      fondoElement.innerHTML = firstTab;

      const cabeceras = document.querySelectorAll('.cabecera');

      cabeceras.forEach(cabecera => {
        cabecera.addEventListener('click', () => {
          const itemTabs = document.querySelectorAll('.itemTab');
          itemTabs.forEach(itemTab => {
            itemTab.classList.remove('open');
          });
          cabecera.parentElement.classList.add('open');

          const mapaElement = cabecera.parentElement.querySelector('.mapa .iframe');
          if (mapaElement) {
            fondoElement.innerHTML = mapaElement.innerHTML;
          }
        })
      });

      $(".oficinas .part1 .img").stick_in_parent({
        offset_top: 100,
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
        } else {
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
  },
  desplegable: {
    init: function () {
      document.addEventListener("click", function (e) {
        if (e.target.closest("footer .desplegable .title")) {
          e.target.closest('.desplegable').classList.toggle("open");
          $('html, body').animate({ scrollTop: $(document).height() }, 0);
        }
      })
    }
  },
  listaMovil: {
    init: function () {

      const lista = document.querySelector('section.proyectosInterna .part1 ul');
      const botonMostrarMas = document.querySelector('section.proyectosInterna .part1 button');
      const elementosLi = lista.getElementsByTagName('li');

      if (elementosLi.length > 5) {
        botonMostrarMas.style.display = 'flex';
      }

      for (let i = 0; i < elementosLi.length; i++) {
        if (i >= 5) {
          elementosLi[i].style.display = 'none';
        }
      }

      botonMostrarMas.addEventListener('click', function () {
        for (let i = 5; i < elementosLi.length; i++) {
          elementosLi[i].style.display = 'block';
        }
        botonMostrarMas.style.display = 'none';
      });
    }
  },
  sliderCaracteristicas: {
    init: function () {
      var swiper2 = new Swiper(".swiperCaracteristicas", {
        slidesPerView: 3,
        spaceBetween: 25,
        /*
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
        */
        pagination: {
          el: ".swiperCaracteristicas .swiper-pagination",
          dynamicBullets: true,
        },
        breakpoints: {
          1025: {
            slidesPerView: 3,
            pagination: {
              el: "",
              dynamicBullets: true,
            },
          },
          951: {
            slidesPerView: 2.8,  
          },
          591: {
            slidesPerView: 2.07,
          },
          400: {
            slidesPerView: 1.4,
          },
          380: {
            slidesPerView: 1.15,
          },
          0: {
            slidesPerView: 1.04,
          },
        },
      });
    }
  },
  menumovil: {
    init: function () {
      const btnMenu = document.querySelector(".menuMovil")
      const btnSubMenu = document.querySelector(".MenuMovilSection ul li.submenu")

      btnMenu.addEventListener('click', (e) => {
        document.querySelector(".MenuMovilSection").classList.toggle("open");
        /*
        setTimeout(() => {
          document.querySelector(".MenuMovilSection .content").classList.toggle("open");
        }, 100);
        */
        btnMenu.classList.toggle("select");
        document.querySelector("body").classList.toggle("scrollHidden");
      })

      btnSubMenu.addEventListener('click', (e) => {
        btnSubMenu.classList.toggle("open");
      })
    }
  },
  select: {
    init: function () {
      var select = document.querySelector('.categorias select');
      var categoria2 = "";

      categoria2 = select.value

      select.addEventListener('change', function () {
        var selectedOption = this.options[select.selectedIndex];
        var cateSelect = selectedOption.text.trimStart().trimEnd();
        categoria2 = cateSelect
        if (categoria2 === "Todos") {
          $("#cargarMasModulo").attr("style", "display:flex;");
          $(`.itemArticulo`).hide();
          $(`.itemArticulo.modulo-mas`).slice(0, 6).show();
          if ($(`.modulo-mas:hidden`).length == 0) {
            $("#cargarMasModulo").attr("style", "display:none;");
          }
        } else {
          $("#cargarMasModulo").attr("style", "display:flex;");
          $(`.itemArticulo`).hide();
          $(`.itemArticulo.modulo-mas[data-categoria="${categoria2}"]`).slice(0, 6).show();
          if ($(`.modulo-mas[data-categoria="${categoria2}"]:hidden`).length == 0) {
            $("#cargarMasModulo").attr("style", "display:none;");
          }
        }
      });
      $("#cargarMasModulo").click(function () {
        if (categoria2 === "Todos") {
          $(`.modulo-mas`).slice(0, 6).slideDown(0);
          if ($(`.modulo-mas`).length == 0) {
            $("#cargarMasModulo").attr("style", "display:none;");
          }
        } else {
          $(`.modulo-mas[data-categoria="${categoria2}"]:hidden`).slice(0, 6).slideDown(0);
          if ($(`.modulo-mas[data-categoria="${categoria2}"]:hidden`).length == 0) {
            $("#cargarMasModulo").attr("style", "display:none;");
          }
        }
      });
    }
  },
  redesSticky: {
    init: function () {
      $("section.contentInfoArticulo .part1 .redesCompartir").stick_in_parent({
        offset_top: 200,
        offset_right: 52,
      });
    }
  },
  contador: {
    init: function () {

      gsap.registerPlugin(ScrollTrigger);
      const contadorsec = document.querySelector(".experiencia");

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.experiencia',
          //markers: true,
          start: '-40% 80%',
          end: '100% 140%',
          scrub: 1,
        },
      });

      tl.to(contadorsec, { rotation: 0, duration: 0 })
      tl.fromTo(
        '.experiencia',
        0.1,
        {
          opacity: 1
        },
        {
          opacity: 1
        }
      )

      tl.add(function () {
        const numero = document.querySelectorAll(".experiencia .contadores .contador h3 span")
        const meta = document.querySelectorAll(".experiencia .contadores .contador .meta")

        const numbermeta = parseInt(meta[0].textContent)
        let cantidad = 0;

        let tiempo = setInterval(() => {
          cantidad += 1
          numero[0].textContent = cantidad
          if (cantidad === numbermeta) {
            clearInterval(tiempo)
          }
        }, 1);

        const numbermeta2 = parseInt(meta[1].textContent)
        let cantidad2 = 0;

        let tiempo2 = setInterval(() => {
          cantidad2 += 1
          numero[1].textContent = cantidad2
          if (cantidad2 >= numbermeta2) {
            clearInterval(tiempo2)
          }
        }, 1);

        const numbermeta3 = parseInt(meta[2].textContent)
        let cantidad3 = 0;

        let tiempo3 = setInterval(() => {
          cantidad3 += 1
          numero[2].textContent = cantidad3
          if (cantidad3 === numbermeta3) {
            clearInterval(tiempo3)
          }
        }, 1);
      })
    }
  },
  scroll:{
    init: function () {
      document.addEventListener("DOMContentLoaded", function() {
        const scrollButton = document.querySelector("section.bannerNegocios button");
        const segundaSection = document.querySelector(".bajada"); 

        scrollButton.addEventListener("click", function() {
          const offset = segundaSection.offsetTop - 100; // Restamos 50 píxeles
          window.scrollTo({ 
            top: offset, 
            behavior: "smooth"
          });
        });   
      });
    }
  }
}

if ($('section.bannerNegocios button').length > 0) {
  MyApp.scroll.init();
}

if ($('.MenuMovilSection').length > 0) {
  MyApp.menumovil.init();
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

if ($('footer .desplegable').length > 0) {
  MyApp.desplegable.init();
}

if ($('section.proyectosInterna .part1 ul').length > 0) {
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  function handleMediaQueryChange(event) {
    if (event.matches) {
      MyApp.listaMovil.init();
    }
  }
  handleMediaQueryChange(mediaQuery);
}

if ($('section.caracteristicas .content').length > 0) {
  MyApp.sliderCaracteristicas.init();
}

if ($('section.listaBlog .container select').length > 0) {
  MyApp.select.init();
}
if ($('section.contentInfoArticulo .part1 .redesCompartir').length > 0) {
  MyApp.redesSticky.init();
}

if ($('section.experiencia .contadores').length > 0) {
  MyApp.contador.init();
}