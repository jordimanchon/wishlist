const stores = [];
const items = [];
const UPDATE_DATE = new Date("2024-11-14");

function addStore(name, logo) {
	stores.push(new Store(name, logo));
}

function addInfo(store, info) {
	stores.find(e => e.name === store).addInfo(info);
}

function addItem(name, picture) {
	items.push(new Item(name, picture));
}

function addPrice(item, store, price, link) {
	items.find(e => e.name === item).addPrice(store, price, link);
}

$(document).ready(function() {
	addStore("Alltricks", "https://images.prismic.io/rakuten-europe/c807010e7caa5affd4aea2693df0ca650d4deba6_alltricks.png");
	addStore("Amazon", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png");
	addStore("BikeInn", "https://cache.tradeinn.com/web/web/bikeinn.svg");
	addStore("El Corte Inglés", "https://www.elcorteingles.es/recursos/informacioncorporativa/img/portal/2017/07/06/el-corte-ingles-triangulo.png");
	addStore("Escuela de Mecánica de Bicicletas", "https://i.postimg.cc/W1fVyn0S/cropped-logo-emeb-347x72.png");
	addStore("Game", "https://upload.wikimedia.org/wikipedia/commons/5/59/Logo_GAME_Store_Iberia.png");
	addStore("Mammoth", "https://www.mammothbikes.com/Content/images/mammoth/logo-web-mammoth.svg");
	addStore("Santafixie", "https://asociacionambe.com/wp-content/uploads/2021/10/LOGO-SANTAFIXIE-alta-768x140.png");
	addStore("TodoConsolas", "https://www.todoconsolas.com/img/todoconsolas-logo-1582897196.jpg");
	addStore("Wakkap", "https://images.prismic.io/rakuten-europe/3015a355-edf4-4ae6-b9b3-ecb245dacd46_wakkap.png");
	addStore("Xtralife", "https://res.cloudinary.com/admitad-gmbh/image/upload/w_auto,h_160,c_pad,b_white,f_auto/8454c674b2734e8ad652403983f121e0.png");
	addInfo("Alltricks", "Envío gratuito.");
	addInfo("El Corte Inglés", "Descuento del Montepío incluido.");
	addInfo("Escuela de Mecánica de Bicicletas", "Al acceder a emeb.es salta una ventana indicando que te envian un descuento del 25 % en la compra del manual si facilitas un email.");
	addInfo("Game", "Gastos de envío: 4,99 €.\nRecogida gratuita en tienda (La Vaguada).");
	addInfo("Mammoth", "Gastos de envío: 3,99 €.\nRecogida gratuita en tienda (Villalba).");
	addInfo("Santafixie", "Envío gratuito desde 49 €.");
	addInfo("TodoConsolas", "Gastos de envío: 0,99 €.\nRecogida gratuita en oficina de Correos.");
	addInfo("Wakkap", "Gastos de envío: 2,99 €.");
	addInfo("Xtralife", "Gastos de envío: 2,99 €.");
	addItem("Bomba de pie Pro Team", "https://www.pro-bikegear.com/_assets/images/category/accessories/pumps/prpu0102-pro-2020_06_1549155_lr.png");
	addItem("Kryptonite New York Lock M18-WL", "https://www.kryptonitelock.com/content/dam/kryt-us/en/product-images/994589%20high%20res.jpg");
	addItem("Marvel's Spider-Man 2", "https://m.media-amazon.com/images/I/81DC-janmJL._AC_SL1500_.jpg");
	addItem("Mecánica de bicicletas: Manual paso a paso", "https://dg9aaz8jl1ktt.cloudfront.net/uploaded_files/000/249/215/verkami_79b2a3fe72130511becee63c507b5803.jpg")
	addItem("Potro Pro", "https://www.pro-bikegear.com/_assets/images/category/maintenance/pro_tl_repairs2_1.png");
	addItem("Star Wars Outlaws", "https://m.media-amazon.com/images/I/51WkH6oas+L._AC_.jpg");
	addItem("The Legend of Zelda: Echoes of Wisdom", "https://m.media-amazon.com/images/I/81jeDpU8XhL._AC_SL1500_.jpg");
	addPrice("Kryptonite New York Lock M18-WL", "Alltricks", 136.99, "https://www.alltricks.es/F-41480-antivols/P-284679-kryptonite_new_york_lock_m18_wl_u_lock");
	addPrice("Kryptonite New York Lock M18-WL", "Amazon", 121.56, "https://www.amazon.es/Kryptonite-New-York-M18-bicicleta/dp/B000AOA3W6");
	addPrice("Marvel's Spider-Man 2", "Amazon", 60.47, "https://www.amazon.es/Spiderman-Videojuego-Playstation-Interactive-Configurable/dp/B0C7X5Q6R1/");
	addPrice("Potro Pro", "Amazon", 206.76, "https://www.amazon.es/Pro-PR100360-Mecanico-Bolsa-Bandeja/dp/B001F3SCAQ");
	//addPrice("Star Wars Outlaws", "Amazon", 64.99, "https://www.amazon.es/Ubisoft-Star-Wars-Outlaws-PS5/dp/B0DGLV9Z86");
	addPrice("The Legend of Zelda: Echoes of Wisdom", "Amazon", 49.90, "https://www.amazon.es/Nintendo-Switch-Legend-Zelda-Echoes/dp/B0D7DBHVWV");
	addPrice("Bomba de pie Pro Team", "BikeInn", 101.99, "https://www.tradeinn.com/bikeinn/es/pro-bomba-pie-team/137965021/p");
	addPrice("Kryptonite New York Lock M18-WL", "BikeInn", 128.49, "https://www.tradeinn.com/bikeinn/es/kryptonite-candado-en-u-new-york-m18-wl/138366662/p");
	addPrice("Potro Pro", "BikeInn", 167.49, "https://www.tradeinn.com/bikeinn/es/pro-soporte-de-trabajo-mechanic-standing-with-bag-and-tray/1120815/p");
	addPrice("Marvel's Spider-Man 2", "El Corte Inglés", 74.31, "https://www.elcorteingles.es/videojuegos/A48376773-marvels-spider-man-2-playstation-5/");
	addPrice("Star Wars Outlaws", "El Corte Inglés", 76.17, "https://www.elcorteingles.es/videojuegos/A51463260-star-wars-outlaws-playstation-5/");
	addPrice("The Legend of Zelda: Echoes of Wisdom", "El Corte Inglés", 55.71, "https://www.elcorteingles.es/videojuegos/A52182952-the-legend-of-zelda-echoes-of-wisdom-nintendo-switch/");
	addPrice("Mecánica de bicicletas: Manual paso a paso", "Escuela de Mecánica de Bicicletas", 47, "https://www.emeb.es/producto/libro-mecanica-de-bicicletas-manual-paso-a-paso/");
	addPrice("Marvel's Spider-Man 2", "Game", 69.99, "https://www.game.es/VIDEOJUEGOS/ACCION/PLAYSTATION-5/MARVELS-SPIDER-MAN-2/218764");
	addPrice("The Legend of Zelda: Echoes of Wisdom", "Game", 59.99, "https://www.game.es/VIDEOJUEGOS/AVENTURA/NINTENDO-SWITCH/THE-LEGEND-OF-ZELDA-ECHOES-OF-WISDOM/232664");
	addPrice("Kryptonite New York Lock M18-WL", "Mammoth", 128.49, "https://www.mammothbikes.com/antirrobo-kryptonite-new-york-u_lock-m18_wl/p-502095");
	addPrice("Potro Pro", "Mammoth", 167.49, "https://www.mammothbikes.com/potro-pro-pie-mecanico---bolsa-bandeja/p-201345");
	addPrice("Bomba de pie Pro Team", "Santafixie", 93.49, "https://www.santafixie.com/inflador-taller-pro-team-manometro-analogico-doble-negro.html");
	addPrice("Kryptonite New York Lock M18-WL", "Santafixie", 128.99, "https://www.santafixie.com/kryptonite-new-york-m18-wl.html");
	addPrice("Marvel's Spider-Man 2", "TodoConsolas", 59.95, "https://www.todoconsolas.com/juegos-ps5/115469-marvel_s_spider_man_2_ps5_sp_180153-711719571827.html")
	addPrice("Star Wars Outlaws", "TodoConsolas", 69.95, "https://www.todoconsolas.com/juegos-ps5/139221-star_wars_outlaws_ps5_sp_203334-3307216284161.html");
	addPrice("The Legend of Zelda: Echoes of Wisdom", "TodoConsolas", 50.95, "https://www.todoconsolas.com/juegos-switch/144406-the_legend_of_zelda_echoes_of_wisdom_switch_sp_208394-45496512453.html");
	addPrice("Marvel's Spider-Man 2", "Wakkap", 64.90, "https://wakkap.com/item/ps5-marvel-spiderman-2");
	addPrice("Star Wars Outlaws", "Wakkap", 69.90, "https://wakkap.com/item/ps5-star-wars-outlaws");
	addPrice("The Legend of Zelda: Echoes of Wisdom", "Wakkap", 49.90, "https://wakkap.com/item/switch-the-legend-of-zelda-echoes-of-wisdom");
	addPrice("Marvel's Spider-Man 2", "Xtralife", 72.95, "https://www.xtralife.com/producto/marvels-spider-man-2-ps5-estandar/68889");
	addPrice("Star Wars Outlaws", "Xtralife", 69.95, "https://www.xtralife.com/producto/star-wars-outlaws-ps5-estandar/80102");
	addPrice("The Legend of Zelda: Echoes of Wisdom", "Xtralife", 54.95, "https://www.xtralife.com/producto/the-legend-of-zelda-echoes-of-wisdom-switch-estandar/90410");

	items.forEach(item => item.prices.sort((a, b) => a.price - b.price));
	const randomOrderedItems = _.shuffle(items);
	
	randomOrderedItems.forEach(function(item, index) {
		$(".container .row").append(`<div class="item-wrapper col-12 col-lg-6 col-xl-4 col-xxl-3">
			<div class="card h-100">
				<div class="card-img-wrapper ratio ratio-1x1">
				<img src="${item.picture}" alt="${item.name}" class="item-pic card-img-top object-fit-${item.name.includes("Mecánica") ? "cover" : "scale"}">
				</div>
				<div class="card-body">
					<h5 class="card-title h-50">${item.name}</h5>
					<div class="price-wrapper d-flex justify-content-between">
						<span class="card-text">${item.prices[0].price.toLocaleString("es-ES", {style: "currency", currency: "EUR"})}</span>
						<button type="button" class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#modal-${index}">Ver opciones</button>
					</div>
				</div>
			</div>
		<div>`);
		
		$("body").append(`<div class="modal fade" id="modal-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel${index}" aria-hidden="true">
		  <div class="modal-dialog modal-fullscreen-lg-down">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h1 class="modal-title fs-5" id="modalLabel${index}">${item.name}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
						<div class="modal-img-wrapper mb-3 ratio ratio-1x1">
		      		<img src="${item.picture}" alt="${item.name}" class="object-fit-${item.name.includes("Mecánica") ? "cover" : "scale"} rounded">
						</div>
						<div class="container-fluid prices-wrapper">
						</div>
		      </div>
		    </div>
		  </div>
		</div>`);
		
		item.prices.forEach(function(price, priceIndex) {
			$(`#modal-${index} .prices-wrapper`).append(`<div class="row d-flex position-relative align-items-center my-3 w-100">
				<div class="col-3">
					<a href="${price.link}" target="_blank" class="stretched-link">
						<img src="${stores.find(e => e.name === price.store).logo}" alt="${price.store}" class="w-100">
					</a>
				</div>
				<div class="col-7">
					<small><em>${stores.find(e => e.name === price.store).info ? stores.find(e => e.name === price.store).info : ""}</em></small>
				</div>
				<div class="col-2 ms-auto">
					<span>${price.price.toLocaleString("es-ES", {style: "currency", currency: "EUR"})}</span>
				</div>
			</div>`);
			
			if (item.prices[priceIndex + 1]) $(`#modal-${index} .prices-wrapper`).append('<hr class="m-0 border-secondary">');
		});
	});

	$("#update-date").html(`Precios actualizados a ${UPDATE_DATE.toLocaleString("es-ES", {dateStyle: "long"})}`);
});