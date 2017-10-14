$('#addRoom').submit(function () {
    var room_type_id = $('#room_type_id').val();
    var room_no = $('#room_no').val();

    $.ajax({
        type: 'post',
        url: 'ajax.php',
        dataType: 'JSON',
        data: {
            room_type_id: room_type_id,
            room_no: room_no,
            add_room: ''
        },
        success: function (response) {
            if (response.done == true) {
                $('#addRoom').modal('hide');
                window.location.href = 'index.php?room_mang';
            } else {
                $('.response').html('<div class="alert bg-danger alert-dismissable" role="alert"><em class="fa fa-lg fa-warning">&nbsp;</em>' + response.data + '</div>');
            }
        }
    });

    return false;
});

$('#roomEditFrom').submit(function () {
    var room_type_id = $('#edit_room_type').val();
    var room_no = $('#edit_room_no').val();
    var room_id = $('#edit_room_id').val();

    $.ajax({
        type: 'post',
        url: 'ajax.php',
        dataType: 'JSON',
        data: {
            room_type_id: room_type_id,
            room_no: room_no,
            room_id: room_id,
            edit_room: ''
        },
        success: function (response) {
            if (response.done == true) {
                $('#editRoom').modal('hide');
                window.location.href = 'index.php?room_mang';
            } else {
                $('.response').html('<div class="alert bg-danger alert-dismissable" role="alert"><em class="fa fa-lg fa-warning">&nbsp;</em>' + response.data + '</div>');
            }
        }
    });

    return false;
});

$(document).on('click', '#roomEdit', function (e) {
    e.preventDefault();

    var room_id = $(this).data('id');

    $.ajax({
        type: 'post',
        url: 'ajax.php',
        dataType: 'JSON',
        data: {
            room_id: room_id,
            room: ''
        },
        success: function (response) {
            if (response.done == true) {
                $('#edit_room_type').val(response.room_type_id);
                $('#edit_room_no').val(response.room_no);
                $('#edit_room_id').val(room_id);
            } else {
                $('.edit_response').html('<div class="alert bg-danger alert-dismissable" role="alert"><em class="fa fa-lg fa-warning">&nbsp;</em>' + response.data + '</div>');
            }
        }
    });

});

function fetch_room(val) {
    $.ajax({
        type: 'post',
        url: 'ajax.php',
        data: {
            room_type_id: val,
            room_type: ''
        },
        success: function (response) {
            $('#room_no').html(response);

        }
    });
}

function fetch_price(val) {
    $.ajax({
        type: 'post',
        url: 'ajax.php',
        data: {
            room_id: val,
            room_price: ''
        },
        success: function (response) {
            $('#price').html(response);
            var days = document.getElementById('staying_day').innerHTML;
            $('#total_price').html(response*days);
        }
    });
}


$('#booking').submit(function () {
    var room_type_id = $('#room_type').val();
    var room_id = $('#room_no').val();
    var check_in_date = $('#check_in_date').val();
    var check_out_date = $('#check_out_date').val();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var contact_no = $('#contact_no').val();
    var email = $('#email').val();
    var id_card_id = $('#id_card_id').val();
    var id_card_no = $('#id_card_no').val();
    var address = $('#address').val();

    $.ajax({
        type: 'post',
        url: 'ajax.php',
        dataType: 'JSON',
        data: {
            room_type_id:room_type_id
        },
        success: function (response) {
            if (response.done == true) {
                $('#editRoom').modal('hide');
                window.location.href = 'index.php?room_mang';
            } else {
                $('.response').html('<div class="alert bg-danger alert-dismissable" role="alert"><em class="fa fa-lg fa-warning">&nbsp;</em>' + response.data + '</div>');
            }
        }
    });

    return false;
});