// import db

export async function GET({ params }) {
	// connect to db to fetch & parse data

	const blogs = [
		{
			id: 1,
			imgUrl: '/images/p3.jpg',
			title: 'ဇေတဝန်အကြောဖြေရှောက်ပေါင်းလိမ်းဆေး',
			body: `
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			🍀ဒူးနာခါးနာဘာနဲ့မှမပျောက်ဘူးလား
			လမ်းလျှောက်ရင်းနဲ့မျက်ကနဲနာနေပြီလား
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀လှေကားလေးတက်ဖို့ကိုသက်ပြင်းချနေရပြီလား
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀သူငယ်ချင်းတွေတရုန်းရုန်းနဲ့တောင်တွေတက်ချင်တာတောင်မှနာနေတဲ့ဒူးကြောင့်အိပ်မက်တွေမြိုသိပ်လိုက်ရပြီလား
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ကိုယ်ချစ်ရတဲ့သူကိုကျောပိုးပြီးချီချင်တာတောင်နာနေတဲ့ခါးကိုငဲ့ပြီးငြင်းနေရပြီလား
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀နှာချေချင်တာတောင်ခါးလေးတကိုင်ကိုင်နဲ့အရှိန်ယူနေရပြီလား
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀အဖုအထစ်လေးတွေကထွက်ချင်gym မှာအပြင်းအထန်တွေtrain ပြီးနောက်နေ့ကျမလှုပ်နိုင်ဖြစ် ရက်ပျက်လို့အစကပြန်ပြန်စနေရပြီလား
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ဘုရားတရားလေးလုပ်ချင်ပါတယ်အထိုင်အထခက်တာနဲ့တင်ဘုရားတရားလုပ်ရတဲ့အချိန်တွေနည်းနေပြီလား
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ပြီးတော့လက်တွေအားမရှိဘူးဆိုပြီးရောဖြစ်ဖူးကြလား မင်မင်တို့ဆေးခန်းကိုတော့လာတာတွေ့ဖူးတယ်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀လက်ချောင်းတွေကအားမရှိတာအလွယ်ပြောရရင်အကြောလေးတွေအားနည်းပြီးလေဖြတ်ချင်တာ
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ဘယ်ရမလဲလူးဆေးနဲ့တင်အိုကေသွားရော ကိုယ်တွေ့နော်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ဒူးနာခါးနာဇက်ကြောတက်တာတွေအပြင် လေဖြတ်ချင်သလိုဖြစ်တာ အကြောအားနည်းတာ တွေအပြင်အပေါ်မှာပြောထားတဲ့ဝေဒနာတွေအတွက်အားလုံးကိုတစ်ခါတည်းအကုန်ဖြေရှင်းပေးနိုင်မယ့်ဆေး
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ဇေတဝန်အကြောဖြေရှောက်ပေါင်းလိမ်းဆေး🍀
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀တစ်ခါလိမ်းတစ်ခါသိသာတဲ့ဆေး
			မယုံဘူးလားလိမ်းကြည့်လိုက်ပါ
			ဆေးအမှန်စွမ်းတာလား အာလားဆိုတာတစ်ခါလိမ်းတစ်ဗူးကုန်ယုံနဲ့ဇေတဝန်မှဇေတဝန်ဖြစ်သွားမှာနော်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀မြန်မာနိုင်ငံမှာရှောက်သီးဖတ်လေးနဲ့အသားထဲ့စိမ့်ဝင်အောင်လ်ိမ်းပြီးရောဂါပျောက်တဲ့ပထမဆုံးဆေး
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀၁၀စုနှစ်တစ်ခုကြာအောင်မြင်စွာရပ်တည်နေတဲ့ဆေး
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀အခုချိန်ထိရှောက်သီးနဲ့လိမ်းတဲ့ဆေးဆိုဇေတဝန်လို့တွဲသိနေတဲ့ဆေး
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ဒူးနာနေလားစာတွေဖတ်ပြီးပြီလား ဆေးဝယ်ပြီးသေချာလိမ်းဖို့သာသင်တာဝန်ယူပါ
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ရောဂါပျောက်ကင်းဖို့မင်မင်တို့ဇေတဝန်ကတာဝန်ယူပါရစေ
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ဇေတဝန်အကြောဖြေရှောက်ပေါင်းလိမ်းဆေးကိုအမြို့မြို့အနယ်နယ်ရှိဆေးဆိုင်တိုင်းမှာအလွယ်တကူဝယ်ယူရရှိနိုင်ပါပြီ
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀နယ်မှဝယ်ယူသူများ kpay ဖြင့် လက်ခံရောင်းချပေးပါသည်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🍀ငွေလွှဲ ဝင်သည်နှင့် သက်ဆိုင်ရာကားဂိတ်သို့ ပို့ပေးပါသည်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			တကယ်လို့များမင်မင်တို့ဘက်ကလိုအပ်ချက်ကြောင့်ဝယ်ဖို့အခက်အခဲဖြစ်တယ်ဆိုရင်လည်း 09798646151 ကိုဟယ်လိုလုပ်ပြီးမေးမြန်းစုံစမ်းနိုင်ပါတယ်နော်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🏡ပင်ရင်း တ၂/၄၊၆၃လမ်း၆၄လမ်းကြား၊၁၀၂လမ်း(ယခင်ပိတောက်လမ်း)၊မြို့သစ်၊မန္တလေးမြို့။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			☎️ဖုန်းနံပါတ် 09798646151
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ကိုယ်စားလှယ်ယူလိုသူများအသေးစိတ်စုံစမ်းနိုင်ပါတယ်နော်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ကိုယ့်သူငယ်ချင်းတွေကိုလည်းshare ပေးခြင်းဖြင့်ကုသိုလ်ယူလို့ရပါတယ်နော်
			အားလုံးပဲစိတ်သွားတိုင်းကိုယ်ပါပြီးကျန်းမာပျော်ရွှင်တဲ့ဘဝများပိုင်ဆိုင်ကြစေ
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ဆေးလိမ်းနည်းအညွှန်းလေးကတော့ ရှောက်သီးဖက်လေးနဲ့ ဆေးအနှစ်ကို အသားထဲ စိမ့်ဝင်အောင်သေချာလိမ်းပေးပါ။ တစ်နေ့၃ကြိမ်လောက်လိမ်းပေးရင် သိသိသာသာသက်သာလာပါတယ်။
			ဆေးလိမ်းပြီး အပေါ်ကနေအဝတ်အုပ်တာ စီးတာမျိုး မလုပ်ရပါဘူးရှင့်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ဆေးလိမ်းပြီးရင် ပူပူရှိန်းရှိန်းလေးနဲ့နေလို့ကောင်းပါတယ်ရှင့်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ဆေးပူဖြစ်တဲ့အတွက် ဆေးပူနဲ့ ဓာတ်မတည့်တာမျိုးတွေဖြစ်တတ်တဲ့သူဆိုရင်တော့ လိမ်းလို့မရပါဘူးရှင်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			စျေးနှုန်းလေးကတော့ ဗူးခွံပါရင် 2200
			မပါရင် 2000ပါရှင့်
			ဗူးခွံပါခြင်းမပါခြင်းကလွဲပြီးတော့ ဆေးအာနိသင်ကတော့အတူတူပါပဲရှင့်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			အထဲကဆေးရည်ကုန်ပြီး အနှစ်တွေကျန်နေရင်ဘယ်လိုလုပ်ရမလဲလို့ပေးနေတဲ့ ကာကာလေးတွေအတွက် ထပ်ဖြည့်တဲ့ဆေးရည်သပ်သပ်ရောင်းပေးပါတယ်နော်
			တကယ်လို့ ဆေးရည်ဝယ်ဖို့ မလွယ်ခဲ့ရင် အရက်ဦးရေ ဒါမှမဟုတ် ရှောက်ရည်ဖြည့်ပြီး သုံးလို့ရပါတယ်ရှင့်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ထပ်ဖြည့်တဲ့ဆေးရည်လေးကတစ်ဘူးကို1000ပါရှင့်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;margin-bottom: 16px;word-wrap: break-word">
			မင်မင်တို့ဆေးကို ရနိုင်တဲ့မြို့နဲ့ဆေးဆိုင်လေးတွေကို အောက်က လင့်ခ်မှာသွားကြည့်လို့ရပါတယ်ရှင့်
			</p>
			<a href="https://www.facebook.com/158384254660825/posts/1160755227757051/" target="_blank" style="font-size: 20px;word-wrap: break-word";>
			https://www.facebook.com/158384254660825/posts/1160755227757051/
			</a>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ရန်ကုန်က ကာကာလေးတို့အတွက် အဆင်ပြေအောင် ရန်ကုန်ကိုယ်စားလှယ်ဖုန်းလေးပါရှင့်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ဒေါ်သီတာအောင်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;margin-bottom: 16px;word-wrap: break-word">
			09-254713679 ကိုဆက်သွယ်မှာယူနိုင်ပါတယ်ရှငိ့ သူက deli လည်းပို့တယ် အနီးဆုံးဆေးဆိုင်တွေလည်းသေချာလေးညွှန်ပေးပါတယ်ရှင်
			</p>
			<p style="font-size: 20px;color: black;">
			#လိမ်းဆေး
			</p>
			<p style="font-size: 20px;color: black;">
			#ဒူးနာ
			</p>
			<p style="font-size: 20px;color: black;">
			#ခါးနာ
			</p>
			<p style="font-size: 20px;color: black;">
			#လေငန်း
			</p>
			<p style="font-size: 20px;color: black;">
			#ရန်ကုန်
			</p>
			<p style="font-size: 20px;color: black;">
			#မန္တလေး
			</p>
			<p style="font-size: 20px;color: black;">
			#ဇေတဝန်ဆေးတိုက်
			</p>
			`
		},
		{
			id: 2,
			imgUrl: '/images/p2.jpg',
			title: 'ဇေတဝန်မီးယပ်သွေးပုပ်ချဆေး',
			body: `
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			🩸လစဥ် မီးယပ်ကုန်စင်အောင်ဆင်းစေသဖြင့် အနံ့အသက်ဆိုးများကင်းစင်စေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸သွေးဆုံးကိုင်ဝေဒနာများဖြစ်သည့် ထိတ်လန့်ခြင်း၊ ကြောက်ရွံ့ခြင်း၊ ဝမ်းနည်းလွယ်ခြင်း၊ ဒေါသအလွန်အမင်းကြီးခြင်း၊ ညအိပ်မပျော်ခြင်း များကိုလည်း သက်သာပျောက်ကင်းစေပါသည်။
သွေးဆုံးကိုင် ဝေဒနာကို စိတ်ရောဂါနှင့် အထင်မှားတတ်ကြပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸ဤဆေးသည် သွေးဆုံးကိုင်ဝေဒနာခံစားနေရသော ဝေဒနာရှင်များစွာကိုပျောက်ကင်းအောင်ကုသပေးပြီးသောဆေးဖြစ်ပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸ဤဆေးကိုမနက် ၅ပြား ည၅ပြား ၂ကြိမ်သောက်ရုံဖြင့် သွေးဆုံးကိုင်ဝေဒနာများအရှင်းပျောက်ကင်းပြီး ကျန်းမာနုပျို ကာ အသားအရေ ကြည်လင်လှပစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸မိန်းမကိုယ်ယားယံခြင်း၊ အနံ့ထွက်ခြင်း ၊ အဖုပေါက်ခြင်း များကိုလည်းသက်သာပျောက်ကင်းစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸မီးယပ်မမှန်​ခြင်းကြောင့်
ခေါင်းကိုက် ၊ ခေါင်းအုံ ၊ ဇက်ကြောတက်ခြင်းများကို သက်သာပျောက်ကင်းစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸လစဥ် သားအိမ်မှ ဆင်းရမည့်သွေးများ ကုန်စင်သဖြင့် သားအိမ်သန့်စင်ပြီး ကျန်းမာဝဖြိုးအလှတိုးစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸ရာသီမမှန်ခြင်းကြောင့်ဖြစ်သော အသားအရေမညီခြင်း ၊ အဝလွန်ခြင်းများအား သက်သာပျောက်ကင်းစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸ဓမ္မတာနည်းခြင်း ၊ ထိန်ခြင်း ၊ ရက်လွန်ခြင်းများကို ပျောက်ကင်းစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸သားအိမ်မှ ဆင်းရမည့် ရာသီသွေးမှန်သမျှ ကုန်စင်အောင် ဆင်းသဖြင့် ဓမ္မတောပေါ်ချိန်တွင် အောင့်ခြင်း ၊ ကိုက်ခဲခြင်း ၊ ညောင်းညာသွေးလေးခြင်းများမရှိဘဲ ပုံမှန်ရက်များကဲ့သို့ ပေါ့ပါးသွက်လက်စွာ နေနိုင်ပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸 နှစ်ပေါင်းများစွာ ထိန် ၊ ငုပ် ၊ ချုပ် ၊ ပျောက် သွေးဆင်းနည်းသော အမျိုးသမီးများ ဆေးသောက်သည့်လ မှစ၍ သွေးကြွင်းသွေးကျန်များအားလုံး ပြိုကျစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸ဆေးသောက်ပြီး (၄)လအတွင်း မီးယပ်ကွက်တင်းတိပ်များ ၊ ဝက်ခြံများ သက်သာပျောက်ကင်းစေပြီး အသားအရေ စိုပြည်လှပ အရွယ်တင်နုပျိုစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸အပျိုဖော်ဝင်ခါနီး အမျိုးသမီးငယ်လေးများကို ကြိုတင်တိုက်ကျွေးခြင်းဖြင့် သွေးသား နှင့် ပတ်သက်သည့်ရောဂါများ ကင်းဝေးစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸 လစဥ်ရက်မှန်စွာ သွေးဆင်းသောကြောင့် အရေးပေါ်ခရီးသွားခြင်းများစသည်တို့အတွက် စိုးရိမ်ပူပန်ရခြင်းမှ ကင်းဝေးစေပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸ဆေးအညွှန်း - သွေးမပေါ်မီ ၅ ရက်အလိုမှ နောက်ဆုံးသွေးပေါ်သည့်နေ့အထိ နေ့စဥ်သောက်ပါ။
ဆေးပြား၅ ပြား မှ ၈ ပြား တစ်နေ့ ၃ ကြိမ် သောက်ရန်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸 မီးယပ် နှင့် ပတ်သက်သမျှ အရာရာတိုင်းအတွက်
ဇေတဝန်မှ အပြည့်အဝ တာဝန်ယူပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			ထုတ်ပိုးမှုပုံစံ (၃) မျိုးရှိပါတယ်ရှင်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸 ဝဲဘက်စွန်ဆုံးက လေးထောင့်ဗူးဖြူလေးကတော့ ဆေးပြား ပြား(၅၀) ပါ ဆေးဗူးလေးဖြစ်ပါတယ်။  သူ့စျေးလေးကတော့ တစ််ဗူးကို ၉၀၀ ကျသင့်မှာဖြစ်ပါတယ်ရှင်။ 
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸 အလယ်က အသစ်ထုတ်ထားသောဆေးထုတ်လေးထဲမှာကျတော့ ဆေးပြား၂၀ ပါအထုတ်၅ထုတ် (ဆေးအပြား၁၀၀) ထည့်ပေးထားပါတယ်။ တစ်ထုတ်လျှင် ၁၄၀၀ ကျပ်သာကျသင့်ပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸 ယာဘက်အစွန်ဆုံးက လေးထောင့်ဗူးနီလေးဟာဆိုလို့ရှိရင် အထဲမှာ ဆေးပြား (၅) ပြားအထုတ်လေးတွေ ၁၂ ထုတ်ပါပြီး စုစုပေါင်းဆေးပြား၆၀ပါပါတယ်။ သူ့စျေးနှုန်းလေးကတော့ တစ်ဗူးကို ၁၄၀၀ ဖြစ်ပါတယ်ရှင်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🔥ဆေးအပြား ၁၀၀ မှ ၁၄၀၀ ကျပ်သာလျှင်ကျသင့်မည်ဖြစ်ပါသည်။🔥
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸ဇေတော်ဝင်မီးယပ်သွေးပုပ်ချဆေးကို အမြို့မြို့အနယ်အနယ်ရှိ ဆေးဆိုင်များနှင့် စျေးများတွင် အလွယ်တကူဝယ်ယူရရှိနိုင်ပါပြီ
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸တကယ်လို့များမင်မင်တို့ဘက်ကလိုအပ်ချက်ကြောင့်ဝယ်ဖို့အခက်အခဲဖြစ်တယ်ဆိုရင်လည်း 09798646151 ကိုဟယ်လိုလုပ်ပြီးမေးမြန်းစုံစမ်းနိုင်ပါတယ်နော်🙆‍♀️
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🩸မီးယပ်နှင့်ပါတ်သတ်သော ဝေဒနာ များအား အခမဲ့ဆွေးနွေးပေးပါသည်
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			နယ်မှမှာယူလိုသူများ kpay ဖြင့်လက်ခံပေးပါသည်။
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;word-wrap: break-word">
			🏡ပင်ရင်း တ၂/၄၊၆၃လမ်း၆၄လမ်းကြား၊၁၀၂လမ်း(ယခင်ပိတောက်လမ်း)၊မြို့သစ်၊မန္တလေးမြို့။
☎️ဖုန်းနံပါတ် 09798646151
			</p>
			<p style="font-size: 20px;color: black;margin-top: 16px;margin-bottom: 16px;word-wrap: break-word">
			လက်ကားဝယ်ယူလိုသူများအသေးစိတ်စုံစမ်းနိုင်ပါတယ်နော်
ကိုယ့်သူငယ်ချင်းတွေကိုလည်းshare ပေးခြင်းဖြင့်ကုသိုလ်ယူလို့ရပါတယ်နော်
အားလုံးပဲစိတ်သွားတိုင်းကိုယ်ပါပြီးကျန်းမာပျော်ရွှင်တဲ့ဘဝများပိုင်ဆိုင်ကြစေ
			</p>
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			#မီးယပ်
			</p>
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			#သွေးဆေး
			</p>
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			#မြန်မာဆေး
			</p>
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			#တိုင်းရင်းဆေး
			</p>
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			#မန္တလေး
			</p>
			<p style="font-size: 20px;color: black;word-wrap: break-word">
			#ရန်ကုန်
			</p>
			`
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
