import type { IllustrationName } from "@/components/Illustrations";
import type { Locale } from "@/i18n/config";
import { postTranslations } from "@/content/posts";
import { priceFacts } from "@/content/posts/shared";

export type Category = "Tutorials" | "Guides" | "Legal & Safety";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] }
  | { type: "links"; title: string; items: [label: string, href: string][] }
  | { type: "figure"; name: IllustrationName; caption: string }
  | { type: "cta"; title?: string; text?: string };

type RawPost = {
  slug: string;
  title: string;
  excerpt: string; // also used as the meta description — aim for 120–160 characters
  category: Category;
  date: string; // ISO yyyy-mm-dd, first published
  updated?: string; // ISO yyyy-mm-dd, last meaningful update
  cover: string; // emoji shown on the blog card when there is no featured picture
  hero?: { name: IllustrationName; alt: string }; // optional featured picture (top of article + blog card)
  takeaways: string[]; // short summary shown at the top of the article
  body: Block[];
  faqs: [question: string, answer: string][];
};

export type Post = RawPost & { readTime: number };

export const categories: Category[] = ["Tutorials", "Guides", "Legal & Safety"];

function blockText(b: Block) {
  switch (b.type) {
    case "ul":
    case "ol": return b.items.join(" ");
    case "table": return [b.caption, ...b.head, ...b.rows.flat()].join(" ");
    case "links": return [b.title, ...b.items.map(([label]) => label)].join(" ");
    case "figure": return b.caption;
    case "cta": return [b.title ?? "", b.text ?? ""].join(" ");
    default: return b.text;
  }
}

// Prices in the text are tokens shown in the visitor's currency (see src/lib/prices.ts)
const p = priceFacts("en");

/** Reading time at ~200 words per minute, calculated from the full article. */
function readingTime(p: RawPost) {
  const text = [p.title, ...p.takeaways, ...p.body.map(blockText), ...p.faqs.flat()].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

const rawPosts: RawPost[] = [
  {
    slug: "how-to-install-iptv-on-firestick",
    hero: { name: "hero-firestick", alt: "Install IPTV on Firestick: a TV with a streaming stick plugged in." },
    title: "How to Install IPTV on Amazon Firestick (Step-by-Step 2026)",
    excerpt: "Install IPTV on your Amazon Firestick in under 10 minutes: enable unknown apps, install TiviMate or IPTV Smarters, log in and fix common problems.",
    category: "Tutorials",
    date: "2026-09-20",
    updated: "2026-10-01",
    cover: "🔥",
    takeaways: [
      "Turn on Developer Options and allow “Install unknown apps” before installing third-party players.",
      "Check the Amazon Appstore first — TiviMate and IPTV Smarters Pro are often listed there.",
      "Log in with the Xtream Codes details (username, password, server URL) sent with your subscription.",
      "Use Ethernet or 5 GHz Wi-Fi for the most stable picture, especially in 4K.",
    ],
    body: [
      { type: "p", text: "The Amazon Firestick is one of the most popular ways to watch IPTV: it's affordable, plugs straight into your TV's HDMI port and runs all the major IPTV player apps. This guide takes you from an unboxed stick to watching live channels." },
      { type: "h2", text: "What you need" },
      { type: "ul", items: ["An Amazon Firestick (any generation, 4K Max recommended)", "A stable internet connection — 10 Mbps for HD, 25 Mbps for 4K", "Your DenvayStream login details (sent after purchase or trial)"] },
      { type: "h2", text: "Step 1 — Allow apps from unknown sources" },
      { type: "ol", items: ["Go to Settings → My Fire TV → About.", "Click on your device name 7 times until you see “You are now a developer”.", "Go back to Developer Options and enable “Install unknown apps” for the Downloader app."] },
      { type: "h2", text: "Step 2 — Install the Downloader app" },
      { type: "p", text: "From the home screen, open Find → Search, type “Downloader” and install the app with the orange icon. Downloader lets you install IPTV player apps that aren't in the Amazon store." },
      { type: "h2", text: "Step 3 — Install your IPTV player" },
      { type: "p", text: "Many players, such as IPTV Smarters Pro and TiviMate, are available directly in the Amazon Appstore. Search for them first. If your preferred player isn't listed, use Downloader with the official download URL from the app developer's website." },
      { type: "h2", text: "Step 4 — Log in and start watching" },
      { type: "ol", items: ["Open the player and choose “Login with Xtream Codes API”.", "Enter the username, password and server URL we sent you.", "Wait for channels, movies and the TV guide to load — this can take a minute the first time."] },
      { type: "h2", text: "Get the best performance from your Firestick" },
      { type: "p", text: "Firesticks have limited memory, so a few small habits make a big difference to how quickly channels load and how stable the picture stays." },
      { type: "ul", items: ["Restart the stick once a week (Settings → My Fire TV → Restart) to clear its memory.", "Uninstall apps you don't use — they run updates and background services that slow the device down.", "Plug the stick into the power adapter, not the TV's USB port, so it gets enough power.", "If your Wi-Fi is weak, an Amazon Ethernet adapter gives a far more stable connection than wireless."] },
      { type: "h2", text: "Common problems and quick fixes" },
      { type: "ul", items: ["“App not installed”: make sure “Install unknown apps” is enabled for Downloader, then try again.", "Channels won't load: double-check the server URL — a missing “http://” or a typo is the most common cause.", "Picture freezes: clear the player's cache, then follow our buffering guide for more fixes."] },
      { type: "tip", text: "Stuck at any step? Message us on WhatsApp and our team will guide you through the setup live." },
    ],
    faqs: [
      ["Which Firestick is best for IPTV?", "The Fire TV Stick 4K Max is the best choice: it has more memory and a faster processor, so channels load quicker and 4K streams play smoothly. Older models still work well for HD."],
      ["Do I need a VPN on my Firestick?", "No, a VPN is not required to watch IPTV. Some people use one if their internet provider slows down streaming traffic at busy times."],
      ["Why can't I find Developer Options on my Firestick?", "On newer Fire OS versions it is hidden. Go to Settings → My Fire TV → About and click your device name 7 times to unlock it."],
      ["How long does IPTV setup on a Firestick take?", "Usually 5 to 10 minutes: a couple of minutes to enable unknown apps, a few to install the player, and one to log in."],
    ],
  },
  {
    slug: "what-is-iptv-beginners-guide",
    hero: { name: "hero-what-is-iptv", alt: "What is IPTV: a TV receiving an internet signal." },
    title: "What Is IPTV? A Complete Beginner's Guide",
    excerpt: "IPTV explained in plain English: how internet TV works, live TV vs VOD vs catch-up, what equipment you need and how it compares to cable.",
    category: "Guides",
    date: "2026-09-12",
    updated: "2026-10-01",
    cover: "📡",
    takeaways: [
      "IPTV delivers TV over your internet connection instead of a satellite dish or cable.",
      "It includes live TV, video on demand (movies and series) and catch-up TV.",
      "You need a compatible device, an IPTV player app, at least 10 Mbps internet and a subscription.",
      "It is usually cheaper and more flexible than cable, with no long-term contract.",
    ],
    body: [
      { type: "p", text: "IPTV stands for Internet Protocol Television. Instead of receiving channels through a satellite dish or a coaxial cable, your TV content is delivered over the internet — the same connection you use for browsing and video calls." },
      { type: "h2", text: "How does IPTV work?" },
      { type: "p", text: "A provider encodes TV channels and on-demand content and sends them from servers to your device as a data stream. An IPTV player app on your TV, phone or streaming stick decodes that stream and displays it, along with a programme guide (EPG)." },
      { type: "figure", name: "how-iptv-works", caption: "How IPTV works: from encoding to your screen in 4 steps." },
      { type: "h2", text: "The three types of IPTV content" },
      { type: "ul", items: ["Live TV — channels broadcast in real time, just like traditional TV.", "Video on demand (VOD) — movies and series you can start whenever you like.", "Catch-up / time-shift — replay programmes that aired in the last few days."] },
      { type: "h2", text: "What do you need to get started?" },
      { type: "ul", items: ["A compatible device: Smart TV, Firestick, Android box, phone, tablet or computer", "An IPTV player app", "An internet connection of at least 10 Mbps", "A subscription from a provider"] },
      { type: "h2", text: "IPTV vs. cable: the key differences" },
      { type: "p", text: "IPTV usually costs less, has no long-term contract and works on many devices at home or on the go. Cable doesn't depend on your internet speed, but typically needs installation, equipment rental and a 12–24 month contract." },
      { type: "h2", text: "Common IPTV terms explained" },
      { type: "ul", items: ["M3U playlist — a link or file that lists all the channels in your subscription.", "Xtream Codes — a login method (username, password and server URL) supported by most player apps.", "EPG — the electronic programme guide that shows what's on now and next.", "Connection — the number of devices that can stream at the same time on one subscription.", "VOD — video on demand: movies and series you can start whenever you want."] },
      { type: "h2", text: "Is IPTV right for you?" },
      { type: "p", text: "IPTV is a good fit if you already have a reliable internet connection, want to watch on several kinds of devices, and prefer flexible plans over long contracts. If your internet is slow or unstable, start by testing with a free trial to see how it works at home before you buy." },
      { type: "links", title: "Go deeper", items: [["IPTV in 2026: the complete guide", "/blog/iptv-complete-guide"], ["IPTV words explained simply", "/glossary"]] },
      { type: "tip", text: "The best way to find out if IPTV suits you is to try it. Request a free 24-hour trial and test it on your own devices." },
    ],
    faqs: [
      ["What does IPTV stand for?", "IPTV stands for Internet Protocol Television — television delivered over an internet connection rather than through satellite or cable signals."],
      ["Do I need a special TV for IPTV?", "No. Any Smart TV that can install apps works, and older TVs can use a streaming device such as an Amazon Firestick or an Android TV box."],
      ["Does IPTV work without internet?", "No. IPTV streams everything over the internet, so you need an active connection — at least 10 Mbps for HD and 25 Mbps for 4K."],
      ["Is IPTV the same as a movie streaming app?", "Not exactly. A movie streaming app is usually on-demand only. IPTV usually gives you live TV channels too, plus movies, series and catch-up TV."],
    ],
  },
  {
    slug: "fix-iptv-buffering",
    hero: { name: "hero-buffering", alt: "Fix IPTV buffering: a TV with a loading circle and a lightning bolt." },
    title: "IPTV Buffering? 9 Fixes That Actually Work",
    excerpt: "IPTV freezing or buffering? Try 9 simple fixes — router, Wi-Fi, app cache, DNS and VPN — and learn how to find where the problem is.",
    category: "Tutorials",
    date: "2026-09-03",
    updated: "2026-10-01",
    cover: "⚡",
    takeaways: [
      "Most buffering is caused by Wi-Fi, the device or the app — not the IPTV server.",
      "Start with the quick fixes: restart the router and device, then run a speed test.",
      "A wired Ethernet connection is the single most effective fix.",
      "Changing DNS or the app's video player solves many remaining cases.",
    ],
    body: [
      { type: "p", text: "Buffering is almost always caused by something between the server and your screen: your Wi-Fi, your device, your internet provider or the app settings. Work through the list below — most people solve the issue within the first three steps." },
      { type: "h2", text: "Quick fixes" },
      { type: "ol", items: ["Restart your device and your router (unplug for 30 seconds).", "Run a speed test on the same device — you want 25 Mbps+ for 4K.", "Switch to a wired Ethernet connection or move the router closer."] },
      { type: "h2", text: "App and device fixes" },
      { type: "ol", items: ["Clear the IPTV app's cache (Settings → Applications → your app → Clear cache).", "Change the player: most apps let you switch between an internal and external player (e.g. VLC or MX Player).", "Lower the stream quality from 4K to FHD if your internet is too slow for 4K.", "Close apps running in the background, especially on older Firesticks."] },
      { type: "h2", text: "Network fixes" },
      { type: "ol", items: ["Change your router's DNS to a public DNS such as 1.1.1.1 or 8.8.8.8.", "If your internet provider slows down video at busy times, a good VPN can help."] },
      { type: "h2", text: "How to tell where the problem is" },
      { type: "p", text: "A simple test tells you whether the issue is local or on the server. Play the same channel on a second device connected to the same network. If it plays smoothly there, the problem is the first device or its app. If both devices buffer, the problem is your network or internet provider. If only some channels buffer on every device, contact us — we can check those streams for you." },
      { type: "h2", text: "When buffering only happens in the evening" },
      { type: "p", text: "Buffering that appears at the same time every evening — often during big football matches — usually means your internet provider is too busy or is slowing down video at busy times. Running a speed test at that exact time will confirm it. Lowering the quality to FHD during those hours or using a VPN are the most common solutions." },
      { type: "tip", text: "Still buffering after all nine steps? Send us a WhatsApp message with your device model and speed test result — we'll check the server side for you." },
    ],
    faqs: [
      ["Why does my IPTV keep buffering?", "The most common causes are weak Wi-Fi, an overloaded device, a full app cache or an internet provider that slows video at peak times. Restarting your router and device and switching to Ethernet fixes most cases."],
      ["What internet speed stops IPTV buffering?", "Aim for at least 10 Mbps for HD, 15 Mbps for Full HD and 25 Mbps for 4K on the device you are watching on — measured with a speed test on that device."],
      ["Does a VPN fix IPTV buffering?", "Sometimes. A VPN helps if your internet provider slows down video, but it can also add delay, so only use it if a speed test shows your provider slowing you down."],
      ["Should I clear the cache of my IPTV app?", "Yes. Clearing the app cache regularly frees memory and fixes many freezing problems, especially on Firesticks and older Android boxes."],
    ],
  },
  {
    slug: "is-iptv-legal",
    hero: { name: "hero-legal", alt: "Is IPTV legal: a shield with a check mark." },
    title: "Is IPTV Legal? What You Need to Know Before Subscribing",
    excerpt: "IPTV technology is legal, but not every service is. Learn what makes a provider legitimate, the red flags to avoid and how to protect your data.",
    category: "Legal & Safety",
    date: "2026-08-25",
    updated: "2026-10-01",
    cover: "⚖️",
    takeaways: [
      "IPTV technology itself is legal — broadcasters and telecom companies use it every day.",
      "What matters is whether the provider has the right licences for its content.",
      "Legitimate providers publish clear terms, privacy, refund and DMCA policies.",
      "Laws differ by country, so check the rules where you live.",
    ],
    body: [
      { type: "p", text: "IPTV as a technology is completely legal: it's simply a way of delivering video over the internet, and major broadcasters and telecom companies use it every day. What matters legally is whether the content being streamed is properly licensed." },
      { type: "h2", text: "What makes a service legitimate?" },
      { type: "ul", items: ["The provider has the rights or licences to distribute the channels it offers.", "It has clear terms of service, a privacy policy and a refund policy.", "It offers secure payment methods and real customer support.", "It responds to copyright (DMCA) requests."] },
      { type: "h2", text: "Red flags to watch for" },
      { type: "ul", items: ["Prices that seem impossibly low for premium sports or movie channels", "No contact details, website policies or support channel", "Payment only via untraceable methods"] },
      { type: "h2", text: "Laws differ by country" },
      { type: "p", text: "Copyright rules and enforcement vary between countries. Always check the rules where you live, and if in doubt, ask the provider what content is licensed in your region." },
      { type: "h2", text: "A quick checklist before you subscribe" },
      { type: "ol", items: ["Read the provider's Terms of Service and check that it explains what you are buying.", "Look for a refund policy with clear conditions and a time limit.", "Check that there is a way to contact a real person before you pay.", "See whether the provider has a DMCA or copyright policy and a contact for rights holders.", "Start with a free trial or the shortest plan rather than a long one."] },
      { type: "h2", text: "Protecting your personal data" },
      { type: "p", text: "Whatever service you choose, share only the information needed to deliver it. A trustworthy provider explains in its privacy policy what data it collects, why, and how long it keeps it — and never asks for your full card details over chat." },
      { type: "tip", text: "This article is general information, not legal advice. For questions about your specific situation, consult a qualified legal professional." },
    ],
    faqs: [
      ["Is IPTV legal?", "Yes, IPTV as a technology is legal. Whether a particular service is legal depends on whether it has the rights to distribute the channels and content it offers, and on the laws of your country."],
      ["How can I tell if an IPTV provider is legitimate?", "Look for published terms, privacy, refund and DMCA policies, a real support contact, secure payment and prices that make sense for what is offered."],
      ["What is a DMCA policy?", "A DMCA policy explains how copyright owners can report content they believe infringes their rights, and how the provider responds to those reports."],
    ],
  },
  {
    slug: "best-iptv-apps-2026",
    hero: { name: "hero-apps", alt: "Best IPTV player apps: a phone with app icons." },
    title: "The Best IPTV Player Apps in 2026 (Compared)",
    excerpt: "TiviMate, IPTV Smarters Pro, IBO Player, VLC and Kodi compared — find the best IPTV player app for your Firestick, Smart TV, iPhone or PC.",
    category: "Guides",
    date: "2026-08-14",
    updated: "2026-10-01",
    cover: "📱",
    takeaways: [
      "TiviMate is the best choice for live TV on Android TV and Firestick.",
      "IPTV Smarters Pro works on almost every platform, including iPhone and Windows.",
      "IBO Player is a popular option on Samsung and LG Smart TVs.",
      "VLC and Kodi are free, open-source backups that work everywhere.",
    ],
    body: [
      { type: "p", text: "Your IPTV subscription gives you the content; the player app decides how pleasant it is to watch. Here's a quick comparison of the most popular players and which devices they suit best." },
      { type: "h2", text: "TiviMate" },
      { type: "p", text: "Best for Android TV and Firestick. A clean, cable-TV-style interface with an excellent programme guide, favourites and recording (premium version). Our top pick for live TV lovers." },
      { type: "h2", text: "IPTV Smarters Pro" },
      { type: "p", text: "Available on almost every platform, including iOS and Windows. Easy to set up with Xtream Codes login and good for both live TV and movies." },
      { type: "h2", text: "IBO Player" },
      { type: "p", text: "A popular option for Samsung and LG Smart TVs, where app choice is more limited. Requires a small one-time activation fee from the app developer." },
      { type: "h2", text: "VLC and Kodi" },
      { type: "p", text: "Free, open-source and available everywhere. Great as a backup or for computers, but less polished for everyday channel surfing." },
      { type: "h2", text: "Quick recommendation by device" },
      { type: "ul", items: ["Amazon Firestick / Android TV box: TiviMate (or IPTV Smarters Pro)", "Samsung or LG Smart TV: IBO Player or IPTV Smarters", "iPhone / iPad / Apple TV: IPTV Smarters Pro or GSE Smart IPTV", "Android phone or tablet: IPTV Smarters Pro or TiviMate", "Windows / Mac: VLC or IPTV Smarters for desktop"] },
      { type: "figure", name: "devices", caption: "IPTV player apps work on Smart TVs, streaming sticks, TV boxes, phones, tablets and computers." },
      { type: "h2", text: "What to look for in a player" },
      { type: "ul", items: ["A fast, clear programme guide (EPG) if you watch a lot of live TV", "Favourites and channel groups so you can find channels quickly", "Catch-up support for replaying recent programmes", "Choice of video player, which helps when a stream stutters", "Regular updates from the developer"] },
      { type: "tip", text: "Not sure which one to choose? Tell us your device on WhatsApp and we'll recommend the best app and send setup instructions." },
    ],
    faqs: [
      ["What is the best IPTV app for Firestick?", "TiviMate is one of the best IPTV players for Firestick and Android TV thanks to its cable-style programme guide. IPTV Smarters Pro is a good free alternative."],
      ["What is the best IPTV app for iPhone?", "IPTV Smarters Pro and GSE Smart IPTV are popular choices on iPhone and iPad, and both support Xtream Codes login."],
      ["Are IPTV player apps free?", "Many are free to download. Some, like TiviMate Premium and IBO Player, charge a small fee for extra features or activation, paid to the app developer."],
      ["Does the IPTV app include channels?", "No. Player apps only play content — the channels come from your IPTV subscription, which you add to the app with your login details."],
    ],
  },
  {
    slug: "iptv-smart-tv-samsung-lg",
    hero: { name: "hero-smart-tv", alt: "IPTV on Samsung and LG Smart TV." },
    title: "How to Watch IPTV on Samsung & LG Smart TVs",
    excerpt: "Set up IPTV directly on your Samsung (Tizen) or LG (webOS) Smart TV — no stick or box needed. Step-by-step install, activation and picture tips.",
    category: "Tutorials",
    date: "2026-08-02",
    updated: "2026-10-01",
    cover: "📺",
    takeaways: [
      "Samsung (Tizen) and LG (webOS) TVs can run IPTV apps directly — no extra box needed.",
      "Install a player such as IBO Player or IPTV Smarters from the TV's app store.",
      "Many Smart TV players use a MAC address and device key for activation.",
      "Use Sports picture mode for live matches and turn off motion smoothing for films.",
    ],
    body: [
      { type: "p", text: "Modern Samsung and LG TVs can run IPTV apps directly, so you don't need any extra hardware. The process takes about five minutes." },
      { type: "h2", text: "Samsung (Tizen OS)" },
      { type: "ol", items: ["Press the Home button and open Apps.", "Search for an IPTV player such as IBO Player or IPTV Smarters.", "Install the app and open it — note the MAC address and device key shown on screen.", "Send those details to us (or enter your Xtream login if the app supports it)."] },
      { type: "h2", text: "LG (webOS)" },
      { type: "ol", items: ["Open the LG Content Store from the Home menu.", "Search for your chosen IPTV player and install it.", "Launch the app and follow the same activation steps as above."] },
      { type: "h2", text: "Tips for the best picture" },
      { type: "ul", items: ["Turn off motion smoothing for a more natural picture on films.", "Use “Sports” picture mode for live matches.", "Connect the TV with an Ethernet cable if possible."] },
      { type: "h2", text: "What if my TV doesn't have the app?" },
      { type: "p", text: "Older Smart TVs (roughly before 2018) and some budget models have a limited app store and may not offer a good IPTV player. In that case, an Amazon Firestick or Android TV box is the easiest solution: it plugs into an HDMI port and gives you access to every major IPTV app." },
      { type: "h2", text: "Troubleshooting on Smart TVs" },
      { type: "ul", items: ["App closes or freezes: update the TV's software (Settings → Support → Software Update).", "Playlist not loading: check that the MAC address you sent us matches the one shown in the app.", "Picture stutters: connect the TV with an Ethernet cable — many TVs have slower built-in Wi-Fi than streaming sticks."] },
      { type: "tip", text: "Once you've installed the app, message us on WhatsApp with the MAC address and we'll activate your playlist for you." },
    ],
    faqs: [
      ["Can I watch IPTV on a Samsung Smart TV?", "Yes. Install an IPTV player such as IBO Player or IPTV Smarters from the Samsung app store, then add your subscription with the details we send you."],
      ["Can I watch IPTV on an LG Smart TV?", "Yes. Open the LG Content Store, install an IPTV player, and activate it with your subscription details."],
      ["What is a MAC address in an IPTV app?", "It is a unique identifier shown by the app on your TV. Some players use it, together with a device key, to link your subscription to that specific TV."],
    ],
  },
  {
    slug: "iptv-vs-cable-satellite",
    hero: { name: "hero-vs-cable", alt: "IPTV versus cable and satellite." },
    title: "IPTV vs Cable vs Satellite: Which Is Better in 2026?",
    excerpt: "IPTV vs cable vs satellite compared on price, picture quality, devices, contracts and reliability — so you can choose the right TV option for your home.",
    category: "Guides",
    date: "2026-10-01",
    cover: "⚔️",
    takeaways: [
      "IPTV is usually the cheapest option and has no long-term contract.",
      "Cable and satellite don't depend on your internet speed, but need installation and equipment.",
      "IPTV works on many devices — TV, phone, tablet and computer — at home or away.",
      "Satellite can be affected by heavy rain; IPTV depends on a stable internet connection.",
    ],
    body: [
      { type: "p", text: "There are three main ways to get TV channels at home: IPTV over your internet connection, cable through a coaxial line, and satellite through a dish on your roof or balcony. Each has strengths and weaknesses. This guide compares them on the factors that matter most so you can decide which suits your home." },
      { type: "h2", text: "Price" },
      { type: "p", text: "IPTV subscriptions are generally the least expensive option, especially on longer plans — at DenvayStream, a 2-year plan works out at " + p.monthly + " per month. Cable and satellite packages typically cost much more each month once extra channel packs, equipment rental and installation fees are added, and prices often rise after an introductory period." },
      { type: "h2", text: "Contracts and flexibility" },
      { type: "p", text: "Cable and satellite providers usually require a 12- to 24-month contract with cancellation fees. IPTV services are typically prepaid for a fixed period with no automatic renewal, so you can stop at any time without penalties." },
      { type: "h2", text: "Devices and where you can watch" },
      { type: "p", text: "Cable and satellite are tied to a set-top box connected to one TV, and extra rooms usually cost extra. IPTV runs as an app on Smart TVs, streaming sticks, phones, tablets and computers, so you can watch in any room — or while travelling — as long as you have internet." },
      { type: "h2", text: "Picture quality" },
      { type: "p", text: "All three can deliver high-definition pictures. IPTV services increasingly offer 4K streams, and quality adapts to your connection. Cable and satellite offer 4K on selected channels, often with a more expensive box or package." },
      { type: "h2", text: "Reliability" },
      { type: "p", text: "Cable is very stable but can be affected by local network outages. Satellite signals can drop during heavy rain or snow. IPTV depends on your internet: with a stable connection of 25 Mbps or more and good servers, it is very reliable, but slow or busy Wi-Fi can cause buffering." },
      { type: "h2", text: "Installation" },
      { type: "p", text: "Satellite needs a dish mounted and aligned, and cable may need a technician visit. IPTV needs no installation: you download an app, enter your login details and start watching, usually within minutes." },
      { type: "h2", text: "Side-by-side summary" },
      { type: "ul", items: ["Cost: IPTV lowest · Cable high · Satellite medium to high", "Contract: IPTV none · Cable 12–24 months · Satellite 12–24 months", "Devices: IPTV any screen · Cable set-top box · Satellite receiver", "Setup: IPTV minutes, DIY · Cable technician · Satellite dish installation", "Main weakness: IPTV needs good internet · Cable price · Satellite weather"] },
      { type: "h2", text: "Which should you choose?" },
      { type: "p", text: "Choose IPTV if you have reliable internet and want low prices, flexibility and multi-device viewing. Cable makes sense if your internet is poor but cable is available in your street. Satellite suits rural homes without fast internet or cable. If you are unsure, testing IPTV with a free trial costs nothing and shows you how it performs on your own connection." },
      { type: "tip", text: "Want to compare for yourself? Request our free 24-hour trial and test IPTV on your own TV before deciding." },
    ],
    faqs: [
      ["Is IPTV better than cable?", "For most homes with reliable internet, IPTV offers lower prices, no contract and more devices. Cable can be more stable if your internet connection is slow or unreliable."],
      ["Is IPTV cheaper than satellite?", "Usually yes. IPTV has no dish, installation or equipment rental costs, and subscriptions are typically cheaper per month than satellite packages."],
      ["Does IPTV work during bad weather?", "Yes. Unlike satellite, IPTV is not affected by rain or snow, as long as your internet connection stays up."],
      ["Can I switch from cable to IPTV easily?", "Yes. You only need a compatible device and internet connection. Many people test IPTV with a free trial before cancelling their cable contract."],
    ],
  },
  {
    slug: "internet-speed-for-iptv",
    hero: { name: "hero-speed", alt: "Internet speed for IPTV: a speed gauge." },
    title: "What Internet Speed Do You Need for IPTV? (HD, FHD & 4K)",
    excerpt: "The internet speed you need for smooth IPTV in HD, Full HD and 4K, how to test your connection properly, and how to improve it if it's too slow.",
    category: "Guides",
    date: "2026-10-01",
    cover: "📶",
    takeaways: [
      "HD needs at least 10 Mbps, Full HD 15 Mbps and 4K 25 Mbps per stream.",
      "Measure speed on the device you watch on, not on your phone next to the router.",
      "Stability matters as much as speed — wired Ethernet beats Wi-Fi.",
      "Add the speeds together if several people stream at the same time.",
    ],
    body: [
      { type: "p", text: "Internet speed is the most important factor for a smooth IPTV picture. The good news is that most home connections today are fast enough — as long as the speed actually reaches your TV. Here's what you need and how to check it." },
      { type: "h2", text: "Recommended speeds per stream" },
      { type: "ul", items: ["SD (standard definition): 5 Mbps", "HD (720p): 10 Mbps", "Full HD (1080p): 15 Mbps", "4K Ultra HD: 25 Mbps or more"] },
      { type: "figure", name: "speed-chart", caption: "Recommended internet speed for one screen, by picture quality." },
      { type: "p", text: "These figures are per stream. If two people watch IPTV in different rooms while someone else is on a video call, add their needs together. A household streaming one 4K and one Full HD channel at the same time needs at least 40 Mbps." },
      { type: "h2", text: "How to test your speed correctly" },
      { type: "ol", items: ["Open a speed-test app or website on the device you watch IPTV on (most Smart TVs and Firesticks have a browser or app for this).", "Close other apps and pause downloads on other devices.", "Run the test two or three times, including once in the evening when networks are busiest.", "Look at the download speed and the ping: under 50 ms ping is ideal."] },
      { type: "h2", text: "Why speed isn't everything" },
      { type: "p", text: "A connection can show a high speed but still go up and down, which causes freezes. Wi-Fi is the most common cause: walls, distance and neighbouring networks reduce both speed and stability. A wired Ethernet cable from the router to the TV or streaming device gives the most stable results." },
      { type: "h2", text: "How to improve a slow connection" },
      { type: "ul", items: ["Connect with an Ethernet cable, or use powerline adapters if the router is far away.", "Use the 5 GHz Wi-Fi band and place the router in an open, central spot.", "Restart your router regularly and keep its firmware up to date.", "Lower the stream quality from 4K to Full HD if your speed is close to the limit.", "Ask your internet provider about a faster plan if tests stay below the targets above."] },
      { type: "tip", text: "Not sure your connection is good enough? Run our free 24-hour trial — it's the most reliable test of how IPTV performs in your home." },
    ],
    faqs: [
      ["Is 10 Mbps enough for IPTV?", "Yes, 10 Mbps is enough for one HD stream. For Full HD aim for 15 Mbps, and for 4K at least 25 Mbps per stream."],
      ["What internet speed do I need for 4K IPTV?", "At least 25 Mbps for each 4K stream, measured on the device you watch on. A wired connection is strongly recommended for 4K."],
      ["Is Wi-Fi good enough for IPTV?", "Often yes, especially on 5 GHz Wi-Fi close to the router. If you see buffering, a wired Ethernet connection is the most effective fix."],
      ["Does ping matter for IPTV?", "A little. A ping under 50 ms is ideal. High ping or unstable connections can make channels slower to start and cause occasional freezes."],
    ],
  },
  {
    slug: "how-to-start-iptv-reseller-business",
    hero: { name: "hero-reseller", alt: "Start an IPTV reseller business: a growing chart." },
    title: "How to Start an IPTV Reseller Business: A Beginner's Guide",
    excerpt: "How IPTV reselling works, how credits and panels work, how to price your subscriptions and find customers — a practical guide for beginners.",
    category: "Guides",
    date: "2026-10-01",
    cover: "💼",
    takeaways: [
      "Resellers buy credits in bulk and use them to create subscriptions for their own customers.",
      "With DenvayStream, 1 credit = 1 month of service for one customer.",
      "Your profit is the difference between your selling price and your credit cost.",
      "Good support and free trials are what keep reseller customers loyal.",
    ],
    body: [
      { type: "p", text: "An IPTV reseller buys subscription credits at wholesale prices and sells subscriptions to their own customers at a price they choose. You don't need servers or technical knowledge: the provider runs the service, and you manage your customers through a reseller panel." },
      { type: "h2", text: "How credits work" },
      { type: "p", text: "Credits are the currency of your reseller panel. At DenvayStream, 1 credit equals 1 month of service for one customer, so a 3-month subscription uses 3 credits and a 1-year subscription uses 12. Credits are bought in packs — on Premium or Standard servers — and stay in your panel until you use them." },
      { type: "h2", text: "Choosing between Premium and Standard servers" },
      { type: "p", text: "Premium servers have more power at busy times, which matters most for customers who watch a lot of live sport. Standard servers cost less per credit and give good quality for everyday viewing. Many resellers start with Standard credits and add Premium once they have customers asking for it." },
      { type: "h2", text: "How to set your prices" },
      { type: "p", text: "Start from your cost per credit. For example, if a credit costs you " + p.credit + ", a 1-year subscription (12 credits) costs you about " + p.yearCost + ". If you sell it for " + p.yearPrice + ", your profit is about " + p.yearProfit + " per customer. Look at what other services charge in your market and remember to count the time you spend on support." },
      { type: "h2", text: "Finding your first customers" },
      { type: "ol", items: ["Start with friends, family and colleagues — people trust recommendations from people they know.", "Offer free trials from your panel so people can test before buying.", "Create a simple WhatsApp Business profile with your prices and setup help.", "Ask happy customers to recommend you, for example with a free month for each referral."] },
      { type: "h2", text: "Keeping customers happy" },
      { type: "p", text: "Customers stay with resellers who answer quickly, help with setup and remind them before their subscription ends. Keep a simple list of renewal dates, prepare short setup guides for the most common devices, and contact your provider's reseller support whenever a customer has a problem you can't solve." },
      { type: "tip", text: "Ready to start? See our reseller credit packs or message us on WhatsApp and we'll help you choose the right one." },
    ],
    faqs: [
      ["How much does it cost to become an IPTV reseller?", "At DenvayStream, reseller packs start at " + p.starterPrice + " for " + p.starterCredits + " Standard-server credits. There is no extra fee for the reseller panel."],
      ["How much can an IPTV reseller earn?", "It depends on your prices and number of customers. For example, buying credits at " + p.credit + " and selling 1-year subscriptions at " + p.yearPrice + " gives about " + p.yearProfit + " profit per customer."],
      ["Do I need technical skills to resell IPTV?", "No. The provider runs the servers. You use a simple web panel to create and renew subscriptions, and help customers install an app."],
      ["Can resellers create free trials?", "Yes. You can create test lines from your panel so potential customers can try the service before they buy."],
    ],
  },
  {
    slug: "how-to-test-iptv-free-trial",
    hero: { name: "hero-test-trial", alt: "How to test an IPTV free trial: a checklist with ticks." },
    title: "How to Test an IPTV Service With a Free Trial (Checklist)",
    excerpt: "Make the most of a 24-hour IPTV free trial: what to test, when to test it, and the warning signs that tell you a service isn't right for you.",
    category: "Tutorials",
    date: "2026-10-01",
    cover: "✅",
    takeaways: [
      "Use your free trial on the same device and connection you'll use every day.",
      "Test during busy evening hours and, if possible, during a live sports event.",
      "Check channel switching speed, picture stability, the TV guide and movies.",
      "Contact support during the trial to see how quickly and helpfully they answer.",
    ],
    body: [
      { type: "p", text: "A free trial is the best way to judge an IPTV service, but 24 hours goes quickly. Planning what to test helps you make a confident decision before you pay for a subscription." },
      { type: "h2", text: "Before the trial starts" },
      { type: "ul", items: ["Install your IPTV player app in advance so you don't waste trial time.", "Run a speed test on your TV or streaming device and note the result.", "Make a list of the channels and categories you watch most."] },
      { type: "figure", name: "trial-timeline", caption: "The 4 stages of a 24-hour IPTV free trial — from request to decision." },
      { type: "h2", text: "What to test during the trial" },
      { type: "ol", items: ["Picture stability: watch one channel for at least 30 minutes without interruption.", "Channel switching: change channels several times and note how quickly each one starts.", "Peak hours: test again in the evening, when servers and networks are busiest.", "Live sport: if possible, watch a live match — it's the hardest test for any service.", "TV guide: check that the programme guide shows correct, up-to-date information.", "Movies and series: start a few titles and try pausing and skipping forward.", "Other devices: install the trial on a second device, such as your phone."] },
      { type: "h2", text: "Test the support team too" },
      { type: "p", text: "Send a question to support during your trial — for example, which app is best for your TV. A fast, helpful answer is a good sign of how you'll be treated once you're a paying customer." },
      { type: "h2", text: "Warning signs" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "The signs of a safe IPTV trial — and the warning signs of a risky one." },
      { type: "ul", items: ["Frequent freezing on a fast, wired connection", "Many channels that don't load or show the wrong content", "No reply from support, or pressure to buy a long plan immediately", "No published terms, refund policy or contact details"] },
      { type: "h2", text: "After the trial" },
      { type: "p", text: "If the trial went well, start with a plan length you're comfortable with. Longer plans cost less per month, but there's no harm in starting with a shorter plan and upgrading later." },
      { type: "links", title: "Read more", items: [["IPTV free trial 24 hours: how to get one and what to expect", "/blog/iptv-free-trial-24-hours"]] },
      { type: "tip", text: "Ready to test? Request your free 24-hour DenvayStream trial — no payment details needed." },
    ],
    faqs: [
      ["How long is an IPTV free trial?", "Most IPTV free trials last 24 hours. DenvayStream's trial is 24 hours with full access and no payment details required."],
      ["What should I test in an IPTV trial?", "Test picture stability, channel switching speed, evening performance, live sport, the TV guide, movies and the speed of customer support."],
      ["Why does an IPTV trial work differently on different devices?", "Devices differ in processing power and Wi-Fi quality. Testing on the device you'll use every day gives the most accurate result."],
    ],
  },
  {
    slug: "iptv-on-mag-box",
    hero: { name: "hero-mag", alt: "IPTV on a MAG box with its remote." },
    title: "How to Set Up IPTV on a MAG Box (Step-by-Step)",
    excerpt: "Set up IPTV on a MAG box in a few minutes: find your MAC address, add the portal URL, restart the box and fix the most common MAG problems.",
    category: "Tutorials",
    date: "2026-10-01",
    cover: "📦",
    takeaways: [
      "A MAG box uses a portal URL instead of an app login.",
      "You must send us the MAC address printed on the box.",
      "You add the portal URL in the box settings, then restart it.",
      "A cable connection works best on MAG boxes.",
    ],
    body: [
      { type: "p", text: "A MAG box is a small TV box made only for IPTV. It is very simple to use with a remote control, which makes it a good choice for people who do not want to install apps." },
      { type: "h2", text: "Before you start" },
      { type: "ul", items: ["Connect the MAG box to your TV with an HDMI cable.", "Connect the box to your router with an internet cable if you can.", "Find the MAC address. It is on a sticker under the box and starts with 00:1A:79."] },
      { type: "h2", text: "Step 1 — Send us your MAC address" },
      { type: "p", text: "Send the MAC address to us on WhatsApp. We use it to connect your subscription to your box. We will then send you a portal URL." },
      { type: "h2", text: "Step 2 — Add the portal URL" },
      { type: "ol", items: ["Turn on the box and wait for the main screen.", "Press the SETUP button on the remote, or go to Settings → System settings → Servers → Portals.", "In “Portal 1 name”, type a name, for example DenvayStream.", "In “Portal 1 URL”, type the portal URL we sent you. Check every letter.", "Press OK to save."] },
      { type: "h2", text: "Step 3 — Restart and watch" },
      { type: "p", text: "Go back to the settings menu and choose Restart portal, or turn the box off and on again. The box will load your channels. The first time can take one or two minutes." },
      { type: "h2", text: "Common problems" },
      { type: "ul", items: ["“STB blocked” or “Access denied”: the MAC address we have may be wrong. Send us a photo of the sticker.", "Black screen: check the HDMI cable and choose the right HDMI input on your TV.", "Channels load slowly: use a cable instead of Wi-Fi and restart the box."] },
      { type: "tip", text: "Send us a photo of the sticker under your MAG box on WhatsApp and we will set up everything for you." },
    ],
    faqs: [
      ["What is a MAG box?", "A MAG box is a small TV box made only for IPTV. You connect it to your TV and your internet, add a portal URL, and watch with the remote control."],
      ["Where do I find the MAC address on a MAG box?", "It is printed on a sticker under the box. You can also see it in the box settings under System information."],
      ["Can I use Wi-Fi with a MAG box?", "Some MAG models have Wi-Fi, but a cable connection is more stable and gives fewer freezes."],
    ],
  },
  {
    slug: "iptv-on-iphone-ipad-apple-tv",
    hero: { name: "hero-apple", alt: "IPTV on iPhone, iPad and Apple TV." },
    title: "How to Watch IPTV on iPhone, iPad and Apple TV",
    excerpt: "Watch IPTV on your iPhone, iPad or Apple TV: which app to install from the App Store, how to log in with your details, and simple tips for a stable picture.",
    category: "Tutorials",
    date: "2026-10-01",
    cover: "🍏",
    takeaways: [
      "Install an IPTV player app from the App Store, such as IPTV Smarters Pro or GSE Smart IPTV.",
      "Log in with the username, password and server URL we send you.",
      "The same steps work on iPhone, iPad and Apple TV.",
      "Use 5 GHz Wi-Fi or a cable for Apple TV for the best picture.",
    ],
    body: [
      { type: "p", text: "Apple devices work very well with IPTV. You only need a player app from the App Store and the login details from your subscription. It takes about five minutes." },
      { type: "h2", text: "Step 1 — Install a player app" },
      { type: "ol", items: ["Open the App Store on your iPhone, iPad or Apple TV.", "Search for “IPTV Smarters Pro” or “GSE Smart IPTV”.", "Install the app and open it."] },
      { type: "h2", text: "Step 2 — Log in" },
      { type: "ol", items: ["Choose “Login with Xtream Codes API” (the name can be a little different in each app).", "Type any name for your list, for example DenvayStream.", "Type the username, password and server URL we sent you.", "Press Add user or Login and wait for the channels to load."] },
      { type: "h2", text: "Tips for a better picture" },
      { type: "ul", items: ["On Apple TV, use a network cable if you can.", "On iPhone and iPad, stay close to your router or use 5 GHz Wi-Fi.", "If a channel stops, close the app fully and open it again.", "Turn on Low Power Mode only when you need it, because it can slow down the video."] },
      { type: "h2", text: "Watching on a bigger screen" },
      { type: "p", text: "You can send the picture from your iPhone or iPad to a TV with AirPlay. For the best result on a TV, install the app directly on an Apple TV instead." },
      { type: "tip", text: "Not sure which app to choose for your Apple device? Ask us on WhatsApp and we will send you simple instructions." },
    ],
    faqs: [
      ["Can I watch IPTV on an iPhone?", "Yes. Install an IPTV player app from the App Store, then log in with the details from your subscription."],
      ["What is the best IPTV app for Apple TV?", "IPTV Smarters Pro and GSE Smart IPTV are popular choices on Apple TV. Both support login with a username, password and server URL."],
      ["Do I need a different subscription for each Apple device?", "No. You can install the app on several devices, but each subscription can stream on one device at a time."],
    ],
  },
  {
    slug: "iptv-on-android-tv-box-phone",
    hero: { name: "hero-android", alt: "IPTV on Android TV, TV box and phone." },
    title: "How to Set Up IPTV on Android TV, Android Box and Android Phone",
    excerpt: "Set up IPTV on any Android device — Android TV, TV box, phone or tablet: install a player from Google Play, log in, and get a smooth, stable picture.",
    category: "Tutorials",
    date: "2026-10-01",
    cover: "🤖",
    takeaways: [
      "Android devices can install IPTV players directly from Google Play.",
      "TiviMate is great for TVs; IPTV Smarters Pro works well on phones.",
      "Log in with the username, password and server URL we send you.",
      "Restarting the device and clearing the app cache fixes most problems.",
    ],
    body: [
      { type: "p", text: "Android is one of the easiest systems for IPTV. Android TVs, Android TV boxes, phones and tablets can all install a player app from Google Play in a few minutes." },
      { type: "h2", text: "Step 1 — Install a player app" },
      { type: "ol", items: ["Open Google Play on your device.", "Search for “TiviMate” (best for TV) or “IPTV Smarters Pro” (good for phone and TV).", "Install the app and open it."] },
      { type: "h2", text: "Step 2 — Add your subscription" },
      { type: "ol", items: ["Choose “Add playlist” or “Login with Xtream Codes”.", "Type the server URL, username and password we sent you.", "Wait while the app loads your channels, movies and TV guide."] },
      { type: "h2", text: "Step 3 — Make it smooth" },
      { type: "ul", items: ["Connect your TV box with a network cable if you can.", "Restart the box once a week.", "Clear the app cache if channels start to freeze (Settings → Apps → your app → Storage → Clear cache).", "Keep at least 1 GB of free storage on the device."] },
      { type: "h2", text: "Phones and tablets" },
      { type: "p", text: "On a phone, you can watch at home or when you travel. Use Wi-Fi when you can, because video uses a lot of mobile data. One hour of HD video can use around 1 to 3 GB." },
      { type: "tip", text: "Tell us your device model on WhatsApp and we will tell you the best app for it." },
    ],
    faqs: [
      ["What is the best IPTV app for Android TV?", "TiviMate is one of the best IPTV players for Android TV and Android boxes. IPTV Smarters Pro is a good free choice."],
      ["Can I watch IPTV on my Android phone with mobile data?", "Yes, but video uses a lot of data — around 1 to 3 GB per hour in HD. Use Wi-Fi when you can."],
      ["Why does my Android box freeze?", "The most common reasons are weak Wi-Fi, low storage or a full app cache. Use a cable, free up storage and clear the cache."],
    ],
  },
  {
    slug: "iptv-on-windows-mac",
    hero: { name: "hero-computer", alt: "IPTV on Windows and Mac: a laptop playing video." },
    title: "How to Watch IPTV on Windows PC and Mac",
    excerpt: "Watch IPTV on a Windows PC, laptop or Mac with free player apps like VLC or IPTV Smarters. Simple steps to add your subscription and start watching.",
    category: "Tutorials",
    date: "2026-10-01",
    cover: "💻",
    takeaways: [
      "You can watch IPTV on a computer with free apps like VLC or IPTV Smarters.",
      "VLC uses your M3U link; IPTV Smarters uses your username, password and server URL.",
      "A cable connection gives the most stable picture on a computer.",
      "Connect your laptop to a TV with an HDMI cable to watch on a big screen.",
    ],
    body: [
      { type: "p", text: "A computer is an easy way to watch IPTV, at home or when you travel. You can use a free player and start watching in a few minutes." },
      { type: "h2", text: "Option 1 — VLC (free, very simple)" },
      { type: "ol", items: ["Download VLC from its official website and install it.", "Open VLC and click Media → Open Network Stream (on Mac: File → Open Network).", "Paste the M3U link we sent you and click Play.", "Open the playlist view to see your channel list."] },
      { type: "h2", text: "Option 2 — IPTV Smarters (with TV guide)" },
      { type: "ol", items: ["Download IPTV Smarters for Windows or Mac from its official website.", "Open the app and choose “Login with Xtream Codes API”.", "Type the username, password and server URL we sent you.", "Wait for the channels, movies and TV guide to load."] },
      { type: "h2", text: "Watch on your TV" },
      { type: "p", text: "Connect your laptop to your TV with an HDMI cable. On the TV, choose the right HDMI input. On Windows, press the Windows key + P to choose how the screen is shown." },
      { type: "h2", text: "Tips" },
      { type: "ul", items: ["Close other programs that use the internet, like downloads.", "Use a network cable if your Wi-Fi is weak.", "Keep your player app up to date."] },
      { type: "tip", text: "Need your M3U link or help with the app? Message us on WhatsApp." },
    ],
    faqs: [
      ["Can I watch IPTV on a laptop?", "Yes. Install a free player such as VLC or IPTV Smarters, add your subscription details and start watching."],
      ["What is the best IPTV player for Windows?", "VLC is the simplest free option. IPTV Smarters for Windows is better if you want a TV guide and a menu like a TV."],
      ["Can I watch IPTV on a Mac?", "Yes. VLC and IPTV Smarters both work on Mac."],
    ],
  },
  {
    slug: "iptv-complete-guide",
    hero: { name: "hero-complete-guide", alt: "IPTV complete guide 2026: an open book." },
    title: "IPTV in 2026: The Complete Guide (How It Works, Devices, Costs & Safety)",
    excerpt: "Everything you need to know about IPTV in 2026: how it works, what you need, devices, internet speed, costs, how to choose a good service and how to start.",
    category: "Guides",
    date: "2026-10-04",
    cover: "📘",
    takeaways: [
      "IPTV is TV delivered over the internet instead of a satellite dish or cable.",
      "You need three things: a compatible device, a player app and a stable internet connection (10 Mbps for HD, 25 Mbps for 4K).",
      "IPTV usually costs less than cable or satellite and has no long contract.",
      "Choose a service with a free trial, clear policies and real support — and test it on your own device first.",
      "Most problems, like buffering, come from Wi-Fi or the device, and are easy to fix.",
    ],
    body: [
      { type: "p", text: "IPTV (Internet Protocol Television) is a way to watch TV over your internet connection. Instead of receiving channels through a satellite dish or a cable in the wall, the picture travels as data from a server to an app on your TV, phone or computer. This guide explains how IPTV works, what you need, what it costs, and how to choose and set up a service — in simple words." },

      { type: "h2", text: "What is IPTV?" },
      { type: "p", text: "IPTV is television delivered using the same technology as the rest of the internet. Your device downloads a small part of the video, plays it, and downloads the next part, again and again. Because of this, you can watch on almost any screen that connects to the internet — at home or when you travel." },
      { type: "p", text: "Large telecom companies use IPTV technology to deliver their own TV packages, and many independent services offer IPTV subscriptions that work with popular player apps. The technology is the same; what changes is the service, its content and its quality." },

      { type: "h2", text: "How does IPTV work?" },
      { type: "p", text: "Every IPTV service follows the same basic path, from the source to your screen:" },
      { type: "ol", items: [
        "Encoding: the provider turns each channel or video into a digital stream in different qualities (for example HD, Full HD and 4K).",
        "Servers: the streams are stored on, or passed through, powerful servers that send them to viewers.",
        "Delivery: when you choose a channel, the server sends the stream to your device over the internet.",
        "Playback: a player app on your device decodes the stream and shows the picture, the sound and the TV guide.",
      ] },
      { type: "figure", name: "how-iptv-works", caption: "How IPTV works: from encoding to your screen in 4 steps." },
      { type: "p", text: "The quality you see depends on each step: good servers, a stable internet connection and a capable device. If one of them is weak, you may see buffering." },

      { type: "h2", text: "IPTV vs cable, satellite and streaming apps" },
      { type: "table", caption: "How IPTV compares with other ways to watch TV", head: ["", "IPTV", "Cable", "Satellite", "Streaming apps"], rows: [
        ["Live TV channels", "Yes", "Yes", "Yes", "Usually no"],
        ["Movies & series on demand", "Yes", "Limited", "Limited", "Yes"],
        ["Needs installation", "No", "Often", "Yes (dish)", "No"],
        ["Contract", "Usually none", "12–24 months", "12–24 months", "Monthly"],
        ["Works on phone, TV and PC", "Yes", "Limited", "Limited", "Yes"],
        ["Depends on internet speed", "Yes", "No", "No", "Yes"],
        ["Affected by bad weather", "No", "No", "Yes", "No"],
      ] },
      { type: "p", text: "In short: IPTV gives you live TV like cable, the flexibility of streaming apps, and no dish or technician. Its main requirement is a good internet connection." },
      { type: "links", title: "Read more", items: [["IPTV vs cable vs satellite: full comparison", "/blog/iptv-vs-cable-satellite"]] },

      { type: "h2", text: "What can you watch with IPTV?" },
      { type: "h3", text: "Live TV" },
      { type: "p", text: "Channels you watch at the same time as they are broadcast — news, sports, entertainment, kids and international channels — with a TV guide that shows what is on now and next." },
      { type: "h3", text: "Video on demand (VOD)" },
      { type: "p", text: "A library of movies and series that you can start, pause and watch again whenever you want." },
      { type: "h3", text: "Catch-up TV" },
      { type: "p", text: "Programmes that were shown in the last few days, available to watch later. This feature depends on the channel and on your player app." },

      { type: "h2", text: "What do you need to watch IPTV?" },
      { type: "ul", items: [
        "A compatible device: Smart TV, Amazon Firestick, Android TV box, phone, tablet, computer or MAG box.",
        "A player app, such as TiviMate, IPTV Smarters, IBO Player or VLC. The app does not include channels.",
        "An IPTV subscription, which gives you a login (username, password and server URL) or an M3U link.",
        "A stable internet connection — ideally with a network cable for TVs and TV boxes.",
      ] },

      { type: "h2", text: "What internet speed do you need?" },
      { type: "table", caption: "Recommended internet speed per stream", head: ["Picture quality", "Minimum speed", "Recommended"], rows: [
        ["SD", "3 Mbps", "5 Mbps"],
        ["HD (720p)", "7 Mbps", "10 Mbps"],
        ["Full HD (1080p)", "10 Mbps", "15 Mbps"],
        ["4K Ultra HD", "20 Mbps", "25 Mbps or more"],
      ] },
      { type: "figure", name: "speed-chart", caption: "Recommended internet speed for one screen, by picture quality." },
      { type: "p", text: "These numbers are for one screen. If several people watch at the same time, add the speeds together. Always test the speed on the device you watch on, not on your phone next to the router." },
      { type: "links", title: "Read more", items: [["What internet speed do you need for IPTV?", "/blog/internet-speed-for-iptv"]] },

      { type: "h2", text: "Which devices work with IPTV?" },
      { type: "p", text: "Almost every modern screen can play IPTV. The best choice depends on what you already have:" },
      { type: "figure", name: "devices", caption: "IPTV works on Smart TVs, streaming sticks, TV boxes, phones, tablets and computers." },
      { type: "ul", items: [
        "Amazon Firestick: cheap, small and very popular. A great choice for most people.",
        "Smart TVs (Samsung, LG): no extra device needed, but app choice can be limited on older models.",
        "Android TV boxes: powerful and flexible, with the most app choices.",
        "iPhone, iPad and Apple TV: smooth and easy, with apps from the App Store.",
        "MAG boxes: made only for IPTV and very simple to use with a remote.",
        "Windows and Mac computers: easy to use with free apps like VLC.",
      ] },
      { type: "links", title: "Step-by-step setup guides", items: [
        ["All setup guides by device", "/setup"],
        ["IPTV on Amazon Firestick", "/blog/how-to-install-iptv-on-firestick"],
        ["IPTV on Samsung & LG Smart TV", "/blog/iptv-smart-tv-samsung-lg"],
        ["IPTV on Android TV, box & phone", "/blog/iptv-on-android-tv-box-phone"],
        ["IPTV on iPhone, iPad & Apple TV", "/blog/iptv-on-iphone-ipad-apple-tv"],
        ["IPTV on a MAG box", "/blog/iptv-on-mag-box"],
        ["IPTV on Windows & Mac", "/blog/iptv-on-windows-mac"],
      ] },

      { type: "h2", text: "How much does IPTV cost?" },
      { type: "p", text: "IPTV prices depend on the service and the length of the plan. Longer plans almost always cost less per month. As an example, DenvayStream plans start at " + p.cheapest + " for 3 months, and the 2-year plan works out at " + p.monthly + " per month — with every feature included in every plan." },
      { type: "p", text: "Compared with cable or satellite, IPTV usually has no installation fee, no equipment rental and no long contract. Be careful with prices that look too low: very cheap services often have unstable servers and no real support." },
      { type: "links", title: "See prices", items: [["DenvayStream plans and prices", "/pricing"]] },
      { type: "cta", title: "Not sure yet? Test IPTV free for 24 hours", text: "Check the picture quality, the channels and the stability on your own device and internet — before you pay anything." },

      { type: "h2", text: "How to choose a good IPTV service" },
      { type: "p", text: "Not all IPTV services are the same. Use this checklist before you pay:" },
      { type: "ol", items: [
        "Free trial: a good service lets you test it on your own device before you buy.",
        "Stable servers: watch during busy evening hours and during a live event to test stability.",
        "Picture quality: check HD, Full HD and 4K on your own screen.",
        "Real support: send a question and see how fast and how well they answer.",
        "Clear policies: look for terms of service, a privacy policy, a refund policy and a DMCA policy.",
        "Fair rules: no long contract, no automatic renewal you didn't ask for, and a clear refund time limit.",
        "Device support: make sure it works with the devices and apps you already use.",
      ] },
      { type: "links", title: "Read more", items: [["How to test an IPTV service with a free trial", "/blog/how-to-test-iptv-free-trial"], ["The best IPTV player apps", "/blog/best-iptv-apps-2026"]] },

      { type: "h2", text: "Is IPTV legal and safe?" },
      { type: "p", text: "IPTV technology is legal — it is simply a way to deliver video over the internet. Whether a specific service is legal depends on whether it has the right licences for its content, and on the laws of your country. To stay safe, choose a provider with clear public policies, pay with secure payment methods, and never share your full card details over chat." },
      { type: "links", title: "Read more", items: [["Is IPTV legal? What you need to know", "/blog/is-iptv-legal"]] },

      { type: "h2", text: "Common IPTV problems and quick fixes" },
      { type: "table", caption: "The most common IPTV problems and how to fix them", head: ["Problem", "Most likely cause", "Quick fix"], rows: [
        ["Buffering or freezing", "Weak Wi-Fi or slow internet", "Use a network cable and restart your router"],
        ["Channels don't load", "Wrong login details", "Check the server URL, username and password"],
        ["TV guide is empty", "Guide not loaded yet", "Refresh the TV guide in the app settings"],
        ["App is slow", "Full memory or cache", "Clear the app cache and restart the device"],
        ["Problems only in the evening", "Busy internet provider", "Lower the quality to Full HD at busy times"],
      ] },
      { type: "links", title: "Read more", items: [["IPTV buffering: 9 fixes that work", "/blog/fix-iptv-buffering"]] },

      { type: "h2", text: "How to start watching IPTV in 5 steps" },
      { type: "ol", items: [
        "Check your internet speed on the device you will watch on.",
        "Choose your device and install a player app.",
        "Request a free trial to test the service at home.",
        "If you are happy, choose a plan — longer plans cost less per month.",
        "Log in to your app with the details you receive and start watching.",
      ] },
      { type: "figure", name: "start-steps", caption: "From zero to watching: the 5 steps to start with IPTV." },

      { type: "h2", text: "The future of IPTV" },
      { type: "p", text: "More people now watch TV on several screens, and internet connections keep getting faster. Because of this, IPTV keeps growing. Expect more 4K content, better TV guides, smarter apps and faster channel switching in the coming years. Better home internet, like fibre and fast Wi-Fi, also means fewer quality problems for viewers." },

      { type: "h2", text: "IPTV words to know" },
      { type: "p", text: "You will often see words like M3U, EPG, MAC address, server URL, VOD and catch-up. Our glossary explains each one in one or two simple sentences." },
      { type: "links", title: "Learn the words", items: [["IPTV glossary: IPTV words explained simply", "/glossary"], ["What is IPTV? A beginner's guide", "/blog/what-is-iptv-beginners-guide"]] },

      { type: "tip", text: "Want to see how IPTV works on your own TV? Request a free 24-hour DenvayStream trial — no payment details needed." },
    ],
    faqs: [
      ["What is IPTV in simple words?", "IPTV is TV that comes through your internet connection instead of a satellite dish or cable. You watch it with an app on your TV, phone, tablet or computer."],
      ["How does IPTV work?", "A provider turns channels and videos into digital streams and sends them from servers over the internet. A player app on your device receives the stream and shows the picture."],
      ["What do I need to watch IPTV?", "A compatible device, a player app, an IPTV subscription and a stable internet connection — at least 10 Mbps for HD and 25 Mbps for 4K."],
      ["Is IPTV better than cable?", "For most homes with good internet, IPTV is cheaper, has no contract and works on more devices. Cable can be more stable if your internet is slow."],
      ["Can I watch IPTV on more than one device?", "Yes, you can install the app on several devices. The number of devices that can watch at the same time depends on your plan — usually one connection means one device at a time."],
      ["How much does IPTV cost per month?", "It depends on the service and plan length. At DenvayStream, plans start at " + p.cheapest + " for 3 months, and the 2-year plan costs " + p.monthly + " per month."],
      ["Do I need a VPN for IPTV?", "No, a VPN is not required. Some people use one if their internet provider slows down video at busy times."],
    ],
  },
  {
    slug: "iptv-free-trial-24-hours",
    title: "IPTV Free Trial 24 Hours: How to Get One and What to Test (2026)",
    excerpt: "Get a free 24-hour IPTV trial with no credit card. Learn what is included, how to get it in minutes, what to test, and how to spot a safe trial.",
    category: "Guides",
    date: "2026-10-04",
    cover: "🎁",
    hero: { name: "trial-hero", alt: "Free 24-hour IPTV trial: a TV showing live 4K TV with a 24h free trial badge and no credit card needed." },
    takeaways: [
      "A 24-hour IPTV free trial lets you test the full service on your own device before you pay.",
      "A good trial needs no credit card, gives full access and is ready in minutes.",
      "Test during the evening and during live sports — that is when servers are busiest.",
      "When the trial ends, nothing is charged. You choose a plan only if you are happy.",
    ],
    body: [
      { type: "p", text: "An IPTV free trial is a short, free test of an IPTV service. Most trials last 24 hours. During that time you can watch live TV, movies and series on your own TV or phone, so you can check the quality before you buy a subscription. This guide explains how a 24-hour trial works, how to get one, what to test, and how to tell a safe trial from a risky one." },

      { type: "h2", text: "What is a 24-hour IPTV free trial?" },
      { type: "p", text: "A 24-hour IPTV free trial is temporary access to an IPTV service, free of charge. The provider sends you a test login — usually a username, password and server URL — that works for 24 hours. You add it to a player app on your device, and you can use the service like a paying customer." },
      { type: "p", text: "The goal is simple: you see the real picture quality, stability and channel loading speed on your own device and your own internet connection — not on a demo video." },

      { type: "h2", text: "Why 24 hours is the right length" },
      { type: "ul", items: [
        "It covers a full day, including busy evening hours when servers are under the most pressure.",
        "It is long enough to test live TV, movies, the TV guide and several devices.",
        "It is short enough that you can decide quickly, without forgetting to test.",
      ] },

      { type: "h2", text: "How the free trial works, step by step" },
      { type: "figure", name: "trial-timeline", caption: "The 4 stages of a 24-hour IPTV free trial — from request to decision." },
      { type: "ol", items: [
        "Request: fill in a short form with your name, device and app. At DenvayStream it opens WhatsApp with your request ready to send.",
        "Receive your login: the team sends your test details and a setup guide for your device, usually within minutes.",
        "Test: install the app, log in and use the service for 24 hours.",
        "Decide: if you like it, choose a plan. If not, simply stop — nothing is charged.",
      ] },
      { type: "links", title: "Get your trial", items: [["Request a free 24-hour DenvayStream trial", "/free-trial"]] },

      { type: "h2", text: "What is included in the trial?" },
      { type: "p", text: "A good IPTV trial is not a limited demo. It should give you the same service that paying customers get:" },
      { type: "table", caption: "Free trial compared with a paid plan", head: ["Feature", "24-hour free trial", "Paid plan"], rows: [
        ["Live TV channels", "Yes", "Yes"],
        ["Movies & series (VOD)", "Yes", "Yes"],
        ["High-quality servers", "Yes", "Yes"],
        ["4K / Full HD / HD", "Yes", "Yes"],
        ["TV guide & catch-up", "Yes", "Yes"],
        ["Support", "Yes", "Yes, 24/7"],
        ["Length", "24 hours", "3 months to 2 years"],
        ["Price", "Free", "From " + p.cheapest],
      ] },

      { type: "h2", text: "What do you need before the trial starts?" },
      { type: "ul", items: [
        "A compatible device: Smart TV, Firestick, Android box, phone, tablet, computer or MAG box.",
        "A player app installed in advance, so you don't lose trial time.",
        "A stable internet connection: at least 10 Mbps for HD and 25 Mbps for 4K.",
        "A short list of the channel types and shows you watch most.",
      ] },
      { type: "links", title: "Prepare your device", items: [["Setup guides for every device", "/setup"], ["What internet speed do you need?", "/blog/internet-speed-for-iptv"]] },

      { type: "cta", title: "Ready to test? Your free trial takes 30 seconds to request", text: "Full access for 24 hours, on your own device. No credit card, no contract." },

      { type: "h2", text: "What to test in 24 hours" },
      { type: "p", text: "Use your trial wisely. These are the tests that tell you the most about an IPTV service:" },
      { type: "ol", items: [
        "Picture stability: watch one channel for at least 30 minutes.",
        "Channel switching: change channels several times and see how fast each one starts.",
        "Evening test: watch again between 7 pm and 11 pm, when servers are busiest.",
        "Live sports: watch a live match if you can — it is the hardest test for any service.",
        "Picture quality: compare HD, Full HD and 4K on your screen.",
        "TV guide: check that it shows what is on now and next.",
        "Movies and series: start a few titles, pause and skip forward.",
        "Second device: try the trial on your phone or another TV.",
        "Support: ask a question and see how fast and how well they answer.",
      ] },
      { type: "links", title: "Full checklist", items: [["How to test an IPTV service with a free trial (checklist)", "/blog/how-to-test-iptv-free-trial"]] },

      { type: "h2", text: "Safe trial or risky trial? How to tell" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "The signs of a safe IPTV trial — and the warning signs of a risky one." },
      { type: "p", text: "A safe trial never asks for your card details, gives you full access, and comes from a provider with clear public policies and real support. Be careful if a trial asks for payment details, shows only a few channels, or pushes you to buy a long plan straight away." },

      { type: "h2", text: "Can I get an IPTV free trial without a credit card?" },
      { type: "p", text: "Yes. A trustworthy IPTV trial should never need your credit card. At DenvayStream, you only give your name, your device and your app. Because no payment details are taken, there is no risk of being charged when the trial ends." },

      { type: "h2", text: "What happens when the trial ends?" },
      { type: "p", text: "Your test login simply stops working after 24 hours. Nothing is charged and no subscription starts automatically. If you enjoyed it, you can choose a plan and often keep using the same app you already set up. Plans at DenvayStream start at " + p.cheapest + " for 3 months, and the 2-year plan works out at " + p.monthly + " per month." },
      { type: "links", title: "After your trial", items: [["See all plans and prices", "/pricing"], ["Our 7-day money-back guarantee", "/legal/refund-policy"]] },

      { type: "h2", text: "Tips to get the most from your free trial" },
      { type: "ul", items: [
        "Start the trial at a time when you can watch — for example on a weekend or in the evening.",
        "Use a network cable for TVs and TV boxes if you can.",
        "Run a speed test first, on the device you will watch on.",
        "Write down any problem and ask support — how they help is part of the test.",
        "Test on the device you will use every day, not only on your phone.",
      ] },

      { type: "h2", text: "Trial problems and quick fixes" },
      { type: "table", caption: "Common free trial problems", head: ["Problem", "Quick fix"], rows: [
        ["Login doesn't work", "Check the server URL, username and password — one wrong letter stops it"],
        ["Channels don't load", "Wait 1–2 minutes the first time, then restart the app"],
        ["Picture freezes", "Use a cable, restart your router and lower the quality to Full HD"],
        ["TV guide is empty", "Refresh the TV guide in the app settings"],
      ] },
      { type: "links", title: "More help", items: [["IPTV buffering: 9 fixes that work", "/blog/fix-iptv-buffering"], ["What is a free trial? (glossary)", "/glossary#trial"]] },

      { type: "tip", text: "Request your free 24-hour DenvayStream trial now — no payment details, full access, and setup help on WhatsApp." },
    ],
    faqs: [
      ["Is there a free IPTV trial for 24 hours?", "Yes. DenvayStream offers a free 24-hour IPTV trial with full access to live TV, movies and series. No credit card is needed."],
      ["How do I get an IPTV free trial?", "Fill in the short form on the free trial page with your name, device and app. It opens WhatsApp with your request, and we send your test login and a setup guide, usually within minutes."],
      ["Do I need a credit card for the IPTV free trial?", "No. The trial is completely free and we never ask for payment details, so you cannot be charged when it ends."],
      ["What can I watch during the free trial?", "The same service as paying customers: live TV channels, movies and series, the TV guide and catch-up, in 4K, Full HD and HD where available."],
      ["Can I use the free trial on my Smart TV or Firestick?", "Yes. The trial works on Smart TVs, Firestick, Android boxes, iPhone, iPad, Android phones, Apple TV, MAG boxes and computers."],
      ["What happens after the 24-hour trial?", "The test login stops working and nothing is charged. If you are happy, you can choose a plan and keep watching."],
      ["Can I get more than one free trial?", "Free trials are limited to one per customer, household and device, so we can keep offering them to new customers."],
    ],
  },
];

/** English articles (the master copy). */
export const posts: Post[] = rawPosts.map((p) => ({ ...p, readTime: readingTime(p) }));

/** Translated text for one article. Slug, dates, category and pictures always come from the English master. */
export type PostText = Pick<RawPost, "title" | "excerpt" | "takeaways" | "body" | "faqs"> & { heroAlt?: string };

/** Articles in the given language (falls back to English for any article not translated yet). */
export function getPosts(lang: Locale): Post[] {
  const t = postTranslations[lang];
  if (!t) return posts;
  return posts.map((p) => {
    const tr = t[p.slug];
    if (!tr) return p;
    const merged: RawPost = { ...p, ...tr, hero: p.hero && { ...p.hero, alt: tr.heroAlt ?? p.hero.alt } };
    return { ...merged, readTime: readingTime(merged) };
  });
}

export function getPost(lang: Locale, slug: string) {
  return getPosts(lang).find((p) => p.slug === slug);
}

/** True when this article has a real translation in this language. */
export function isTranslated(lang: Locale, slug: string) {
  return lang === "en" || Boolean(postTranslations[lang]?.[slug]);
}
