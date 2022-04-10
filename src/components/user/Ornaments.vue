
<template>
	<section class="row">
		<div class="col" v-for="ornament of $store.getters.getOrnaments" :key="ornament.id">
			<h2 class="title"> {{ ornament.type }} </h2>
			<div class="col">
				<div class="table-responsive">
					<table class="table caption-top align-middle">
						<thead>
							<tr class="btn-group space">
								<td v-for="type of ornament.features" :key="type.id">
									<input type="radio" class="btn-check" :id="type.decoration" :name="type.decortion" :value="type.decoration" v-model="changeOrnaments">
									<label class="btn btn-outline-danger label" :for="type.decoration"> <img class="image" :src="type.img" :alt="type.decoration"> {{ type.decoration }} </label>
								</td>
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
		name: 'Ornaments',
		computed: {
			changeOrnaments: {
				get() {
					return this.$store.state.order.ornaments;
				},
				set(ornaments) {
					this.$store.dispatch("changeOrnaments", ornaments);
				}
			}
		}
	}
/*
	<div class="col center">
		<div class="btn-group space" v-for="type of ornament.features" :key="type.id">
			<input type="radio" class="btn-check" :id="type.decoration" :name="type.decortion" :value="type.decoration" v-model="changeOrnaments">
			<label class="btn btn-outline-danger label" :for="type.decoration"> <img class="image" :src="type.img" :alt="type.decoration"> {{ type.decoration }} </label>
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
		font-family: 'Mali', cursive;
	}

</style>
