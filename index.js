const stores = [];
const items = [];
const updateDate = new Date("2024-12-10");

const coverScale = ["Mecánica de bicicletas: Manual paso a paso", "Lazer Jackal Kineticore (L, matte black)", "Vans BMX Old Skool (46, black)"];

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
	addStore("Vans", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/1280px-Vans-logo.svg.png");
	addStore("Wakkap", "https://images.prismic.io/rakuten-europe/3015a355-edf4-4ae6-b9b3-ecb245dacd46_wakkap.png");
	addStore("Xtralife", "https://res.cloudinary.com/admitad-gmbh/image/upload/w_auto,h_160,c_pad,b_white,f_auto/8454c674b2734e8ad652403983f121e0.png");
	addInfo("Alltricks", "Gastos de envío desde 3,99 €. Envío gratuito a partir de 99 €.");
	addInfo("El Corte Inglés", "Descuento del Montepío incluido.");
	addInfo("Escuela de Mecánica de Bicicletas", "Al acceder a emeb.es salta una ventana indicando que te envian un descuento del 25 % en la compra del manual si facilitas un email.");
	addInfo("Game", "Gastos de envío: 4,99 €.\nRecogida gratuita en tienda (La Vaguada).");
	addInfo("Mammoth", "Gastos de envío desde 2,99 €.\nRecogida gratuita en tienda (Villalba).");
	addInfo("Santafixie", "Envío gratuito desde 49 €.");
	addInfo("TodoConsolas", "Gastos de envío: 0,99–3,95 €.\nRecogida gratuita o por 2,95 en oficina de Correos.");
	addInfo("Wakkap", "Gastos de envío: 2,99 €.");
	addInfo("Xtralife", "Gastos de envío: 2,99 €.");
	addItem("Five XR-Pro (XL, black)", "https://bike.five-gloves.com/wp-content/uploads/2021/09/FIVE-GLOVES-BIKE-MTB-XR-PRO-black-2022.jpg");
	addItem("Kryptonite New York Lock M18-WL", "https://www.kryptonitelock.com/content/dam/kryt-us/en/product-images/994589%20high%20res.jpg");
	addItem("Lazer Jackal Kineticore (L, matte black)", "https://www.lazersport.com/_assets/images/kineticore/helmets/jackal/gallery-new-straps/matte-black/my2023_jackal_kineticore_matte_black_sider_1400x1011.jpg");
	addItem("Mecánica de bicicletas: Manual paso a paso", "https://dg9aaz8jl1ktt.cloudfront.net/uploaded_files/000/249/215/verkami_79b2a3fe72130511becee63c507b5803.jpg");
	addItem("Sony Pulse Elite", "https://www.todoconsolas.com/244111-medium_default/headset_inalambricos_pulse_elite_blanco_198554.jpg");
	addItem("Star Wars Outlaws", "https://m.media-amazon.com/images/I/51WkH6oas+L._AC_.jpg");
	addItem("Vans BMX Old Skool (46, black)", "https://wallride.cl/cdn/shop/files/VN0A2Z3WYV3-ALT1_720x.jpg");
	addPrice("Five XR-Pro (XL, black)", "Alltricks", 34.99, "https://www.alltricks.es/F-41489-gants/P-1467700-par_de_guantes_largos_five_xr_pro_black");
	addPrice("Kryptonite New York Lock M18-WL", "Alltricks", 127.99, "https://www.alltricks.es/F-41480-antivols/P-284679-kryptonite_new_york_lock_m18_wl_u_lock");
	addPrice("Kryptonite New York Lock M18-WL", "Amazon", 121.07, "https://www.amazon.es/Kryptonite-New-York-M18-WL-Bicicleta/dp/B07VL2GBD9");
	addPrice("Lazer Jackal Kineticore (L, matte black)", "Amazon", 178.92, "https://www.amazon.es/Lazer-Casco-Jackal-Kineticore-Negro/dp/B09XS7JBYM");
	addPrice("Sony Pulse Elite", "Amazon", 119, "https://www.amazon.es/PlayStation-Auriculares-inalámbricos-Pulse-EliteTM/dp/B0CMJYZ76W");
	addPrice("Star Wars Outlaws", "Amazon", 63.13, "https://www.amazon.es/Ubisoft-Star-Wars-Outlaws-PS5/dp/B0DGLV9Z86");
	addPrice("Five XR-Pro (XL, black)", "BikeInn", 38.99, "https://www.tradeinn.com/bikeinn/es/five-gloves-guantes-xr-pro/139825688/p");
	addPrice("Kryptonite New York Lock M18-WL", "BikeInn", 128.49, "https://www.tradeinn.com/bikeinn/es/kryptonite-candado-en-u-new-york-m18-wl/138366662/p");
	addPrice("Lazer Jackal Kineticore (L, matte black)", "BikeInn", 156.99, "https://www.tradeinn.com/bikeinn/es/lazer-casco-de-mtb-jackal-kc/139126282/p");
	addPrice("Star Wars Outlaws", "El Corte Inglés", 76.17, "https://www.elcorteingles.es/videojuegos/A51463260-star-wars-outlaws-playstation-5/");
	addPrice("Mecánica de bicicletas: Manual paso a paso", "Escuela de Mecánica de Bicicletas", 47, "https://www.emeb.es/producto/libro-mecanica-de-bicicletas-manual-paso-a-paso/");
	addPrice("Sony Pulse Elite", "Game", 129.99, "https://www.game.es/ACCESORIOS/AURICULARES/PLAYSTATION-5/AURICULARES-INALAMBRICOS-PULSE-ELITE/225019");
	addPrice("Kryptonite New York Lock M18-WL", "Mammoth", 128.49, "https://www.mammothbikes.com/antirrobo-kryptonite-new-york-u_lock-m18_wl/p-502095");
	addPrice("Lazer Jackal Kineticore (L, matte black)", "Mammoth", 150.99, "https://www.mammothbikes.com/casco-lazer-jackal-kineticore/p-525118");
	addPrice("Kryptonite New York Lock M18-WL", "Santafixie", 128.99, "https://www.santafixie.com/kryptonite-new-york-m18-wl.html");
	addPrice("Sony Pulse Elite", "TodoConsolas", 119.95, "https://www.todoconsolas.com/accesorios-ps5/134133-headset_inalambricos_pulse_elite_blanco_198554-0711719572978.html");
	addPrice("Star Wars Outlaws", "TodoConsolas", 67.95, "https://www.todoconsolas.com/juegos-ps5/139221-star_wars_outlaws_ps5_sp_203334-3307216284161.html");
	addPrice("Vans BMX Old Skool (46, black)", "Vans", 90, "https://www.vans.es/shop/es/vans-es/zapatillas-bmx-old-skool-vn0a2z3wyv3");
	addPrice("Sony Pulse Elite", "Wakkap", 149.90, "https://wakkap.com/item/ps5-auriculares-inalambricos-pulse-elite");
	addPrice("Star Wars Outlaws", "Wakkap", 69.90, "https://wakkap.com/item/ps5-star-wars-outlaws");
	addPrice("Sony Pulse Elite", "Xtralife", 129.95, "https://www.xtralife.com/producto/auriculares-inalambricos-pulse-3d-elite-ps5/81528");
	addPrice("Star Wars Outlaws", "Xtralife", 46.95, "https://www.xtralife.com/producto/star-wars-outlaws-ps5-estandar/80102");

	items.forEach(item => item.prices.sort((a, b) => a.price - b.price));
	const randomOrderedItems = _.shuffle(items);

	randomOrderedItems.forEach(function(item, index) {
		$(".container .row").append(`<div class="item-wrapper col-12 col-md-6 col-lg-4 col-xl-3">
			<div class="card h-100">
				<div class="card-img-wrapper ratio ratio-1x1">
				<img src="${item.picture}" alt="${item.name}" class="item-pic card-img-top object-fit-${coverScale.includes(item.name) ? "cover" : "scale"}">
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
			<div class="modal-dialog modal-fullscreen-md-down">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="modalLabel${index}">${item.name}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="modal-img-wrapper mb-3 ratio ratio-1x1">
							<img src="${item.picture}" alt="${item.name}" class="object-fit-${coverScale.includes(item.name) ? "cover" : "scale"} rounded">
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
					<small class="fst-italic">${stores.find(e => e.name === price.store).info ? stores.find(e => e.name === price.store).info : ""}</small>
				</div>
				<div class="col-2 p-0 text-end">
					<span>${price.price.toLocaleString("es-ES", {style: "currency", currency: "EUR"})}</span>
				</div>
			</div>`);

			if (item.prices[priceIndex + 1]) $(`#modal-${index} .prices-wrapper`).append('<hr class="m-0 border-secondary">');
		});
	});

	$("#update-date").html(`Precios actualizados a ${updateDate.toLocaleString("es-ES", {dateStyle: "long"})}`);
});
