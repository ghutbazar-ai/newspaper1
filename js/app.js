(() => {
  'use strict';

  const stories = {
    lead: { category: 'THE BIG PICTURE · WORLD', title: 'The next world order is being written in the Global South', deck: 'As emerging economies find their voice, a new generation of leaders is quietly reshaping the institutions that govern us all.', author: 'Amara Mensah · November 19, 2026 · 12 min read', image: 'photo-1519608487953-e999c86e7455', text: 'For generations, the institutions that set the rules for trade, finance and diplomacy have reflected a remarkably narrow view of the world. That is beginning to change. Across Africa, Asia and Latin America, leaders are developing new relationships and, with them, a different sense of what global cooperation can look like.\n\nThe shift is not a single summit or a carefully scripted declaration. It is the steady work of making partnerships useful: sharing technology, coordinating climate investment and finding common ground on the questions that will define the next decade.\n\nThe challenge is to turn a stronger voice into results that ordinary people can feel. The opportunity is a world in which more of its citizens have a say in shaping what comes next.' },
    climate: { category: 'POLITICS · CLIMATE', title: "Inside the fragile deal that could reshape America's energy future", deck: 'Three months of quiet negotiations produced a surprise agreement. Can it hold?', author: 'Clara Whitmore · November 19, 2026 · 7 min read', image: 'photo-1470252649378-9c29740c9fa8', text: 'The negotiators arrived in the capital with sharply different priorities and little confidence that the talks would succeed. What followed was a sequence of late-night meetings, careful trade-offs and a final agreement that surprised even some of the people who helped write it.\n\nThe proposal offers a framework for investment in cleaner energy while addressing questions of reliability and cost. Supporters call it a pragmatic start. Critics on all sides say it does not go far enough.\n\nFor the deal to last, its architects will need to persuade communities that the transition can be both ambitious and fair. That conversation is only beginning.' },
    ai: { category: 'TECHNOLOGY · IN DEPTH', title: 'Who gets to decide what AI is allowed to do?', deck: "Behind closed doors, the race to write rules for the world's most powerful technology.", author: 'Nikhil Banerjee · November 19, 2026 · 9 min read', image: 'photo-1677442136019-21780ecad995', text: 'The choices made about artificial intelligence increasingly shape decisions in classrooms, clinics and workplaces. Yet many of the standards that influence those choices are developed far from the people most affected by them.\n\nResearchers, policy makers and civil society groups are trying to close that gap. Their proposals range from clear rules on transparency to practical ways of challenging a decision. Agreement is difficult, partly because the technology moves quickly and partly because the right answer depends on context.\n\nWhat is becoming clear is that public trust will depend on who gets a seat at the table. Better rules begin with a wider conversation.' },
    cities: { category: 'CITIES · CULTURE', title: 'The cities making room for a slower kind of life', deck: 'From Copenhagen to Bogotá, a quiet urban revolution is changing the streets.', author: 'Rafael Moreno · November 19, 2026 · 6 min read', image: 'photo-1480714378408-67cf0d13bc1b', text: 'A city can tell you what it values by what it makes easy. In neighborhoods where walking and cycling feel natural, the street becomes more than a route from one place to another. It becomes somewhere to meet a neighbor, linger over lunch and let children play.\n\nThe changes are often modest: safer crossings, a bench in the shade, a market that arrives on the same street every weekend. But across a growing number of cities, residents are asking planners to design for the ordinary pleasures that make a place feel like home.\n\nThe result is a new idea of progress—one measured in time, connection and the quality of a daily walk.' },
    migration: { category: 'WORLD · SPECIAL REPORT', title: 'One city, three borders: how migration is remaking a region', deck: 'Our correspondents spent six weeks on a journey that crosses more than geography.', author: 'Lena Morgan · November 19, 2026 · 14 min read', image: 'photo-1480714378408-67cf0d13bc1b', text: 'At the bus station before dawn, each traveler has a map in mind. It is rarely the same map officials use. It follows relatives, work, the last safe route and the possibility of starting again somewhere familiar.\n\nOver six weeks, Meridian correspondents followed one of these routes through cities connected by trade and families, but separated by laws, languages and sharply unequal access to opportunity. Along the way, they met the people building informal networks to help newcomers find housing, work and a place to belong.\n\nMigration changes the places it touches. The story of that change is also a story about the future that cities choose to build together.' },
    water: { category: 'CLIMATE · WESTERN US', title: 'The fight for water is changing the map of the American West', deck: 'As rivers run lower, communities are drawing a new future for the region.', author: 'Noah Park · November 19, 2026 · 6 min read', image: 'photo-1470252649378-9c29740c9fa8', text: 'The West has always negotiated with water. But years of hotter summers and changing rainfall have made old assumptions harder to maintain. Growers, tribal leaders and city planners are trying new ways to share a resource that connects them all.\n\nThe work is local, specific and often difficult. It includes restoring wetlands, updating agreements and finding ways to use less without losing the farms and communities that give the region its character. What happens in one watershed can reshape life far downstream.' },
    europe: { category: 'EUROPE · POLITICS', title: 'A new generation wants a different kind of politics', deck: 'Young leaders across Europe are reaching beyond the familiar party lines.', author: 'Sofia Khan · November 19, 2026 · 8 min read', image: 'photo-1511739001486-6bfe10ce785f', text: 'Across Europe, younger voters describe a politics that feels distant from the choices shaping their everyday lives. A new generation of organizers is responding by meeting people where they are and building campaigns around practical local concerns.\n\nTheir approach does not always fit neatly within old political categories. It does share an insistence that participation should be useful, welcoming and connected to the decisions that matter most.' },
    diplomacy: { category: 'DIPLOMACY · PEACE', title: 'The unlikely negotiators building a lasting peace', deck: 'The people who keep showing up when official talks lose momentum.', author: 'James Delaney · November 19, 2026 · 10 min read', image: 'photo-1529107386315-e1a2ed48a620', text: 'Formal negotiations make the headlines, but relationships that sustain a peace agreement are built over time. Local mediators, educators and aid workers often create the conditions that allow a conversation to continue when official talks stall.\n\nTheir work is careful and rarely dramatic. It can mean bringing people to the same table, helping communities explain what security means to them, or finding small, visible ways to build confidence.' },
    ocean: { category: 'CLIMATE SCIENCE · OCEANS', title: 'The remarkable technology helping coral reefs adapt to warmer oceans', deck: 'A collaborative research effort is giving vulnerable reefs new ways to withstand rising temperatures.', author: 'Mei Tan · November 19, 2026 · 8 min read', image: 'photo-1518837695005-2083093ee35b', text: 'Coral reefs support an extraordinary diversity of life, and they are under mounting pressure from warmer seas. Teams of marine scientists are combining field observations with new research tools to better understand which corals may be more resilient.\n\nThe aim is not to replace the work of protecting reefs at scale. It is to give conservation teams better information and more options while larger efforts to limit warming continue.' },
    battery: { category: 'INNOVATION · ENERGY', title: 'A new kind of battery could unlock the clean-energy grid', deck: 'Researchers are exploring energy storage that could make renewable power more dependable.', author: 'Nikhil Banerjee · November 19, 2026 · 6 min read', image: 'photo-1473341304170-971dccb5ac1e', text: 'Wind and solar power are part of an increasingly diverse electricity system. Long-duration storage could help match that supply with the hours people need it. A new generation of researchers and engineers is testing materials designed for longer service and simpler manufacturing.\n\nThe work is promising, but there is a long distance between a lab breakthrough and an affordable grid-scale solution. What matters next is learning which approaches can move reliably from one to the other.' },
    space: { category: 'SPACE · ASTRONOMY', title: 'Why astronomers are looking for life in the oldest light', deck: 'New instruments are helping scientists read the faint signals hidden in distant worlds.', author: 'Lena Morgan · November 19, 2026 · 11 min read', image: 'photo-1534796636912-3b95b3ab5986', text: 'The question of whether life exists beyond Earth is also a question about how carefully we can read the universe. Astronomers are developing new ways to study the light that passes through distant planetary atmospheres.\n\nNo single reading can settle the question. A consistent pattern of evidence, independently checked and carefully interpreted, is what gives scientists a reason to look closer.' },
    economy: { category: 'BUSINESS · THE ECONOMY', title: 'The small businesses finding opportunity in a year of uncertainty', deck: 'Across the country, entrepreneurs are adapting to a new economic landscape.', author: 'Clara Whitmore · November 19, 2026 · 9 min read', image: 'photo-1460925895917-afdab827c52f', text: 'For small business owners, economic uncertainty is not an abstract measure. It is felt in supply costs, customer confidence and the question of whether it is a good moment to hire. Many are finding opportunity by being selective, deepening relationships with customers and building room to adapt.\n\nThe picture is different from one industry to the next, but the ability to plan for more than one possible future has become a common advantage.' },
    work: { category: 'WORK · CULTURE', title: 'The four-day week has a productivity problem. And a surprising answer.', deck: 'What workplaces learn when they measure outcomes, not time at a desk.', author: 'Amara Mensah · November 19, 2026 · 7 min read', image: 'photo-1449247709967-d4461a6a6103', text: 'Moving to a shorter week often starts with a simple question: what can we stop doing that is taking time without helping anyone? Teams that answer it honestly frequently find that the most important changes have little to do with the calendar.\n\nClearer priorities, fewer unnecessary meetings and deeper focus can create room for both better work and a more sustainable pace. The model requires attention and trust; it is not a shortcut. But the results of early experiments are inviting organizations to ask new questions about how a good working week feels.' },
    culture: { category: 'ENTERTAINMENT · MUSIC', title: 'The songs that became a soundtrack to the summer', deck: 'A season of music that traveled further than anyone expected.', author: 'Rafael Moreno · November 19, 2026 · 5 min read', image: 'photo-1516280440614-37939bbacd81', text: 'The songs we remember from a summer often take on a life beyond the charts. They move through cookouts, train windows and late-night walks, until a few opening notes bring back a whole season.\n\nThis year, listeners carried tracks across borders and genres with a particular ease. The music offers a reminder that pop culture can be personal even when it becomes a shared experience.' },
    sport: { category: 'SPORT · RUNNING', title: 'The world-class runner who found her second wind at 40', deck: 'A champion rethinks what the next chapter of an athletic life can be.', author: 'Sofia Khan · November 19, 2026 · 7 min read', image: 'photo-1461896836934-ffe607ba8211', text: 'The route back to competition was not a straight line. It included long stretches of patience, a new relationship with training and a clearer sense of why racing still mattered.\n\nAt forty, the runner is redefining success in a sport often focused on what an athlete can do in their earliest peak years. She says the next chapter is not an attempt to recapture the past. It is a way of finding out what else might be possible.' },
    opinion: { category: 'OPINION · COMMUNITY', title: 'Why local trust belongs at the center of public life', deck: 'Small, consistent acts of listening can strengthen the ties a community needs.', author: 'James Delaney · November 19, 2026 · 8 min read', image: 'photo-1480714378408-67cf0d13bc1b', text: 'Trust is built in the places where people meet the institutions that shape their lives. A school board that explains its choices, a local newsroom that corrects an error openly, and a council that listens before it decides all help make public life feel more accountable.\n\nThese acts rarely make dramatic headlines. Their value is cumulative: people are more willing to take part when they can see that their questions receive a fair hearing.\n\nCommunities cannot manufacture trust with slogans. They can earn it through steady, visible work.' },
    magazine: { category: 'MAGAZINE · CITY LIFE', title: 'The places and rituals that make a city feel like home', deck: 'A photo-led weekend story follows the quiet pleasures of neighborhood life.', author: 'Lena Morgan · November 19, 2026 · 10 min read', image: 'photo-1480714378408-67cf0d13bc1b', text: 'Every city has small rituals that belong to the people who live there: the bakery that opens before sunrise, the bench where neighbors catch up, and the market that fills a familiar street each weekend.\n\nThese places do not always appear on a tourist map. They are part of the everyday architecture of belonging, shaped by the people who return to them.\n\nOur weekend magazine visits neighborhoods where shared routines make a large city feel personal.' }
  };

  const feed = [
    { category: 'Politics', time: '4 MIN AGO', key: 'climate', title: 'Senate negotiators say agreement is within reach after overnight talks', summary: 'Bipartisan working groups will reconvene tomorrow to finalize the framework.' },
    { category: 'World', time: '12 MIN AGO', key: 'lead', title: 'Regional leaders announce new partnership at global summit', summary: 'The initiative includes a new fund for clean energy and public infrastructure.' },
    { category: 'Business', time: '28 MIN AGO', key: 'economy', title: 'Markets close higher as investors weigh the latest jobs report', summary: 'Technology and energy shares led a broad afternoon recovery.' },
    { category: 'Technology', time: '42 MIN AGO', key: 'ai', title: 'International panel proposes shared principles for AI transparency', summary: 'Researchers are calling for public access to safety testing and model disclosures.' },
    { category: 'World', time: '1 HR AGO', key: 'migration', title: 'New analysis maps the changing paths of regional migration', summary: 'A six-week reporting project follows the families reshaping a border region.' },
    { category: 'Technology', time: '1 HR AGO', key: 'ocean', title: 'Researchers unveil a new approach to protecting coral reefs', summary: 'Teams will begin a two-year field study across reefs in the Pacific.' },
    { category: 'Politics', time: '2 HRS AGO', key: 'diplomacy', title: 'UN mediators return to the table with a renewed peace proposal', summary: 'Community leaders say the next round will focus on local security guarantees.' },
    { category: 'Business', time: '2 HRS AGO', key: 'work', title: 'Small businesses find fresh opportunity in the changing job market', summary: 'Local owners are rethinking what to hire for as customer needs shift.' },
    { category: 'Science', time: '3 HRS AGO', key: 'space', title: 'New instruments sharpen the search for life beyond Earth', summary: 'Astronomers are studying faint signals in the atmospheres of distant planets.' },
    { category: 'Culture', time: '4 HRS AGO', key: 'culture', title: 'The songs that became a soundtrack to the summer', summary: 'Listeners carried this season’s defining tracks across borders and genres.' },
    { category: 'Sports', time: '5 HRS AGO', key: 'sport', title: 'The runner who found her second wind at 40', summary: 'A champion is rethinking what the next chapter of an athletic life can be.' },
    { category: 'Opinion', time: '6 HRS AGO', key: 'opinion', title: 'Why local trust belongs at the center of public life', summary: 'Small, consistent acts of listening can strengthen the ties a community needs.' },
    { category: 'Magazine', time: '7 HRS AGO', key: 'magazine', title: 'The places and rituals that make a city feel like home', summary: 'A photo-led weekend story follows the quiet pleasures of neighborhood life.' }
  ];

  const tickers = [
    'Senate reaches bipartisan deal on landmark climate bill',
    'Global leaders announce new infrastructure partnership at summit',
    'New research reveals rapid advances in renewable energy storage',
    'Markets close higher as energy shares lead afternoon recovery'
  ];
  let tickerIndex = 0;
  let tickerPaused = false;
  let tickerTimer = null;
  let toastTimer = null;
  let allResults = [];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const toast = message => {
    const box = $('#toast');
    box.textContent = message;
    box.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.remove('show'), 2400);
  };

  function renderFeed(filter = 'All') {
    const selected = filter === 'All' ? feed : feed.filter(item => item.category === filter);
    const grid = $('#latestGrid');
    if (!selected.length) {
      grid.innerHTML = '<div class="latest-empty">No stories in this feed yet.</div>';
      return;
    }
    grid.innerHTML = selected.map(item => `
      <article class="latest-card clickable-article" data-article="${item.key}">
        <span class="eyebrow">${item.category.toUpperCase()} <span style="color:var(--faint);font-weight:500">· ${item.time}</span></span>
        <h3>${item.title}</h3><p>${item.summary}</p>
      </article>`).join('');
    $$('.latest-card', grid).forEach(card => card.addEventListener('click', () => openArticle(card.dataset.article)));
  }

  function openArticle(key) {
    const story = stories[key] || stories.lead;
    $('#dialogCategory').textContent = story.category;
    $('#dialogTitle').textContent = story.title;
    $('#dialogDeck').textContent = story.deck;
    $('#dialogMeta').textContent = `By ${story.author}`;
    $('#dialogImage').src = `https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=1400&q=85`;
    $('#dialogImage').alt = story.title;
    const paragraphs = story.text.split('\n\n');
    const halfway = Math.floor(paragraphs.length / 2);
    $('#dialogBody').innerHTML = paragraphs.map((p, i) => `${i === halfway && paragraphs.length > 2 ? '<h3 class="dialog-subhead">A closer look</h3>' : ''}<p>${p}</p>`).join('') + '<blockquote>Good journalism helps us see what is changing, and why it matters.</blockquote><p>Our reporting team will continue to follow this story as it develops. The Meridian brings readers the context, people and ideas behind the headlines—independent reporting made possible by members like you.</p>';
    const dialog = $('#articleDialog');
    if (!dialog.open) dialog.showModal();
  }

  function renderTicker() {
    const story = $('#tickerStory');
    story.style.opacity = '0.35';
    setTimeout(() => {
      story.textContent = tickers[tickerIndex];
      story.style.opacity = '1';
      $('#tickerCount').textContent = `${String(tickerIndex + 1).padStart(2, '0')} / ${String(tickers.length).padStart(2, '0')}`;
    }, 130);
  }
  function stepTicker(direction = 1) {
    tickerIndex = (tickerIndex + direction + tickers.length) % tickers.length;
    renderTicker();
  }
  function restartTicker() {
    clearInterval(tickerTimer);
    if (!tickerPaused) tickerTimer = setInterval(() => stepTicker(1), 5200);
  }

  function displaySearchResults(query, container) {
    const normalized = query.trim().toLowerCase();
    allResults = Object.entries(stories).filter(([, story]) =>
      !normalized || `${story.title} ${story.category} ${story.deck}`.toLowerCase().includes(normalized)
    ).slice(0, 6);
    if (!normalized) {
      container.classList.remove('visible');
      container.innerHTML = '';
      return;
    }
    container.innerHTML = allResults.length ? allResults.map(([key, story]) =>
      `<button type="button" role="option" data-search-story="${key}"><span class="result-cat">${story.category}</span><span class="result-title">${story.title}</span></button>`
    ).join('') : '<div class="latest-empty" style="padding:10px;font-size:13px">No stories found. Try a broader search.</div>';
    container.classList.add('visible');
    $$('[data-search-story]', container).forEach(button => button.addEventListener('click', () => {
      openArticle(button.dataset.searchStory);
      container.classList.remove('visible');
      $('#searchInput').value = '';
    }));
  }

  function performSearch(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return;
    const matches = Object.entries(stories).filter(([, story]) =>
      `${story.title} ${story.category} ${story.deck}`.toLowerCase().includes(normalized)
    );
    if (!matches.length) {
      toast(`No stories found for “${query.trim()}”.`);
      return;
    }
    openArticle(matches[0][0]);
    $('#searchResults').classList.remove('visible');
  }

  renderFeed();
  const date = new Date();
  const dateNode = $('#currentDate');
  const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Dhaka' });
  if (dateNode && !Number.isNaN(date.getTime())) dateNode.textContent = dateFormatter.format(date);
  const heroDateNode = $('#heroDate');
  if (heroDateNode && !Number.isNaN(date.getTime())) heroDateNode.textContent = dateFormatter.format(date).toUpperCase();
  const timeNode = $('#currentTime');
  const updateClock = () => {
    if (timeNode) timeNode.textContent = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Dhaka' }).format(new Date());
  };
  updateClock();
  setInterval(updateClock, 30_000);
  renderTicker();
  restartTicker();

  $('#tickerPrev').addEventListener('click', () => stepTicker(-1));
  $('#tickerNext').addEventListener('click', () => stepTicker(1));
  $('#tickerStory').addEventListener('click', event => {
    event.preventDefault();
    openArticle(['climate', 'lead', 'battery', 'economy'][tickerIndex]);
  });
  $('#tickerPause').addEventListener('click', event => {
    tickerPaused = !tickerPaused;
    event.currentTarget.textContent = tickerPaused ? '▶' : 'Ⅱ';
    event.currentTarget.setAttribute('aria-label', tickerPaused ? 'Resume headlines' : 'Pause headlines');
    restartTicker();
  });

  $('#feedFilters').addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    $$('.filter-chip').forEach(chip => {
      const active = chip === button;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    renderFeed(button.dataset.filter);
  });

  $$('.clickable-article').forEach(card => card.addEventListener('click', event => {
    if (event.target.closest('.save-btn')) return;
    openArticle(card.dataset.article);
  }));

  $$('[data-save]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    const saved = button.classList.toggle('saved');
    button.textContent = saved ? '✓' : '＋';
    toast(saved ? 'Story saved to your reading list.' : 'Story removed from your reading list.');
  }));

  $('#themeToggle').addEventListener('click', event => {
    const dark = document.body.classList.toggle('dark');
    event.currentTarget.textContent = dark ? '☀' : '☾';
    event.currentTarget.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    localStorage.setItem('meridian-theme', dark ? 'dark' : 'light');
    $('meta[name="theme-color"]').content = dark ? '#141716' : '#f7f6f2';
  });
  if (localStorage.getItem('meridian-theme') === 'dark') {
    document.body.classList.add('dark');
    $('#themeToggle').textContent = '☀';
    $('#themeToggle').setAttribute('aria-label', 'Switch to light mode');
    $('meta[name="theme-color"]').content = '#141716';
  }

  const drawer = $('#mobileDrawer');
  const backdrop = $('#mobileBackdrop');
  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('drawer-open');
    $('#menuToggle').setAttribute('aria-expanded', 'false');
  }
  $('#menuToggle').addEventListener('click', () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('drawer-open');
    $('#menuToggle').setAttribute('aria-expanded', 'true');
    $('#closeDrawer').focus();
  });
  $('#closeDrawer').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  $$('nav a', drawer).forEach(link => link.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDrawer(); });

  const searchInput = $('#searchInput');
  searchInput.addEventListener('input', () => displaySearchResults(searchInput.value, $('#searchResults')));
  searchInput.addEventListener('focus', () => {
    if (searchInput.value) displaySearchResults(searchInput.value, $('#searchResults'));
  });
  $('#searchForm').addEventListener('submit', event => { event.preventDefault(); performSearch(searchInput.value); });
  $('#drawerSearch').addEventListener('submit', event => {
    event.preventDefault();
    const value = $('#drawerSearchInput').value;
    closeDrawer();
    performSearch(value);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.search-form')) $('#searchResults').classList.remove('visible');
  });

  $('#articleDialog').addEventListener('click', event => {
    if (event.target === $('#articleDialog')) $('#articleDialog').close();
  });
  $('#dialogClose').addEventListener('click', () => $('#articleDialog').close());
  $('#editionBtn').addEventListener('click', () => toast('Edition selector coming soon.'));
  $('.account-btn').addEventListener('click', () => toast('Member sign-in coming soon.'));
  $('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const navBar = $('#navColorBar');
  const navMotionToggle = $('#navMotionToggle');
  const navPalette = ['#dc2626', '#14213d', '#047857', '#1d4ed8', '#7f1d1d'];
  let navColorIndex = 0;
  let navCycleTimer;
  const advanceNavColor = () => {
    navColorIndex = (navColorIndex + 1) % navPalette.length;
    navBar.style.backgroundColor = navPalette[navColorIndex];
  };
  const startNavColorCycle = () => {
    clearInterval(navCycleTimer);
    navCycleTimer = setInterval(advanceNavColor, 5000);
  };
  startNavColorCycle();
  navMotionToggle.addEventListener('click', () => {
    const paused = navBar.classList.toggle('nav-colors-paused');
    navMotionToggle.setAttribute('aria-pressed', String(paused));
    navMotionToggle.setAttribute('aria-label', paused ? 'Resume navigation color changes' : 'Pause navigation color changes');
    navMotionToggle.title = paused ? 'Resume color changes' : 'Pause color changes';
    navMotionToggle.textContent = paused ? '▶' : 'Ⅱ';
    if (paused) clearInterval(navCycleTimer);
    else startNavColorCycle();
  });

  $('#newsletterForm').addEventListener('submit', event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const email = $('#emailInput').value.trim();
    const message = $('#newsletterMessage');
    message.textContent = `You're on the list. Watch ${email} for tomorrow's morning brief.`;
    message.classList.add('form-success');
    event.currentTarget.reset();
  });
})();
