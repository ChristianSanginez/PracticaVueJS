
<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/"> <img class="image" src="../assets/images/logo/logo.png" alt="Pasteleria La Buena Vida"> </router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav ms-auto link">
					<router-link class="nav-link" to="/user"> Home </router-link>
					<router-link class="nav-link" to="/cakes"> Cakes </router-link>
					<router-link class="nav-link" to="/decorations"> Decorations </router-link>
					<router-link class="nav-link" to="/order"> Order </router-link>
					<router-link class="nav-link" to="/baker"> Baker </router-link>
				</div>
			</div>
		</div>
	</nav>
	<router-view/>
	<Footer/>
</template>

<script>
	import Footer from '@/components/Footer';
	export default {
		name: 'UserView',
		components: {
			Footer
		}
	}
</script>

<style scoped>

	.image {
		width: 75px;
	}
	.link {
		font-size: 1.3rem;
		font-family: 'Mali', cursive;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav {
		padding: 10px 30px;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}

	@media (max-width: 575.98px) {
		.image {
			width: 55px;
		}
	}

</style>
