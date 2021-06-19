<template>
	<div class="user-page">
		<GalisLoader :isLoading="loadingToggler" />
		<section class="user-panel"></section>

		<section>
			<section class="user-info">
				<h2>כל הפרטים שלך, ממש כאן</h2>
				<div>
					<div class="field" v-for="field in userToDisplay" :key="field.label">
						<div>{{ field.label }}</div>
						<div>{{ field.name }}</div>
					</div>
				</div>
				<div class="user-button">
					<p class="logout-msg">מוכנים לצאת?</p>
					<GalisButton
						text="יציאה"
						color="#18c746"
						:isLoading="loadingToggler"
						@click.native="logOut"
					/>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
import { GalisButton, GalisLoader } from 'gali-package'
export default {
	components: { GalisButton, GalisLoader },
	data() {
		return {
			loadingToggler: false,
			userToDisplay: {}
		}
	},
	methods: {
		logOut() {
			this.loadingToggler = true

			setTimeout(() => {
				this.loadingToggler = false
				this.$store.dispatch({ type: 'logout' })
				this.$router.push('/')
			}, 1500);
		}
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedInUser
		}
	},
	created() {
		const { firstName, lastName, idNumber, email, phone, subscriptionExpirationDate, activationDate } = this.loggedInUser
		this.userToDisplay = [
			{ name: firstName, label: "שם פרטי" },
			{ name: lastName, label: "שם משפחה" },
			{ name: idNumber, label: "מספר ת.ז" },
			{ name: email, label: "כתובת אימייל" },
			{ name: phone, label: "מספר טלפון" },
			{ name: subscriptionExpirationDate, label: "מנוי עד:" },
			{ name: activationDate, label: "רשום מתאריך:" }]
	}
}
</script>