function handle_click(item_json) {  
    var selected_item = Cookies.get("selected_item");
    var selected_parsed_item = JSON.parse(selected_item);
    var parsed_json = JSON.parse(item_json);
    selected_parsed_item.push(parsed_json);
    selected_parsed_item = JSON.stringify(selected_parsed_item);
    Cookies.set("selected_item", selected_parsed_item)
}

function addItems(item) {
    var item_menu = document.getElementById("item_menu");

    var menu_item = document.createElement("atricle");
    menu_item.classList.add("menu_container");
    var menu_json = JSON.stringify(item);
    menu_item.setAttribute(`onclick`, `handle_click('${menu_json}')`);

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

var item = {
    name: "Charizard",
    description: "Legendary 1st generation card",
    img_src: "https://m.media-amazon.com/images/I/71nbfl-JklS._AC_SL1024_.jpg",
    price: "$220,574"
}

addItems(item);

var item_menu = [
    {
        name: "Zekrom",
        description: "Legendary 5th generation card",
        img_src: "https://nerdable.com/wp-content/uploads/2021/04/pokemon-card.jpg",
        price: "$5,000"
    },
    {
        name: "Raichu",
        description: "Legendary 1st generation card",
        img_src: "https://assets.dicebreaker.com/prerelease-raichu-pokemon-card.jpg/BROK/resize/660%3E/format/jpg/quality/80/prerelease-raichu-pokemon-card.jpg",
        price: "$10,500"
    },
    {
        name: "Lugia",
        description: "Legendary 1st edition card",
        img_src: "https://i.psacard.com/cardfacts/2000-pokemon-neo-genesis-9-lugui-holo-1st-edition-nmmt-85-68235.jpg?h=1000",
        price: "$144,300"
    }
];

for(var i=0; i < item_menu.length; i++) {
    addItems(item_menu[i]);
}

var new_menu_item = {
    name: "Zekrom",
    description: "Legendary 5th generation card",
    img_src: "https://nerdable.com/wp-content/uploads/2021/04/pokemon-card.jpg",
    price: "$5,000"
}

var new_menu_item_json = JSON.stringify(new_menu_item);

var new_menu_item_parsed = JSON.parse(new_menu_item_json);


Cookies.set("selected_item", "[]")
