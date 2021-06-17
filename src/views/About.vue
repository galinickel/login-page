<template>
	<div class="about">
		<h1>This is an about page</h1>
		<GalisButton
		text="כניסה"
			color="#18c746"
			:isLoading="isButtonLoading"
			@click.native="toggleLoader"
		/>
		<GalisInput :userInput="userInput" />
	</div>
</template>

<script>
import { GalisButton, GalisInput } from 'gali-package'
export default {
	components: { GalisButton, GalisInput },
	data() {
		return {
			isButtonLoading: false,
			userInput: {
				name: 'מייל',
				type: 'text',
				validation: (value) => { return value.length < 5 && value.length > 1 },
				invalidMsg: 'כתובת המייל איתה נרשמת לחשבונית ירוקה'
			}
		}
	},
	methods: {
		toggleLoader() {
			this.isButtonLoading = true
			setTimeout(() => {
				this.isButtonLoading = false
			}, 1500);
		}
	}
}
</script>