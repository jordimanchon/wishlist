const stores = [];
const items = [];
const updateDate = new Date("2025-02-04");

const coverScale = ["Mecánica de bicicletas: Manual paso a paso"];

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
	addStore("Barrabes", "https://www.barrabes.com/Content/images/barrabes/logo-barrabes-EM-es-black.svg");
	addStore("Bike24", "https://assets.bike24.com/static/images/8e6800bd228af47a3e77.svg");
	addStore("BikeInn", "https://cache.tradeinn.com/web/web/bikeinn.svg");
	addStore("Deporvillage", "https://cdn.deporvillage.com/cdn-cgi/image/h=86,w=182,dpr=1,f=auto,q=90,fit=contain,background=white/static/default/logo_dpv.png");
	addStore("El Corte Inglés", "https://www.elcorteingles.es/recursos/informacioncorporativa/img/portal/2017/07/06/el-corte-ingles-triangulo.png");
	addStore("Escuela de Mecánica de Bicicletas", "https://i.postimg.cc/W1fVyn0S/cropped-logo-emeb-347x72.png");
	//addStore("Game", "https://upload.wikimedia.org/wikipedia/commons/5/59/Logo_GAME_Store_Iberia.png");
	addStore("Garmin", "https://creative.garmin.com/styleguide/img/logo__version-02-sm.svg");
	addStore("Mammoth", "https://www.mammothbikes.com/Content/images/mammoth/logo-web-mammoth.svg");
	addStore("Pasión Ciclista", "https://i.postimg.cc/VkLgkGH2/pasion-ciclista-1410767685.png");
	//addStore("Santafixie", "https://asociacionambe.com/wp-content/uploads/2021/10/LOGO-SANTAFIXIE-alta-768x140.png");
	addStore("Santini", "https://www.santinicycling.com/img/santini-maglificio-sportivo-logo-16164921601.jpg");
	addStore("TodoConsolas", "https://www.todoconsolas.com/img/todoconsolas-logo-1582897196.jpg");
	addStore("Vans", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/1280px-Vans-logo.svg.png");
	addStore("Wakkap", "https://images.prismic.io/rakuten-europe/3015a355-edf4-4ae6-b9b3-ecb245dacd46_wakkap.png");
	addStore("Xtralife", "https://res.cloudinary.com/admitad-gmbh/image/upload/w_auto,h_160,c_pad,b_white,f_auto/8454c674b2734e8ad652403983f121e0.png");
	addInfo("Alltricks", "Gastos de envío desde 3,99 €.<br>Envío gratuito a partir de 99 €.");
	addInfo("Barrabes", "Envío gratuito."/*"Gastos de envío desde 3,99 €.<br>Recogida gratuita en tienda."*/);
	addInfo("Bike24", "Gastos de envío desde 4,99 €.");
	addInfo("BikeInn", "Gastos de envío desde 2,99 €.<br>Recogida en punto de recogida desde 1,99 €.");
	addInfo("Deporvillage", "Gastos de envío desde 4,99 €.<br>Envío gratuito a partir de 49 €.");
	addInfo("El Corte Inglés", "Descuento del Montepío incluido.");
	addInfo("Escuela de Mecánica de Bicicletas", "Al acceder a emeb.es salta una ventana indicando que te envian un descuento del 25 % en la compra del manual si facilitas un email.");
	//addInfo("Game", "Gastos de envío: 4,99 €.<br>Recogida gratuita en tienda (La Vaguada).");
	addInfo("Garmin", "Envío gratuito a partir de 30 €.");
	addInfo("Mammoth", "Gastos de envío desde 2,99 €.<br>Recogida gratuita en tienda.");
	addInfo("Pasión Ciclista", "Gastos de envío desde 6 €.<br>Envío gratuito a partir de 100 €.");
	//addInfo("Santafixie", "Envío gratuito a partir de 49 €.");
	addInfo("Santini", "Envío gratuito a partir de 100 €");
	addInfo("TodoConsolas", "Gastos de envío: 0,99–3,95 €.<br>Recogida gratuita o por 2,95 en oficina de Correos.");
	addInfo("Vans", "Gastos de envío: 6 €.<br>Envío gratuito a partir de 80 €.");
	addInfo("Wakkap", "Gastos de envío: 2,99 €.");
	addInfo("Xtralife", "Gastos de envío: 2,99 €.");
	addItem("Five Staten (XL, kaki)", "https://bike.five-gloves.com/wp-content/uploads/2021/09/FIVE-GLOVES-BIKE-URBAN-STATEN-kaki-2022.jpg");
	addItem("Garmin Enduro 3", "https://cdn.lesnumeriques.com/product/75/75455/b963f968-enduro-3.jpg");
	addItem("Mecánica de bicicletas: Manual paso a paso", "https://dg9aaz8jl1ktt.cloudfront.net/uploaded_files/000/249/215/verkami_79b2a3fe72130511becee63c507b5803.jpg");
	addItem("Santini Big Bobble Hat (blanco)", "https://img.santinicycling.com/100300-large_default/gorra-trucker-uci-official.jpg");
	addItem("Santini UCI World Champion - Bolsa con cuerdas", "https://img.santinicycling.com/145405-large_default/uci-world-champion-bolsa-de-algodon-con-cuerdas.jpg");
	addItem("Santini UCI World Champion - Polo (M, blanco)", "https://img.santinicycling.com/154337-large_default/uci-world-champion-polo.jpg");
	addItem("Santini UCI World Champion - Poncho", "https://img.santinicycling.com/145444-large_default/uci-world-champion-poncho.jpg");
	addItem("Shimano TL-CN42", "https://cdn.mammothbikes.com/product/xlarge/168927.jpg");
	addItem("Star Wars Outlaws", "https://m.media-amazon.com/images/I/51WkH6oas+L._AC_.jpg");
	addItem("Vans Old Skool Check", "https://m.media-amazon.com/images/I/81ohBenSNyL._AC_SL1500_.jpg");
	addPrice("Five Staten (XL, kaki)", "Alltricks", 51.90, "https://www.alltricks.es/F-41489-gants/P-2004501-cinco_guantes_staten_khaki");
	addPrice("Shimano TL-CN42", "Alltricks", 30.96, "https://www.alltricks.es/F-11929-outillage/P-21185-indicador_de_desgaste_de_la_cadena_shimano_tl_cn42");
	addPrice("Star Wars Outlaws", "Amazon", 50.01, "https://www.amazon.es/Ubisoft-Star-Wars-Outlaws-PS5/dp/B0DGLV9Z86");
	addPrice("Shimano TL-CN42", "Amazon", 23.95, "https://www.amazon.es/Shimano-12160000-Comprobador-Desgaste-Tl-Cn42/dp/B00DT01OBC/");
	addPrice("Vans Old Skool Check", "Amazon", 35.18, "https://www.amazon.es/Vans-30828_323083-Ocultos-Unisex-Vn000h4xy281/dp/B0CN34KGYM/");
	addPrice("Garmin Enduro 3", "Barrabes", 809.99, "https://www.barrabes.com/reloj-garmin-enduro-3-crbn-gry-dlc/product-522925");
	addPrice("Shimano TL-CN42", "Bike24", 16.26, "https://www.bike24.com/p211603.html");
	addPrice("Garmin Enduro 3", "BikeInn", 822.99, "https://www.tradeinn.com/bikeinn/es/garmin-reloj-enduro-3-51-mm-solar-sapphire/141319945/p");
addPrice("Shimano TL-CN42", "BikeInn", 24.49, "https://www.tradeinn.com/bikeinn/es/shimano-herramienta-radial-s-tl-cn42/135997457/p");
	addPrice("Vans Old Skool Check", "BikeInn", 33.49, "https://www.tradeinn.com/dressinn/es/vans-mochila-old-skool-check-22l/140603432/p");
	addPrice("Garmin Enduro 3", "Deporvillage", 899.99, "https://www.deporvillage.com/garmin-enduro-3-zafiro-solar-51-mm");
	addPrice("Vans Old Skool Check", "Deporvillage", 36.95, "https://www.deporvillage.com/mochila-vans-old-skool-check-22l-negro-blanco");
	addPrice("Garmin Enduro 3", "El Corte Inglés", 836.99, "https://www.elcorteingles.es/deportes/A52638634-reloj-smartwatch-enduro-3-con-gps-de-alto-rendimiento-garmin/");
addPrice("Star Wars Outlaws", "El Corte Inglés", 76.17, "https://www.elcorteingles.es/videojuegos/A51463260-star-wars-outlaws-playstation-5/");
	addPrice("Mecánica de bicicletas: Manual paso a paso", "Escuela de Mecánica de Bicicletas", 47, "https://www.emeb.es/producto/libro-mecanica-de-bicicletas-manual-paso-a-paso/");
	addPrice("Garmin Enduro 3", "Garmin", 903.01, "https://www.garmin.com/es-ES/p/851039/pn/010-02751-01");
	addPrice("Shimano TL-CN42", "Mammoth", 23.95, "https://www.mammothbikes.com/comprobador-desgaste-shimano-comprobador-cadena-tl_cn42/p-133512");
	addPrice("Shimano TL-CN42", "Pasión Ciclista", 38.99, "https://pasionciclista.es/comprar-herramienta-taller-ciclismo/comprobadordesgastecadenatlcn42-10480-4524667988496.html");
	addPrice("Santini Big Bobble Hat (blanco)", "Santini", 30, "https://www.santinicycling.com/es/merchandise/gorra-trucker-uci-official-3477.html");
	addPrice("Santini UCI World Champion - Bolsa con cuerdas", "Santini", 15, "https://www.santinicycling.com/es/bolsas-ciclismo-hombre-mujer/uci-world-champion-bolsa-de-algodon-con-cuerdas-5831.html");
	addPrice("Santini UCI World Champion - Polo (M, blanco)", "Santini", 50, "https://www.santinicycling.com/es/informal/uci-world-champion-polo-5822.html#/5-talla-m/11-color-bi");
	addPrice("Santini UCI World Champion - Poncho", "Santini", 25, "https://www.santinicycling.com/es/merchandising-ciclismo-ideas-regalo/uci-world-champion-poncho-6080.html");
	addPrice("Star Wars Outlaws", "TodoConsolas", 67.95, "https://www.todoconsolas.com/juegos-ps5/139221-star_wars_outlaws_ps5_sp_203334-3307216284161.html");
	addPrice("Star Wars Outlaws", "Wakkap", 69.90, "https://wakkap.com/item/ps5-star-wars-outlaws");
	addPrice("Star Wars Outlaws", "Xtralife", 69.95, "https://www.xtralife.com/producto/star-wars-outlaws-ps5-estandar/80102");
	addPrice("Vans Old Skool Check", "Vans", 48, "https://www.vans.es/shop/es/vans-es/mochila-old-skool-check-vn000h4xy28");

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
