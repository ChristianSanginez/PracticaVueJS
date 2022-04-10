
<template>
	<section>
		<div class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="@/assets/images/cakes/cake01.jpg" class="d-flex w-100 image-cake" alt="First Cake">
					<div class="carousel-caption d-md-block">
						<h1 class="title"> Welcome To Baker </h1>
						<h2 class="subtitle"> What will you find here? </h2>
						<p class="label"> You will be able to see the remaining flavors and decorations in stock, as well as a section of the orders made so far! </p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid panel">
		<div class="container">
			<div class="row">
				<div class="col">
					<h1 class="title text-uppercase"> Baker! </h1>
				</div>
			</div>
			<div class="row">
				<div class="col-6 position">
					<div class="target">
						<router-link to="/stock"> <img class="image" src="@/assets/images/options/stock.png" alt="Stock"> </router-link>
					</div>
				</div>
				<div class="col-6 position">
					<div class="target">
						<router-link to="/orders"> <img class="image" src="@/assets/images/options/orders.png" alt="Orders"> </router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Baker'
	}
</script>

<style scoped>

	.position {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.container-fluid {
		margin: 30px 0;
		padding: 30px 0;
		background: rgba(0, 0, 0, 0.05);
	}

	div .container {
		margin: 5px auto;
		padding: 5px;
	}

	div .row {
		margin: 5px;
		padding: 5px;
	}

	div .col {
		padding: 20px;
	}

	div .col-6 {
		height: 330px;
	    padding: 10px;
	}

	.target {
		position: relative;
		width: 90%;
		border-radius: 10px;
		box-shadow: 3px 1px 15px rgba(0, 0, 0, 0.5);
		background: rgba(0, 0, 0, 0.5);
	}

	.target:hover {
		width: 100%;
		box-shadow: 8px 3px 30px rgba(0, 0, 0, 0.8);
	}

	.title {
		width: 100%;
		margin: 0;
		padding: 0;
		text-align: center;
		font-size: 7rem;
		font-weight: bold;
		font-family: 'Inspiration', cursive;
	}

	.subtitle {
		text-align: center;
		font-weight: bold;
		font-family: 'Mali', cursive;
	}

	.label {
		margin-bottom: 100px;
		font-size: 20px;
		font-family: 'Mali', cursive;
	}

	.image {
		width: 100%;
	    border-radius: 10px;
	    opacity: 70%;
	    filter: brightness(30%);
	}

	.image-cake {
		filter: brightness(40%);
		background: #000;
	}

	.image:hover {
		opacity: 90%;
		filter: brightness(70%);
	}

	/* MEDIA QUERIES */
	@media (max-width: 575.98px) {
		.title {
			font-size: 3.3rem;
		}
		.subtitle {
			font-size: 1rem;
		}
		.label {
			margin-bottom: 0;
			font-size: 0.5rem;
		}
		section.container-fluid {
			margin: 15px auto;
			padding: 50px 0;
		}
		div .container {
			padding: 0;
		}
		div .row {
			width: 100%;
			margin: 0 auto;
			padding: 0;
		}
		div .col {
			padding: 0;
		}
		div .col-6 {
			width: 100%;
			margin: 0 auto;
			height: 370px;
			padding: 10px;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		.title {
			font-size: 4.5rem;
		}
		.subtitle {
			font-size: 1.5rem;
		}
		.label {
			margin-bottom: 10px;
			font-size: 0.8rem;
		}
		section.container-fluid {
			margin: 15px 0;
		}
		div .container {
			padding: 0;
		}
		div .row {
			padding: 0;
		}
		div .col {
			padding: 0;
		}
		div .col-6 {
			width: 100%;
			height: 370px;
			padding: 10px;
		}
	}

	@media (min-width: 768px) and (max-width: 991.98px) {
		.title {
			font-size: 6.3rem;
		}
		.subtitle {
			font-size: 2rem;
		}
		.label {
			margin-bottom: 20px;
			font-size: 1rem;
		}
		section.container-fluid {
			margin: 30px 0;
		}
		div .container {
			padding: 20px;
		}
		div .row {
			padding: 0;
		}
		div .col {
			padding: 0;
		}
		div .col-6 {
			width: 100%;
			height: 470px;
			padding: 0;
		}
	}

</style>
