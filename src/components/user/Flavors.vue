
<template>
	<section class="row">
		<div class="col-12" v-for="flavor of $store.getters.getCakes" :key="flavor.id">
			<h2 class="title"> {{ flavor.type }} </h2>
			<div class="col">
				<div class="table-responsive">
					<table class="table caption-top align-middle">
						<thead>
							<tr class="btn-group space">
								<th v-for="type of flavor.features" :key="type.id">
									<input type="radio" class="btn-check" :id="type.flavor" :name="type.flavor" :value="type.flavor" v-model="changeFlavors">
									<label class="btn btn-outline-danger label" :for="type.flavor"> <img class="image" :src="type.img" :alt="type.flavor"> {{ type.flavor }} </label>
								</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Flavors',
		computed: {
			changeFlavors: {
				get() {
					return this.$store.state.order.flavors;
				},
				set(flavors) {
					this.$store.dispatch("changeFlavors", flavors);
				}
			}
		}
	}
/*
	<div class="col center">
		<div class="btn-group space" v-for="type of flavor.features" :key="type.id">
			<input type="radio" class="btn-check" :id="type.flavor" :name="type.flavor" :value="type.flavor" v-model="changeFlavors">
			<label class="btn btn-outline-danger label" :for="type.flavor"> <img class="image" :src="type.img" :alt="type.flavor"> {{ type.flavor }} </label>
		</div>
	</div>
*/
</script>

<style scoped>

	.center {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.image {
		width: 150px;
		height: 80px;
	}

	.title {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		font-family: 'Handlee', cursive;
	}

	div .row {
		margin: 10px 0;
		padding: 10px;
	}

	div .col,
	div .col-12 {
		padding: 10px;
	}

	.space {
		margin: 0 5px;
	}

	.label {
		width: 100%;
		font-family: 'Mali', cursive;
	}

</style>
