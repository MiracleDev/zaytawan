<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/blogs.json');
		const { blogs } = await res.json();
		console.log(blogs);

		if (res.ok) {
			return {
				props: {
					blogs
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch the blogs')
		};
	}
</script>

<script>
	export let blogs;
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
		<a href="/" on:click={close}>မူလစာမျက်နှာသို့</a>
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
				<a class="email-text" href="mailto: zaytawan.fb@gmail.com">zaytawan.fb@gmail.com</a>
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
		<div class="intro">
			<div class="intro-image">
				<img src="/images/p1.jpg" alt="" />
			</div>
			<div class="intro-heading">
				အရည်အသွေးကောင်းပြီး<br />ဆေးစွမ်းထက်တဲ့
			</div>
			<div class="intro-text">
				သပ်ရပ်လှပစွာထုတ်ပိုးထားသောဆေးပစ္စည်းတွေ<br />ရရှိနိုင်ပါပြီ
			</div>
			<a href="/blogs" class="blogs-btn">ဘလော့ဖတ်ရန်</a>
		</div>
		<div class="more-info">
			<div class="logo-icon">
				<img src="/images/logo.jpg" alt="logo" />
			</div>
			<div class="more-info-text">အသေးစိတ်သိရှိလိုပါက ၀၉-၇၉၈၆၄၆၁၅၁ ကိုဆက်သွယ်လိုက်ပါနော်</div>
		</div>
		<div class="blogs-post">
			{#each blogs as blog}
				{#if blog.id < 3}
					<a class="blog-wrapper" sveltekit:prefetch href={`/blogs/${blog.id}`}>
						<div class="blog-img">
							<img src={blog.imgUrl} alt="" />
						</div>
						<hr class="break-line" />
						<div class="blog-title">
							{blog.title}
						</div>
						<div class="blog-intro">
							{blog.intro}
						</div>
						<hr class="break-line" />
					</a>
				{/if}
			{/each}
		</div>
		<div class="benefits">
			<div class="logo-large">
				<img src="/images/logo.jpg" alt="logo" />
			</div>
			<div class="question">ဇေတဝန်ဆေးတိုက်ကဆေးတွေကိုဘာကြောင့်ရွေးချယ်သင့်တာလဲ?</div>
			<div class="answer">
				ဇေတဝန်ဆေးတိုက်ကဆေးတွေကတစ်ခြားဆေးတွေနဲ့
				မတူဘဲဘေးထွက်ဆိုးကျိုးမပါခြင်း၊စျေးနှုန်းသင့်တင့်ခြင်း၊
				ကြာရှည်အထားခံခြင်းတွေကြောင့်ယုံကြည်စွာနဲ့ ရွေးချယ်အသုံးပြုသင့်ပါတယ်။
			</div>
			<div class="b-icon1">
				<img src="/images/b1.svg" alt="" />
			</div>
			<div class="b-heading1">ဘေးထွက်ဆိုးကျိုးမပါခြင်း</div>
			<div class="b-text1">
				သဘာဝဆေးဖက်ဝင်ပစ္စည်းများဖြင့်ပြုထားတာကြောင့် ဘေးထွက်ဆိုးကျိုးလုံးဝမပါဝင်ပါဘူး။
			</div>
			<div class="b-icon2">
				<img src="/images/b2.svg" alt="" />
			</div>
			<div class="b-heading2">စျေးနှုန်းသင့်တင့်ခြင်း</div>
			<div class="b-text2">
				သုံးဆွဲသူတွေအဆင်ပြေအောင်အမြတ်အများကြီးမယူဘဲ စျေးနှုန်းသင့်အောင်ရောင်းချပေးနေပါတယ်။
			</div>
			<div class="b-icon3">
				<img src="/images/b3.webp" alt="" />
			</div>
			<div class="b-heading3">ကြာရှည်အထားခံခြင်း</div>
			<div class="b-text3">
				ဆေးပစ္စည်းတွေကိုသန့်ရှင်းသပ်ရပ်စွာထုတ်ပိုးထားတဲ့ အတွက်ကြာရှည်အထားခံပါတယ်။
			</div>
		</div>
		<div class="thanks">
			<div class="love-icon">
				<img src="/images/love.svg" alt="" />
			</div>
			<div class="thanks-heading">
				ဝယ်ယူအားပေးကြသော<br />မိဘပြည်သူများထံသို့
			</div>
			<div class="thanks-text">
				ဇေတဝန်ဆေးတိုက်မိသားစုများမှကျန်းမာချမ်းသာပြီး ဘေးအန္ဓရယ်ကင်းဝင်းပါစေကြောင်းအစဉ်အမြဲ
				ဆုတောင်းမေတ္တာပို့သအပ်ပါတယ်
			</div>
			<!-- <div class="slides">
                <div class="slide1"></div>
                <div class="slide2"></div>
                <div class="slide3"></div>
            </div> -->
		</div>
		<div class="extra-info">
			<hr class="break-line" />
			<div class="intro-image">
				<img src="/images/p1.jpg" alt="" />
			</div>
			<hr class="break-line" />
			<div class="kettle-icon">
				<img src="/images/kettle.webp" alt="" />
			</div>
			<div class="extra-info-heading">
				ဇေတဝန်ဆေးတိုက်က<br />
				ဆေးတွေအကြောင်းပိုမိုသိရှိလိုပါက
			</div>
			<div class="extra-info-text">
				အခုဘဲကျွန်တော်တို့ကိုရေနွေးတစ်ခါဆူစာ အချိန်သုံးမိနစ်လောက်ပေးပြီးဖုန်းကဖြစ်ဖြစ် gmail
				ကဖြစ်ဖြစ်ဆက်သွယ်လိုက်ပါနော်။
			</div>
			<a href="/contact-us" class="extra-info-btn">ဆက်သွယ်ရန်</a>
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
			<a href="mailto:zaytawan.fb@gmail.com" target="_blank" class="contact-info-alt">
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
		color: white;
		font-size: 18px;
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
	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
	}
	.intro-image {
		width: 100%;
		height: 50vw;
	}
	.intro-image img {
		width: 100%;
		height: 50vw;
		object-fit: cover;
	}
	.intro-heading {
		margin-top: 16px;
		font-size: 32px;
		color: #91c1cc;
		text-align: center;
	}
	.intro-text {
		margin-top: 8px;
		font-size: 20px;
		color: black;
		text-align: center;
	}
	.blogs-btn {
		margin-top: 16px;
		margin-bottom: 16px;
		cursor: pointer;
		border-radius: 8px;
		padding: 15px 45px;
		background-color: #91c1cc;
		font-size: 18px;
		color: #f5f5f5;
		transition: 0.3s;
		text-decoration: none;
	}
	.blogs-btn:hover {
		background-color: #90b3bb;
	}
	.more-info {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 16px 24px;
		gap: 12px;
		background-color: #91c1cc;
	}
	.more-info-text {
		font-size: 20px;
		color: white;
	}
	.blog-wrapper {
		display: flex;
		flex-direction: column;
		cursor: pointer;
		transition: 0.3s;
		text-decoration: none;
	}
	.blog-wrapper:hover {
		filter: brightness(80%);
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
	.blog-intro {
		margin-right: 16px;
		margin-left: 16px;
		margin-top: 16px;
		margin-bottom: 48px;
		font-size: 20px;
		color: black;
	}
	.benefits {
		padding: 48px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #91c1cc;
		background-image: url('/images/waves.webp');
		background-blend-mode: lighten;
	}
	.logo-large {
		width: 90px;
		height: 90px;
		cursor: pointer;
	}
	.logo-large img {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		object-fit: cover;
	}
	.question {
		font-size: 24px;
		color: white;
		margin-top: 32px;
		margin-left: 24px;
		margin-right: 24px;
	}
	.answer {
		margin-top: 16px;
		margin-left: 16px;
		margin-right: 16px;
		font-size: 20px;
		color: white;
		text-align: center;
	}
	.b-icon1,
	.b-icon2,
	.b-icon3 {
		margin-top: 32px;
		width: 70px;
		height: 70px;
		cursor: pointer;
	}
	.b-icon1 img,
	.b-icon2 img,
	.b-icon3 img {
		width: 70px;
		height: 70px;
		object-fit: cover;
	}
	.b-heading1,
	.b-heading2,
	.b-heading3 {
		font-size: 24px;
		color: white;
		margin-top: 16px;
	}
	.b-text1,
	.b-text2,
	.b-text3 {
		font-size: 20px;
		color: white;
		margin-top: 16px;
		margin-left: 16px;
		margin-right: 16px;
		text-align: center;
	}
	.thanks {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 48px 0;
	}
	.love-icon {
		width: 48px;
		height: 48px;
		cursor: pointer;
	}
	.love-icon img {
		width: 48px;
		height: 48px;
		object-fit: cover;
	}
	.thanks-heading {
		font-size: 24px;
		color: #91c1cc;
		margin-top: 16px;
		text-align: center;
	}
	.thanks-text {
		font-size: 20px;
		color: black;
		margin-top: 16px;
		margin-left: 16px;
		margin-right: 16px;
		text-align: center;
	}
	.extra-info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.break-line {
		border: none;
		border-bottom: 6px solid #91c1cc;
		width: 100%;
	}
	.kettle-icon {
		margin-top: 48px;
		width: 48px;
		height: 48px;
		cursor: pointer;
	}
	.kettle-icon img {
		width: 48px;
		height: 48px;
		object-fit: cover;
	}
	.extra-info-heading {
		font-size: 24px;
		color: #91c1cc;
		margin-top: 16px;
		text-align: center;
	}
	.extra-info-text {
		font-size: 20px;
		color: black;
		margin-top: 16px;
		margin-left: 16px;
		margin-right: 16px;
		text-align: center;
	}
	.extra-info-btn {
		padding: 15px 45px;
		background-color: #91c1cc;
		color: white;
		font-size: 18px;
		margin-top: 16px;
		border-radius: 8px;
		margin-bottom: 48px;
		cursor: pointer;
		transition: 0.3s;
		text-decoration: none;
	}
	.extra-info-btn:hover {
		background-color: #90b3bb;
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
