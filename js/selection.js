function addItems(item) {
    var item_menu = document.getElementById("item_menu");

    var menu_item = document.createElement("atricle");
    menu_item.classList.add("menu_container");
    var menu_json = JSON.stringify(item);
    menu_item.setAttribute(`onclick`, `handle_click('${menu_json})`);

    var menu_img = document.createElement("img");
    menu_img.src = item.img_src;

    var menu_title = document.createElement("h3");
    menu_title.innerText = item.name;

    var menu_desc = document.createElement("h4");
    menu_desc.innerText = item.description;

    var menu_price = document.createElement("h5");
    menu_price.innerText = item.price;

    menu_item.appendChild(menu_title);
    menu_item.appendChild(menu_img);
    menu_item.appendChild(menu_desc);
    menu_item.appendChild(menu_price);
    item_menu.appendChild(menu_item);
}

var selected_card_json = Cookies.get('selected_item');
var selected_cards = JSON.parse(selected_card_json)

for(var i=0; i < selected_cards.length; i++) {
    addItems(selected_cards[i]);
}