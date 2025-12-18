
// pages/curriculum.js
// Single source of truth for program metadata and month-by-month studies.
// Younger Preschoolers content comes from your PDF.
// Preschool, Pre‑K, and Kindergarten studies are placeholders.
export const programs = [
  // —————————————————————————————————————————
  // Younger Preschoolers (PDF-based)
  // —————————————————————————————————————————
  {
    key: 'younger-preschoolers',
    title: 'Younger Preschoolers',
    route: '/younger-preschoolers',
    ageRange: '2½ – 3½ years old',
    highlightColor: 'text-orange-600',
    badgeColor: 'text-orange-500',
    notes: {
      locationNote: 'Ridgefield Location Only',
      availabilityNote: 'Full Time & Part Time options may vary by site',
    },
    studies: [
      {
        month: 'September',
        study: 'Beginning of the Year',
        focusQuestions: [
          'What do we need to know about school?',
          'What do we do when we are scared?',
          'What are school rules?',
          'How do we make friends?',
        ],
        concepts: ['Colors', 'Names', 'Five Senses (See and Hear)'],
        celebrations: ['Grandparents Day', 'Rosh Hashanah'],
      },
      {
        month: 'October',
        study: 'Trees',
        focusQuestions: [
          'What are characteristics of trees in our community?',
          'Who lives in trees?',
          'What foods grow on trees?',
          'Who takes care of trees?',
          'How do trees change?',
          'What can we do with parts of trees?',
        ],
        concepts: ['Friends', 'Five Senses (Feel, Taste, and Smell)'],
        celebrations: ['Grandparents Day', 'Rosh Hashanah', 'Diwali'],
      },
      {
        month: 'November',
        study: 'Building',
        focusQuestions: [
          'What do we know about buildings?',
          'Building in our community.',
          'Who builds buildings?',
          'What tools are used?',
          'What are buildings made of?',
          'What makes buildings strong?',
        ],
        concepts: ['Shapes', 'Letter B, C, D', 'Ramps'],
        celebrations: ['Veteran’s Day', 'Thanksgiving'],
      },
      {
        month: 'December',
        study: 'Clothing',
        focusQuestions: [
          'What do we know about clothes?',
          'What are clothes made of?',
          'What are the features of clothes?',
        ],
        concepts: ['Sorting by shapes and sizes', 'Letters: F, G', 'Water'],
        celebrations: ['Christmas', 'Hanukkah', 'Kwanzaa', 'Winter Solstice'],
      },
      {
        month: 'January',
        study: 'Clothing (continued)',
        focusQuestions: [
          'How do we take care of our clothes?',
          'How is cloth made?',
          'What special clothes do people wear?',
        ],
        concepts: ['Sorting by attributes', 'Letters: H, J, K, L', 'Weather (Fall, Winter)'],
        celebrations: ['New Year’s', 'Martin Luther King', 'Lunar New Year'],
      },
      {
        month: 'February',
        study: 'Boxes',
        focusQuestions: [
          'What do we know about boxes?',
          'What can we do with boxes?',
          'What are the characteristics of boxes?',
          'Which jobs involve boxes?',
          'How are boxes made?',
        ],
        concepts: ['Letters: M, N, P, Q – Measuring', 'Weather (Spring, Summer)'],
        celebrations: [
          'Black History Month',
          'Dental Health Month',
          'Valentine’s Day',
          '100th Day of School',
        ],
      },
      {
        month: 'March',
        study: 'Roads',
        focusQuestions: [
          'What do we know about roads?',
          'What are some characteristics of roads?',
          'How do roads help people in their everyday lives?',
          'How are roads made?',
          'Who makes them?',
        ],
        concepts: ['Letters: R, S, T, V – Patterns', 'Music Discovery'],
        celebrations: ['Read Across America', 'Hina Matsuri', 'Ramadan', 'St. Patrick’s'],
      },
      {
        month: 'April',
        study: 'Reduce, Reuse, Recycle',
        focusQuestions: [
          'What do we know about reduce, reuse, recycle?',
          'What do people throw away?',
          'Where does the trash go?',
          'What do workers do there?',
          'How does trash and garbage affect our community?',
        ],
        concepts: ['Letters: W, X, Z – Numbers 1–3', 'Sink or Float'],
        celebrations: ['Autism Awareness', 'Earth Day', 'Easter'],
      },
      {
        month: 'May',
        study: 'Pets',
        focusQuestions: [
          'What do we know about pets?',
          'What kinds of animals are pets?',
          'Where do pets live?',
          'What do pets eat?',
        ],
        concepts: ['Letters: A, E, I – Numbers 4–6', 'Living vs Non‑Living'],
        celebrations: ['Mother’s Day', 'Cinco De Mayo', 'Teacher Appreciation Week', 'Memorial Day'],
      },
      {
        month: 'June',
        study: 'Insects',
        focusQuestions: [
          'What do we know about insects?',
          'What are the characteristics of insects?',
          'Where and how do insects live?',
          'What insects are in our community?',
        ],
        concepts: ['Letters: O, U', 'Numbers 7–10', 'Animal Characteristics'],
        celebrations: ['Father’s Day', 'Summer'],
      },
      {
        month: 'July',
        study: 'Insects (continued)',
        focusQuestions: ['Who works with insects?', 'How do insects help the earth?'],
        concepts: ['Letter and Number Review', 'Animal Habitats'],
        celebrations: ['Fourth of July', 'End of Year'],
      },
    ],
  },

  // —————————————————————————————————————————
  // Preschool (PLACEHOLDER)
  // —————————————————————————————————————————
  {
    key: 'preschool',
    title: 'Preschool',
    route: '/preschool',
    ageRange: '3½ – 4½ years old',
    highlightColor: 'text-yellow-600',
    badgeColor: 'text-yellow-500',
    notes: {
      availabilityNote: 'Full Time & Part Time Classes',
    },
    studies: [
      {
        month: 'September',
        study: 'All About Me & School Routines',
        focusQuestions: [
          'Who am I and what makes me unique?',
          'What are our classroom rules and routines?',
          'How do we express and manage feelings?',
        ],
        concepts: ['Letters: A–C', 'Numbers: 1–3', 'Shapes: Circle, Triangle', 'Fine‑motor routines'],
        celebrations: ['Grandparents Day', 'Hispanic Heritage Month'],
      },
      {
        month: 'October',
        study: 'Pumpkins & Fall Changes',
        focusQuestions: [
          'What parts do pumpkins have?',
          'How do leaves and weather change in fall?',
          'What is a life cycle?',
        ],
        concepts: ['Warm colors', 'Letters: D–F', 'Numbers: 4–6', 'Compare/contrast'],
        celebrations: ['Diwali', 'Halloween'],
      },
      {
        month: 'November',
        study: 'Community Helpers & Gratitude',
        focusQuestions: [
          'Who helps in our community?',
          'How can we show gratitude?',
          'What tools do helpers use?',
        ],
        concepts: ['Letters: G–I', 'Numbers: 7–9', 'Shapes: Square, Rectangle'],
        celebrations: ['Veterans Day', 'Thanksgiving'],
      },
      {
        month: 'December',
        study: 'Light, Shadows & Winter Traditions',
        focusQuestions: [
          'What makes light and shadow?',
          'How do families celebrate in winter?',
          'How do we stay safe in winter?',
        ],
        concepts: ['Letters: J–L', 'Counting to 10', 'Observation & journaling'],
        celebrations: ['Hanukkah', 'Christmas', 'Kwanzaa', 'Winter Solstice'],
      },
      {
        month: 'January',
        study: 'Weather & Staying Warm',
        focusQuestions: [
          'What kinds of weather do we see?',
          'How does water change (ice/snow/rain)?',
          'What clothing keeps us warm?',
        ],
        concepts: ['Letters: M–O', 'Numbers: 11–15', 'Shape: Oval', 'States of matter (intro)'],
        celebrations: ['New Year’s', 'Martin Luther King Jr. Day', 'Lunar New Year'],
      },
      {
        month: 'February',
        study: 'Friendship & Fairy Tales',
        focusQuestions: [
          'What makes a good friend?',
          'How do we retell stories?',
          'What patterns can we find?',
        ],
        concepts: ['Letters: P–R', 'Numbers: 16–20', 'AB patterns', 'Story sequencing'],
        celebrations: ['Valentine’s Day', 'Dental Health Month', 'Black History Month', '100th Day of School'],
      },
      {
        month: 'March',
        study: 'Growing Plants',
        focusQuestions: [
          'What do seeds need to grow?',
          'How do we measure plant growth?',
          'What plants grow in our area?',
        ],
        concepts: ['Letters: S–T', 'Numbers: 21–25', 'Non‑standard measurement'],
        celebrations: ['Read Across America', 'Holi', 'Ramadan', 'St. Patrick’s Day'],
      },
      {
        month: 'April',
        study: 'Earth & Recycling',
        focusQuestions: [
          'How can we reduce, reuse, recycle?',
          'Where does trash go?',
          'How can we help our planet?',
        ],
        concepts: ['Letters: U–V', 'Numbers: 26–30', 'Life cycles (intro)'],
        celebrations: ['Earth Day', 'Easter', 'Autism Awareness Month'],
      },
      {
        month: 'May',
        study: 'Animals & Habitats',
        focusQuestions: [
          'How do animals get what they need?',
          'Where do animals live?',
          'How do we compare animal features?',
        ],
        concepts: ['Letters: W–X', 'Numbers: 31–35', 'Map basics', 'Sorting attributes'],
        celebrations: ['Cinco de Mayo', 'Mother’s Day', 'Teacher Appreciation Week', 'Memorial Day'],
      },
      {
        month: 'June',
        study: 'Ocean Life & Water Play',
        focusQuestions: [
          'What lives in the ocean?',
          'What sinks or floats?',
          'How do we stay safe near water?',
        ],
        concepts: ['Letters: Y–Z', 'Number review', 'Sink/float experiments'],
        celebrations: ['Father’s Day', 'Pride Month'],
      },
      {
        month: 'July',
        study: 'Summer Discovery',
        focusQuestions: [
          'What can we explore outside?',
          'How do we document observations?',
          'What did we learn this year?',
        ],
        concepts: ['Review of letters & numbers', 'Nature journaling'],
        celebrations: ['Fourth of July', 'End‑of‑Year reflections'],
      },
    ],
  },

  // —————————————————————————————————————————
  // Pre‑Kindergarten (PLACEHOLDER)
  // —————————————————————————————————————————
  {
    key: 'pre-kindergarten',
    title: 'Pre‑Kindergarten',
    route: '/pre-kindergarten',
    ageRange: '4 – 5 years old',
    highlightColor: 'text-blue-600',
    badgeColor: 'text-blue-500',
    notes: {
      availabilityNote: 'Full Time Class Only',
    },
    studies: [
      {
        month: 'September',
        study: 'Ready for Pre‑K: Community & Routines',
        focusQuestions: [
          'How do we build a caring classroom?',
          'What routines help us learn?',
          'What are our goals for the year?',
        ],
        concepts: ['Letters: A–D', 'Numbers: 0–5', 'Name writing', 'Rule‑making'],
        celebrations: ['Grandparents Day', 'Hispanic Heritage Month'],
      },
      {
        month: 'October',
        study: 'Five Senses & Observation',
        focusQuestions: [
          'How do our senses help us learn?',
          'What can we notice and record?',
          'How do we describe objects?',
        ],
        concepts: ['Letters: E–H', 'Numbers: 6–10', 'Descriptive language', 'Data collection (charts)'],
        celebrations: ['Diwali', 'Halloween'],
      },
      {
        month: 'November',
        study: 'Buildings & Simple Machines',
        focusQuestions: [
          'What makes buildings strong?',
          'Which tools and simple machines help builders?',
          'How do ramps and levers work?',
        ],
        concepts: ['Letters: I–L', 'Numbers: 11–15', 'Shapes & stability', 'Cause/effect'],
        celebrations: ['Veterans Day', 'Thanksgiving'],
      },
      {
        month: 'December',
        study: 'Traditions Around the World',
        focusQuestions: [
          'How do families celebrate?',
          'What foods, music, and stories are shared?',
          'What similarities and differences do we notice?',
        ],
        concepts: ['Letters: M–P', 'Numbers: 16–20', 'Compare/contrast', 'Map awareness'],
        celebrations: ['Hanukkah', 'Christmas', 'Kwanzaa', 'Winter Solstice'],
      },
      {
        month: 'January',
        study: 'Healthy Bodies & Nutrition',
        focusQuestions: [
          'What foods fuel our bodies?',
          'How do we stay active and safe?',
          'What is a balanced routine?',
        ],
        concepts: ['Letters: Q–R', 'Numbers: 21–25', 'Food groups', 'Personal safety'],
        celebrations: ['New Year’s', 'Martin Luther King Jr. Day', 'Lunar New Year'],
      },
      {
        month: 'February',
        study: 'Storytelling & Early Writing',
        focusQuestions: [
          'How do we plan a story?',
          'What are beginning/middle/end?',
          'How do sounds map to letters?',
        ],
        concepts: ['Letters: S–T', 'Numbers: 26–30', 'Phonemic awareness', 'Invented spelling'],
        celebrations: ['Valentine’s Day', 'Black History Month', '100th Day of School'],
      },
      {
        month: 'March',
        study: 'Transportation & Maps',
        focusQuestions: [
          'How do we travel and why?',
          'What are map symbols and directions?',
          'How do we collect travel data?',
        ],
        concepts: ['Letters: U–V', 'Numbers: 31–35', 'Positional words', 'Timelines & tallies'],
        celebrations: ['Read Across America', 'Holi', 'Ramadan', 'St. Patrick’s Day'],
      },
      {
        month: 'April',
        study: 'Earth Science: Reduce, Reuse, Recycle',
        focusQuestions: [
          'What happens to our trash?',
          'How do compost and recycling work?',
          'How can we help our community?',
        ],
        concepts: ['Letter: W', 'Numbers: 36–40', 'Plant care', 'Material properties'],
        celebrations: ['Earth Day', 'Easter', 'Autism Awareness Month'],
      },
      {
        month: 'May',
        study: 'Animal Life Cycles',
        focusQuestions: [
          'How do animals grow and change?',
          'What do living things need?',
          'How do we observe respectfully?',
        ],
        concepts: ['Letter: X', 'Numbers: 41–45', 'Sequence & change', 'Field journaling'],
        celebrations: ['Cinco de Mayo', 'Mother’s Day', 'Teacher Appreciation Week', 'Memorial Day'],
      },
      {
        month: 'June',
        study: 'Math Readiness: Patterns & Operations',
        focusQuestions: [
          'What patterns can we build?',
          'How do we combine and take apart sets?',
          'How do we explain our thinking?',
        ],
        concepts: ['Letter: Y', 'Numbers: 46–50', 'AB/ABC patterns', 'Concrete addition/subtraction'],
        celebrations: ['Father’s Day', 'Pride Month'],
      },
      {
        month: 'July',
        study: 'Kindergarten Readiness & Portfolio',
        focusQuestions: [
          'What have we learned?',
          'How do we set goals for Kindergarten?',
          'How do we share our portfolio?',
        ],
        concepts: ['Letter: Z + review', 'Number review', 'Presentation skills'],
        celebrations: ['Fourth of July', 'End‑of‑Year celebration'],
      },
    ],
  },

  // —————————————————————————————————————————
  // Kindergarten (PLACEHOLDER)
  // —————————————————————————————————————————
  {
    key: 'kindergarten',
    title: 'Kindergarten',
    route: '/kindergarten',
    ageRange: '5 – 6 years old',
    highlightColor: 'text-purple-600',
    badgeColor: 'text-purple-500',
    notes: {
      availabilityNote: 'Full Time Class Only',
    },
    studies: [
      {
        month: 'September',
        study: 'Classroom Community & Rules',
        focusQuestions: [
          'How do we learn together?',
          'What are our rights and responsibilities?',
          'How do we solve problems kindly?',
        ],
        concepts: ['Phonics: short vowels', 'Numbers: 0–10', 'Addition within 5', 'Graphing class data'],
        celebrations: ['Grandparents Day', 'Hispanic Heritage Month'],
      },
      {
        month: 'October',
        study: 'Narrative Writing & Story Elements',
        focusQuestions: [
          'What makes a story engaging?',
          'How do characters change?',
          'How do we plan and revise?',
        ],
        concepts: ['Phonics: blends', 'Addition/Subtraction within 10', '2D shapes'],
        celebrations: ['Diwali', 'Halloween'],
      },
      {
        month: 'November',
        study: 'Communities & Helpers',
        focusQuestions: [
          'Who helps our community function?',
          'How do maps and symbols guide us?',
          'How do we show gratitude?',
        ],
        concepts: ['Measurement (length, weight)', 'Place value intro', 'Map keys'],
        celebrations: ['Veterans Day', 'Thanksgiving'],
      },
      {
        month: 'December',
        study: 'Holidays & Traditions',
        focusQuestions: [
          'What traditions do families share?',
          'How do we compare holidays respectfully?',
          'What stories and songs teach values?',
        ],
        concepts: ['Composing/decomposing numbers', 'Phonics: digraphs', 'Data displays'],
        celebrations: ['Hanukkah', 'Christmas', 'Kwanzaa', 'Winter Solstice'],
      },
      {
        month: 'January',
        study: 'Weather & Data',
        focusQuestions: [
          'How do we observe and record weather?',
          'What patterns do we see?',
          'How does weather impact us?',
        ],
        concepts: ['Bar graphs', 'Teen numbers', 'Time to the hour (intro)'],
        celebrations: ['New Year’s', 'Martin Luther King Jr. Day', 'Lunar New Year'],
      },
      {
        month: 'February',
        study: 'Opinion Writing & Place Value',
        focusQuestions: [
          'How do we state and support opinions?',
          'What is a tens and ones model?',
          'How do we compare numbers?',
        ],
        concepts: ['Phonics: long vowels', 'Place value (0–50)', 'Geometry: shapes & attributes'],
        celebrations: ['Valentine’s Day', 'Black History Month', '100th Day of School'],
      },
      {
        month: 'March',
        study: 'Plant Life Cycles',
        focusQuestions: [
          'How do plants grow and change?',
          'What do plants need?',
          'How do we design fair tests?',
        ],
        concepts: ['Time to the hour/half‑hour', 'Non‑standard measurement', 'Scientific method (intro)'],
        celebrations: ['Read Across America', 'Holi', 'Ramadan', 'St. Patrick’s Day'],
      },
      {
        month: 'April',
        study: 'Earth & Ecology',
        focusQuestions: [
          'How do humans impact local habitats?',
          'How can we reduce, reuse, recycle?',
          'What actions help our community?',
        ],
        concepts: ['Money (coins identification)', 'Word problems', 'Maps & directions'],
        celebrations: ['Earth Day', 'Easter', 'Autism Awareness Month'],
      },
      {
        month: 'May',
        study: 'Geometry & Spatial Reasoning',
        focusQuestions: [
          'How do we compose/decompose shapes?',
          'What are positional and directional words?',
          'How do we build with geometry?',
        ],
        concepts: ['2D/3D shapes', 'Spatial language', 'Step‑by‑step instructions'],
        celebrations: ['Cinco de Mayo', 'Mother’s Day', 'Teacher Appreciation Week', 'Memorial Day'],
      },
      {
        month: 'June',
        study: 'Insects & Habitats',
        focusQuestions: [
          'How are insects adapted to their habitats?',
          'How do we organize observations?',
          'How do we share findings clearly?',
        ],
        concepts: ['Add/Sub within 20', 'Data tables', 'Presentation skills'],
        celebrations: ['Father’s Day', 'Pride Month'],
      },
      {
        month: 'July',
        study: 'Culminating Projects & Review',
        focusQuestions: [
          'What did we learn this year?',
          'How have our skills grown?',
          'How do we celebrate our work?',
        ],
        concepts: ['Phonics/Math review', 'Portfolio curation', 'Public speaking'],
        celebrations: ['Fourth of July', 'End‑of‑Year celebration'],
      },
    ],
  },
];

// Data logic kept intact
export const programByKey = (key) => programs.find((p) => p.key === key);
export const programByRoute = (route) => programs.find((p) => p.route === route);

// Corrected Export: No more conflict markers
export default function CurriculumPage() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Our Curriculum</h1>
            <p className="text-gray-600 mb-6">
                Explore our research-based learning approach for all age groups.
            </p>
            {/* Link back to Enrollment (US-03) */}
            <div className="mt-10 p-6 bg-blue-50 rounded-lg">
                <h2 className="text-xl font-semibold">Ready to join?</h2>
                <a href="/enroll" className="text-blue-600 font-medium hover:underline">
                    Start the multi-step enrollment process →
                </a>
            </div>
        </div>
    );
}