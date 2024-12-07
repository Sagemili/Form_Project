<script>
	window.onload=()=>
	{
		const form = document.querySelector("form");
		const input = document.querySelector("#txtTel");
		form.onsubmit = (e) =>
	{
		const phoneNumber = input.value.trim();
		if (!/^\d{10}$/.test(phoneNumber))
		{
			e.preventDefault();
			alert("Please enter a valid phone number.");
		 }
	};

	};
</script>
