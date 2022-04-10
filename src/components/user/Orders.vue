
<template>
	<section>
		<div class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="@/assets/images/cakes/cake03.jpg" class="d-flex w-100 image-cake" alt="First Cake">
					<div class="carousel-caption d-md-block">
						<h1 class="title"> Orders </h1>
						<h2 class="text"> How To Make An Order? </h2>
						<p class="p"> Just enter your name, phone number, email, a description about your cake like "I'll like that my ornaments would put from this form...", and finally, you can select the flavors and ornaments that you want! So Easy! </p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid pink-panel">
		<div class="container">
			<div class="row">
				<div class="col">
					<h1 class="title"> Make Your Order </h1>
				</div>
			</div>
			<div class="row">
				<form class="row" autocomplete="off">
					<h2 class="subtitle"> Enter Your Data </h2>
					<div class="col-6">
						<label for="name" class="form-label label"> Enter Your Name: </label>
						<input type="text" name="name" class="form-control input" placeholder="Name" v-model="changeName" required>
					</div>
					<div class="col-6">
						<label for="phone" class="form-label label"> Enter Your Phone: </label>
						<input type="number" name="phone" class="form-control input" placeholder="Phone" v-model="changePhone" required>
					</div>
					<div class="col-12">
						<label for="email" class="form-label label"> Enter Your Email: </label>
						<input type="email" name="email" class="form-control input" placeholder="Email" v-model="changeEmail" required>
					</div>
					<div class="col center">
						<div class="col-8">
							<label for="description" class="form-label label"> Enter a Description of your cake: </label>
							<textarea name="description" class="form-control input" placeholder="Description" rows="10" v-model="changeDescription" required></textarea>
						</div>
					</div>
					<div class="col-12">
						<h2 class="subtitle"> Select Your Flavors </h2>
						<Flavors />
					</div>
					<div class="col-12">
						<h2 class="subtitle"> Select Your Ornaments </h2>
						<Ornaments />
					</div>
					<div class="col-12 center">
						<button class="btn btn-danger" @click="$store.dispatch('saveOrder')"> Order Cake </button>
					</div>
				</form>
			</div>
		</div>
	</section>	
</template>

<script>
	import Flavors from '@/components/user/Flavors.vue';
	import Ornaments from '@/components/user/Ornaments.vue';
	export default {
		name: 'Orders',
		components: {
			Flavors,
			Ornaments
		},
		computed: {
			changeName: {
				get() {
					return this.$store.state.order.name;
				},
				set(name) {
					this.$store.dispatch("changeName", name);
				}
			},
			changePhone: {
				get() {
					return this.$store.state.order.phone;
				},
				set(phone) {
					this.$store.dispatch("changePhone", phone);
				}
			},
			changeEmail: {
				get() {
					return this.$store.state.order.email;
				},
				set(email) {
					this.$store.dispatch("changeEmail", email);
				}
			},
			changeDescription: {
				get() {
					return this.$store.state.order.description;
				},
				set(description) {
					this.$store.dispatch("changeDescription", description);
				}
			}
		}
	}
</script>

<style scoped>

	.image-cake {
		filter: brightness(40%);
		background: #000;
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.container-fluid {
		margin: 30px 0;
		padding: 10px;
	}

	div .container {
		margin: 10px auto;
		padding: 10px;
	}

	div .row {
		margin: 10px 0;
		padding: 10px;
	}

	form.row {
		padding: 10px;
	}

	div .col,
	div .col-6,
	div .col-8,
	div .col-12 {
		padding: 10px;
	}

	div .col-8 {
		width: 70%;
	}

	.title {
		text-align: center;
		font-size: 11rem;
		font-weight: bold;
		font-family: 'Inspiration', cursive;
	}

	.subtitle {
		font-size: 3rem;
		text-align: center;
		font-weight: bold;
		font-family: 'Mali', cursive;
	}

	.input {
		font-size: 2rem;
		border-radius: 10px;
		font-family: 'Handlee', cursive;
	}

	.text {
		text-align: center;
		font-weight: bold;
		font-family: 'Mali', cursive;
	}

	.input:hover {
		border: 1px solid rgba(0, 255, 255, 0.5);
	}

	.label {
		font-size: 1.5rem;
		font-family: 'Mali', cursive;
	}

	.p {
		font-size: 20px;
		font-family: 'Mali', cursive;
	}

	.pink-panel {
		background: rgb(255, 230, 255);
	}

	#title {
		width: 100%;
		margin: 0;
		padding: 50px 0;
		background: rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 575.98px) {
		.title {
			font-size: 5rem;
		}
		.text {
			font-size: 1.3rem;
		}
		.p {
			margin-bottom: 0;
			font-size: 0.5rem;
		}
		.input {
			font-size: 1.3rem;
		}
		.label {
			font-size: 0.8rem;
		}
		.subtitle {
			font-size: 1.5rem;
		}
		div .col-8 {
			width: 100%;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		.title {
			font-size: 6rem;
		}
		.text {
			font-size: 1.8rem;
		}
		.p {
			margin-bottom: 10px;
			font-size: 0.8rem;
		}
		.input {
			font-size: 1.5rem;
		}
		.label {
			font-size: 1rem;
		}
		.subtitle {
			font-size: 2rem;
		}
		div .col-8 {
			width: 100%;
		}
	}

	@media (min-width: 768px) and (max-width: 991.98px) {
		.title {
			font-size: 8rem;
		}
		.text {
			font-size: 2rem;
		}
		.p {
			margin-bottom: 25px;
			font-size: 1rem;
		}
		.input {
			font-size: 1.8rem;
		}
		.label {
			font-size: 1rem;
		}
		.subtitle {
			font-size: 3rem;
		}
		div .col-8 {
			width: 100%;
		}
	}

</style>
