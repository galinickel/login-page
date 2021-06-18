<template>
	<div class="user-panel">
		<GalisLoader 			:isLoading="loadingToggler"
/>
		<h1>Welcome to User Panel</h1>
		{{loggedInUser}}
		<GalisButton
		text="יציאה"
			color="#18c746"
			:isLoading="loadingToggler"
			@click.native="logOut"
		/>
	</div>
</template>

<script>
import { GalisButton, GalisLoader } from 'gali-package'
export default {
	components: { GalisButton,GalisLoader },
	data() {
		return {
			loadingToggler: false
		}
	},
	methods: {
		logOut() {
			this.loadingToggler = true

			setTimeout(() => {
				this.loadingToggler = false
				this.$store.dispatch({type:'logout'})
				this.$router.push('/')
			}, 1500);
		}
	},
	computed:{
		loggedInUser(){
			return this.$store.getters.loggedInUser
		}
	},
	created(){
		console.log(this.loggedInUser);
	}
}
</script>