// import db

export async function GET({ params }) {
	// connect to db to fetch & parse data

	const blogs = [
		{
			id: 1,
			imgUrl: '/images/p2.jpg',
			title: 'ဇေတော်ဝင််မီးယပ်သွေးပုပ်ချဆေး',
			body: `Elit est cupidatat do dolor id sunt cupidatat adipisicing aute consectetur. Dolor Lorem labore cupidatat qui ullamco dolore consectetur laborum elit elit pariatur nisi. Mollit cillum nulla tempor nulla. Excepteur aute aliqua aute excepteur ex consectetur ut dolor adipisicing.`
		},
		{
			id: 2,
			imgUrl: '/images/p3.jpg',
			title: 'ဇေတဝန်အကြောဖြေရှောက်ပေါင်းလိမ်းဆေး',
			body: `Elit est cupidatat do dolor id sunt cupidatat adipisicing aute consectetur. Dolor Lorem labore cupidatat qui ullamco dolore consectetur laborum elit elit pariatur nisi. Mollit cillum nulla tempor nulla. Excepteur aute aliqua aute excepteur ex consectetur ut dolor adipisicing.`
		},
		{
			id: 3,
			imgUrl: '/images/p1.jpg',
			title: 'ဇေတဝန်အားတိုးဆေး',
			body: `Elit est cupidatat do dolor id sunt cupidatat adipisicing aute consectetur. Dolor Lorem labore cupidatat qui ullamco dolore consectetur laborum elit elit pariatur nisi. Mollit cillum nulla tempor nulla. Excepteur aute aliqua aute excepteur ex consectetur ut dolor adipisicing.`
		}
	];

	const blog = blogs.find((b) => b.id == params.id);

	if (blog) {
		return {
			status: 200,
			body: { blog }
		};
	}

	return {
		status: 404
	};
}
