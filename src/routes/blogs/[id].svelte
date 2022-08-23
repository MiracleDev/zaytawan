<script context="module">
	export async function load({ params, fetch }) {
		const id = params.id;
		const res = await fetch(`/blogs/${id}.json`);
		const { blog } = await res.json();

		if (res.ok) {
			return {
				props: {
					blog
				}
			};
		}

		return {
			status: 301,
			// error: new Error('Could not fetch that blog')
			redirect: '/blogs'
		};
	}
</script>

<script>
	export let blog;
	let toggle = false;

	const open = () => {
		toggle = true;
	};

	const close = () => {
		toggle = false;
	};
</script>

<div>
	<div class="sidenav" style={toggle ? 'width: 100%' : 'width: 0'}>
		<div class="closebtn" on:click={close}>
			<img src="/images/times-solid.svg" alt="closebtn" />
		</div>
		<a href="/">မူလစာမျက်နှာသို့</a>
		<a href="/contact-us">ဆက်သွယ်ရန်</a>
		<a href="/blogs">ဘလော့ဖတ်ရန်</a>
	</div>
	<nav class="navbar">
		<div class="contact-info">
			<div class="ph-no">
				<div class="ph-no-icon">
					<img src="/images/phone.svg" alt="phone-icon" />
				</div>
				<a class="ph-no-text" href="tel:+959798646151">၀၉-၇၉၈၆၄၆၁၅၁</a>
			</div>
			<div class="email">
				<div class="email-icon">
					<img src="/images/echo.svg" alt="email-icon" />
				</div>
				<a target="_blank" class="email-text" href="mailto: zaytawan.fb@gmail.com">zaytawan.fb@gmail.com</a>
			</div>
		</div>
		<div class="heading-content">
			<div class="logo-wrapper">
				<div class="logo">
					<div class="logo-icon">
						<img src="/images/logo.jpg" alt="logo" />
					</div>
					<div class="logo-text">ဇေတဝန်ဆေးတိုက်</div>
				</div>
				<div class="menu" on:click={open}>
					<div class="menu-icon">
						<div class="line1" />
						<div class="line2" />
						<div class="line3" />
					</div>
				</div>
			</div>
			<a href="tel:+959798646151" class="contact-btn">ဖုန်းခေါ်ဆိုရန်</a>
		</div>
	</nav>
	<main class="main-content">
		<div class="blog-wrapper">
			<div class="blog-img">
				<img src={blog.imgUrl} alt="" />
			</div>
			<hr class="break-line" />
			<div class="blog-title">
				{blog.title}
			</div>
			<div class="blog-body">
				{@html blog.body}
			</div>
			<hr class="break-line" />
		</div>
	</main>
	<footer class="footer-content">
		<div class="footer-wrapper">
			<div class="logo-alt">
				<img src="/images/logo.jpg" alt="logo" />
			</div>
			<div class="footer-text1">
				ဇေတဝန်ဆေးတိုက်ကဆေးတွေကအရည်သွေးကောင်းမွန်ပြီးဆေးစွမ်းထက်တာအာမခံပါတယ်။ထုတ်ပိုးမှုမှာလဲလှပသေသပ်ပါတယ်။အခုဘဲဖုန်းခေါ်ဆိုပြီးဝယ်ယူအားပေးလို့ရပါပြီနော်။
			</div>
			<div class="footer-text2">
				စျေးနှုန်းသင့်တင့်ပြီးဆေးစွမ်းထက်လှသောဇေတဝန်ဆေးတိုက်ရဲ့ဆေးတွေကိုဝယ်ယူအားပေးကြပါနော်
			</div>
			<div class="contact-heading">ဆက်သွယ်ရန်လိပ်စာ</div>
			<div class="contact-info-alt">
				<div class="contact-icon">
					<img src="/images/location.svg" alt="" />
				</div>
				<div class="contact-text">
					ပင်ရင်း တ၂/၄၊၆၃လမ်း၆၄လမ်းကြား၊၁၀၂လမ်း(ယခင်ပိတောက်လမ်း)၊ မြို့သစ်၊မန္တလေးမြို့။
				</div>
			</div>
			<a href="tel:+959798646151" class="contact-info-alt">
				<div class="contact-icon">
					<img src="/images/phone-alt.svg" alt="" />
				</div>
				<div class="contact-text">၀၉-၇၉၈၆၄၆၁၅၁</div>
			</a>
			<a target="_blank" href="mailto:zaytawan.fb@gmail.com" class="contact-info-alt">
				<div class="contact-icon">
					<img src="/images/echo-alt.svg" alt="" />
				</div>
				<div class="contact-text">zaytawan.fb@gmail.com</div>
			</a>
			<a href="https://www.facebook.com/dawmyanwezaytawon" target="_blank" class="contact-info-alt">
				<div class="contact-icon">
					<img src="/images/message.svg" alt="" />
				</div>
				<div class="contact-text">Facebook</div>
			</a>
		</div>
		<div class="copyright">Design & Developed by MiracleDev</div>
	</footer>
</div>

<style>
	.break-line {
		border: none;
		border-bottom: 6px solid #91c1cc;
		width: 100%;
	}
	.sidenav {
		height: 100%;
		width: 0;
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		background-color: white;
		overflow-x: hidden;
		transition: 0.5s;
		padding-top: 60px;
		text-align: center;
		transition: 0.3s;
		background-color: #91c1cc;
		background-image: url(/images/waves.webp);
		background-blend-mode: lighten;
	}

	.sidenav a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 25px;
		color: white;
		display: block;
		transition: 0.3s;
	}

	.sidenav a:hover {
		color: #818181;
	}

	.closebtn {
		width: 24px;
		height: 24px;
		position: absolute;
		top: 25px;
		right: 25px;
		font-size: 36px;
		margin-left: 50px;
		cursor: pointer;
	}
	.closebtn img {
		width: 24px;
		height: 24px;
		object-fit: cover;
	}
	.contact-info {
		width: 100%;
		height: 48px;
		background-color: #91c1cc;
		color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.ph-no {
		margin-left: 16px;
	}
	.email {
		margin-right: 16px;
	}
	.ph-no,
	.email {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}
	.ph-no-icon,
	.email-icon {
		width: 16px;
		height: 16px;
	}
	.ph-no-text,
	.email-text {
		font-size: 18px;
		color: white;
		text-decoration: none;
	}
	.ph-no-icon img,
	.email-icon img {
		width: 16px;
		height: 16px;
		object-fit: cover;
	}
	.heading-content {
		width: 100%;
		height: 153px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo-wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-top: 16px;
	}
	.logo {
		margin-left: 16px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 16px;
	}
	.logo-icon {
		width: 57px;
		height: 57px;
		cursor: pointer;
	}
	.logo-icon img {
		width: 57px;
		height: 57px;
		border-radius: 50%;
		object-fit: cover;
	}
	.logo-text {
		font-size: 20px;
	}
	.menu {
		margin-right: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.menu-icon {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.line1 {
		width: 20px;
		height: 4px;
		background-color: #d9d9d9;
	}
	.line2 {
		width: 32px;
		height: 4px;
		background-color: #d9d9d9;
	}
	.line3 {
		width: 24px;
		height: 4px;
		background-color: #d9d9d9;
	}
	.contact-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		color: white;
		width: 318px;
		height: 48px;
		margin-top: 16px;
		background-color: #91c1cc;
		cursor: pointer;
		border-radius: 10px;
		transition: 0.3s;
		text-decoration: none;
	}
	.contact-btn:hover {
		background-color: #90b3bb;
	}
	.blog-wrapper {
		display: flex;
		flex-direction: column;
		transition: 0.3s;
	}
	.blog-img {
		width: 100%;
		height: 50vw;
	}
	.blog-img img {
		width: 100%;
		height: 50vw;
		object-fit: cover;
	}
	.blog-title {
		margin-top: 48px;
		margin-right: 16px;
		margin-left: 16px;
		font-size: 32px;
		color: #91c1cc;
	}
	.blog-body {
		margin-right: 16px;
		margin-left: 16px;
		margin-top: 16px;
		margin-bottom: 48px;
		font-size: 20px;
		color: black;
	}
	.footer-wrapper {
		padding: 48px 32px;
		background-color: #5b5151;
	}
	.logo-alt {
		width: 70px;
		height: 70px;
		cursor: pointer;
	}
	.logo-alt img {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		object-fit: cover;
	}
	.footer-text1 {
		margin-top: 32px;
		color: #dad5d5;
		font-size: 20px;
	}
	.footer-text2 {
		margin-top: 16px;
		color: #9ad7e5;
		font-size: 18px;
	}
	.contact-heading {
		font-size: 24px;
		color: white;
		margin-top: 24px;
	}
	.contact-info-alt {
		margin-top: 18px;
		display: flex;
		flex-direction: row;
		gap: 12px;
		cursor: pointer;
		align-items: center;
		text-decoration: none;
	}
	.contact-icon {
		width: 24px;
		height: 24px;
	}
	.contact-icon img {
		width: 24px;
		height: 24px;
		object-fit: cover;
	}
	.contact-text {
		font-size: 16px;
		color: #dad5d5;
	}
	.copyright {
		background-color: #1f1f1f;
		color: white;
		font-size: 16px;
		padding: 16px 32px;
	}
</style>
