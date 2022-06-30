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

   // funcao para validar elementos e esconder / mostrar dicas
   /*
   * - checar se nome é valido (mais de 2 caracteres)
   * - checar se o email é valido (ao menos um "@" e um "." )
   */

   function validateNome (elem) {

      if (elem.val().length > 2) {
         console.log('nome é valido')
         elem.removeClass('invalid');
         $('#help' + elem.attr('name')).hide();
      }else {
         console.log('nome é invalido')
         elem.addClass('invalid');
         $('#help' + elem.attr('name')).show();
         return false;
      }

   }

   function validateEmail (elem) {
      const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
      if (elem.val().match(emailValido)) {
         console.log('email é valido')
         elem.removeClass('invalid');
         $('#help' + elem.attr('name')).hide();
      }else {
         console.log('email invalido')
         elem.addClass('invalid');
         $('#help' + elem.attr('name')).show();
         return false;
      }
   }
   function validate(elemento) {
      if (elemento.val() == '') {
         console.log('O campo ' + elemento.attr('name') + ' é obrigatorio');

         elemento.addClass('invalid');
         $('#help' + elemento.attr('name')).show();

         return false;

      } else {
         if (elemento.attr('name') == 'email') {
            validateEmail(elemento);
         }else if (elemento.attr('name') == 'nome'){
            validateNome(elemento)
         }else
         {
            elemento.removeClass('invalid');
            $('#help' + elemento.attr('name')).hide();

         }

      }
   }

   // Seleciona o modal que esta no modal body e com form criados de forma dinamica
   $('body').on('submit', '.modal-body .form', function (e) {
      e.preventDefault();
      const inputName = $('#nome');
      const inputEmail = $('#email');

      validate(inputName);
      validate(inputEmail);

      if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
         console.log('verificar campos obrigatorios')
         return false;
      } else {
         $(this).submit();
      }


   });


   // event listener de blur no id nome
   $('body').on('blur', '#nome', function () {
      validate($(this));
   })

   // event listener de blur no id email
   $('body').on('blur', '#email', function () {
      validate($(this));
   })

   // event listener de focus do id date
   $('body').on('focus', '#date', function () {
      $(this).datepicker();
   })

   // event listener de blur no id date
   $('body').on('blur', '#date', function () {
      validate($(this));
      $(this).mask('00/00/0000');
   })

   // event listener de blur no id time
   $('body').on('blur', '#time', function () {
      validate($(this));
      $(this).mask('00:00');
   })

   // event listener de blur no id cep
   $('body').on('blur', '#cep', function () {
      validate($(this));
      $(this).mask('00000-000');
   })

   // event listener de blur no id phone
   $('body').on('blur', '#phone', function () {
      validate($(this));
      $(this).mask('00000-0000');
   })

   // event listener de blur no id cpf
   $('body').on('blur', '#cpf', function () {
      validate($(this));
      $(this).mask('000.000.000-00')
   })

});