/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.2.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

$(function(){
    $(document).on('submit', '#reservation, #contact', function(event){
        event.preventDefault();
      
        var errors = false;
      
        var form = this;
      
        $(form).find('.status__failure').slideUp();
        $(form).find('.status__success').slideUp();
      
        // Clear out errors
        var errField = 'input.error, select.error, textarea.error';
        var msgField = 'p.error';
        var errClass = 'error';
        $(errField, form).removeClass(errClass);

        $(form).find('input:required, select:required, textarea:required').each(function(){
            if (!$(this).val()) {
              $(this).addClass(errClass)
                .siblings(msgField).slideDown();
              errors = true;
            } else {
              $(this).siblings(msgField).slideUp();
            }
        });
        
        if ( /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/.test(form.email.value) == false ) {
          $(form.email).addClass(errClass).siblings(msgField).slideDown();
          errors = true;
        } else {
          $(form.email).siblings(msgField).slideUp();
        }
      
        if (errors) {
          return false;
        }

        $(form).attr('action', 'https:' + '//formspree.io/' + 'laveautosunshine' + '@' + 'gmail' + '.' + 'com');
        $(form)[0].submit();
      
        // $.ajax({
        //   url: 'https:' + '//formspree.io/' + 'laveautosunshine' + '@' + 'gmail' + '.' + 'com', 
        //   method: 'POST',
        //   data: $(form).serialize(),
        //   success: function(data){
        //     console.log('success', data);
        //     $(form).find('.status__failure').slideUp();
        //     $(form).find('.status__success').slideDown();
        //     $(form)[0].reset();
        //   },
        //   error: function(data){
        //     console.log('error', data);
        //     $(form).find('.status__failure').slideDown();
        //     $(form).find('.status__success').slideUp();
        //   }
        // });
    });
});
