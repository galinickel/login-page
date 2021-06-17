<template>
	<div class="home">
		<section class="graphic">
			<img src="../assets/img/Login-illustration.svg" />
		</section>
		<section class="login">
			<GalisForm :userForm="form" @formSubmitted="logForm" />
			<p>עוד לא הצטרפת?</p>
			<!-- <GalisButton text="כניסה מהירה" color="blue" :isLoading="false" /> -->
		</section>
	</div>
</template>

<script>
import {
	GalisForm,
	//  GalisButton 
} from 'gali-package'
export default {
	name: 'Home',
	components: {
		GalisForm,
		//  GalisButton 
	},
	data() {

		return {
			form:
			{
				formBase: [
					{
						name: 'מייל',
						type: 'email',
						validation: (email) => {
							const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
							return re.test(String(email).toLowerCase());
						},
						invalidMsg: 'כתובת המייל איתה נרשמת לחשבונית ירוקה'
					}
					, {
						name: 'סיסמא',
						type: 'password',
						validation: (value) => { return value.length > 1 },
						invalidMsg: ''
					}
				],
				formTitle: 'היי, טוב לראות אותך',
				submitButton: {
					color: '#18c746',
					isLoading: false,
					text: 'כניסה'
				}
			},
		}
	},
	methods: {
		async logForm(form) {
			const user = { email: form[0].value, password: form[1].value }
			console.log(user, 'from app.vue')
			await this.$store.dispatch({
				type: 'login',
				userCred: user
			});
			console.log(this.loggedInUser);
			// try {

			// }
			// catch (err) {
			// 	console.log('error');
			// 	throw err
			// }
		}
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedInUser
		}
	}
}
</script>
