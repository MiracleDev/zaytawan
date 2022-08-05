// import db

export async function GET() {
	// connect to db to fetch & parse data

	const blogs = [
		{
			id: 1,
			imgUrl: '/images/p3.jpg',
			title: 'ဇေတဝန်အကြောဖြေရှောက်ပေါင်းလိမ်းဆေး',
			intro: `🍀ဒူးနာခါးနာဘာနဲ့မှမပျောက်ဘူးလား
			လမ်းလျှောက်ရင်းနဲ့မျက်ကနဲနာနေပြီလား......`
		},
		{
			id: 2,
			imgUrl: '/images/p2.jpg',
			title: 'ဇေတော်ဝင််မီးယပ်သွေးပုပ်ချဆေး',
			intro: `🩸လစဥ် မီးယပ်ကုန်စင်အောင်ဆင်းစေသဖြင့် အနံ့အသက်ဆိုးများကင်းစင်စေပါသည်။......`
		}
	];

	return {
		status: 200,
		body: { blogs }
	};
}
