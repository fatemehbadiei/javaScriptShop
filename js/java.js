var letObject1 = {
    id:1,
    title: "کتاب بینوایان",
    price: "15000",
    imgUrl: "img/0003631.jpg"
};
var letObject2 = {
    id:2,
    title: "کتاب دن کیشوت",
    price: "12000",
    imgUrl: "img/8882856_12235.jpg"
};
var letObject3 = {
    id:3,
    title: "کتاب چنین گفت زرتشت",
    price: "90000",
    imgUrl: "img/zartosht.jpg"
};
var letObject4 = {
    id:4,
    title: "کتاب انسان خردمند",
    price: "60000",
    imgUrl: "img/kh.jpg"
};
var letObject5 = {
    id:5,
    title: "کتاب انسان خداگونه",
    price: "60000",
    imgUrl: "img/images.jpg"
};
var letObject6 = {
    id:6,
    title: "کتاب کلیات سعدی",
    price: "110000",
    imgUrl: "img/koliate-saadi-.jpg"
};
var letObject7 = {
    id:7,
    title: "کتاب کلیات نیمایوشیج",
    price: "110000",
    imgUrl: "img/2890582.jpg"
};
var letObject8 = {
    id:8,
    title: "کتاب دیوان حافظ",
    price: "80000",
    imgUrl: "img/hafez2.jpg"
};
var letObject9 = {
    id:9,
    title: "کتاب مثنوی معنوی مولانا",
    price: "110000",
    imgUrl: "img/masnawi.jpg"
};

var books ={
    1:letObject1,
    2:letObject2,
    3:letObject3,
    4:letObject4,
    5:letObject5,
    6:letObject6,
    7:letObject7,
    8:letObject8,
    9:letObject9
};

function addBook() {
    var title=document.getElementById("title");
    var price=document.getElementById("price");
    var imgUrl=document.getElementById("imgUrl");
    var object={
        title:title.value,
        price:price.value,
        imgUrl:imgUrl.value
    };
    var len = (Object.keys(books).length + 1);
    books[len] = object;
    createPanel();
}
function createPanel () {

    var parent = document.getElementById("html-parent");
    var panel = "";
    for (var i in books) {
        panel += "<div class='panel'><img src='" + books[i]['imgUrl'] + "' class='img_panel'>";
        panel += "  <h2>" + books[i]['title'] + "</h2>";
        panel += "  <div class='footer-panel'>";
        panel += "   <span>قیمت:" + books[i]['price'] + "</span>";
        panel += "   <div>";
        panel += "          <label for=''>خرید :</label>";
        panel += "          <input type='checkbox' name='book' data-id='" + books[i]['id'] + "'>";
        panel += "          <input type='submit' name='book' value='delete' onclick='deleteBook(" + [i] + ")'>";
        panel += "   </div>";
        panel += "  </div>";
        panel += "</div>";
    }

    parent.innerHTML = panel;
};
function deleteBook(id) {
    delete books[id];
    createPanel();

};
