
<template>
	<footer class="container-fluid bg-dark">
		<div class="col-md-4 d-flex align-items-center">
			<span class="mb-3 me-2 text-muted"> &nbsp; &copy; Created by Christian Sanginez </span>
		</div>
		<div class="redes-sociales my-2">
			<a class="twitter" href="http://twitter.com" target="_blank"> <i class="fa fa-twitter mx-2"> </i> </a>
			<a class="facebook" href="http://facebook.com" target="_blank"> <i class="fa fa-facebook mx-2"> </i> </a>
			<a class="youtube" href="http://youtube.com" target="_blank"> <i class="fa fa-youtube-play mx-2"> </i> </a>
			<a class="github" href="httt://github.com" target="_blank"> <i class="fa fa-github mx-2"> </i> </a>
			<a class="instagram" href="http://instagram.com" target="_blank"> <i class="fa fa-instagram mx-2"> </i> </a>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style scoped>

	footer {
		margin: 0;
		padding: 35px 20px 20px 20px;
		color: #fff;
		position: absolute;
		display: flex;
		flex-direction: row;
		justify-content: center;

	}
	footer .redes-sociales a {
		color: #fff;
		text-decoration: none;
		margin: 0 10px;
	}
	footer .redes-sociales .twitter:hover {
		color: #1DA1F2;
	}
	footer .redes-sociales .facebook:hover {
		color: #3B5998;
	}
	footer .redes-sociales .youtube:hover {
		color: #C2201F;
	}
	footer .redes-sociales .github:hover {
		color: #666666;
	}
	footer .redes-sociales .instagram:hover {
		color: #3F729B;
	}
	@media (max-width: 575.98px) {
		footer {

			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
	}
	@media (min-width: 576px) and (max-width: 767.98px) {
		footer {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
	}
	@media (min-width: 768px) and (max-width: 991.98px) {
		footer {
			padding: 35px 0 25px 0;
			flex-direction: row;
			justify-content: space-around;
		}
	}

</style>
