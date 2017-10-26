// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .

var id_counter = 1;

var create_text = function () {
    var container = document.getElementById("units");
    var list_item = $("<li class='ui-sortable-handle'></li>");
    var unit_body = $("<div class='block text'></div>");
    var unit_header = $('<div class="block-header"><span class="fa fa-font"></span></div>');
    var textarea = $('<textarea class="form-control block_text_area" rows="2"></textarea>');
    var button = $('<button class="close"><span aria-hidden="true">&times;</span></button>');

    $(list_item).attr("id", id_counter);
    $(button).attr("id", id_counter + "_button");
    $(button).attr("onclick", "destroy_unit(id)");

    $(unit_header).append(button);
    $(unit_body).append(unit_header, textarea);
    $(list_item).append(unit_body);
    $(container).append(list_item);
    id_counter++;
};

var create_image = function (value) {
    var container = document.getElementById("units");
    var list_item = $("<li class='ui-sortable-handle'></li>");
    var unit_body = $("<div class='block image'></div>");
    var unit_header = $('<div class="block-header"><span class="fa fa-photo"></span></div>');
    var image_body = $("<div class='block_image'></div>");
    var image_block = $('<img>');
    var button = $('<button class="close"><span aria-hidden="true">&times;</span></button>');

    $(list_item).attr("id", id_counter);
    $(button).attr("id", id_counter + "_button");
    $(button).attr("onclick", "destroy_unit(id)");
    $(image_block).attr("src", value);

    $(image_body).append(image_block);
    $(unit_header).append(button);
    $(unit_body).append(unit_header, image_body);
    $(list_item).append(unit_body);
    $(container).append(list_item);

    id_counter++;
};

var create_video = function () {
    var container = document.getElementById("units");
    var list_item = $("<li class='ui-sortable-handle'></li>");
    var unit_body = $("<div class='block video'></div>");
    var unit_header = $('<div class="block-header"><span class="fa fa-youtube-play"></span></div>');
    var textarea = $('<input type="text" placeholder="Your link" class="form-control block_text_area">');
    var button = $('<button class="close"><span aria-hidden="true">&times;</span></button>');

    $(list_item).attr("id", id_counter);
    $(button).attr("id", id_counter + "_button");
    $(button).attr("onclick", "destroy_unit(id)");

    $(unit_header).append(button);
    $(unit_body).append(unit_header, textarea);
    $(list_item).append(unit_body);
    $(container).append(list_item);
    id_counter++;
};
