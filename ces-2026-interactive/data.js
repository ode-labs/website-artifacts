const senseData = {
  'ode': {
    name: 'Ode by Muno',
    emoji: '✦',
    description: 'An ode to how we perceive and make meaning: through taste, scent, touch, sight, sound, space, time, and the system that binds them.'
  },
  'sight': {
    name: 'Sight',
    emoji: '👁️',
    description: 'Sight was the most crowded category. Ten products. That wasn\'t surprising at all. Vision is the easiest sense to build tech around. Cameras, screens, and imaging models have been around for decades, so the foundation is solid. Because of that, a lot of what showed up felt familiar. Sharper images, bigger displays, more detailed diagnostics. All useful, but nothing that really shocks you.\n\nWhat stood out were the products that went beyond just showing things. Mirrors that influence how you choose an outfit. Screens that try to understand context instead of constantly asking for attention. The real opportunity here isn\'t more screens. It\'s knowing when to step back. We already look at things all day. Anything new has to feel worth looking at.'
  },
  'sound': {
    name: 'Sound',
    emoji: '🔊',
    description: 'Sound felt like it was going in two different directions. Some products were clearly about output. Speakers that double as art, real-time translation, AI-generated music. Others were about input. Devices that listen all the time, like jewelry that records audio or systems that monitor spaces for threats.\n\nSound is personal. It\'s always around you, and it moves through your body. That makes the opportunity exciting. Audio that responds naturally without needing commands. Spaces that adjust without you asking. But it also brings up trust pretty quickly. Once something is always listening, people want to know who else might be listening too.'
  },
  'touch': {
    name: 'Touch',
    emoji: '🤚',
    description: 'Touch felt much more personal than the other categories. Most of these products come into direct contact with your body. Showers, hair tools, skincare devices, scar treatment, knives, even surfaces you trace with your fingers. These aren\'t things you interact with occasionally. They show up in routines you already care about.\n\nThat\'s a big shift. Tech is moving into grooming, cooking, and healing. The opportunity is making those moments feel better without making them more complicated. The challenge is that touch is different for everyone. Skin reacts differently. Pressure feels different. Making something that works well for lots of people is hard.'
  },
  'taste': {
    name: 'Taste',
    emoji: '👅',
    description: 'Taste had a handful of products, but most of them weren\'t really about flavor. They were about safety and control. Allergen testing, hydration tracking, smart fridges, indoor farming. It felt more like helping people trust what they\'re consuming.\n\nThat makes sense. Taste is emotional and cultural. People don\'t want it optimized too much. The opportunity is giving people confidence in what they eat. The challenge is not overdoing it. Food still needs to feel personal, not engineered.'
  },
  'scent': {
    name: 'Scent',
    emoji: '👃',
    description: 'There was only one scent product. Just one. That says a lot. Smell is hard to measure and even harder to standardize. It\'s deeply tied to memory and emotion, which makes it tricky for tech.\n\nAt the same time, that\'s what makes it interesting. Personalized fragrance, mood-based environments, wellness uses. There\'s a lot of room here. The challenge is practical. Creating scent reliably and affordably without feeling gimmicky is not easy, which explains why this category is still so small.'
  },
  'space': {
    name: 'Space',
    emoji: '🏠',
    description: 'Space was a small category too. Only two products. An expandable trailer and a fully integrated smart home. What they had in common was the idea that the environment itself becomes part of the interface.\n\nThe opportunity is homes and spaces that adjust to how you live instead of forcing you to adapt. The challenge is cost and complexity. Most people can\'t redesign their homes around smart systems, so this kind of tech has to be flexible.'
  },
  'time': {
    name: 'Time',
    emoji: '⏳',
    description: 'Time also showed up in just a couple of products. A therapy booth and a sleep prediction system. Both focused on patterns over hours and days instead of quick moments.\n\nTime isn\'t a traditional sense, but it shapes everything. The opportunity is helping people rest, recover, and move through their day more smoothly. The challenge is that time is personal. Systems need to learn you slowly, and that takes trust.'
  },
  'system': {
    name: 'System',
    emoji: '🔗',
    description: 'System ended up being the biggest category. That felt expected. Once tech is collecting information from sight, sound, touch, and the environment, something has to connect it all.\n\nThis is where decisions start getting made. What to adjust. What to recommend. What to automate. The opportunity is coordination that actually feels helpful. The challenge is clarity. When systems make choices for you, you want to understand why. If you can\'t, people get uncomfortable fast.'
  }
};

const productData = {
  // SIGHT PRODUCTS
  'k-scan': {
    sense: 'sight', emoji: '👁️', name: 'K-Scan',
    description: 'An AI-powered skin analysis device that uses advanced imaging to detect early signs of skin conditions, melanoma risk, and aging patterns. Uses multispectral imaging to see beneath the skin surface.',
    value: 'Early detection of skin cancer and conditions before they become visible to the naked eye. Personalized skincare recommendations based on actual skin data.',
    why: 'Skin cancer rates continue to rise, and early detection is crucial for survival. This democratizes dermatological screening for home use.',
    skepticism: 'Medical-grade accuracy claims need FDA validation. Risk of false positives causing unnecessary anxiety, or false negatives providing dangerous reassurance.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/k-scan/'
  },
  'skinsight': {
    sense: 'sight', emoji: '👁️', name: 'Skinsight',
    description: 'A smart mirror system that tracks skin health over time using computer vision. Monitors changes in complexion, hydration levels, and identifies emerging skin issues through daily scans.',
    value: 'Continuous monitoring catches gradual changes humans miss. Creates a visual timeline of skin health for better dermatologist consultations.',
    why: 'Most skin conditions develop slowly and go unnoticed until advanced. Consistent tracking enables proactive rather than reactive skincare.',
    skepticism: 'Lighting variations could affect accuracy. May promote unhealthy obsession with appearance. Subscription model for "premium insights" raises data monetization concerns.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/skinsight/'
  },
  'derma-reader': {
    sense: 'sight', emoji: '👁️', name: 'Derma-Reader',
    description: 'Handheld device combining UV photography with AI analysis to reveal sun damage, pore health, and bacterial presence invisible to normal vision. Connects to smartphone for detailed reports.',
    value: 'Makes invisible skin damage visible, motivating better sun protection habits. Professional-grade skin analysis at consumer prices.',
    why: 'UV damage accumulates silently for decades before manifesting as visible aging or cancer. Seeing the hidden damage changes behavior.',
    skepticism: 'Consumer-grade sensors may lack precision of professional equipment. Potential for misdiagnosis without professional interpretation.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/derma-reader-20/'
  },
  'ipolish': {
    sense: 'sight', emoji: '👁️', name: 'iPolish',
    description: 'AI-powered nail health analyzer that detects nutritional deficiencies, circulation issues, and early disease markers through nail appearance analysis using macro photography and pattern recognition.',
    value: 'Nails reveal systemic health issues months before other symptoms appear. Non-invasive health screening through something people already examine.',
    why: 'Nail changes can indicate heart disease, thyroid problems, and nutritional deficiencies. Early warning system hiding in plain sight.',
    skepticism: 'Nail appearance varies widely among healthy individuals. Risk of medical anxiety from normal variations. Limited clinical validation for health claims.',
    link: 'https://www.zdnet.com/article/ipolish-ces-2026/'
  },
  'dr-alignnavi': {
    sense: 'sight', emoji: '👁️', name: 'Dr.AlignNavi',
    description: 'Posture correction system using depth cameras and real-time skeletal tracking. Provides visual feedback through AR overlay showing ideal alignment versus current position during work or exercise.',
    value: 'Prevents chronic pain from poor posture before it develops. Real-time correction more effective than periodic reminders.',
    why: 'Remote work has created an epidemic of posture-related pain. Visual feedback creates immediate behavior change.',
    skepticism: 'Constant monitoring could increase stress and body anxiety. May oversimplify complex biomechanical issues. Privacy concerns with always-on cameras.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/dralignnavi-from-scan-to-plan-in-minutes/'
  },
  'hisense-163mx': {
    sense: 'sight', emoji: '👁️', name: 'Hisense 163MX',
    description: 'A 163-inch MicroLED display designed for home cinema installations. Features modular panels, self-emitting pixels, and 10,000+ nit peak brightness for ultimate HDR performance.',
    value: 'Cinema-quality visuals at home without the compromises of projection. Modular design allows custom sizing and easy panel replacement.',
    why: 'MicroLED represents the next evolution beyond OLED—no burn-in, higher brightness, longer lifespan. This brings commercial tech to residential spaces.',
    skepticism: 'Extreme cost puts it beyond most consumers. Massive energy consumption. Diminishing returns on visual quality at this scale for typical content.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/163mx/'
  },
  '116-mini-led': {
    sense: 'sight', emoji: '👁️', name: '116" Mini LED',
    description: 'Massive Mini LED television with over 25,000 local dimming zones for precise contrast control. Features 8K resolution and advanced upscaling for all content types.',
    value: 'Near-OLED contrast with LCD reliability and brightness. Enormous screen size previously only available through projection.',
    why: 'Mini LED bridges the gap between affordable LCD and premium OLED, making high-end picture quality more accessible at large sizes.',
    skepticism: '8K content remains extremely scarce. Upscaling quality varies. Power consumption and heat generation at this size are significant concerns.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/116uxs/'
  },
  'udc-ir-oled': {
    sense: 'sight', emoji: '👁️', name: 'UDC IR OLED',
    description: 'Under-display camera OLED panel using infrared transparency technology. Eliminates notches and punch-holes while maintaining camera quality through invisible sensor integration.',
    value: 'True full-screen displays without compromising front camera functionality. Cleaner aesthetics and more immersive viewing.',
    why: 'The front camera has been the last obstacle to seamless display design. This solves a problem affecting billions of devices.',
    skepticism: 'Image quality through OLED layers historically degraded. IR-only may limit certain camera features. Manufacturing complexity increases costs.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/12-udc-ir-oled/'
  },
  'heymirror': {
    sense: 'sight', emoji: '👁️', name: 'HEYMIRROR',
    description: 'Smart mirror with embedded display showing health metrics, calendar, weather, and personalized content. Includes skin analysis, fitness tracking integration, and voice assistant.',
    value: 'Transforms dead time during morning routines into productive information consumption. Health tracking without additional devices.',
    why: 'The bathroom mirror is looked at daily but underutilized. Adding intelligence to existing touchpoints reduces friction for health monitoring.',
    skepticism: 'Bathroom humidity and temperature extremes challenge electronics longevity. Privacy concerns with cameras in intimate spaces.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/heymirror-smart-dressing-mirror/'
  },
  'samsung-transparent': {
    sense: 'sight', emoji: '👁️', name: 'Samsung Transparent',
    description: 'Transparent MicroLED display that shows content while allowing see-through visibility. Designed for retail, museums, and smart home applications where displays should blend with environments.',
    value: 'Information overlay on physical world without blocking views. Enables new retail and exhibition experiences impossible with opaque screens.',
    why: 'As screens proliferate, transparent displays reduce visual clutter while adding functionality. Bridges physical and digital spaces.',
    skepticism: 'Transparency compromises brightness and contrast in well-lit environments. Limited practical applications for most consumers. High cost for niche use cases.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/samsung-transparent-micro-led/'
  },

  // SOUND PRODUCTS
  'music-studio-5': {
    sense: 'sound', emoji: '🔊', name: 'Music Studio 5',
    description: 'AI-powered digital audio workstation that assists with composition, mixing, and mastering. Uses machine learning to suggest chord progressions, fix timing issues, and optimize sound quality.',
    value: 'Democratizes professional music production for beginners while accelerating workflow for experts. AI handles technical tasks so creators focus on artistry.',
    why: 'Music production has high barriers to entry. AI assistance makes professional-quality output achievable without years of technical training.',
    skepticism: 'May homogenize music as everyone uses similar AI suggestions. Questions about creative ownership when AI contributes significantly.',
    link: 'https://www.zdnet.com/home-and-office/home-entertainment/samsung-music-studio-7-speakers-ces-2026/'
  },
  'acoustic-eye': {
    sense: 'sound', emoji: '🔊', name: 'Acoustic Eye',
    description: 'Spatial audio visualization system that displays sound sources and acoustic properties in AR. Shows where sounds originate, how they reflect, and identifies noise pollution sources.',
    value: 'Makes invisible acoustic problems visible for solving. Helps optimize room acoustics, identify noise sources, and improve audio setups.',
    why: 'Sound is invisible but profoundly affects wellbeing and productivity. Visualization enables understanding and improvement of acoustic environments.',
    skepticism: 'Requires AR headset for full functionality, limiting accessibility. Acoustic science is complex—oversimplification may lead to poor decisions.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/acoustic-eye/'
  },
  'aivatar': {
    sense: 'sound', emoji: '🔊', name: 'AiVATAR',
    description: 'AI voice cloning and avatar system that creates realistic digital representations. Can generate speech in cloned voices, create video avatars, and enable asynchronous video communication.',
    value: 'Enables personalized content at scale. Preserves voices of loved ones. Creates accessibility options for those who lose speech ability.',
    why: 'Video communication is time-consuming. AI avatars could handle routine communications while preserving personal touch.',
    skepticism: 'Massive potential for deepfakes and fraud. Consent and ownership issues with voice cloning. May erode trust in all video/audio communication.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/aivatar/'
  },
  'perisphere': {
    sense: 'sound', emoji: '🔊', name: 'Perisphere',
    description: '360-degree spatial audio speaker system using beamforming to create immersive soundscapes. Single unit replaces traditional surround sound setups with AI-optimized room calibration.',
    value: 'Surround sound experience without multiple speakers and complex wiring. Adapts automatically to any room shape and size.',
    why: 'Traditional surround sound requires ideal room layouts few homes have. This brings immersive audio to real-world living spaces.',
    skepticism: 'Physics limits what single-point audio can achieve versus true multi-speaker setups. Room reflections may cause inconsistent experiences.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/perisphere-audio-meets-vision/'
  },
  'music-canvas': {
    sense: 'sound', emoji: '🔊', name: 'Music Canvas',
    description: 'Visual music creation interface where users paint and draw to generate music. Colors, shapes, and movements translate to notes, rhythms, and timbres through AI interpretation.',
    value: 'Makes music creation accessible to visual thinkers and those without musical training. New creative expression medium bridging art forms.',
    why: 'Musical notation is a barrier for many creative people. Visual interfaces tap into different cognitive strengths and creative processes.',
    skepticism: 'Translation from visual to audio may feel arbitrary or unsatisfying. Limited control for serious musicians. Novelty may wear off quickly.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/samsung-music-agent/'
  },
  'timekettle-w4': {
    sense: 'sound', emoji: '🔊', name: 'Timekettle W4',
    description: 'Real-time translation earbuds supporting 40+ languages with minimal latency. Features offline mode, industry-specific vocabulary, and natural conversation flow preservation.',
    value: 'Breaks language barriers in real-time conversation. Enables global communication without learning multiple languages.',
    why: 'Language remains the biggest barrier to human connection across cultures. Real-time translation could fundamentally change international interaction.',
    skepticism: 'Nuance, humor, and cultural context often lost in translation. Latency still disrupts natural conversation flow.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/timekettle-w4-ai-interpreter-earbuds/'
  },
  'xeo-202': {
    sense: 'sound', emoji: '🔊', name: 'XEO 202',
    description: 'High-end wireless active speakers with room correction AI. Automatically adjusts frequency response, timing, and output based on room acoustics and listening position.',
    value: 'Audiophile-quality sound without acoustic treatment or manual calibration. Adapts to any room automatically.',
    why: 'Room acoustics typically degrade speaker performance more than speaker quality itself. Intelligent correction addresses the real bottleneck.',
    skepticism: 'Purists argue processing degrades audio authenticity. High price point for marginal improvements in typical rooms.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/xeo-202/'
  },
  'nirva-ai': {
    sense: 'sound', emoji: '🔊', name: 'Nirva AI',
    description: 'Meditation and focus audio system using AI-generated soundscapes personalized to brainwave patterns. Adapts in real-time based on biometric feedback to optimize mental states.',
    value: 'Personalized audio environments for focus, relaxation, or sleep. Biofeedback creates closed-loop optimization impossible with static audio.',
    why: 'Mental health and focus challenges are epidemic. Audio-based interventions are non-invasive and can integrate into daily life.',
    skepticism: 'Biometric-to-audio correlation science is still emerging. Placebo effect may account for perceived benefits.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/nirva-ai/'
  },
  'lollipop-star': {
    sense: 'sound', emoji: '🔊', name: 'Lollipop Star',
    description: 'Baby monitor with AI-powered cry analysis that distinguishes between hunger, discomfort, tiredness, and other needs. Provides specific recommendations and tracks patterns over time.',
    value: 'Helps new parents understand baby needs faster, reducing stress and improving response accuracy. Pattern tracking identifies emerging issues.',
    why: 'Parental anxiety around infant needs is universal. AI interpretation of cries could accelerate the learning curve significantly.',
    skepticism: 'Babies are individuals—AI trained on averages may not apply to specific children. Risk of over-reliance reducing parental intuition development.',
    link: 'https://www.cnet.com/tech/this-lollipop-plays-tunes-in-your-head-using-bone-conduction-i-tried-it-and-was-floored/'
  },

  // TOUCH PRODUCTS
  'light-straight': {
    sense: 'touch', emoji: '🤚', name: 'Light Straight',
    description: 'LED-based hair straightening device using light energy instead of direct heat. Claims to reduce hair damage while achieving similar styling results through photonic heating technology.',
    value: 'Hair styling without the damage of traditional heat tools. Faster heating and more even temperature distribution.',
    why: 'Heat damage is the primary concern with styling tools. Light-based heating could fundamentally change the damage equation.',
    skepticism: 'Physics of light-based heating may not differ meaningfully from conductive heat at the hair level. Marketing claims need independent verification.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/light-straight/'
  },
  'ai-turing-keys': {
    sense: 'touch', emoji: '🤚', name: 'AI Turing Keys',
    description: 'Adaptive mechanical keyboard that learns typing patterns and adjusts key resistance, travel, and feedback per-key. Uses AI to optimize for speed, comfort, or reduced strain.',
    value: 'Personalized typing experience that evolves with the user. Can reduce repetitive strain by adapting to individual ergonomic needs.',
    why: 'Keyboards are the primary human-computer interface for knowledge workers. Small improvements compound over millions of keystrokes.',
    skepticism: 'Mechanical complexity increases failure points. Adaptation period may frustrate users. Premium pricing for incremental benefits.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/ai-turing-keys/'
  },
  'ultrasonics-c200': {
    sense: 'touch', emoji: '🤚', name: 'Ultrasonics C-200',
    description: 'Ultrasonic cleaning device for jewelry, glasses, and small items. Uses high-frequency sound waves to create microscopic bubbles that remove dirt from surfaces without chemicals.',
    value: 'Chemical-free deep cleaning for delicate items. Reaches crevices impossible to clean manually. Quick and effortless operation.',
    why: 'Traditional cleaning methods either use harsh chemicals or miss hidden dirt. Ultrasonic cleaning is gentler and more thorough.',
    skepticism: 'Not suitable for all materials—can damage certain gems and coatings. Effectiveness varies significantly by item type.',
    link: 'https://seattleultrasonics.com/products/c-200-ultrasonic-8-chefs-knife'
  },
  'ai-shower': {
    sense: 'touch', emoji: '🤚', name: 'AI Shower',
    description: 'Smart shower system that learns preferences and automatically adjusts water temperature, pressure, and spray patterns. Includes water usage tracking and personalized wellness routines.',
    value: 'Perfect shower settings every time without manual adjustment. Water conservation through intelligent flow management.',
    why: 'The shower is a daily ritual affecting mood and energy. Optimization of this experience has outsized impact on daily wellbeing.',
    skepticism: 'Complex plumbing integration increases installation cost and failure risk. Privacy concerns with bathroom usage data.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/balance-ai-rejuvenation-shower-system/'
  },
  'medispa': {
    sense: 'touch', emoji: '🤚', name: 'MediSpa',
    description: 'At-home spa device combining multiple therapeutic modalities: heat therapy, vibration massage, and LED light treatment. Targets muscle recovery, skin health, and relaxation.',
    value: 'Professional spa treatments at home on demand. Multiple therapies in one device reduces clutter and cost versus separate devices.',
    why: 'Spa visits are expensive and time-consuming. Home wellness devices make self-care more accessible and consistent.',
    skepticism: 'Jack-of-all-trades devices often master none. Therapeutic claims may exceed clinical evidence. Durability concerns with complex mechanisms.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/medispa-all-in-one-ai-beauty-system/'
  },
  'scar': {
    sense: 'touch', emoji: '🤚', name: 'SCAR',
    description: 'Silicone-based scar treatment system using controlled pressure and hydration to minimize scar appearance. Includes AI tracking to monitor healing progress over time.',
    value: 'Non-invasive scar reduction without surgery or injections. Progress tracking motivates consistent use and documents improvement.',
    why: 'Scars affect self-confidence and can cause physical discomfort. Accessible treatment options empower people to address concerns independently.',
    skepticism: 'Scar treatment results vary dramatically by individual and scar type. AI tracking may overstate improvement to encourage continued use.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/scar-ai-driven-precision-scar-diagnosis-treatment-and-recovery-system/'
  },
  'swavi': {
    sense: 'touch', emoji: '🤚', name: 'SWAVI',
    description: 'Wearable haptic device that translates sound into tactile vibrations for deaf and hard-of-hearing users. Enables music appreciation and environmental awareness through touch.',
    value: 'Opens music and audio experiences to those who cannot hear. Provides safety alerts and environmental awareness through haptic feedback.',
    why: 'Sound is a fundamental sense for safety and enjoyment. Haptic translation creates new pathways for experiencing audio content.',
    skepticism: 'Haptic translation cannot fully replicate the richness of hearing. Learning curve to interpret vibration patterns meaningfully.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/swavi-invisible-touch-controller/'
  },
  'xtool-uv': {
    sense: 'touch', emoji: '🤚', name: 'XTool UV',
    description: 'Compact UV laser engraver for personalization and small-scale manufacturing. Engraves on wood, leather, acrylic, and more with precision detail for crafts and prototyping.',
    value: 'Professional engraving capabilities at consumer prices. Enables custom products, personalization, and small business opportunities.',
    why: 'Personalization is increasingly valued. Accessible manufacturing tools democratize production and enable creative entrepreneurship.',
    skepticism: 'Safety concerns with laser equipment in homes. Learning curve for design software. Limited material compatibility versus industrial equipment.',
    link: 'https://www.cnet.com/tech/computing/xtool-announces-uv-printer/'
  },

  // TASTE PRODUCTS
  'ecoldbrew': {
    sense: 'taste', emoji: '👅', name: 'Ecoldbrew',
    description: 'Rapid cold brew coffee maker that produces smooth cold brew in minutes instead of hours. Uses pressure and temperature cycling to extract flavor without the bitterness of heat brewing.',
    value: 'Fresh cold brew on demand without overnight waiting. Consistent results regardless of user skill level.',
    why: 'Cold brew popularity has exploded but traditional methods require planning. Instant gratification meets quality coffee.',
    skepticism: 'Rapid extraction may not achieve the same flavor profile as traditional slow steeping. Another single-purpose kitchen gadget.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/ecoldbrew/'
  },
  'allergen-alert': {
    sense: 'taste', emoji: '👅', name: 'Allergen Alert',
    description: 'Portable food scanner that detects common allergens in meals. Uses spectroscopy to identify proteins associated with nuts, gluten, dairy, and other allergens before consumption.',
    value: 'Peace of mind for allergy sufferers when eating out or trying new foods. Could prevent life-threatening allergic reactions.',
    why: 'Food allergies are increasing and cross-contamination is common. Empowering individuals to verify food safety saves lives.',
    skepticism: 'Detection accuracy for trace amounts is challenging. False negatives could be dangerous. Cannot detect all allergen types.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/allergen-alert/'
  },
  'medi-water-ai': {
    sense: 'taste', emoji: '👅', name: 'Medi Water AI',
    description: 'Smart water dispenser that adds minerals and supplements based on individual health profiles. Tracks hydration and adjusts mineral content for optimal health benefits.',
    value: 'Personalized hydration optimized for individual needs. Convenient supplement delivery through daily water consumption.',
    why: 'Most people are mineral-deficient and poorly hydrated. Integrating supplementation into water drinking removes friction.',
    skepticism: 'Supplement efficacy through water delivery unproven. Over-supplementation risks. Complexity adds failure points to simple hydration.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/balance-medi-water-ai/'
  },
  'samsung-fridge': {
    sense: 'taste', emoji: '👅', name: 'Samsung Fridge',
    description: 'AI-powered refrigerator with internal cameras, inventory tracking, and meal planning. Suggests recipes based on available ingredients and tracks expiration dates to reduce waste.',
    value: 'Reduces food waste through better inventory awareness. Simplifies meal planning and grocery shopping.',
    why: 'Food waste is a massive environmental and economic problem. Smart inventory management addresses root causes.',
    skepticism: 'Camera-based tracking has accuracy limitations. Feature complexity may frustrate users seeking simple refrigeration.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/samsung-fridge/'
  },
  'ge-profile': {
    sense: 'taste', emoji: '👅', name: 'GE Profile',
    description: 'Smart oven with AI cooking assistance that recognizes food and suggests optimal cooking settings. Includes precision temperature control and automatic adjustments during cooking.',
    value: 'Foolproof cooking results regardless of skill level. Reduces guesswork and kitchen failures.',
    why: 'Cooking intimidates many people. AI assistance lowers barriers to home cooking, improving health and reducing food costs.',
    skepticism: 'AI recognition may fail with unusual dishes or presentations. Over-reliance may prevent learning actual cooking skills.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/ge-profile/'
  },
  'instafarm': {
    sense: 'taste', emoji: '👅', name: 'Instafarm',
    description: 'Countertop hydroponic garden with AI-controlled lighting, nutrients, and watering. Grows herbs, greens, and small vegetables year-round with minimal user intervention.',
    value: 'Fresh produce on demand without outdoor space or gardening knowledge. Reduces food miles and packaging waste.',
    why: 'Urban living limits access to fresh produce. Indoor farming brings food production into any living space.',
    skepticism: 'Energy consumption may offset environmental benefits. Limited variety compared to traditional gardening. Ongoing supply costs.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/instafarm/'
  },

  // SCENT PRODUCTS
  'deepscent-ai': {
    sense: 'scent', emoji: '👃', name: 'Deepscent AI',
    description: 'AI-powered scent diffuser that creates personalized aromatherapy experiences. Learns preferences and adjusts scent combinations based on time of day, mood, and biometric feedback.',
    value: 'Optimized aromatherapy without trial and error. Scent environments that adapt to support focus, relaxation, or energy as needed.',
    why: 'Scent profoundly affects mood and cognition but is often overlooked. Intelligent scent management could enhance daily wellbeing.',
    skepticism: 'Aromatherapy benefits are debated scientifically. Scent preferences are highly individual—AI may not capture personal taste. Ongoing cartridge costs.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/deepscent-ai-future-of-digital-scent-enter-exhale-experience/'
  },

  // SPACE PRODUCTS
  'ai-transformer': {
    sense: 'space', emoji: '🏠', name: 'AI Transformer',
    description: 'Modular furniture system with motorized components that reconfigure spaces automatically. Beds fold into walls, desks emerge from cabinets, and rooms transform based on time and activity.',
    value: 'Maximizes utility of small spaces. One room serves multiple purposes without manual furniture moving.',
    why: 'Urban housing costs push people into smaller spaces. Transformable furniture makes compact living comfortable and functional.',
    skepticism: 'Mechanical complexity increases cost and failure risk. May feel gimmicky versus traditional furniture. Installation requirements limit flexibility.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/ai-transformer-home-trailer-ai-tht/'
  },
  'halla-ai-house': {
    sense: 'space', emoji: '🏠', name: 'Halla AI House',
    description: 'Integrated smart home system that learns household patterns and automates lighting, climate, security, and appliances. Creates personalized environments for each family member.',
    value: 'Seamless home automation without constant manual control. Energy savings through intelligent resource management.',
    why: 'Smart home devices often work in isolation. Unified AI control creates coherent experiences and maximizes efficiency.',
    skepticism: 'Privacy concerns with comprehensive home monitoring. System failures could affect entire home. Vendor lock-in risks.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/touchhl-ai-house-platform/'
  },

  // TIME PRODUCTS
  'therapy-booth': {
    sense: 'time', emoji: '⏳', name: 'Therapy Booth 2.0',
    description: 'Private pod for AI-assisted mental health support. Combines biometric monitoring, guided therapy exercises, and AI conversation for stress relief and emotional processing.',
    value: 'Accessible mental health support without scheduling or stigma. Private space for emotional processing in public or workplace settings.',
    why: 'Mental health services are oversubscribed and expensive. AI-assisted support could bridge gaps in professional availability.',
    skepticism: 'AI cannot replace human therapeutic relationships. Risk of people avoiding professional help when needed. Data privacy concerns with sensitive conversations.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/home-therapy-booth-20-with-ai-mental-coach/'
  },
  'sleepq': {
    sense: 'time', emoji: '⏳', name: 'SleepQ',
    description: 'Comprehensive sleep optimization system combining smart mattress, environmental controls, and biometric tracking. Adjusts temperature, sound, and light throughout the night for optimal rest.',
    value: 'Personalized sleep environment that adapts in real-time. Addresses multiple sleep factors simultaneously for compounding benefits.',
    why: 'Sleep quality affects every aspect of health and performance. Optimizing sleep has outsized returns on wellbeing investment.',
    skepticism: 'Sleep is influenced by factors beyond environmental control. High cost for incremental improvements. Technology in bedroom may increase anxiety.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/sleepq-20-where-pills-meet-ai/'
  },

  // SYSTEM PRODUCTS
  'medispa-pro': {
    sense: 'system', emoji: '🔗', name: 'MediSpa Pro',
    description: 'Professional-grade wellness device integrating multiple therapeutic technologies: cryotherapy, heat therapy, electrical stimulation, and compression. Designed for athletic recovery and pain management.',
    value: 'Clinical-level recovery tools for home use. Multiple modalities address different aspects of recovery and pain.',
    why: 'Professional athletes have long used these technologies. Making them accessible could improve recovery for everyone.',
    skepticism: 'Professional supervision ensures safe and effective use. Home users may misuse or overuse therapies. High cost for unproven benefits.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/medispa-pro-ai/'
  },
  'booxtory': {
    sense: 'system', emoji: '🔗', name: 'Booxtory',
    description: 'AI-powered reading companion that enhances books with contextual information, pronunciation guides, and discussion prompts. Tracks reading habits and suggests personalized book recommendations.',
    value: 'Deeper engagement with reading material. Removes friction from encountering unfamiliar words or concepts.',
    why: 'Reading rates are declining. Making reading more accessible and engaging could reverse this trend.',
    skepticism: 'Interruptions may disrupt reading flow and immersion. AI recommendations may create filter bubbles. Screen-based reading has its own drawbacks.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/booxtory-20/'
  },
  'main': {
    sense: 'system', emoji: '🔗', name: 'MAiN',
    description: 'Central AI hub that coordinates all smart home devices and learns household preferences. Acts as unified interface for controlling and automating diverse connected devices.',
    value: 'Single point of control for fragmented smart home ecosystem. AI learns patterns humans would never program manually.',
    why: 'Smart home devices from different manufacturers rarely work together well. Unified AI control solves interoperability.',
    skepticism: 'Another hub in an already crowded market. Dependent on cloud connectivity. Privacy implications of centralized home data.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/main-a-personalized-3d-generation-based-shopping-platform/'
  },
  'gcc': {
    sense: 'system', emoji: '🔗', name: 'GCC',
    description: 'Global Connectivity Controller that manages all household internet-connected devices. Optimizes bandwidth allocation, security monitoring, and parental controls through AI.',
    value: 'Intelligent network management without technical expertise. Security protection for all connected devices automatically.',
    why: 'Home networks are increasingly complex and vulnerable. AI management keeps pace with evolving threats and demands.',
    skepticism: 'Single point of failure for entire home network. Privacy concerns with traffic analysis. May conflict with ISP equipment.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/gcc-ai-driven-music-genre-component-combination-search-engine/'
  },
  'mippia': {
    sense: 'system', emoji: '🔗', name: 'MIPPIA',
    description: 'Personal health data aggregator that combines information from multiple wearables, medical records, and health apps. Provides unified health dashboard and AI-powered insights.',
    value: 'Complete health picture from fragmented data sources. AI identifies patterns across datasets humans would miss.',
    why: 'Health data is siloed across devices and providers. Unified view enables better health decisions and doctor conversations.',
    skepticism: 'Sensitive health data aggregation creates security risks. AI health insights may cause unnecessary worry or false reassurance.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/mippia-ai-music-ip-protection-system/'
  },
  'aa2-robot': {
    sense: 'system', emoji: '🔗', name: 'AA-2 Robot',
    description: 'Autonomous home assistant robot capable of physical tasks: fetching items, basic cleaning, pet feeding, and home monitoring. Uses AI navigation and object recognition.',
    value: 'Physical assistance for elderly, disabled, or busy households. Extends smart home capabilities into physical world.',
    why: 'Aging populations need assistance maintaining independence. Robots could fill gaps in caregiver availability.',
    skepticism: 'Current robotics still limited in dexterity and reliability. High cost for narrow capabilities. Safety concerns with autonomous movement.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/aa-2-autonomous-delivery-ai-robot-for-premium-residences/'
  },
  'airet-s9': {
    sense: 'system', emoji: '🔗', name: 'AIRET S9',
    description: 'AI-powered air quality management system that monitors pollutants, allergens, and pathogens. Automatically adjusts filtration, ventilation, and humidity for optimal indoor air.',
    value: 'Proactive air quality management rather than reactive. Addresses invisible threats to respiratory health.',
    why: 'Indoor air quality significantly impacts health but is rarely monitored. Automated management removes the burden of manual checking.',
    skepticism: 'Sensor accuracy for detecting pathogens is limited. Filter replacement costs add up. May create false sense of security.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/airet-s9-the-intelligent-footwear-curator/'
  },
  'storysync': {
    sense: 'system', emoji: '🔗', name: 'STORYSYNC',
    description: 'Family memory preservation system that automatically organizes photos, videos, and documents. Uses AI to create narratives, identify people, and generate shareable family histories.',
    value: 'Preserves family memories that would otherwise be lost in digital clutter. Creates meaningful narratives from raw media.',
    why: 'Digital photos accumulate but rarely get organized or shared. AI curation makes family history accessible and engaging.',
    skepticism: 'AI may misidentify people or create inaccurate narratives. Privacy concerns with facial recognition. Dependent on continued service availability.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/storysync-a-real-time-interactive-media-facade-of-mythic-stories/'
  },
  'vringon': {
    sense: 'system', emoji: '🔗', name: 'VRINGON',
    description: 'Smart doorbell and access control system with AI-powered visitor recognition. Learns regular visitors, detects packages, and integrates with home automation for personalized greetings.',
    value: 'Intelligent front door that knows who is welcome. Reduces friction for trusted visitors while maintaining security.',
    why: 'The front door is the primary interface between home and world. Smart access control balances convenience and security.',
    skepticism: 'Facial recognition raises privacy and bias concerns. System failures could lock out residents. Attractive target for hackers.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/vringon-from-sketch-to-factory-in-one-flow/'
  },
  'xzone-master': {
    sense: 'system', emoji: '🔗', name: 'X-Zone Master',
    description: 'Gaming and entertainment zone controller that optimizes lighting, sound, temperature, and seating for immersive experiences. Creates personalized environments for different games and media.',
    value: 'Immersive entertainment without manual setup. Environment adapts to content automatically for maximum impact.',
    why: 'Gaming and home theater setups are complex to optimize. AI coordination creates experiences previously requiring professional installation.',
    skepticism: 'Niche appeal for dedicated entertainment spaces. High cost for convenience features. May distract from content itself.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/x-zone-master/'
  },
  'water-saver': {
    sense: 'system', emoji: '🔗', name: 'Water Saver',
    description: 'Whole-home water management system that monitors usage, detects leaks, and optimizes consumption. Provides insights on water habits and automates conservation measures.',
    value: 'Prevents water damage through early leak detection. Reduces water bills through usage optimization.',
    why: 'Water damage is among the most expensive home repairs. Conservation is increasingly important as water scarcity grows.',
    skepticism: 'Installation complexity for whole-home monitoring. False alarms may cause unnecessary concern. Savings may not justify system cost.',
    link: 'https://www.ces.tech/ces-innovation-awards/2026/water-saver-dose/'
  }
};
