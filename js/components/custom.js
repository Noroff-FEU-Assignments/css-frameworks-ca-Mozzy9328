const navContainer = document.querySelector(".nav-container");
const tabContainer = document.querySelector(".tab-container");

window.addEventListener("resize", function () {
	if (window.matchMedia("(max-width: 880px)").matches) {
		navContainer.innerHTML = `<div class="nav nav-tabs" id="nav-tab">
		<button
			class="nav-link active"
			id="nav-home-tab"
			data-bs-toggle="tab"
			data-bs-target="#nav-home"
			type="button"
			role="tab"
			aria-controls="nav-home"
			aria-selected="true"
		>
			First
		</button>
	</div>
	<div class="tab-content" id="myTabContent">
		<div
			class="tab-pane fade show active"
			id="nav-home"
			role="tabpanel"
			aria-labelledby="nav-home-tab"
		>
			<div class="card mb-3" style="max-width: auto">
				<div class="row g-0">
					<div class="col-md-4">
						<img
							src="images/tab/tab-1.jpg"
							class="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<p class="card-body__text">
								Morbi eget efficitur turpis. Vivamus pellentesque tortor
								massa, venenatis pharetra leo laoreet a. Nullam non
								eleifend justo, a ullamcorper turpis. Cras vehicula
								pharetra lectus non maximus. Sed condimentum mattis
								rhoncus.
							</p>
							<div class="card-body__text">
								<a href="#">SHARE</a>
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-twitter"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="nav nav-tabs" id="nav-tab">
		<button
			class="nav-link"
			id="nav-profile-tab"
			data-bs-toggle="tab"
			data-bs-target="#nav-profile"
			type="button"
			role="tab"
			aria-controls="nav-profile"
			aria-selected="false"
		>
			Second
		</button>
	</div>
	<div class="tab-content" id="myTabContent">
		<div
			class="tab-pane fade"
			id="nav-profile"
			role="tabpanel"
			aria-labelledby="nav-profile-tab"
		>
			<div class="card mb-3" style="max-width: auto">
				<div class="row g-0">
					<div class="col-md-4">
						<img
							src="images/tab/tab-2.jpg"
							class="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<p class="card-body__text">
								Morbi eget efficitur turpis. Vivamus pellentesque tortor
								massa, venenatis pharetra leo laoreet a. Nullam non
								eleifend justo, a ullamcorper turpis. Cras vehicula
								pharetra lectus non maximus. Sed condimentum mattis
								rhoncus.
							</p>
							<div class="card-body__text">
								<a href="#">SHARE</a>
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-twitter"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="nav nav-tabs" id="nav-tab">
		<button
			class="nav-link"
			id="nav-contact-tab"
			data-bs-toggle="tab"
			data-bs-target="#nav-contact"
			type="button"
			role="tab"
			aria-controls="nav-contact"
			aria-selected="false"
		>
			Third
		</button>
	</div>
	<div class="tab-content" id="myTabContent">
		<div
			class="tab-pane fade"
			id="nav-contact"
			role="tabpanel"
			aria-labelledby="nav-contact-tab"
		>
			<div class="card mb-3" style="max-width: auto">
				<div class="row g-0">
					<div class="col-md-4">
						<img
							src="images/tab/tab-3.jpg"
							class="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<p class="card-body__text">
								Morbi eget efficitur turpis. Vivamus pellentesque tortor
								massa, venenatis pharetra leo laoreet a. Nullam non
								eleifend justo, a ullamcorper turpis. Cras vehicula
								pharetra lectus non maximus. Sed condimentum mattis
								rhoncus.
							</p>
							<div class="card-body__text">
								<a href="#">SHARE</a>
								<i class="fab fa-facebook-f"></i>
								<i class="fab fa-twitter"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;

		tabContainer.style.display = "none";
	} else {
		navContainer.innerHTML = `<div class="nav nav-tabs" id="nav-tab">
		<button
			class="nav-link active"
			id="nav-home-tab"
			data-bs-toggle="tab"
			data-bs-target="#nav-home"
			type="button"
			role="tab"
			aria-controls="nav-home"
			aria-selected="true"
		>
			First
		</button>
		<button
			class="nav-link"
			id="nav-profile-tab"
			data-bs-toggle="tab"
			data-bs-target="#nav-profile"
			type="button"
			role="tab"
			aria-controls="nav-profile"
			aria-selected="false"
		>
			Second
		</button>
		<button
			class="nav-link"
			id="nav-contact-tab"
			data-bs-toggle="tab"
			data-bs-target="#nav-contact"
			type="button"
			role="tab"
			aria-controls="nav-contact"
			aria-selected="false"
		>
			Third
		</button>
	</div>`;

		tabContainer.style.display = "block";
	}
});
