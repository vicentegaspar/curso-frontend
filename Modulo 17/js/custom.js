// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

   $('.owl-carousel').owlCarousel();

   let titulos = $('h4') // tag

   let itens = $('.featured-item') // class

   let destaques = $('#featured') // id

   console.log(titulos.first());

   // Configuração de produtos

   $('.featured-item a').addClass('btn btn-dark stretch-link');

   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')

   $('.featured-item h4').dblclick(function () {

      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });

   });

   /*
    * Manipulação de eventos
    */
   $('.featured-item a').on('blur', function (event) {

      event.preventDefault();

      alert('Produto esgotado');

   })

   /* 
   * Callback - estendendo acoes que comecam ao termino de outra
   */
   /*
   $('.featured-item:nth(1)')
      .hide(2000, function () {
         // esta eh a funcao do callback
         console.log($(this).find('h4').text() + ' ESGOTADO');
      })
      .show(2000, function () {
         console.log($(this).find('h4').text() + ' em estoque');
      })
   })
   */

   /*
   * Animações
   
   const duration = 2000 // equivalente a 2 segundos
   $('.featured-item:nth(0)')
   .hide(duration)
   .show(duration)
   .fadeOut(duration)
   .fadeIn(duration)
   .toggle(duration)
   .toggle(duration)
   */

   /*
   * Ouvinte de Eventos para .nav-modal-open
   */
   $('.nav-modal-open').on('click', function (e) {
      e.preventDefault();

      let elem = $(this).attr('rel');

      $('.modal-body').html($('#' + elem).html());
      $('.modal-header h5.modal-title').html($(this).text());

      let myModal = new bootstrap.Modal($('#modelId'));

      myModal.show();

   });

   // Seleciona o modal que esta no modal body e com form criados de forma dinamica
   $('body').on('submit', '.modal-body .form', function (e) {
      e.preventDefault();
      const inputName = $('#nome');
      const inputEmail = $('#email');

      if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
         return false;
      } else {
         $(this).submit();
      }


   });
   // funcao para validar elementos
   function validate(elemento) {
      if (elemento.val() == '') {
         console.log('O campo '+ elemento.attr('name') +'é obrigatorio');
         elemento.addClass('invalid');
         return false;

      }
   }

   $('body').on('blur', '#nome', function (e) {
      if ($(this).val() == '') {
         console.log('O campo nome é obrigatorio');
         $(this).addClass('invalid');
         return false;

      }
   })

   $('body').on('blur', '#email', function (e) {
      if ($(this).val() == '') {
         console.log('O campo e-mail é obrigatorio');
         $(this).addClass('invalid');
         return false;
      }
   })
});