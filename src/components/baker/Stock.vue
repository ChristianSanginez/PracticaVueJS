
<template>
	<section>
		<div class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="@/assets/images/cakes/cake03.jpg" class="d-flex w-100 image-cake" alt="First Cake">
					<div class="carousel-caption d-md-block">
						<h1 class="title"> Welcome To Stock </h1>
						<h2 class="subtitle"> What will you find here? </h2>
						<p class="label"> You can see the remaining flavors and decorations in stock so far! </p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid panel">
		<div class="container">
			<div class="row">
				<div class="col">
					<h1 class="title text-uppercase"> Cakes &nbsp; Stock </h1>
				</div>
			</div>
			<div class="row" v-for="cake of $store.getters.getCakes" :key="cake.id">
				<div class="col">
					<div class="table-responsive">
						<h2 class="title"> {{ cake.type }} </h2>
						<table class="table caption-top align-middle">
							<caption class="caption-text"> Stock of Flavors </caption>
							<thead>
								<tr class="th-text">
									<th scope="col"> Picture </th>
									<th scope="col"> Flavor </th>
									<th scope="col"> Stock </th>
								</tr>
							</thead>
							<tbody>
								<tr class="options td-text" v-for="feature of cake.features" :key="feature.id">
									<td scope="row"> <img class="image" :src="feature.img"> </td>
									<td> {{ feature.flavor }} </td>
									<td> {{ feature.stock }} </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid panel">
		<div class="container">
			<div class="row">
				<div class="col">
					<h1 class="title text-uppercase"> Ornaments &nbsp; Stock </h1>
				</div>
			</div>
			<div class="row" v-for="ornament of $store.getters.getOrnaments" :key="ornament.id">
				<div class="col">
					<div class="table-responsive">
						<h2 class="title"> {{ ornament.type }} </h2>
						<table class="table caption-top align-middle">
							<caption class="caption-text"> Stock of Ornaments </caption>
							<thead>
								<tr class="th-text">
									<th scope="col"> Picture </th>
									<th scope="col"> Ornament </th>
									<th scope="col"> Stock </th>
								</tr>
							</thead>
							<tbody>
								<tr class="options td-text" v-for="feature of ornament.features" :key="feature.id">
									<td scope="row"> <img class="image" :src="feature.img"> </td>
									<td> {{ feature.decoration }} </td>
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
		name: 'Stock'
	}
</script>

<style scoped>

	section.container-fluid {
		margin: 30px 0;
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

	.image-cake {
		filter: brightness(40%);
		background: #000;
	}

	.title {
		width: 100%;
		margin: 0;
		padding: 0;
		text-align: center;
		font-size: 9.5rem;
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

	table {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 70px;
		text-align: center;
		background: rgba( 255, 255, 255, 0.1);
	}

	.options:hover {
		cursor: pointer;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	}

	.caption-text {
		text-align: center;
		font-size: 2rem;
		font-family: 'Caveat', cursive;
	}

	.th-text {
		text-align: center;
		font-size: 4rem;
		font-family: 'Handlee', cursive;
	}

	.td-text {
		text-align: center;
		font-size: 2rem;
		font-family: 'Mali', cursive;
	}

	.image {
		width: 100px;
		height: 60px;
	}

	@media (max-width: 575.98px) {
		.title {
			font-size: 3.5rem;
		}
		.subtitle {
			font-size: 1rem;
		}
		.label {
			margin-bottom: 0;
			font-size: 0.5rem;
		}
		.th-text {
			font-size: 1.5rem;
		}
		.td-text {
			font-size: 1rem;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		.title {
			font-size: 5.3rem;
		}
		.subtitle {
			font-size: 1.5rem;
		}
		.label {
			margin-bottom: 10px;
			font-size: 0.8rem;
		}
		.th-text {
			font-size: 2rem;
		}
		.td-text {
			font-size: 1.5rem;
		}
	}

	@media (min-width: 768px) and (max-width: 991.98px) {
		.title {
			font-size: 7rem;
		}
		.subtitle {
			font-size: 1.8rem;
		}
		.label {
			margin-bottom: 10px;
			font-size: 1rem;
		}
		.th-text {
			font-size: 3rem;
		}
		.td-text {
			font-size: 2rem;
		}
	}

</style>
