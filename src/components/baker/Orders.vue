
<template>
	<section>
		<div class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="@/assets/images/cakes/cake02.jpg" class="d-flex w-100 image-cake" alt="First Cake">
					<div class="carousel-caption d-md-block">
						<h1 class="title"> Welcome To Orders </h1>
						<h2 class="subtitle"> What will you find here? </h2>
						<p class="label"> You will be able to see the section of the orders made so far! </p>
					</div>
				</div>
			</div>
		</div>
	</section>
<section class="container-fluid panel">
		<div class="container">
			<div class="row">
				<div class="col">
					<h1 class="title text-uppercase"> Orders </h1>
				</div>
			</div>
			<div class="row">
				<caption class="caption-text"> List of Orders </caption>
				<div class="col">
					<div class="table-responsive">
						<table class="table caption-top align-middle">
							<thead>
								<tr class="th-text">
									<th scope="col"> Pedido </th>
									<th scope="col"> Name </th>
									<th scope="col"> Phone </th>
									<th scope="col"> Email </th>
									<th scope="col"> Description </th>
									<th scope="col"> Price </th>
									<th scope="col"> Flavors </th>
									<th scope="col"> Ornaments </th>
								</tr>
							</thead>
							<tbody>
								<tr class="options td-text" v-for="order of $store.getters.getOrders" :key="order.id">
									<td scope="row"> {{ order.id }} </td>
									<td> {{ order.name }} </td>
									<td> {{ order.phone }} </td>
									<td> {{ order.email }} </td>
									<td> {{ order.description }} </td>
									<td> {{ order.price }} </td>
									<td> <p v-for="flavor of order.flavors" :key="flavor.id"> {{ flavor }} </p> </td>
									<td> <p v-for="ornament of order.ornaments" :key="ornament.id"> {{ ornament }} </p> </td>
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
		name: 'Orders',
	}
</script>

<style scoped>

	section.container-fluid {
		margin: 30px 0;
		background: rgba(0, 0, 0, 0.05);
	}

	div .container {
		margin: 5px auto;
		padding: 30px 0;
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

	.caption-text {
		text-align: center;
		font-size: 2rem;
		font-family: 'Caveat', cursive;
	}

	.th-text {
		font-size: 2rem;
		font-family: 'Handlee', cursive;
	}

	.td-text {
		font-size: 1.2rem;
		font-family: 'Mali', cursive;
	}

	.options:hover {
		cursor: pointer;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	}

	@media (max-width: 575.98px) {
		.title {
			font-size: 3rem;
		}
		.subtitle {
			font-size: 1rem;
		}
		.label {
			margin-bottom: 0;
			font-size: 0.5rem;
		}
		.th-text {
			font-size: 2rem;
		}
		.td-text {
			font-size: 1.3rem;
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
		.th-text {
			font-size: 2rem;
		}
		.td-text {
			font-size: 1.5rem;
		}
	}

	@media (min-width: 768px) and (max-width: 991.98px) {
		.title {
			font-size: 6rem;
		}
		.subtitle {
			font-size: 2rem;
		}
		.label {
			margin-bottom: 35px;
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
