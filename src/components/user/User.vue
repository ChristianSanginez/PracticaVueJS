
<template>
	<section>
		<div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active" data-bs-interval="5000">
					<img src="@/assets/images/cakes/cake01.jpg" class="d-flex w-100 image-cake" alt="First Cake">
					<div class="carousel-caption d-md-block">
						<h3 class="carousel-title"> The Best Cakes In the State! </h3>
						<p class="carousel-subtitle"> Select from a wide variety of flavors and combine them as you wish </p>
					</div>
				</div>
				<div class="carousel-item" data-bs-interval="2000">
					<img src="@/assets/images/cakes/cake02.jpg" class="d-block w-100 image-cake" alt="Second Cake">
					<div class="carousel-caption d-md-block">
						<h3 class="carousel-title"> Customize Your Cake As You Want! </h3>
						<p class="carousel-subtitle"> Select from a wide variety of decorations and make a unique cake </p>
					</div>
				</div>
				<div class="carousel-item" data-bs-interval="3500">
					<img src="@/assets/images/cakes/cake03.jpg" class="d-block w-100 image-cake" alt="Third Cake">
					<div class="carousel-caption d-md-block">
						<h3 class="carousel-title"> Make Your Order Online </h3>
						<p class="carousel-subtitle"> Forget about leaving home to order a cake </p>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</section>
	<section class="container-fluid red-panel">
		<div class="container">
			<div class="row">
				<h2 class="title"> About Our Cakes! </h2>
			</div>
			<div class="row">
				<div class="col-5 position">
					<img class="image" src="@/assets/images/cakes/cake04.jpg" alt="">
				</div>
				<div class="col-7">
					<div class="text">
						<p> - We have created a new concept that unites the best of flavours, fruit essences, exotic mixtures and aromatic grains so that you can enjoy the sweetest of experiences. </p>
						<p> - We like to pamper you through the taste senses, and to achieve this we have created an exquisite range of cakes rich in personality, guaranteeing you the need for more than one slice a day. </p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid blue-panel">
		<div class="container">
			<div class="row">
				<h2 class="title"> See Our Different Services! </h2>
			</div>
			<div class="row">
				<div class="col-4">
					<router-link class="decoration" to="/cakes">
						<div class="target">
							<img src="@/assets/images/cakes/cake05.jpg" class="card-img-top" alt="Cakes">
							<div class="card-body">
								<h5 class="card-title text-uppercase"> Our&nbsp; Cakes! </h5>
								<p class="card-text"> Choose from a wide variety of flavors and types of cake, captivate your eyes </p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="col-4">
					<router-link class="decoration" to="/decorations">
						<div class="target">
							<img src="@/assets/images/cakes/cake06.jpg" class="card-img-top" alt="Cakes">
							<div class="card-body">
								<h5 class="card-title text-uppercase"> Our Decorations! </h5>
								<p class="card-text"> Choose from a wide variety of designs, embellishments and styles </p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="col-4">
					<router-link class="decoration" to="/order">
						<div class="target">
							<img src="@/assets/images/cakes/cake07.jpg" class="card-img-top" alt="Cakes">
							<div class="card-body">
								<h5 class="card-title text-uppercase"> Order&nbsp; A   Cake! </h5>
								<p class="card-text"> Place your order, just choose the flavors and decorations that you want </p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid yellow-panel">
		<div class="container">
			<div class="row">
				<h2 class="title"> Our Address! </h2>
			</div>
			<div class="row center">
				<div class="col-6">
					<div class="container direction">
						<div class="border">
							<p> <b> Avenida 25 Oriente #1743 </b> </p>
							<p> Puebla, Puebla </p>
						</div>
						<div class="border">
							<p> 001-132-8193 </p>
							<p> la_buenav@mail.mx </p>
						</div>
						<div class="border">
							<p> Monday to Saturday: <b> 08:00 hrs - 20:00 hrs </b> </p>
							<p> Domingos: <b> 10:00 hrs - 14:00 hrs </b> </p>
						</div>
					</div>
				</div>
				<div class="col-6">
					<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15319.963165240842!2d-98.19681022559959!3d19.04404553858307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1648261277348!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
	</section>
</template>


<style scoped>

	/* ---------- STYLES ---------- */
	/* --------- CAROUSEL --------- */
	.carousel-title {
		margin: 0;
		font-size: 60px;
		font-weight: bold;
		font-family: 'Handlee', cursive;
	}

	.carousel-subtitle {
		width: 100%;
		margin: 0;
		margin-bottom: 50px;
		font-size: 25px;
		font-family: 'Mali', cursive;
	}

	/* --------- CAROUSEL --------- */
	/* MESSAGE */
	.image-cake {
		filter: brightness(40%);
		background: #000;
	}

	.position {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.center {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.red-panel {
		background: rgb(255, 245, 245);
	}

	.blue-panel {
		background: rgb(245, 245, 255);
	}

	.yellow-panel {
		background: rgb(255, 255, 215);
	}

	section.container-fluid {
		margin: 30px 0;
		padding: 100px 0;
	}

	div .container {
		width: 100%;
		padding: 5px 15px;
	}

	div .row {
		padding: 5px;
	}

	div .col-4 {
		height: 430px;
		margin: 30px auto;
		padding: 5px;
	}

	div .col-5 {
		padding: 5px;
	}

	div .col-7 {
		padding: 10px 20px;
	}

	div .border {
		font-size: 25px;
		padding: 10px;
		border: 2px solid #000;
		border-radius: 10px;
	}

	div .border:hover {
		cursor: pointer;
		opacity: 50%;
		box-shadow: 5px 2px 20px rgba(0, 0, 0, 0.5);
	}

	.image {
		width: 100%;
	}

	.title {
		margin: 0;
		padding: 0;
		text-align: center;
		font-size: 7rem;
		font-weight: bold;
		font-family: 'Inspiration', cursive;
	}

	.text {
		text-align: justify;
		font-size: 35px;
		font-family: 'Annie Use Your Telescope', cursive;
	}

	.target {
		width: 80%;
		margin: 10px auto;
		border-radius: 10px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
		background: #FFF;
	}

	.target:hover {
		width: 90%;
		height: 97%;
		margin: 5px auto;
		cursor: pointer;
		font-size: 60px;
		opacity: 70%;
		filter: brightness(90%);
		box-shadow: 2px 5px 20px rgb(0, 0, 0);
	}

	.decoration {
		text-decoration: none;
		color: #000;
	}

	.card-title {
		text-align: center;
		font-size: 23px;
		margin-bottom: 15px;
		font-weight: bold;
		font-family: 'Rock Salt', cursive;
	}

	.card-text {
		text-align: center;
		font-size: 20px;
		font-family: 'Gloria Hallelujah', cursive;
	}

	.direction {
		text-align: center;
		font-size: 30px;
		font-family: 'Caveat', cursive;
	}

	.map {
		width: 100%;
		padding: 5px;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.map:hover {
		box-shadow: 5px 2px 20px rgba(0, 0, 0, 0.5);
	}

	@media (max-width: 575.98px) {
		/* CAROUSEL */
		.carousel-title {
			font-size: 1.2rem;
		}
		.carousel-subtitle {
			margin-bottom: 25px;
			font-size: 0.5rem;
		}
		/* MESSAGE */
		.title {
			font-size: 4rem;
		}
		div .col-5 {
			width: 100%;
		}
		div .col-7 {
			width: 100%;
		}
		.image {
			width: 95%;
		}
		.text {
			font-size: 1.7rem;
		}
		/* SERVICES */
		div .col-4 {
			width: 100%;
			height: 470px;
			margin: 5px auto;
		}
		.target {
			width: 80%;
		}

		.target:hover {
			width: 85%;
			height: 97%;
			padding: 0;
		}

		.card-title {
			font-size: 20px;
		}

		.card-text {
			font-size: 20px;
		}

		/* ADDRESS */
		div .col-6 {
			width: 100%;
		}
		.map {
			height: 200px;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		/* CAROUSEL */
		.carousel-title {
			font-size: 1.7rem;
		}
		.carousel-subtitle {
			margin-bottom: 25px;
			font-size: 0.8rem;
		}
		/* MESSAGE */
		.title {
			font-size: 6rem;
		}
		div .col-5 {
			width: 100%;
		}
		div .col-7 {
			width: 100%;
		}
		.image {
			width: 100%;
		}
		.text {
			font-size: 2rem;
		}
		/* SERVICES */
		div .col-4 {
			width: 100%;
			height: 500px;
			margin: 5px auto;
		}
		.target {
			width: 80%;
		}
		.target:hover {
			width: 90%;
			height: 97%;
			padding: 0;
		}
		/* ADDRESS */
		div .col-6 {
			width: 100%;
		}
		.map {
			height: 350px;
		}
	}

	@media (min-width: 768px) and (max-width: 991.98px) {
		/* CAROUSEL */
		.carousel-title {
			font-size: 2rem;
		}
		.carousel-subtitle {
			margin-bottom: 25px;
			font-size: 1rem;
		}
		/* MESSAGE */
		.title {
			font-size: 6rem;
		}
		div .col-5 {
			width: 100%;
		}
		div .col-7 {
			width: 100%;
		}
		.image {
			width: 95%;
		}
		.text {
			font-size: 2rem;
		}
		/* SERVICES */
		div .col-4 {
			width: 100%;
			height: 560px;
			margin: 5px auto;
		}
		.target {
			width: 75%;
		}
		.target:hover {
			width: 85%;
			height: 97%;
			padding: 0;
		}
		/* ADDRESS */
		div .border {
			font-size: 18px;
			padding: 5px 0;
		}
		.map {
			height: 350px;
		}
	}

	@media (min-width: 992px) and (max-width: 1200px) {

	}

</style>
