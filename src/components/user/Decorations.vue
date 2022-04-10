
<template>
	<section>
		<div class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="@/assets/images/cakes/cake02.jpg" class="d-flex w-100 image-cake" alt="First Cake">
					<div class="carousel-caption d-md-block">
						<h1 class="title"> Types Of Ornaments </h1>
						<h2 class="input"> What Are Our Decorations? </h2>
						<p class="label"> All this are our decorations to cakes, you can decide against a few variety of the best ornaments divided in one categorie: Candles </p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid" :class="ornament.background" v-for="ornament of $store.getters.getOrnaments" :key="ornament.id">
		<div class="container">
			<div class="row">
				<div class="col">
					<h2 class="subtitle"> {{ ornament.type }} </h2>
				</div>
			</div>
			<div class="row">
				<caption class="caption-text"> List of Decorations </caption>
				<div class="col">
					<div class="table-responsive">
						<table class="table caption-top align-middle">
							<thead>
								<tr class="th-text">
									<th scope="col"> Picture </th>
									<th scope="col"> Ornament </th>
									<th scope="col"> Price </th>
									<th scope="col"> Stock </th>
								</tr>
							</thead>
							<tbody>
								<tr class="options td-text" v-for="feature of ornament.features" :key="feature.id">
									<td scope="row"> <img class="image" :src="feature.img"> </td>
									<td> {{ feature.decoration }} </td>
									<td> ${{ feature.price }}.00 </td>
									<td> {{ feature.stock }} </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Decorations'
	}
</script>

<style scoped>

	.image-cake {
		filter: brightness(40%);
		background: #000;
	}

	section.container-fluid {
		margin: 30px 0;
		padding: 5px;
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
		margin: 5px;
		padding: 5px;
	}

	.purple-panel {
		background: rgb(243, 232, 243);
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

	.green-panel {
		background: rgb(225, 255, 225);
	}

	.turquoise-panel {
		background: rgb(235, 255, 255);
	}

	.title {
		text-align: center;
		font-size: 10rem;
		font-weight: bold;
		font-family: 'Inspiration', cursive;
	}

	.subtitle {
		margin-top: 50px;
		font-size: 12rem;
		font-weight: bold;
		text-align: center;
		font-family: 'Inspiration', cursive;
	}

	caption {
		text-align: center;
	}

	table {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 70px;
		text-align: center;
		background: rgba( 255, 255, 255, 0.1);
	}

	.image {
		width: 100px;
		height: 60px;
	}

	.options:hover {
		cursor: pointer;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	}

	.caption-text {
		font-size: 2rem;
		font-family: 'Caveat', cursive;
	}

	.th-text {
		font-size: 4rem;
		font-family: 'Handlee', cursive;
	}

	.td-text {
		font-size: 2rem;
		font-family: 'Mali', cursive;
	}

	.input {
		text-align: center;
		font-weight: bold;
		font-family: 'Mali', cursive;
	}

	.label {
		margin-bottom: 100px;
		font-size: 20px;
		font-family: 'Mali', cursive;
	}

	@media (max-width: 575.98px) {
		.title {
			font-size: 3rem;
		}
		.input {
			font-size: 1rem;
		}
		.label {
			margin-bottom: 0px;
			font-size: 0.5rem;
		}
		.subtitle {
			font-size: 6rem;
		}
		.th-text {
			font-size: 1.3rem;
		}
		.td-text {
			font-size: 0.8rem;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		.title {
			font-size: 4.3rem;
		}
		.input {
			font-size: 1.5rem;
		}
		.label {
			margin-bottom: 20px;
			font-size: 0.8rem;
		}
		.subtitle {
			font-size: 8rem;
		}
		.th-text {
			font-size: 2rem;
		}
		.td-text {
			font-size: 1.3rem;
		}
	}

	@media (min-width: 768px) and (max-width: 991.98px) {
		.title {
			font-size: 5.5rem;
		}
		.input {
			font-size: 1.8rem;
		}
		.label {
			margin-bottom: 35px;
			font-size: 1rem;
		}
		.subtitle {
			font-size: 10rem;
		}
		.th-text {
			font-size: 3rem;
		}
		.td-text {
			font-size: 1.8rem;
		}
	}

</style>
