const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }});
  }, { threshold: 0.1 });
  reveals.forEach(el => io.observe(el));

  const cite1 = '<p><span class="author-highlight">Luo, D.</span>, Douc&eacute;, L., Jacobs, M., &amp; Nys, K. (2025). Sensory cues as transformative tools in driving inclusion: Insights from visitors and managerial perspectives. <em>Museum Management and Curatorship</em>, 1&ndash;27.</p>';
  const cite2 = '<p><span class="author-highlight">Luo, D.</span>, Douc&eacute;, L., &amp; Nys, K. (2025). Immersive art exhibitions: multisensory cues effects on visitor satisfaction via visitor attention and visitor experience. <em>Visitor Studies</em>, 1&ndash;22.</p>';
  const cite3 = '<p><span class="author-highlight">Luo, D.</span>, Douc&eacute;, L., &amp; Nys, K. (2024). Multisensory museum experience: an integrative view and future research directions. <em>Museum Management and Curatorship</em>, 1&ndash;28.</p>';

  const projects = {
    m1: { tag: "Published", tagClass: "tag-published", title: "Building a Strategic Framework for Multisensory Experience Design",
      body: '<p>This project synthesized over 300 peer-reviewed studies to produce a comprehensive theoretical framework for designing and evaluating multisensory experiences in organizational and commercial settings.</p><p>The framework has been widely cited and serves as a practical tool for CX strategists, innovation teams, and experience designers seeking a rigorous, evidence-based foundation for their work.</p><p>Key outputs include a structured theoretical model mapping multisensory experiences and strategic recommendations for implementation across different contexts.</p><div class="modal-citation"><div class="modal-citation-label">Citation</div>' + cite3 + '</div>' },
    m2: { tag: "Published", tagClass: "tag-published", title: "Quantifying the Impact of Immersive Experiences on Customer Engagement",
      body: '<p>An experimental study with N=356 participants examining how varying levels of sensory intensity shape customer attention, engagement, and satisfaction in experience environments.</p><p>Using a controlled experimental design, the study measured self-reported responses to multisensory stimuli, providing quantifiable evidence of the relationship between sensory design and engagement outcomes.</p><p>The findings offer concrete guidance for CX practitioners and venue designers seeking to optimize immersive experiences for measurable business impact.</p><div class="modal-citation"><div class="modal-citation-label">Citation</div>' + cite2 + '</div>' },
    m3: { tag: "Under Review", tagClass: "tag-review", title: "Optimizing Sensory Strategy: What Works, When, and for Whom",
      body: '<p>This study presents cross-cultural experimental data from Belgium and China, investigating the moderating role of cultural background on how music and scent influence consumer behavior and engagement.</p><p>The research addresses a critical gap in the experience design literature: most sensory strategies are developed in Western contexts and applied globally without validation. This study provides evidence-based guidance for culturally adaptive sensory strategies.</p><p>Currently under review for publication in an international peer-reviewed journal.</p>' },
    m4: { tag: "Published", tagClass: "tag-published", title: "Designing Inclusive Experiences through Sensory Strategy",
      body: '<p>This work bridges sensory experience design with inclusion strategy, developing actionable frameworks that help organizations design environments accessible and engaging for diverse audiences.</p><p>The research identifies sensory design parameters that positively influence inclusion perceptions and engagement across different cultural backgrounds and individual preferences, translating findings into practical design recommendations.</p><p>The output enables senior managers in museum and cultural institution contexts to improve accessibility and visitor experience outcomes.</p><div class="modal-citation"><div class="modal-citation-label">Citation</div>' + cite1 + '</div>' },
    m5: { tag: "In Progress", tagClass: "tag-progress", title: "From Inclusion to Belonging: Designing Experiences that Truly Connect",
      body: '<p>This ongoing project builds on the inclusion framework to address a deeper strategic question: how can organizations design experiences that go beyond accessibility to create genuine belonging?</p><p>The work aims to develop a measurable framework translating belonging as an experiential and organizational outcome &#8212; connecting design decisions to attitudinal and behavioral indicators of belonging.</p><p>The framework is being developed in collaboration with cultural institutions and a research team from KU Leuven.</p>' },
    m6: { tag: "In Progress", tagClass: "tag-progress", title: "Building a Data-Driven Assessment System for Cultural Intelligence",
      body: '<p>This project is paving the road for an AI-supported leadership training platform that combines behavioral data, physiological signals, and psychometric instruments to evaluate cultural intelligence in international business contexts.</p><p>The system draws on advances in AI-driven data processing and behavioral science to produce more valid and nuanced assessments than existing self-report tools &#8212; moving toward a fully integrated AI platform for leadership development.</p><p>Developed in partnership with leadership training companies, targeting organizations building culturally adaptive leadership capabilities.</p>' },
    m7: { tag: "Part-Time", tagClass: "tag-parttime", title: "Translating AI Research into Organisational Decision Intelligence",
      body: '<p>This work focuses on bridging AI research with strategic decision-making, ensuring that advanced analytical insights translate into real organisational impact.</p><p>Acting as research methodology advisor on a doctoral project in AI-driven organisational learning, the work centred on leadership development and business innovation, defining how AI-driven insights can be operationalised within organisations.</p><p>The project delivers structured frameworks and recommendations that help decision-makers integrate AI into leadership, learning, and innovation systems.</p>' }
  };

  const serviceDetails = {
    s1: {
      title: 'Experience and Behavior Design',
      body: '<p class="service-detail-intro">I help organizations understand how people respond to environments, touchpoints, and design choices &#8212; then use that insight to build stronger experiences.</p><ul class="service-detail-list"><li>Clarify what drives attention, engagement, and satisfaction.</li><li>Translate behavioral evidence into more intentional experience design.</li><li>Support teams that need both conceptual clarity and practical direction.</li></ul>',
      cases: ['m1', 'm2', 'm3', 'm4', 'm5']
    },
    s2: {
      title: 'AI Strategy and Use Case Development',
      body: '<p class="service-detail-intro">I help teams move from broad AI ambition to clearer priorities, stronger use cases, and decision-ready implementation logic.</p><ul class="service-detail-list"><li>Identify where AI can create real organizational value.</li><li>Translate research and technical signals into business-relevant decisions.</li><li>Structure use cases, evaluation criteria, and adoption pathways.</li></ul>',
      cases: ['m7', 'm6']
    },
    s3: {
      title: 'Innovation and Decision Support',
      body: '<p class="service-detail-intro">I support innovation work when the path forward is still uncertain &#8212; by bringing structure, evidence, and sharper decision logic.</p><ul class="service-detail-list"><li>Frame complex problems before teams move too quickly into solutions.</li><li>Test ideas, assumptions, and strategic directions with stronger evidence.</li><li>Help decision-makers connect research, experimentation, and action.</li></ul>',
      cases: ['m3', 'm4', 'm5']
    },
    s4: {
      title: 'Cultural and Market Adaptation',
      body: '<p class="service-detail-intro">I help organizations adapt strategies and experiences across audiences, markets, and cultural contexts without relying on one-size-fits-all assumptions.</p><ul class="service-detail-list"><li>Identify where context, familiarity, and culture change outcomes.</li><li>Improve how experiences land with different audiences.</li><li>Support more adaptive design and communication decisions.</li></ul>',
      cases: ['m3']
    }
  };

  const modalStack = [];

  function renderProject(id) {
    const p = projects[id];
    document.getElementById("modal-tag").innerHTML = '<span class="work-tag ' + p.tagClass + '">' + p.tag + '</span>';
    document.getElementById("modal-title").textContent = p.title;
    document.getElementById("modal-body").innerHTML = p.body;
  }

  function renderService(id) {
    const s = serviceDetails[id];
    const casesHtml = s.cases.map(caseId => {
      const p = projects[caseId];
      return '<button class="related-case-link" onclick="openModal(\'' + caseId + '\')"><span class="related-case-text"><span class="related-case-title">' + p.title + '</span><span class="related-case-meta">' + p.tag + '</span></span><span class="related-case-arrow">&#8594;</span></button>';
    }).join('');
    document.getElementById("modal-tag").innerHTML = '<span class="section-label" style="margin-bottom:0;">Service</span>';
    document.getElementById("modal-title").textContent = s.title;
    document.getElementById("modal-body").innerHTML = s.body + '<div class="related-cases"><div class="related-cases-label">Related case studies</div><div class="related-cases-list">' + casesHtml + '</div></div>';
  }

  function updateBackButton() {
    const backBtn = document.getElementById('modal-back');
    if (modalStack.length > 1) backBtn.classList.remove('hidden');
    else backBtn.classList.add('hidden');
  }

  function renderCurrentModal() {
    const current = modalStack[modalStack.length - 1];
    if (!current) return;
    if (current.type === 'service') renderService(current.id);
    else renderProject(current.id);
    updateBackButton();
    document.getElementById("modal-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function openModal(id) {
    modalStack.push({ type: 'project', id });
    renderCurrentModal();
  }

  function openServiceModal(id) {
    modalStack.push({ type: 'service', id });
    renderCurrentModal();
  }

  function goBackModal() {
    if (modalStack.length > 1) {
      modalStack.pop();
      renderCurrentModal();
    }
  }

  function closeModal() {
    modalStack.length = 0;
    document.getElementById("modal-overlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  function closeModalOutside(e) {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (modalStack.length > 1) goBackModal();
      else closeModal();
    }
  });
