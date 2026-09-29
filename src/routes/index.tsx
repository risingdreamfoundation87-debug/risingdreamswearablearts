import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  CalendarDays,
  Check,
  Download,
  Heart,
  Menu,
  Palette,
  Printer,
  Shirt,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'
import { type FormEvent, useState } from 'react'

export const Route = createFileRoute('/')({ component: RisingDreamsPage })

const projects = [
  ['👕', 'Dream T-Shirts', 'Positive words, symbols, stencils, and original art.'],
  ['🌈', 'Tie-Dye Creations', 'Colorful shirts, socks, totes, and bandanas.'],
  ['👜', 'Tote Bag Studio', 'Personal designs inspired by family, culture, and dreams.'],
  ['👟', 'Sneaker Art', 'Where fashion concepts and imagination meet.'],
  ['🧢', 'Hats & Accessories', 'Hats, patches, bracelets, and wearable details.'],
  ['🧥', 'Dream Jackets', 'Statement pieces with patches and inspiring messages.'],
]

const values = [
  ['Confidence', 'Believe in your ideas and share them proudly.'],
  ['Teamwork', 'Encourage other artists and create together.'],
  ['Leadership', 'Help, guide, and make space for every voice.'],
  ['Responsibility', 'Care for supplies, projects, and shared spaces.'],
  ['Entrepreneurship', 'See how creativity can become opportunity.'],
  ['Belonging', 'Know that your imagination belongs here.'],
]

const months = [
  ['January', 'New Year, New Dreams', 'Dream T-Shirts', 'Goal setting'],
  ['February', 'Wear Your Heart', 'Kindness shirts & totes', 'Empathy'],
  ['March', 'Creative Confidence', 'Hats & accessories', 'Confidence'],
  ['April', 'Earth & Art', 'Recycled fashion challenge', 'Responsibility'],
  ['May', 'Someone Special', 'Wearable gift creation', 'Gratitude'],
  ['June', 'Colors of Summer', 'Tie-dye month', 'Self-expression'],
  ['July', 'Design Your Future', 'Future career shirt', 'Dreaming & planning'],
  ['August', 'Back-to-School', 'Confidence gear', 'Positive self-talk'],
  ['September', 'Community Pride', 'Community collection', 'Service'],
  ['October', 'Fashion Challenge', 'Themed wearable art', 'Imagination'],
  ['November', 'Gratitude Collection', 'Thankful tote or shirt', 'Gratitude'],
  ['December', 'Rising Dreams Celebration', 'Signature showcase piece', 'Reflection'],
]

const supplies = {
  'Wearable items': ['Plain cotton T-shirts', 'Tote bags', 'Bandanas and socks', 'Hats and aprons', 'Fabric scraps', 'Clean denim jackets', 'Canvas shoes when available'],
  'Creative supplies': ['Fabric markers and paint', 'Brushes and foam brushes', 'Stencils and sketch paper', 'Fabric patches and letters', 'Craft gems and safe adhesives', 'Colored pencils and crayons'],
  'Tie-dye & protection': ['Tie-dye kits', 'Rubber bands', 'Disposable gloves', 'Table covers', 'Zip-close bags', 'Paper towels', 'Protective shirts'],
  'Sensory-conscious support': ['Noise-reducing headphones', 'Visual schedule cards', 'Individual supply trays', 'Calm-down items', 'Easy-grip brushes', 'Flexible seating'],
}

function RisingDreamsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState('sending')
    const form = event.currentTarget
    const formData = new FormData(form)
    const encoded = new URLSearchParams()
    formData.forEach((value, key) => encoded.append(key, String(value)))

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rising Dreams home">
          <span className="brand-mark"><img src="/images/rising-dreams-logo.jpg" alt="" /></span>
          <span><strong>Rising Dreams</strong><small>Wearable Arts</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
          <a href="#program" onClick={() => setMenuOpen(false)}>The Program</a>
          <a href="#calendar" onClick={() => setMenuOpen(false)}>Calendar</a>
          <a href="#packet" onClick={() => setMenuOpen(false)}>Starter Packet</a>
          <a href="#join" onClick={() => setMenuOpen(false)} className="nav-cta">Join the Family</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>Creative youth program</span><span>Ages 6–17</span></div>
          <h1>Wear your <em>creativity.</em><br />Build your confidence.</h1>
          <p>Young artists turn imagination into T-shirts, totes, hats, sneakers, jackets, and bold new possibilities.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#join">Registration coming soon <ArrowDown size={18} /></a>
            <button className="button button-paper" onClick={() => window.print()}><Printer size={18} /> Print starter packet</button>
          </div>
          <div className="hero-note"><span className="mini-stars">✦ ✦ ✦</span> No art experience needed. Just bring a dream.</div>
        </div>
        <div className="hero-art" aria-label="Colorful art studio materials and paintings">
          <div className="photo-main"><img src="/images/art-studio.jpg" alt="Paint brushes and colorful art supplies" /></div>
          <div className="paint-swipe paint-swipe-one" />
          <div className="paint-swipe paint-swipe-two" />
          <div className="sticker sticker-one">CREATE<br />IT!</div>
          <div className="sticker sticker-two"><Shirt size={32} /> DREAM<br />BIGGER</div>
        </div>
      </section>

      <section className="marquee" aria-label="Program values">
        <div>CREATE IT. <span>✦</span> WEAR IT. <span>✦</span> DREAM IT. <span>✦</span> BELIEVE IN IT. <span>✦</span></div>
      </section>

      <section className="intro section" id="program">
        <div className="section-label">01 — Our big idea</div>
        <div className="intro-grid">
          <div>
            <h2>More than arts<br />& crafts.</h2>
            <div className="scribble" aria-hidden="true" />
          </div>
          <div className="lead-copy">
            <p>Rising Dreams Wearable Arts gives children and teens a safe, encouraging place to express themselves through art they can wear, use, and proudly show to others.</p>
            <p>Every participant learns that their ideas have value—as self-expression, a gift, a community message, or the beginning of a future business.</p>
          </div>
          <blockquote>“I created this. This came from my imagination, and I am proud of it.”</blockquote>
        </div>
      </section>

      <section className="projects section">
        <div className="section-heading">
          <div><span className="section-label">02 — Make something amazing</span><h2>What young artists create</h2></div>
          <p>Fresh projects keep every month exciting, welcoming beginners and experienced makers alike.</p>
        </div>
        <div className="project-grid">
          {projects.map(([icon, title, text], index) => (
            <article className={`project-card card-${index + 1}`} key={title}>
              <span className="project-number">0{index + 1}</span><span className="project-icon">{icon}</span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="confidence-band">
        <div className="confidence-photo"><img src="/images/young-artist.jpg" alt="Young artist enjoying a creative project" /></div>
        <div className="confidence-copy">
          <span className="section-label light">03 — Skills that last</span>
          <h2>Creativity becomes confidence.</h2>
          <p>Each studio session includes a short “Dream Talk” connecting creative practice with life skills.</p>
          <div className="value-grid">
            {values.map(([title, text]) => <div key={title}><Check size={18} /><span><strong>{title}</strong>{text}</span></div>)}
          </div>
        </div>
      </section>

      <section className="flow section">
        <span className="section-label">04 — A consistent weekly rhythm</span>
        <h2>Every session has a purpose.</h2>
        <div className="flow-track">
          {[
            ['01', 'Welcome', '10 min'], ['02', 'Dream Talk', '10 min'], ['03', 'Demonstration', '10–15 min'],
            ['04', 'Studio Time', '45–60 min'], ['05', 'Artist Spotlight', '10 min'], ['06', 'Clean-Up', '10 min'], ['07', 'Weekly Dream', '5 min'],
          ].map(([number, title, time]) => <div className="flow-step" key={number}><span>{number}</span><strong>{title}</strong><small>{time}</small></div>)}
        </div>
        <div className="process"><span>Dream</span><i>→</i><span>Plan</span><i>→</i><span>Create</span><i>→</i><span>Finish</span><i>→</i><span>Celebrate</span></div>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="section calendar-inner">
          <div className="section-heading">
            <div><span className="section-label">05 — Twelve months of possibility</span><h2>A year of wearable art</h2></div>
            <CalendarDays size={52} strokeWidth={1.5} />
          </div>
          <div className="calendar-grid">
            {months.map(([month, theme, project, skill], index) => (
              <article key={month}><div className="month-number">{String(index + 1).padStart(2, '0')}</div><h3>{month}</h3><strong>{theme}</strong><p>{project}</p><span>{skill}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase section">
        <div className="showcase-collage">
          <img src="/images/colorful-art.jpg" alt="Bright colorful abstract artwork" />
          <div className="showcase-badge"><Star fill="currentColor" /> Your ideas<br />matter!</div>
        </div>
        <div className="showcase-copy">
          <span className="section-label">06 — Celebrate every step</span>
          <h2>The Rising Dreams Showcase</h2>
          <p>Each program cycle can finish with a joyful community celebration featuring a wearable-art fashion walk, youth displays, certificates, music, family activities, photography, and youth speakers.</p>
          <div className="passport-card">
            <div><span>Rising Dreams</span><strong>Artist Passport</strong></div>
            <div className="stamp-row"><span>Creative<br />Thinker</span><span>Helpful<br />Teammate</span><span>Rising<br />Leader</span><span>Project<br />Finisher</span></div>
          </div>
          <div className="program-extras">
            <article><span>💼</span><div><strong>Young Dreamers Entrepreneurship</strong><p>Older youth explore branding, pricing, customer service, safe promotion, saving, and giving back.</p></div></article>
            <article><span>👨‍👩‍👧</span><div><strong>Family Dream Day</strong><p>Families create side by side, strengthening communication and making joyful memories together.</p></div></article>
          </div>
        </div>
      </section>

      <section className="packet-wrap" id="packet">
        <div className="packet-intro section">
          <div><span className="section-label light">07 — Ready to use</span><h2>Official program starter packet</h2><p>Print the complete packet for registration days, parent meetings, weekly sessions, volunteer onboarding, and program planning.</p></div>
          <button className="button button-yellow" onClick={() => window.print()}><Download size={19} /> Print or save as PDF</button>
        </div>

        <div className="print-packet">
          <PacketCover />
          <RegistrationPage />
          <PermissionPage />
          <ConductVolunteerPage />
          <AttendancePage />
          <CalendarPage />
          <SuppliesPage />
          <StaffPassportPage />
          <SuccessPromisePage />
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="join-copy">
          <span className="section-label light">Join the Rising Dreams family</span>
          <h2>There is a place for you here.</h2>
          <p>Choose how you would like to participate. We’ll share registration dates, volunteer opportunities, sponsorship needs, and program updates.</p>
          <div className="join-types"><span><Users /> Families</span><span><Palette /> Artists</span><span><Heart /> Volunteers</span><span><Sparkles /> Sponsors</span></div>
        </div>
        <form className="interest-form" name="rising-dreams-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="rising-dreams-interest" />
          <p className="hidden-field"><label>Don’t fill this out: <input name="bot-field" /></label></p>
          <div className="form-row"><label>First name<input name="first-name" required autoComplete="given-name" /></label><label>Last name<input name="last-name" required autoComplete="family-name" /></label></div>
          <label>Email address<input type="email" name="email" required autoComplete="email" /></label>
          <label>Phone number<input type="tel" name="phone" autoComplete="tel" /></label>
          <fieldset><legend>I’m interested in…</legend><div className="check-grid">
            {['Registering a young artist', 'Volunteering', 'Teaching a skill', 'Becoming a sponsor', 'Donating supplies', 'Community partnership'].map((item) => <label key={item}><input type="checkbox" name="interests" value={item} /><span>{item}</span></label>)}
          </div></fieldset>
          <label>Anything you’d like us to know?<textarea name="message" rows={3} /></label>
          <button className="button button-primary form-submit" disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending…' : 'Keep me updated'} <Sparkles size={18} /></button>
          {formState === 'success' && <p className="form-message success">Thank you! You’re now part of the Rising Dreams interest list.</p>}
          {formState === 'error' && <p className="form-message error">Something went wrong. Please try again in a moment.</p>}
        </form>
      </section>

      <footer><div className="footer-brand"><span className="brand-mark"><img src="/images/rising-dreams-logo.jpg" alt="" /></span><div><strong>Rising Dreams Wearable Arts</strong><p>Where creativity becomes confidence and dreams become something you can see.</p></div></div><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

function PacketTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return <div className="packet-title"><span>{number}</span><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div></div>
}

function Line({ label, wide = false }: { label: string; wide?: boolean }) {
  return <label className={wide ? 'paper-line wide' : 'paper-line'}><span>{label}</span><i /></label>
}

function CheckLine({ children }: { children: React.ReactNode }) {
  return <label className="paper-check"><b>☐</b><span>{children}</span></label>
}

function PacketCover() {
  return <article className="packet-page packet-cover"><div className="packet-cover-mark"><img src="/images/rising-dreams-logo.jpg" alt="Rising Dreams dream catcher logo" /></div><p>Rising Dreams Foundation presents</p><h1>Wearable<br /><em>Arts</em></h1><div className="cover-rule" /><h2>Program Starter Packet</h2><p className="cover-tagline">Create It. Wear It. Dream Bigger.</p><div className="cover-details"><span>YOUTH REGISTRATION</span><span>PARENT PERMISSION</span><span>VOLUNTEER FORM</span><span>PROGRAM TOOLS</span></div><div className="cover-footer">Ages 6–17 · No previous art experience necessary</div></article>
}

function RegistrationPage() {
  return <article className="packet-page"><PacketTitle number="01" title="Youth Registration Form" subtitle="Please complete one form for each participant." /><div className="paper-grid two"><Line label="Participant name" /><Line label="Date of birth" /><Line label="Age" /><Line label="Grade" /><Line label="School" wide /><Line label="Parent/guardian name" wide /><Line label="Parent/guardian phone" /><Line label="Parent/guardian email" /><Line label="Home address" wide /></div><h3 className="paper-heading">Emergency contact</h3><div className="paper-grid three"><Line label="Name" /><Line label="Relationship" /><Line label="Phone" /></div><h3 className="paper-heading">About the participant</h3><p>Does your child have allergies, medical needs, sensory needs, learning needs, or accommodations that would help us provide a positive experience?</p><div className="paper-options"><CheckLine>Yes</CheckLine><CheckLine>No</CheckLine></div><Line label="If yes, please explain" wide /><p className="paper-prompt">What is your child interested in?</p><div className="paper-check-grid">{['Drawing', 'Painting', 'Fashion', 'Tie-dye', 'T-shirt design', 'Crafts', 'Sneakers', 'Entrepreneurship', 'Making friends', 'Trying something new', 'Other'].map((x) => <CheckLine key={x}>{x}</CheckLine>)}</div><Line label="What would you like your child to gain from the program?" wide /></article>
}

function PermissionPage() {
  return <article className="packet-page"><PacketTitle number="02" title="Parent / Guardian Permission" /><p>I give permission for my child, <span className="inline-line" />, to participate in the Rising Dreams Wearable Arts Program.</p><p>I understand that activities may include arts and crafts, fabric decorating, tie-dye, painting, designing clothing and accessories, group activities, community events, and program showcases. I understand that reasonable safety precautions will be used.</p><p>I agree to provide staff with important information concerning allergies, medical needs, behavioral needs, sensory needs, or accommodations that may affect my child’s participation.</p><h3 className="paper-heading">Emergency care</h3><p>In the event of an emergency, I authorize Rising Dreams staff to contact emergency medical services when necessary.</p><div className="paper-grid two"><Line label="Parent/guardian name" /><Line label="Emergency phone" /><Line label="Signature" /><Line label="Date" /></div><h3 className="paper-heading">Photo & media permission</h3><p>Rising Dreams Foundation may take photographs or videos during activities, celebrations, and community events. Please select one:</p><div className="permission-choice"><CheckLine><strong>YES</strong> — I give permission for my child to appear in materials including social media, website content, fundraising materials, or community presentations.</CheckLine><CheckLine><strong>NO</strong> — I do not give permission for my child’s image to be used publicly.</CheckLine></div><div className="paper-grid two"><Line label="Child’s name" /><Line label="Parent/guardian signature" /><Line label="Date" /></div></article>
}

function ConductVolunteerPage() {
  const rules = ['Treat participants, volunteers, and staff with respect.', 'Keep hands, feet, and objects to yourself.', 'Use respectful and appropriate language.', 'Respect other people’s artwork and ideas.', 'Follow staff instructions and safety rules.', 'Use supplies responsibly and help clean the workspace.', 'Ask permission before using another person’s materials.', 'Encourage others instead of making fun of their work.', 'Tell an adult if you feel unsafe, uncomfortable, or need help.']
  return <article className="packet-page"><PacketTitle number="03" title="Participant Code of Conduct" subtitle="Everyone deserves to feel safe, respected, included, and encouraged." /><div className="conduct-rule">We build people up. We do not tear people down.</div><div className="conduct-list">{rules.map((rule) => <div key={rule}><Check size={14} /><span>{rule}</span></div>)}</div><div className="paper-grid two"><Line label="Participant signature" /><Line label="Parent/guardian signature" /><Line label="Date" /></div><div className="paper-divider" /><PacketTitle number="04" title="Volunteer Application" subtitle="Join the Rising Dreams team." /><div className="paper-grid two"><Line label="Full name" /><Line label="Phone" /><Line label="Email" /><Line label="Address" /></div><p className="paper-prompt">Areas of interest and availability</p><div className="paper-check-grid">{['Art activities', 'Youth mentoring', 'Events', 'Registration', 'Photography', 'Fundraising', 'Fashion & design', 'Community outreach', 'Set-up / clean-up', 'Weekdays', 'Evenings', 'Weekends'].map((x) => <CheckLine key={x}>{x}</CheckLine>)}</div><Line label="Why would you like to volunteer? What skills would you like to share?" wide /><div className="paper-grid two"><Line label="Signature" /><Line label="Date" /></div></article>
}

function AttendancePage() {
  return <article className="packet-page"><PacketTitle number="05" title="Weekly Attendance Sheet" /><div className="paper-grid three"><Line label="Program date" /><Line label="Activity" /><Line label="Instructor/leader" /></div><table className="attendance-table"><thead><tr><th>Participant</th><th>Present</th><th>Absent</th><th>Project completed</th><th>Notes</th></tr></thead><tbody>{Array.from({ length: 14 }).map((_, index) => <tr key={index}><td></td><td>☐</td><td>☐</td><td>☐</td><td></td></tr>)}</tbody></table><div className="attendance-note"><strong>Consistency milestones:</strong> 4 sessions — Rising Artist Certificate · 8 sessions — Achievement Award · 12 sessions — Creative Champion</div></article>
}

function CalendarPage() {
  return <article className="packet-page"><PacketTitle number="06" title="12-Month Activity Calendar" /><div className="print-calendar">{months.map(([month, theme, project, skill]) => <div key={month}><strong>{month}</strong><span>{theme}</span><p><b>Project:</b> {project}</p><p><b>Life skill:</b> {skill}</p></div>)}</div></article>
}

function SuppliesPage() {
  return <article className="packet-page"><PacketTitle number="07" title="Basic Program Supply List" subtitle="Use this checklist for planning, shopping, and donation drives." /><div className="supply-columns">{Object.entries(supplies).map(([heading, items]) => <section key={heading}><h3>{heading}</h3>{items.map((item) => <CheckLine key={item}>{item}</CheckLine>)}</section>)}</div><h3 className="paper-heading">Organization & safety</h3><div className="paper-check-grid">{['Storage bins', 'Labels', 'First-aid kit', 'Cleaning supplies', 'Hand sanitizer', 'Attendance clipboard', 'Name tags', 'Protective table covers'].map((x) => <CheckLine key={x}>{x}</CheckLine>)}</div><h3 className="paper-heading">Donation notes / inventory needs</h3>{Array.from({ length: 4 }).map((_, i) => <Line key={i} label="" wide />)}</article>
}

function StaffPassportPage() {
  return <article className="packet-page"><PacketTitle number="08" title="Staff Session Checklist" /><div className="checklist-columns">{[['Before participants arrive', ['Prepare activity materials', 'Review accommodations', 'Set up tables and coverings', 'Prepare attendance sheet', 'Confirm emergency contacts', 'Set up a quiet area', 'Review team responsibilities']], ['During the session', ['Welcome each participant', 'Take attendance', 'Explain the activity', 'Review safety expectations', 'Encourage creativity', 'Recognize positive behavior', 'Provide assistance']], ['After the session', ['Clean and organize supplies', 'Record completed projects', 'Document incidents', 'Check supply inventory', 'Prepare family updates']]].map(([heading, items]) => <section key={heading as string}><h3>{heading as string}</h3>{(items as string[]).map((x) => <CheckLine key={x}>{x}</CheckLine>)}</section>)}</div><div className="paper-divider" /><PacketTitle number="09" title="Rising Dreams Artist Passport" /><div className="passport-print"><Line label="My name" wide /><div className="paper-check-grid">{['First Wearable Art Project', 'Creative Thinker', 'Kindness Champion', 'Helpful Teammate', 'Rising Leader', 'Positive Attitude', 'Project Finisher', 'Community Helper', 'Young Entrepreneur', '4 Sessions', '8 Sessions', '12 Sessions'].map((x) => <CheckLine key={x}>{x}</CheckLine>)}</div><Line label="My biggest accomplishment" wide /><Line label="Something new I learned" wide /><Line label="My next dream" wide /></div></article>
}

function SuccessPromisePage() {
  return <article className="packet-page"><PacketTitle number="10" title="Program Success Tracker" /><div className="metric-grid">{['Registered participants', 'Average weekly attendance', 'Returning participants', 'New participants', 'Volunteers', 'Projects completed', 'Donations received', 'Community partners', 'Parent feedback'].map((x) => <Line label={x} key={x} />)}</div><Line label="What went well?" wide /><Line label="What needs improvement?" wide /><Line label="What participants asked for next" wide /><Line label="Goal for next month" wide /><div className="paper-divider" /><PacketTitle number="11" title="Our Promise to Families" /><div className="promise-print"><p>Your child is more than a registration number.</p><p>We want to learn their name, recognize their creativity, celebrate their progress, and remind them that mistakes are part of learning.</p><p>We want them to feel comfortable asking for help, discover abilities they may not have realized they had, and understand that their dreams deserve an opportunity to grow.</p><strong>Where Creativity Becomes Confidence<br />and Dreams Become Something You Can See.</strong></div></article>
}
