// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Semne ale epuizarii emotionale pe care nu ar trebui sa le Timp Liber',
		slug: 'Semne-ale-epuizarii-emotionale-pe-care-nu-ar-trebui-sa-le-ignori',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>
		`,
		category: 'Relatie de cuplu',
		author: 'Psiholog Alexandra Tatu',
		date: '22. DEC 2019',
		avatar: 'alexandra2.jpg',
	},

	{
		title: '6 moduri de a-ti pastra calmul cand ai de-a face cu o persoana furioasa',
		slug: '6-moduri-de-a-ti-pastra-calmul-cand-ai-de-a-face-cu-o-persoana-furioasa',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>
		`,
		category: 'Meditatie/Yoga',
		author: 'Psiholog Roxana Alecu',
		date: '03. IAN 2020',
		avatar: 'shivani3.png',
	},

	{
		title: '10 afaceri de succes conduse de femei',
		slug: '10-afaceri-de-succes-conduse-de-femei',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper.
			 There are a few notable differences, however:</p>
		`,
		category: 'Sexualitate',
		author: 'Psiholog Alexandra Tatu',
		date: '05. IAN 2020',
		avatar: 'alexandra2.jpg',
	},

	{
		title: 'Ce te impiedica sa ai relatia visurilor tale?',
		slug: 'ce-te-impiedica-sa-ai-relatia-visurilor-tale',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos,
			 and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`,
		category: 'Meditatie/Yoga',
		author: 'Psiholog Roxana Alecu',
		date: '08. IAN 2020',
		avatar: 'shivani3.png',
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
