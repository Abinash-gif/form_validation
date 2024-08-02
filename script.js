document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
        $('#dataForm').on('submit', function(event) {
          event.preventDefault();
          
          // Get form data
          var textField = $('#textField').val();
          var radioOption = $('input[name="radioOption"]:checked').val();
          var checkboxOptions = [];
          $('input[name="checkboxOptions"]:checked').each(function() {
            checkboxOptions.push($(this).val());
          });
          var fileName = $('#fileUpload').val().split('\\').pop();
    
          var newRow = '<tr>' +
                         '<td>' + textField + '</td>' +
                         '<td>' + (radioOption || '') + '</td>' +
                         '<td>' + (checkboxOptions.join(', ') || '') + '</td>' +
                         '<td>' + (fileName || '') + '</td>' +
                       '</tr>';
          $('#dataTable').append(newRow);
    
          // Reset form
          $(this)[0].reset();
        });
      });
    
})
  