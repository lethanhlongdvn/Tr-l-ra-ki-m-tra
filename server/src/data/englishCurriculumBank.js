/**
 * NGÂN HÀNG DỮ LIỆU ĐỀ THI MÔN TIẾNG ANH TIỂU HỌC (GLOBAL SUCCESS - GDPT 2018)
 * Chuẩn Thông tư 27/2020/TT-BGDĐT
 * Cấu trúc 4 kỹ năng: Listening, Reading, Writing, Speaking
 * TÍCH HỢP HÌNH ẢNH TRÍCH XUẤT TRỰC TIẾP TỪ ĐỀ THI & SÁCH GIÁO KHOA
 */

const ENGLISH_CURRICULUM_BANK = {
  // =========================================================================
  // GRADE 3 (GLOBAL SUCCESS)
  // =========================================================================
  3: {
    grade: 3,
    textbook: "Global Success 3",
    ratios: { listening: 4.0, reading: 2.0, writing: 2.0, speaking: 2.0 },
    terms: {
      term1: {
        units: "Unit 1 - Unit 10",
        topics: ["Greetings & Names", "Age & Numbers", "Our Friends", "Body Parts", "Hobbies", "School Things", "Classroom Instructions", "Break Time Activities"]
      }
    },
    listening: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Listen and circle (or tick)",
          taskDesc: "Listen to the dialogue and choose the correct option (a or b).",
          points: 1.0,
          items: [
            {
              id: "G3-L1-1",
              question: "What's this?",
              options: [
                { id: "a", text: "It's a hand", image: "/images/english/grade3/image2.png", imageKey: "image2.png" },
                { id: "b", text: "It's an eye", image: "/images/english/grade3/image4.png", imageKey: "image4.png" }
              ],
              correct: "a",
              level: "M1",
              transcript: "1. A: What's this? - B: It's a hand."
            },
            {
              id: "G3-L1-2",
              question: "What's this?",
              options: [
                { id: "a", text: "It's a nose", image: "/images/english/grade3/image5.png", imageKey: "image5.png" },
                { id: "b", text: "It's an ear", image: "/images/english/grade3/image6.png", imageKey: "image6.png" }
              ],
              correct: "b",
              level: "M1",
              transcript: "2. A: What's this? - B: It's an ear."
            },
            {
              id: "G3-L1-3",
              question: "What's your hobby?",
              options: [
                { id: "a", text: "I like walking", image: "/images/english/grade3/image7.png", imageKey: "image7.png" },
                { id: "b", text: "I like cooking", image: "/images/english/grade3/image8.png", imageKey: "image8.png" }
              ],
              correct: "b",
              level: "M2",
              transcript: "3. A: What's your hobby? - B: I like cooking."
            },
            {
              id: "G3-L1-4",
              question: "What's your hobby?",
              options: [
                { id: "a", text: "I like painting", image: "/images/english/grade3/image9.png", imageKey: "image9.png" },
                { id: "b", text: "I like dancing", image: "/images/english/grade3/image10.png", imageKey: "image10.png" }
              ],
              correct: "a",
              level: "M2",
              transcript: "4. A: What's your hobby? - B: I like painting."
            }
          ]
        },
        {
          taskNumber: 2,
          taskTitle: "Listen and number",
          taskDesc: "Listen to the dialogue and write the numbers 1, 2, 3, 4 into the boxes.",
          points: 1.0,
          items: [
            { id: "G3-L2-1", label: "Picture a (Ms Hoa)", image: "/images/english/grade3/image11.png", imageKey: "image11.png", topic: "Is that Ms Hoa? - Yes, it is.", orderIndex: 2, level: "M1", transcript: "2. A: Is that Ms Hoa? - B: Yes, it is." },
            { id: "G3-L2-2", label: "Picture b (Dancing hobby)", image: "/images/english/grade3/image12.png", imageKey: "image12.png", topic: "What's your hobby? - I like dancing.", orderIndex: 1, level: "M2", transcript: "1. A: What's your hobby? - B: I like dancing." },
            { id: "G3-L2-3", label: "Picture c (Mouth)", image: "/images/english/grade3/image13.png", imageKey: "image13.png", topic: "What's this? - It's a mouth.", orderIndex: 4, level: "M1", transcript: "4. A: What's this? - B: It's a mouth." },
            { id: "G3-L2-4", label: "Picture d (Six years old)", image: "/images/english/grade3/image14.png", imageKey: "image14.png", topic: "How old are you? - I'm six years old.", orderIndex: 3, level: "M2", transcript: "3. A: How old are you? - B: I'm six years old." }
          ]
        },
        {
          taskNumber: 3,
          taskTitle: "Listen and tick or cross",
          taskDesc: "Listen to the recording and write a tick (☑) for correct or cross (🗵) for incorrect.",
          points: 1.0,
          items: [
            { id: "G3-L3-1", statement: "Is this our gym? - Yes, it is.", image: "/images/english/grade3/image15.png", imageKey: "image15.png", correct: "☑", level: "M1", transcript: "1. A: Is this our gym? - B: Yes, it is." },
            { id: "G3-L3-2", statement: "Is this your classroom? - Yes, it is.", image: "/images/english/grade3/image16.png", imageKey: "image16.png", correct: "☑", level: "M1", transcript: "2. A: Is this your classroom? - B: Yes, it is." },
            { id: "G3-L3-3", statement: "I have a pen.", image: "/images/english/grade3/image18.png", imageKey: "image18.png", correct: "🗵", level: "M2", transcript: "3. A: What do you have? - B: I have a notebook." },
            { id: "G3-L3-4", statement: "My school bag is blue.", image: "/images/english/grade3/image19.png", imageKey: "image19.png", correct: "🗵", level: "M2", transcript: "4. A: What colour is your school bag? - B: It's black." }
          ]
        },
        {
          taskNumber: 4,
          taskTitle: "Listen and tick True or False",
          taskDesc: "Listen to the recording and tick True or False.",
          points: 1.0,
          items: [
            { id: "G3-L4-1", statement: "A: What's your name? - B: My name's Mary.", correct: "True", level: "M1", transcript: "1. A: What's your name? - B: My name's Mary." },
            { id: "G3-L4-2", statement: "A: Is this Ms Hoa? - B: Yes, it is.", correct: "True", level: "M1", transcript: "2. A: Is this Ms Hoa? - B: Yes, it is." },
            { id: "G3-L4-3", statement: "A: Is that Mr Long? - B: Yes, it is.", correct: "True", level: "M1", transcript: "3. A: Is that Mr Long? - B: Yes, it is." },
            { id: "G3-L4-4", statement: "Touch your ears, please!", correct: "False", level: "M2", transcript: "4. Teacher: Open your eyes, please!" }
          ]
        }
      ]
    },
    reading: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Read and complete",
          taskDesc: "Read the dialogue and fill in the blanks with words from the box.",
          points: 1.0,
          wordBank: ["eight", "hobby", "Mary", "name"],
          passage: `Mr Long: Hi. What's your (1) ................?
Mary: My name's (2) ................
Mr Long: How old are you?
Mary: I'm (3) ................ years old.
Mr Long: What's your (4) ................?
Mary: It's swimming.`,
          answers: ["name", "Mary", "eight", "hobby"],
          levels: ["M1", "M1", "M2", "M2"]
        },
        {
          taskNumber: 2,
          taskTitle: "Read and circle",
          taskDesc: "Read the sentences and choose the correct picture / option.",
          points: 1.0,
          items: [
            { id: "G3-R2-1", sentence: "I have a book.", options: [{ id: "A", text: "Picture A (A book)" }, { id: "B", text: "Picture B (A pen)" }], correct: "A", level: "M1" },
            { id: "G3-R2-2", sentence: "Open your book, please!", options: [{ id: "A", text: "Picture A (Opening book)" }, { id: "B", text: "Picture B (Closing book)" }], correct: "A", level: "M1" },
            { id: "G3-R2-3", sentence: "Let's go to the classroom!", options: [{ id: "A", text: "Picture A (Gym)" }, { id: "B", text: "Picture B (Classroom)" }], correct: "B", level: "M2" },
            { id: "G3-R2-4", sentence: "I play football at break time.", options: [{ id: "A", text: "Picture A (Basketball)" }, { id: "B", text: "Picture B (Football)" }], correct: "B", level: "M2" }
          ]
        }
      ]
    },
    writing: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Look and write",
          taskDesc: "Unscramble the letters to make meaningful words.",
          points: 1.0,
          hasPictures: true,
          items: [
            { id: "G3-W1-1", clue: "a-y-r-M", hint: "M.........", answer: "Mary", image: "/images/english/grade3/image25.png", imageKey: "image25.png", level: "M1" },
            { id: "G3-W1-2", clue: "m i n g w i m s", hint: "s.........", answer: "swimming", image: "/images/english/grade3/image26.png", imageKey: "image26.png", level: "M2" },
            { id: "G3-W1-3", clue: "g i t h e", hint: "e.........", answer: "eight", image: "/images/english/grade3/image27.png", imageKey: "image27.png", level: "M1" },
            { id: "G3-W1-4", clue: "c h o u t", hint: "t.........", answer: "touch", image: "/images/english/grade3/image29.png", imageKey: "image29.png", level: "M2" }
          ]
        },
        {
          taskNumber: 2,
          taskTitle: "Put the words in order to make correct sentences",
          taskDesc: "Reorder the words to make complete and grammatically correct sentences.",
          points: 1.0,
          items: [
            { id: "G3-W2-1", jumbled: "Bill . / Hello, / Nam . I'm", answer: "Hello, Nam. I'm Bill.", level: "M1" },
            { id: "G3-W2-2", jumbled: "that / Is / my / classroom?", answer: "Is that my classroom?", level: "M2" },
            { id: "G3-W2-3", jumbled: "old / How / are / you?", answer: "How old are you?", level: "M2" },
            { id: "G3-W2-4", jumbled: "These / my / are / notebooks.", answer: "These are my notebooks.", level: "M3" }
          ]
        }
      ]
    },
    speaking: {
      term1: {
        part1: {
          title: "Part 1: Get to know each other",
          points: 1.25,
          desc: "The teacher interviews the pupil with common personal questions.",
          questions: [
            "Hello! What's your name?",
            "How are you today?",
            "How old are you?",
            "What's your hobby?",
            "What do you do at break time?"
          ]
        },
        part2: {
          title: "Part 2: Look and say",
          points: 0.75,
          desc: "Pupil looks at classroom flashcards / pictures and answers teacher's prompts.",
          hasPictures: true,
          items: [
            { id: "G3-S2-1", question: "1. What's this? What colour is it?", image: "/images/english/grade3/image30.png", imageKey: "image30.png" },
            { id: "G3-S2-2", question: "2. Is that our playground / classroom?", image: "/images/english/grade3/image31.png", imageKey: "image31.png" }
          ],
          questions: [
            "What's this? (Pointing to a pencil / book)",
            "What colour is it?",
            "Is that our playground?"
          ],
          rubric: [
            { criteria: "Pronunciation & Intonation", points: 0.75, desc: "Phát âm rõ ràng, chuẩn ngữ điệu câu hỏi/câu trả lời" },
            { criteria: "Fluency & Response", points: 0.75, desc: "Phản xạ nhanh, tự nhiên, trả lời đúng trọng tâm" },
            { criteria: "Grammar & Vocabulary", points: 0.5, desc: "Dùng đúng mẫu câu và từ vựng đã học" }
          ]
        }
      },
      term2: {
        listening: [
          {
            taskNumber: 1,
            taskTitle: "Listen and circle (or tick)",
            taskDesc: "Listen to the dialogue and choose the correct option (a or b).",
            points: 1.0,
            items: [
              { id: "G3-L1-T2-1", question: "Who's this?", options: [{ id: "a", text: "It's my father", image: "/images/english/grade3/image2.png" }, { id: "b", text: "It's my mother", image: "/images/english/grade3/image4.png" }], correct: "a", level: "M1", transcript: "1. A: Who's this? - B: It's my father." },
              { id: "G3-L1-T2-2", question: "Do you have any cats?", options: [{ id: "a", text: "Yes, I have two cats", image: "/images/english/grade3/image5.png" }, { id: "b", text: "No, I have dogs", image: "/images/english/grade3/image6.png" }], correct: "a", level: "M1", transcript: "2. A: Do you have any cats? - B: Yes, I have two cats." },
              { id: "G3-L1-T2-3", question: "What's the weather like?", options: [{ id: "a", text: "It's sunny", image: "/images/english/grade3/image7.png" }, { id: "b", text: "It's rainy", image: "/images/english/grade3/image8.png" }], correct: "a", level: "M2", transcript: "3. A: What's the weather like today? - B: It's sunny." },
              { id: "G3-L1-T2-4", question: "Where are you going?", options: [{ id: "a", text: "I'm going to the beach", image: "/images/english/grade3/image9.png" }, { id: "b", text: "I'm going to school", image: "/images/english/grade3/image10.png" }], correct: "a", level: "M2", transcript: "4. A: Where are you going this summer? - B: I'm going to the beach." }
            ]
          },
          {
            taskNumber: 2,
            taskTitle: "Listen and number",
            taskDesc: "Listen and write numbers 1, 2, 3, 4 into the pictures.",
            points: 1.0,
            items: [
              { id: "G3-L2-T2-1", label: "Picture a (Living room)", image: "/images/english/grade3/image11.png", topic: "Is there a living room? - Yes, there is.", orderIndex: 3, level: "M1", transcript: "3. Is there a living room? - Yes, there is." },
              { id: "G3-L2-T2-2", label: "Picture b (Teddy bear)", image: "/images/english/grade3/image12.png", topic: "What toy do you have? - I have a teddy bear.", orderIndex: 1, level: "M1", transcript: "1. What toy do you have? - I have a teddy bear." },
              { id: "G3-L2-T2-3", label: "Picture c (Wearing T-shirt)", image: "/images/english/grade3/image13.png", topic: "What are you wearing? - I'm wearing a T-shirt.", orderIndex: 4, level: "M2", transcript: "4. What are you wearing? - I'm wearing a T-shirt." },
              { id: "G3-L2-T2-4", label: "Picture d (Zoo tiger)", image: "/images/english/grade3/image14.png", topic: "What can you see? - I can see a tiger.", orderIndex: 2, level: "M2", transcript: "2. What can you see? - I can see a tiger." }
            ]
          },
          {
            taskNumber: 3,
            taskTitle: "Listen and tick or cross",
            taskDesc: "Listen and write a tick (☑) or cross (🗵).",
            points: 1.0,
            items: [
              { id: "G3-L3-T2-1", statement: "I would like some milk.", image: "/images/english/grade3/image15.png", correct: "☑", level: "M1", transcript: "1. What would you like? - I'd like some milk." },
              { id: "G3-L3-T2-2", statement: "The zoo is near the park.", image: "/images/english/grade3/image16.png", correct: "☑", level: "M1", transcript: "2. Where is the zoo? - It's near the park." },
              { id: "G3-L3-T2-3", statement: "It's snowy today.", image: "/images/english/grade3/image18.png", correct: "🗵", level: "M2", transcript: "3. Is it snowy today? - No, it's rainy." },
              { id: "G3-L3-T2-4", statement: "I have five red cars.", image: "/images/english/grade3/image19.png", correct: "🗵", level: "M2", transcript: "4. How many cars do you have? - I have two cars." }
            ]
          },
          {
            taskNumber: 4,
            taskTitle: "Listen and tick True or False",
            taskDesc: "Listen to the recording and tick True or False.",
            points: 1.0,
            items: [
              { id: "G3-L4-T2-1", statement: "1. A: What's your father doing? - B: He's cooking in the kitchen.", correct: "True", level: "M1", transcript: "1. A: What's your father doing? - B: He's cooking in the kitchen." },
              { id: "G3-L4-T2-2", statement: "2. A: Is there a pond in the garden? - B: Yes, there is.", correct: "True", level: "M1", transcript: "2. A: Is there a pond in the garden? - B: Yes, there is." },
              { id: "G3-L4-T2-3", statement: "3. A: What's the weather like? - B: It's sunny and warm.", correct: "True", level: "M1", transcript: "3. A: What's the weather like? - B: It's sunny and warm." },
              { id: "G3-L4-T2-4", statement: "4. A: Do you have a robot? - B: No, I don't.", correct: "False", level: "M2", transcript: "4. A: Do you have a robot? - B: Yes, I have a big red robot." }
            ]
          }
        ],
        reading: [
          {
            taskNumber: 1,
            taskTitle: "Read and complete",
            taskDesc: "Read the dialogue and fill in the blanks with words from the box.",
            points: 1.0,
            wordBank: ["house", "cats", "sunny", "family"],
            passage: `My name is Mai. This is my (1) ................ We live in a nice (2) ................ in the countryside. I have two small (3) ................ in the garden. Today the weather is (4) ................ and warm. We are all happy together.`,
            answers: ["family", "house", "cats", "sunny"],
            levels: ["M1", "M1", "M2", "M2"]
          },
          {
            taskNumber: 2,
            taskTitle: "Read and circle",
            taskDesc: "Read the sentences and choose the correct option.",
            points: 1.0,
            items: [
              { id: "G3-R2-T2-1", sentence: "I'd like some orange juice.", options: [{ id: "A", text: "Picture A (Orange juice)" }, { id: "B", text: "Picture B (Water)" }], correct: "A", level: "M1" },
              { id: "G3-R2-T2-2", sentence: "My brother is wearing a blue shirt.", options: [{ id: "A", text: "Picture A (Blue shirt)" }, { id: "B", text: "Picture B (Red T-shirt)" }], correct: "A", level: "M1" },
              { id: "G3-R2-T2-3", sentence: "We can see monkeys at the zoo.", options: [{ id: "A", text: "Picture A (Monkeys)" }, { id: "B", text: "Picture B (Elephants)" }], correct: "A", level: "M2" },
              { id: "G3-R2-T2-4", sentence: "I am going to Ha Long Bay this summer.", options: [{ id: "A", text: "Picture A (Ha Long Bay)" }, { id: "B", text: "Picture B (School)" }], correct: "A", level: "M2" }
            ]
          }
        ],
        writing: [
          {
            taskNumber: 1,
            taskTitle: "Look and write",
            taskDesc: "Unscramble the letters to make meaningful words.",
            points: 1.0,
            hasPictures: true,
            items: [
              { id: "G3-W1-T2-1", clue: "a-t-h-e-f-r", hint: "f.........", answer: "father", image: "/images/english/grade3/image25.png", level: "M1" },
              { id: "G3-W1-T2-2", clue: "o-u-s-e-h", hint: "h.........", answer: "house", image: "/images/english/grade3/image26.png", level: "M1" },
              { id: "G3-W1-T2-3", clue: "a-i-n-r-y", hint: "r.........", answer: "rainy", image: "/images/english/grade3/image27.png", level: "M2" },
              { id: "G3-W1-T2-4", clue: "o-r-t-s-h-s", hint: "s.........", answer: "shorts", image: "/images/english/grade3/image29.png", level: "M2" }
            ]
          },
          {
            taskNumber: 2,
            taskTitle: "Put the words in order to make correct sentences",
            taskDesc: "Reorder the words to make complete sentences.",
            points: 1.0,
            items: [
              { id: "G3-W2-T2-1", jumbled: "is / Who / this / ? / my father / It's", answer: "Who is this? It's my father.", level: "M1" },
              { id: "G3-W2-T2-2", jumbled: "have / Do you / any cats / ?", answer: "Do you have any cats?", level: "M1" },
              { id: "G3-W2-T2-3", jumbled: "like today / What's / the weather / ?", answer: "What's the weather like today?", level: "M2" },
              { id: "G3-W2-T2-4", jumbled: "wearing / I am / a blue T-shirt / .", answer: "I am wearing a blue T-shirt.", level: "M3" }
            ]
          }
        ],
        speaking: {
          part1: {
            title: "Part 1: Get to know each other",
            points: 1.25,
            desc: "The teacher interviews the pupil with personal questions.",
            questions: [
              "Hello! Who do you live with?",
              "Do you have any pets at home?",
              "What's the weather like today?",
              "What toy do you like best?",
              "Where are you going this summer holiday?"
            ]
          },
          part2: {
            title: "Part 2: Look and say",
            points: 0.75,
            desc: "Pupil looks at flashcards and answers prompts.",
            hasPictures: true,
            items: [
              { id: "G3-S2-T2-1", question: "1. What animal is this? What color is it?", image: "/images/english/grade3/image30.png" },
              { id: "G3-S2-T2-2", question: "2. Is there a garden in your house?", image: "/images/english/grade3/image31.png" }
            ],
            questions: [
              "What animal is this?",
              "What's the weather like in the picture?",
              "What are you wearing today?"
            ],
            rubric: [
              { criteria: "Pronunciation & Intonation", points: 0.75, desc: "Phát âm rõ ràng, chuẩn ngữ điệu" },
              { criteria: "Fluency & Response", points: 0.75, desc: "Phản xạ nhanh, tự nhiên" },
              { criteria: "Grammar & Vocabulary", points: 0.5, desc: "Dùng đúng mẫu câu và từ vựng Term 2" }
            ]
          }
        }
      }
    }
  },

  // =========================================================================
  // GRADE 4 (GLOBAL SUCCESS)
  // =========================================================================
  4: {
    grade: 4,
    textbook: "Global Success 4",
    ratios: { listening: 3.0, reading: 2.5, writing: 2.5, speaking: 2.0 },
    terms: {
      term1: {
        units: "Unit 1 - Unit 10",
        topics: ["My friends", "Time and daily routines", "My week", "My birthday", "Things we can do", "Our school", "Our timetable", "My favourite subjects", "Our sports day", "Where were you yesterday"]
      }
    },
    listening: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Listen and tick (☑)",
          taskDesc: "Listen to the dialogue and tick (☑) the correct box (a or b).",
          points: 1.0,
          hasPictures: true,
          items: [
            {
              id: "G4-L1-1",
              question: "What time is it?",
              options: [
                { id: "a", text: "It's eight thirty", image: "/images/english/grade4/image1.png", imageKey: "image1.png" },
                { id: "b", text: "It's eight forty-five", image: "/images/english/grade4/image2.png", imageKey: "image2.png" }
              ],
              correct: "b",
              level: "M1",
              transcript: "1. A: What time is it? - B: It's eight forty-five."
            },
            {
              id: "G4-L1-2",
              question: "When's your birthday?",
              options: [
                { id: "a", text: "It's in January", image: "/images/english/grade4/image3.png", imageKey: "image3.png" },
                { id: "b", text: "It's in June", image: "/images/english/grade4/image4.png", imageKey: "image4.png" }
              ],
              correct: "a",
              level: "M1",
              transcript: "2. A: When's your birthday? - B: It's in January."
            },
            {
              id: "G4-L1-3",
              question: "Can you draw?",
              options: [
                { id: "a", text: "Yes, I can", image: "/images/english/grade4/image5.png", imageKey: "image5.png" },
                { id: "b", text: "No, I can't", image: "/images/english/grade4/image6.png", imageKey: "image6.png" }
              ],
              correct: "a",
              level: "M2",
              transcript: "3. A: Can you draw? - B: Yes, I can."
            },
            {
              id: "G4-L1-4",
              question: "Where are you from?",
              options: [
                { id: "a", text: "I'm from America", image: "/images/english/grade4/image7.png", imageKey: "image7.png" },
                { id: "b", text: "I'm from Japan", image: "/images/english/grade4/image8.png", imageKey: "image8.png" }
              ],
              correct: "b",
              level: "M2",
              transcript: "4. A: Where are you from? - B: I'm from Japan."
            }
          ]
        },
        {
          taskNumber: 2,
          taskTitle: "Listen and number",
          taskDesc: "Listen and write numbers 1, 2, 3, 4 into the pictures.",
          points: 1.0,
          hasPictures: true,
          items: [
            { id: "G4-L2-1", label: "Picture a (School in the mountains)", image: "/images/english/grade4/image9.png", imageKey: "image9.png", topic: "Where's your school? - It's in the mountains.", orderIndex: 1, level: "M1", transcript: "1. A: Where's your school? - B: It's in the mountains." },
            { id: "G4-L2-2", label: "Picture b (English and Maths books)", image: "/images/english/grade4/image10.png", imageKey: "image10.png", topic: "What subjects do you have today? - I have English and maths.", orderIndex: 3, level: "M2", transcript: "3. A: What subjects do you have today? - B: I have English and maths." },
            { id: "G4-L2-3", label: "Picture c (On the beach with family)", image: "/images/english/grade4/image11.png", imageKey: "image11.png", topic: "Where were you last weekend? - I was on the beach.", orderIndex: 4, level: "M2", transcript: "4. A: Where were you last weekend? - B: I was on the beach with my family." },
            { id: "G4-L2-4", label: "Picture d (Sports day in October)", image: "/images/english/grade4/image12.png", imageKey: "image12.png", topic: "When's your sports day? - It's in October.", orderIndex: 2, level: "M1", transcript: "2. A: When's your sports day? - B: It's in October." }
          ]
        },
        {
          taskNumber: 3,
          taskTitle: "Listen and circle",
          taskDesc: "Listen and circle the best answer (a or b).",
          points: 1.0,
          items: [
            { id: "G4-L3-1", question: "What's your favourite subject?", options: [{ id: "a", text: "It's PE." }, { id: "b", text: "It's IT." }], correct: "a", level: "M1", transcript: "1. A: Do you like IT? - B: No, I don't. - A: What's your favourite subject? - B: It's PE." },
            { id: "G4-L3-2", question: "Why do you like art?", options: [{ id: "a", text: "Because I want to be a singer." }, { id: "b", text: "Because I want to be a painter." }], correct: "b", level: "M2", transcript: "2. A: Do you like art? - B: Yes, I do. - A: Why do you like it? - B: Because I want to be a painter." },
            { id: "G4-L3-3", question: "Where were you last weekend?", options: [{ id: "a", text: "I was at home." }, { id: "b", text: "I was at the campsite." }], correct: "b", level: "M2", transcript: "3. A: Where were you last weekend? - B: I was at the campsite." },
            { id: "G4-L3-4", question: "Where were you last summer?", options: [{ id: "a", text: "I was in Tokyo." }, { id: "b", text: "I was in London." }], correct: "a", level: "M3", transcript: "4. A: Where were you last summer? - B: I was in Tokyo." }
          ]
        }
      ]
    },
    reading: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Look and tick (☑) or cross (🗵)",
          taskDesc: "Look at the pictures and write ☑ (correct) or 🗵 (incorrect).",
          points: 1.25,
          hasPictures: true,
          items: [
            { id: "G4-R1-1", statement: "I can ride a bike.", image: "/images/english/grade4/image13.png", imageKey: "image13.png", correct: "☑", level: "M1" },
            { id: "G4-R1-2", statement: "She has Art on Wednesdays.", image: "/images/english/grade4/image14.png", imageKey: "image14.png", correct: "🗵", level: "M1" },
            { id: "G4-R1-3", statement: "Our school is in the village.", image: "/images/english/grade4/image15.png", imageKey: "image15.png", correct: "☑", level: "M2" },
            { id: "G4-R1-4", statement: "I go to bed at nine o'clock.", image: "/images/english/grade4/image16.png", imageKey: "image16.png", correct: "☑", level: "M2" },
            { id: "G4-R1-5", statement: "His birthday is in November.", image: "/images/english/grade4/image17.png", imageKey: "image17.png", correct: "🗵", level: "M2" }
          ]
        },
        {
          taskNumber: 2,
          taskTitle: "Read and circle",
          taskDesc: "Read the passage and choose the correct word (a, b, or c) for each blank.",
          points: 1.25,
          passage: `We have a lot of fun at school. In our English lessons, we (1) __________ to English songs. We sing and chant. We (2) _______________ board games to learn English. (3) _____________ do projects together at the end of each unit. (4) _______________, it was sunny. We (5) ____________ in the school garden. There were many flowers and birds. We were happy.`,
          items: [
            { id: "G4-R2-1", options: [{ id: "a", text: "listen" }, { id: "b", text: "write" }, { id: "c", text: "speak" }], correct: "a", level: "M1" },
            { id: "G4-R2-2", options: [{ id: "a", text: "read" }, { id: "b", text: "play" }, { id: "c", text: "sing" }], correct: "b", level: "M1" },
            { id: "G4-R2-3", options: [{ id: "a", text: "They" }, { id: "b", text: "You" }, { id: "c", text: "We" }], correct: "c", level: "M2" },
            { id: "G4-R2-4", options: [{ id: "a", text: "Yesterday" }, { id: "b", text: "Now" }, { id: "c", text: "Weekend" }], correct: "a", level: "M2" },
            { id: "G4-R2-5", options: [{ id: "a", text: "are" }, { id: "b", text: "was" }, { id: "c", text: "were" }], correct: "c", level: "M3" }
          ]
        }
      ]
    },
    writing: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Look and write",
          taskDesc: "Look at the pictures and complete the passage with suitable words.",
          points: 1.25,
          hasPictures: true,
          passage: `Hello, my name is Nam. I am ten years old. I'm from (1) _____________. I study in a school in HCM city. There is a big (2) _____________ at my school. My favourite subject is (3) ______________. I also like computers a lot! There is one (4) ______________ where we play football everyday. After school, I often (5) _______________________ in the park with my friends.`,
          items: [
            { id: "G4-W1-1", blankIndex: 1, word: "Vietnam", image: "/images/english/grade4/image18.png", imageKey: "image18.png", clue: "Vietnam", level: "M1" },
            { id: "G4-W1-2", blankIndex: 2, word: "garden", image: "/images/english/grade4/image19.png", imageKey: "image19.png", clue: "garden", level: "M1" },
            { id: "G4-W1-3", blankIndex: 3, word: "music", image: "/images/english/grade4/image20.png", imageKey: "image20.png", clue: "music", level: "M2" },
            { id: "G4-W1-4", blankIndex: 4, word: "playground", image: "/images/english/grade4/image21.png", imageKey: "image21.png", clue: "playground", level: "M2" },
            { id: "G4-W1-5", blankIndex: 5, word: "ride a bike", image: "/images/english/grade4/image22.png", imageKey: "image22.png", clue: "ride a bike", level: "M3" }
          ],
          answers: ["Vietnam", "garden", "music", "playground", "ride a bike"],
          levels: ["M1", "M1", "M2", "M2", "M3"]
        },
        {
          taskNumber: 2,
          taskTitle: "Reorder the words to make correct sentences",
          taskDesc: "Put the words in correct order to make meaningful sentences.",
          points: 1.25,
          items: [
            { id: "G4-W2-1", jumbled: "do you/ What time/ have breakfast?", answer: "What time do you have breakfast?", level: "M1" },
            { id: "G4-W2-2", jumbled: "some water/ want/ I.", answer: "I want some water.", level: "M1" },
            { id: "G4-W2-3", jumbled: "play/ He/ the piano/ can.", answer: "He can play the piano.", level: "M2" },
            { id: "G4-W2-4", jumbled: "on Saturdays/ listen to music/ I.", answer: "I listen to music on Saturdays.", level: "M2" },
            { id: "G4-W2-5", jumbled: "she/ Where is/ from?", answer: "Where is she from?", level: "M3" }
          ]
        }
      ]
    },
    speaking: {
      term1: {
        part1: {
          title: "Part 1: Get to know each other and answer the questions",
          points: 1.0,
          desc: "Teacher asks at least 4 questions about student's personal information.",
          questions: [
            "What's your name?",
            "Where are you from?",
            "When's your birthday?",
            "What's your favourite subject?",
            "Where were you last summer?"
          ]
        },
        part2: {
          title: "Part 2: Look and answer",
          points: 1.0,
          desc: "Student draws lots / looks at situational pictures and answers 4 questions.",
          hasPictures: true,
          items: [
            { id: "G4-S2-1", question: "1. What do you do on Tuesdays?", image: "/images/english/grade4/image23.png", imageKey: "image23.png" },
            { id: "G4-S2-2", question: "2. Where's your school?", image: "/images/english/grade4/image24.png", imageKey: "image24.png" },
            { id: "G4-S2-3", question: "3. Can you roller skate?", image: "/images/english/grade4/image25.png", imageKey: "image25.png" },
            { id: "G4-S2-4", question: "4. What subjects do you have today?", image: "/images/english/grade4/image26.png", imageKey: "image26.png" },
            { id: "G4-S2-5", question: "5. What time do you go to bed?", image: "/images/english/grade4/image27.png", imageKey: "image27.png" },
            { id: "G4-S2-6", question: "6. When's your Sports day?", image: "/images/english/grade4/image28.png", imageKey: "image28.png" }
          ],
          questions: [
            "What do you do on Tuesdays?",
            "Where's your school?",
            "Can you roller skate?",
            "What subjects do you have today?",
            "What time do you go to bed?",
            "When's your Sports day?"
          ],
          rubric: [
            { criteria: "Pronunciation & Intonation", points: 0.35, desc: "Phát âm rõ ràng, đúng trọng âm từ và ngữ điệu câu" },
            { criteria: "Fluency & Response", points: 0.35, desc: "Trả lời lưu loát, tự tin, không ngắc ngứ" },
            { criteria: "Grammar & Accuracy", points: 0.3, desc: "Dùng đúng thì hiện tại đơn, quá khứ đơn, giới từ" }
          ]
        }
      },
      term2: {
        listening: [
          {
            taskNumber: 1,
            taskTitle: "Listen and tick (☑)",
            taskDesc: "Listen to the dialogue and tick (☑) the correct box (a or b).",
            points: 1.0,
            hasPictures: true,
            items: [
              {
                id: "G4-L1-T2-1",
                question: "What's your favourite drink?",
                options: [
                  { id: "a", text: "Orange juice", image: "/images/english/grade4/image1.png" },
                  { id: "b", text: "Milk", image: "/images/english/grade4/image2.png" }
                ],
                correct: "a",
                level: "M1",
                transcript: "1. A: What's your favourite drink? - B: It's orange juice."
              },
              {
                id: "G4-L1-T2-2",
                question: "What does he look like?",
                options: [
                  { id: "a", text: "He is tall", image: "/images/english/grade4/image3.png" },
                  { id: "b", text: "He is short", image: "/images/english/grade4/image4.png" }
                ],
                correct: "a",
                level: "M1",
                transcript: "2. A: What does your brother look like? - B: He is tall and thin."
              },
              {
                id: "G4-L1-T2-3",
                question: "What's the matter with you?",
                options: [
                  { id: "a", text: "I have a headache", image: "/images/english/grade4/image5.png" },
                  { id: "b", text: "I have a fever", image: "/images/english/grade4/image6.png" }
                ],
                correct: "b",
                level: "M2",
                transcript: "3. A: What's the matter with you? - B: I have a fever."
              },
              {
                id: "G4-L1-T2-4",
                question: "What would you like to be in the future?",
                options: [
                  { id: "a", text: "A doctor", image: "/images/english/grade4/image7.png" },
                  { id: "b", text: "A teacher", image: "/images/english/grade4/image8.png" }
                ],
                correct: "a",
                level: "M2",
                transcript: "4. A: What would you like to be in the future? - B: I'd like to be a doctor."
              }
            ]
          },
          {
            taskNumber: 2,
            taskTitle: "Listen and number",
            taskDesc: "Listen and write numbers 1, 2, 3, 4 into the pictures.",
            points: 1.0,
            hasPictures: true,
            items: [
              { id: "G4-L2-T2-1", label: "Picture a (Eco-farm in Vinh Long)", image: "/images/english/grade4/image9.png", topic: "Where were you last Sunday? - I was at the eco-farm.", orderIndex: 2, level: "M1", transcript: "2. Where were you last Sunday? - I was at the eco-farm in Vinh Long." },
              { id: "G4-L2-T2-2", label: "Picture b (Monkeys at the zoo)", image: "/images/english/grade4/image10.png", topic: "Why do you like monkeys? - Because they are funny.", orderIndex: 1, level: "M1", transcript: "1. Why do you like monkeys? - Because they are funny." },
              { id: "G4-L2-T2-3", label: "Picture c (Sunny weather in summer)", image: "/images/english/grade4/image11.png", topic: "What's the weather like in summer? - It's sunny and hot.", orderIndex: 4, level: "M2", transcript: "4. What's the weather like in summer? - It's sunny and hot." },
              { id: "G4-L2-T2-4", label: "Picture d (Swimming in the sea)", image: "/images/english/grade4/image12.png", topic: "What are you going to do this summer? - I'm going to swim.", orderIndex: 3, level: "M2", transcript: "3. What are you going to do this summer? - I'm going to swim in the sea." }
            ]
          },
          {
            taskNumber: 3,
            taskTitle: "Listen and circle",
            taskDesc: "Listen and circle the best answer (a or b).",
            points: 1.0,
            items: [
              { id: "G4-L3-T2-1", question: "What is your village like?", options: [{ id: "a", text: "It's small and quiet." }, { id: "b", text: "It's big and noisy." }], correct: "a", level: "M1", transcript: "1. A: What is your village like? - B: It's small and quiet." },
              { id: "G4-L3-T2-2", question: "What did you do at the eco-farm?", options: [{ id: "a", text: "We picked oranges." }, { id: "b", text: "We played computer games." }], correct: "a", level: "M2", transcript: "2. A: What did you do at the eco-farm? - B: We picked oranges in the garden." },
              { id: "G4-L3-T2-3", question: "Why does Mai want to be a nurse?", options: [{ id: "a", text: "Because she wants to look after sick people." }, { id: "b", text: "Because she likes drawing." }], correct: "a", level: "M2", transcript: "3. A: Why does Mai want to be a nurse? - B: Because she wants to look after sick people." },
              { id: "G4-L3-T2-4", question: "When is your Sports day?", options: [{ id: "a", text: "It's in May." }, { id: "b", text: "It's in November." }], correct: "a", level: "M3", transcript: "4. A: When is your Sports day? - B: It's in May." }
            ]
          }
        ],
        reading: [
          {
            taskNumber: 1,
            taskTitle: "Look and tick (☑) or cross (🗵)",
            taskDesc: "Look at the pictures and write ☑ or 🗵.",
            points: 1.25,
            hasPictures: true,
            items: [
              { id: "G4-R1-T2-1", statement: "He has a sore throat.", image: "/images/english/grade4/image13.png", correct: "☑", level: "M1" },
              { id: "G4-R1-T2-2", statement: "My favourite drink is lemonade.", image: "/images/english/grade4/image14.png", correct: "☑", level: "M1" },
              { id: "G4-R1-T2-3", statement: "The village is very crowded.", image: "/images/english/grade4/image15.png", correct: "🗵", level: "M2" },
              { id: "G4-R1-T2-4", statement: "They are picking apples at the farm.", image: "/images/english/grade4/image16.png", correct: "☑", level: "M2" },
              { id: "G4-R1-T2-5", statement: "She wants to be a pilot.", image: "/images/english/grade4/image17.png", correct: "🗵", level: "M2" }
            ]
          },
          {
            taskNumber: 2,
            taskTitle: "Read and complete",
            taskDesc: "Read the passage and choose suitable words from the box.",
            points: 1.25,
            wordBank: ["sunny", "animals", "pick", "played", "happy"],
            passage: `Last weekend, Nam and his class visited an eco-farm in Vinh Long. The weather was (1) ____________ and warm. They saw many (2) ____________ like cows and ducks. Nam helped to (3) ____________ fresh oranges in the garden. In the afternoon, they (4) ____________ fun games together. It was a very (5) ____________ day for everyone.`,
            answers: ["sunny", "animals", "pick", "played", "happy"],
            levels: ["M1", "M1", "M2", "M2", "M3"]
          }
        ],
        writing: [
          {
            taskNumber: 1,
            taskTitle: "Look and write",
            taskDesc: "Complete the sentences / words based on pictures.",
            points: 1.25,
            hasPictures: true,
            passage: `My sister Phong lives in a quiet village in (1) _____________. Her favourite drink is (2) _____________. She wants to be a (3) _____________ when she grows up. Last weekend, she stayed at (4) _____________ because she had a cold. Now she is (5) _______________________ in the garden.`,
            items: [
              { id: "G4-W1-T2-1", blankIndex: 1, word: "Vinh Long", image: "/images/english/grade4/image18.png", clue: "Vinh Long", level: "M1" },
              { id: "G4-W1-T2-2", blankIndex: 2, word: "lemonade", image: "/images/english/grade4/image19.png", clue: "lemonade", level: "M1" },
              { id: "G4-W1-T2-3", blankIndex: 3, word: "doctor", image: "/images/english/grade4/image20.png", clue: "doctor", level: "M2" },
              { id: "G4-W1-T2-4", blankIndex: 4, word: "home", image: "/images/english/grade4/image21.png", clue: "home", level: "M2" },
              { id: "G4-W1-T2-5", blankIndex: 5, word: "watering flowers", image: "/images/english/grade4/image22.png", clue: "watering flowers", level: "M3" }
            ],
            answers: ["Vinh Long", "lemonade", "doctor", "home", "watering flowers"],
            levels: ["M1", "M1", "M2", "M2", "M3"]
          },
          {
            taskNumber: 2,
            taskTitle: "Reorder the words to make correct sentences",
            taskDesc: "Put words in correct order to make meaningful sentences.",
            points: 1.25,
            items: [
              { id: "G4-W2-T2-1", jumbled: "your favourite / What is / drink / ?", answer: "What is your favourite drink?", level: "M1" },
              { id: "G4-W2-T2-2", jumbled: "the matter / What is / with you / ?", answer: "What is the matter with you?", level: "M1" },
              { id: "G4-W2-T2-3", jumbled: "would like / I / to be a doctor / in the future / .", answer: "I would like to be a doctor in the future.", level: "M2" },
              { id: "G4-W2-T2-4", jumbled: "weather / What is the / like in summer / ?", answer: "What's the weather like in summer?", level: "M2" },
              { id: "G4-W2-T2-5", jumbled: "went to / We / an eco-farm / last Sunday / .", answer: "We went to an eco-farm last Sunday.", level: "M3" }
            ]
          }
        ],
        speaking: {
          part1: {
            title: "Part 1: Get to know each other and answer the questions",
            points: 1.0,
            desc: "Teacher asks questions about student's personal background and preferences.",
            questions: [
              "What's your favourite food and drink?",
              "What does your best friend look like?",
              "What's the matter when you get sick?",
              "What would you like to be in the future?",
              "What are you going to do this summer holiday?"
            ]
          },
          part2: {
            title: "Part 2: Look and answer",
            points: 1.0,
            desc: "Student looks at situational pictures and answers 4 questions.",
            hasPictures: true,
            items: [
              { id: "G4-S2-T2-1", question: "1. What's your favourite drink?", image: "/images/english/grade4/image23.png" },
              { id: "G4-S2-T2-2", question: "2. What's the matter with him?", image: "/images/english/grade4/image24.png" },
              { id: "G4-S2-T2-3", question: "3. What did you do at the eco-farm?", image: "/images/english/grade4/image25.png" },
              { id: "G4-S2-T2-4", question: "4. What would you like to be in the future?", image: "/images/english/grade4/image26.png" }
            ],
            questions: [
              "What's your favourite drink?",
              "What's the matter with him?",
              "What did you do at the eco-farm?",
              "What would you like to be in the future?"
            ],
            rubric: [
              { criteria: "Pronunciation & Intonation", points: 0.35, desc: "Phát âm rõ ràng, ngữ điệu chuẩn" },
              { criteria: "Fluency & Response", points: 0.35, desc: "Phản xạ nhanh, trôi chảy" },
              { criteria: "Grammar & Accuracy", points: 0.3, desc: "Cấu trúc câu Term 2 chính xác" }
            ]
          }
        }
      }
    }
  },

  // =========================================================================
  // GRADE 5 (GLOBAL SUCCESS) - TÍCH HỢP 100% ẢNH THẬT TỪ ĐỀ THI
  // =========================================================================
  5: {
    grade: 5,
    textbook: "Global Success 5",
    ratios: { listening: 3.0, reading: 2.5, writing: 2.5, speaking: 2.0 },

    terms: {
      term1: {
        units: "Unit 1 - Unit 10",
        topics: ["All about me", "Our homes", "My foreign friends", "Our free-time activities", "My future job", "Our school rooms", "Our school activities", "My favourite story", "Our outdoor activities", "Our school trip"]
      }
    },

    // 1. LISTENING BANK (Có tranh A và B cho từng câu hỏi)
    listening: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Listen and tick (☑)",
          taskDesc: "Listen to the recording and tick (☑) the correct picture (a or b).",
          points: 1.0,
          hasPictures: true,
          items: [
            {
              id: "G5-L1-1",
              question: "Question 1",
              options: [
                { id: "a", text: "15 Green Street", image: "/images/english/grade5/image1.png", imageKey: "image1.png" },
                { id: "b", text: "55 Green Street", image: "/images/english/grade5/image2.png", imageKey: "image2.png" }
              ],
              correct: "b",
              level: "M1",
              transcript: "1. A: What's your address, Mike? - B: It's 55 Green Street."
            },
            {
              id: "G5-L1-2",
              question: "Question 2",
              options: [
                { id: "a", text: "Sandwich", image: "/images/english/grade5/image3.png", imageKey: "image3.png" },
                { id: "b", text: "Cupcake", image: "/images/english/grade5/image4.png", imageKey: "image4.png" }
              ],
              correct: "a",
              level: "M1",
              transcript: "2. A: What's your favourite food? - B: It's a sandwich."
            },
            {
              id: "G5-L1-3",
              question: "Question 3",
              options: [
                { id: "a", text: "Reporter", image: "/images/english/grade5/image5.png", imageKey: "image5.png" },
                { id: "b", text: "Firefighter", image: "/images/english/grade5/image6.png", imageKey: "image6.png" }
              ],
              correct: "b",
              level: "M2",
              transcript: "3. A: What would you like to be in the future, Andy? - B: I'd like to be a firefighter."
            },
            {
              id: "G5-L1-4",
              question: "Question 4",
              options: [
                { id: "a", text: "Malaysian", image: "/images/english/grade5/image7.png", imageKey: "image7.png" },
                { id: "b", text: "Japanese", image: "/images/english/grade5/image8.png", imageKey: "image8.png" }
              ],
              correct: "a",
              level: "M2",
              transcript: "4. A: What nationality is she? - B: She's Malaysian."
            }
          ]
        },
        {
          taskNumber: 2,
          taskTitle: "Listen and circle",
          taskDesc: "Listen to the recording and choose the correct completion (a or b).",
          points: 1.0,
          items: [
            {
              id: "G5-L2-1",
              question: "1. A: Where's the computer room? - B: It's on the ________.",
              options: [{ id: "a", text: "second floor" }, { id: "b", text: "third floor" }],
              correct: "b",
              level: "M1",
              transcript: "1. Boy: Do you want to see the new computer room at my school? - Girl: Yes. Where is it? - Boy: It's on the third floor."
            },
            {
              id: "G5-L2-2",
              question: "2. A: What school activity does Lucy like? - B: She likes ________.",
              options: [{ id: "a", text: "doing projects" }, { id: "b", text: "reading books" }],
              correct: "a",
              level: "M2",
              transcript: "2. Boy: Do you like playing games, Lucy? - Girl: No, I don't. - Boy: What school activity do you like? - Girl: I like doing projects."
            },
            {
              id: "G5-L2-3",
              question: "3. A: Whose crayon is this? - B: It's ________.",
              options: [{ id: "a", text: "Mai's" }, { id: "b", text: "Linh's" }],
              correct: "b",
              level: "M2",
              transcript: "3. Boy: Is this your crayon, Mai? - Girl: No, it isn't. - Boy: Whose crayon is it? - Girl: It's Linh's."
            },
            {
              id: "G5-L2-4",
              question: "4. A: What did Mai's class do at the campsite yesterday? - B: They ________.",
              options: [{ id: "a", text: "listened to music" }, { id: "b", text: "danced around the campsite" }],
              correct: "b",
              level: "M3",
              transcript: "4. Boy: Was your class at the campsite yesterday, Mai? - Girl: Yes, we were. - Boy: What did you do there? - Girl: We danced around the campfire."
            }
          ]
        },
        {
          taskNumber: 3,
          taskTitle: "Listen and tick True or False",
          taskDesc: "Listen and tick True (T) or False (F).",
          points: 1.0,
          items: [
            { id: "G5-L3-1", statement: "1. Nam would like to be a reporter.", correct: "True", level: "M2", transcript: "A: Hey, Nam. What would you like to be in the future? - B: I'd like to be a reporter." },
            { id: "G5-L3-2", statement: "2. He would like to work in an office.", correct: "False", level: "M2", transcript: "A: Why? - B: Because I'd like to travel and meet people." },
            { id: "G5-L3-3", statement: "3. He likes reporting the news.", correct: "True", level: "M2", transcript: "A: And you can report the news, too. - B: Exactly!" },
            { id: "G5-L3-4", statement: "4. He doesn't like meeting new people.", correct: "False", level: "M3", transcript: "B: I love traveling and making new friends everywhere." }
          ]
        }
      ]
    },

    // 2. READING BANK (Task 1 có 5 ảnh tranh thật từ SGK)
    reading: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Look and tick ☑ or cross 🗵",
          taskDesc: "Look at the pictures and words, write ☑ (correct) or 🗵 (incorrect) into the boxes.",
          points: 1.25,
          hasPictures: true,
          items: [
            { id: "G5-R1-1", statement: "water the flowers", caption: "water the flowers", image: "/images/english/grade5/image13.png", imageKey: "image13.png", correct: "☑", level: "M1" },
            { id: "G5-R1-2", statement: "flat", caption: "flat", image: "/images/english/grade5/image14.png", imageKey: "image14.png", correct: "🗵", level: "M1" },
            { id: "G5-R1-3", statement: "table tennis", caption: "table tennis", image: "/images/english/grade5/image15.png", imageKey: "image15.png", correct: "☑", level: "M2" },
            { id: "G5-R1-4", statement: "gardener", caption: "gardener", image: "/images/english/grade5/image16.png", imageKey: "image16.png", correct: "🗵", level: "M2" },
            { id: "G5-R1-5", statement: "American", caption: "American", image: "/images/english/grade5/image17.png", imageKey: "image17.png", correct: "☑", level: "M2" }
          ]
        },
        {
          taskNumber: 2,
          taskTitle: "Read and complete",
          taskDesc: "Read the passage and choose suitable words from the box to complete the sentences.",
          points: 1.25,
          wordBank: ["active", "cooking", "helpful", "is", "table tennis"],
          passage: `This is my friend. Her name is Sue. She (1) ……………… American. Sue is (2) ……………… She likes playing (3) …………………….. in her free time. She usually goes swimming at the weekend. Sue is (4) ……………………………., too. She helps her mother with the (5) ……………………………… in the evening. I am happy that I have a nice friend like Sue.`,
          answers: ["is", "active", "table tennis", "helpful", "cooking"],
          levels: ["M1", "M1", "M2", "M2", "M3"]
        }
      ]
    },

    // 3. WRITING BANK (Task 1 có 4 ảnh tranh màu minh họa thật từ SGK)
    writing: {
      term1: [
        {
          taskNumber: 1,
          taskTitle: "Look and write",
          taskDesc: "Look at the pictures and rearrange the scrambled letters to write the correct words/phrases.",
          points: 1.0,
          hasPictures: true,
          items: [
            { id: "G5-W1-1", clue: "anialmyas", hint: "M.........", answer: "Malaysian", image: "/images/english/grade5/image19.png", imageKey: "image19.png", level: "M1" },
            { id: "G5-W1-2", clue: "solfrew", hint: "f.........", answer: "flowers", image: "/images/english/grade5/image21.png", imageKey: "image21.png", level: "M1" },
            { id: "G5-W1-3", clue: "rpjoctes od", hint: "d... p.........", answer: "do projects", image: "/images/english/grade5/image22.png", imageKey: "image22.png", level: "M2" },
            { id: "G5-W1-4", clue: "latnp eerts", hint: "p... t.........", answer: "plant trees", image: "/images/english/grade5/image24.png", imageKey: "image24.png", level: "M2" }
          ]
        },
        {
          taskNumber: 2,
          taskTitle: "Make sentences",
          taskDesc: "Reorder the words to make meaningful sentences.",
          points: 1.5,
          items: [
            { id: "G5-W2-1", jumbled: "live/ Do you/ that building/ in/?", answer: "Do you live in that building?", level: "M1" },
            { id: "G5-W2-2", jumbled: "your brother/ What's/ like/?", answer: "What's your brother like?", level: "M1" },
            { id: "G5-W2-3", jumbled: "interesting/ Because/ it's", answer: "Because it's interesting.", level: "M2" },
            { id: "G5-W2-4", jumbled: "a reporter/ I'd like/ in the future/ to be", answer: "I'd like to be a reporter in the future.", level: "M2" },
            { id: "G5-W2-5", jumbled: "about yourself/ tell me/ you/ Can/?", answer: "Can you tell me about yourself?", level: "M3" },
            { id: "G5-W2-6", jumbled: "the fish/ yesterday/ he watched", answer: "He watched the fish yesterday.", level: "M3" }
          ]
        }
      ]
    },

    // 4. SPEAKING BANK (Part 2 có 4 tranh màu thật từ SGK)
    speaking: {
      term1: {
        part1: {
          title: "Part 1: Answer the questions",
          points: 1.5,
          desc: "The examiner asks 6 personal questions below:",
          questions: [
            "1. What's your name?",
            "2. How are you?",
            "3. Where do you live?",
            "4. What's your favourite colour?",
            "5. Do you like swimming?",
            "6. What did you do yesterday?"
          ]
        },
        part2: {
          title: "Part 2: Look and answer the questions",
          points: 1.0,
          desc: "Student looks at situational pictures and answers 4 questions:",
          hasPictures: true,
          items: [
            { id: "G5-S2-1", question: "1. What would you like to be in the future?", image: "/images/english/grade5/image9.png", imageKey: "image9.png" },
            { id: "G5-S2-2", question: "2. Where are the pencils?", image: "/images/english/grade5/image10.png", imageKey: "image10.png" },
            { id: "G5-S2-3", question: "3. What did they do there?", image: "/images/english/grade5/image11.png", imageKey: "image11.png" },
            { id: "G5-S2-4", question: "4. Were you at the campsite yesterday?", image: "/images/english/grade5/image12.png", imageKey: "image12.png" }
          ],
          rubric: [
            { criteria: "Pronunciation & Intonation", points: 0.35, desc: "Phát âm chuẩn xác, có ngữ điệu tự nhiên, nối âm đúng" },
            { criteria: "Fluency & Response", points: 0.35, desc: "Nói trôi chảy, phản xạ nhanh, trả lời thành câu hoàn chỉnh" },
            { criteria: "Grammar & Vocabulary", points: 0.3, desc: "Dùng từ chính xác, cấu trúc ngữ pháp chuẩn xác" }
          ]
        }
      },
      term2: {
        listening: [
          {
            taskNumber: 1,
            taskTitle: "Listen and tick (☑)",
            taskDesc: "Listen to the recording and tick (☑) the correct picture (a or b).",
            points: 1.0,
            hasPictures: true,
            items: [
              {
                id: "G5-L1-T2-1",
                question: "Question 1",
                options: [
                  { id: "a", text: "By bus", image: "/images/english/grade5/image1.png" },
                  { id: "b", text: "By taxi", image: "/images/english/grade5/image2.png" }
                ],
                correct: "a",
                level: "M1",
                transcript: "1. A: How can I get to the museum? - B: You can go by bus."
              },
              {
                id: "G5-L1-T2-2",
                question: "Question 2",
                options: [
                  { id: "a", text: "Quiet countryside", image: "/images/english/grade5/image3.png" },
                  { id: "b", text: "Busy city", image: "/images/english/grade5/image4.png" }
                ],
                correct: "a",
                level: "M1",
                transcript: "2. A: What's life in your hometown like? - B: It's quiet and peaceful."
              },
              {
                id: "G5-L1-T2-3",
                question: "Question 3",
                options: [
                  { id: "a", text: "An Tiem story", image: "/images/english/grade5/image5.png" },
                  { id: "b", text: "Aladdin story", image: "/images/english/grade5/image6.png" }
                ],
                correct: "a",
                level: "M2",
                transcript: "3. A: What story are you reading? - B: I'm reading The Story of Mai An Tiem."
              },
              {
                id: "G5-L1-T2-4",
                question: "Question 4",
                options: [
                  { id: "a", text: "Planting trees", image: "/images/english/grade5/image7.png" },
                  { id: "b", text: "Watering flowers", image: "/images/english/grade5/image8.png" }
                ],
                correct: "a",
                level: "M2",
                transcript: "4. A: How can we protect our environment? - B: We can plant more green trees."
              }
            ]
          },
          {
            taskNumber: 2,
            taskTitle: "Listen and circle",
            taskDesc: "Listen to the recording and choose the correct completion (a or b).",
            points: 1.0,
            items: [
              {
                id: "G5-L2-T2-1",
                question: "1. A: Where is the pharmacy? - B: It's ________.",
                options: [{ id: "a", text: "opposite the bakery" }, { id: "b", text: "next to the park" }],
                correct: "a",
                level: "M1",
                transcript: "1. Girl: Excuse me, where is the pharmacy? - Boy: It's opposite the bakery."
              },
              {
                id: "G5-L2-T2-2",
                question: "2. A: Why shouldn't he ride his bike too fast? - B: Because ________.",
                options: [{ id: "a", text: "he may fall off his bike" }, { id: "b", text: "he may get lost" }],
                correct: "a",
                level: "M2",
                transcript: "2. Girl: Don't ride your bike so fast! - Boy: Why not? - Girl: Because you may fall off your bike."
              },
              {
                id: "G5-L2-T2-3",
                question: "3. A: What do you think of An Tiem? - B: I think he is ________.",
                options: [{ id: "a", text: "hard-working and clever" }, { id: "b", text: "greedy and lazy" }],
                correct: "a",
                level: "M2",
                transcript: "3. Boy: What do you think of Mai An Tiem? - Girl: I think he is hard-working and clever."
              },
              {
                id: "G5-L2-T2-4",
                question: "4. A: What will houses be like in the future? - B: They will be ________.",
                options: [{ id: "a", text: "smart houses with robots" }, { id: "b", text: "wooden houses in the woods" }],
                correct: "a",
                level: "M3",
                transcript: "4. Girl: What will houses be like in the future? - Boy: They will be smart houses with helpful robots."
              }
            ]
          },
          {
            taskNumber: 3,
            taskTitle: "Listen and tick True or False",
            taskDesc: "Listen and tick True (T) or False (F).",
            points: 1.0,
            items: [
              { id: "G5-L3-T2-1", statement: "1. Mai visited Tra On floating market last weekend.", correct: "True", level: "M2", transcript: "A: Where were you last weekend, Mai? - B: I visited Tra On floating market in Vinh Long." },
              { id: "G5-L3-T2-2", statement: "2. She went there by motorbike.", correct: "False", level: "M2", transcript: "A: How did you get there? - B: We went by boat on the river." },
              { id: "G5-L3-T2-3", statement: "3. She bought many fresh fruits like pomelo and rambutan.", correct: "True", level: "M2", transcript: "A: What did you do there? - B: We bought many delicious fruits like pomelo and rambutan." },
              { id: "G5-L3-T2-4", statement: "4. She didn't enjoy the trip.", correct: "False", level: "M3", transcript: "A: Did you enjoy it? - B: Yes, it was wonderful!" }
            ]
          }
        ],
        reading: [
          {
            taskNumber: 1,
            taskTitle: "Look and tick ☑ or cross 🗵",
            taskDesc: "Look at the pictures and words, write ☑ or 🗵.",
            points: 1.25,
            hasPictures: true,
            items: [
              { id: "G5-R1-T2-1", statement: "go by bus", caption: "go by bus", image: "/images/english/grade5/image13.png", correct: "☑", level: "M1" },
              { id: "G5-R1-T2-2", statement: "pharmacy", caption: "pharmacy", image: "/images/english/grade5/image14.png", correct: "☑", level: "M1" },
              { id: "G5-R1-T2-3", statement: "hard-working", caption: "hard-working", image: "/images/english/grade5/image15.png", correct: "☑", level: "M2" },
              { id: "G5-R1-T2-4", statement: "protect the environment", caption: "protect the environment", image: "/images/english/grade5/image16.png", correct: "☑", level: "M2" },
              { id: "G5-R1-T2-5", statement: "smart house", caption: "smart house", image: "/images/english/grade5/image17.png", correct: "🗵", level: "M2" }
            ]
          },
          {
            taskNumber: 2,
            taskTitle: "Read and complete",
            taskDesc: "Read the passage and fill in the blanks with words from the box.",
            points: 1.25,
            wordBank: ["clean", "plant", "save", "important", "green"],
            passage: `Our primary school is building a green environment. Every Friday afternoon, pupils (1) ……………… the playground and collect plastic bottles. We (2) ……………… green trees and water flowers in the garden. We also (3) ……………… water and electricity in our classroom. Our teacher says protecting the environment is (4) ……………… for our future. We are happy with our (5) ……………… school.`,
            answers: ["clean", "plant", "save", "important", "green"],
            levels: ["M1", "M1", "M2", "M2", "M3"]
          }
        ],
        writing: [
          {
            taskNumber: 1,
            taskTitle: "Look and write",
            taskDesc: "Rearrange scrambled letters to write correct words.",
            points: 1.0,
            hasPictures: true,
            items: [
              { id: "G5-W1-T2-1", clue: "c-o-u-n-t-r-y-s-i-d-e", hint: "c.........", answer: "countryside", image: "/images/english/grade5/image19.png", level: "M1" },
              { id: "G5-W1-T2-2", clue: "p-h-a-r-m-a-c-y", hint: "p.........", answer: "pharmacy", image: "/images/english/grade5/image21.png", level: "M1" },
              { id: "G5-W1-T2-3", clue: "h-a-r-d - w-o-r-k-i-n-g", hint: "h...-w.........", answer: "hard-working", image: "/images/english/grade5/image22.png", level: "M2" },
              { id: "G5-W1-T2-4", clue: "s-m-a-r-t  h-o-u-s-e", hint: "s... h.........", answer: "smart house", image: "/images/english/grade5/image24.png", level: "M2" }
            ]
          },
          {
            taskNumber: 2,
            taskTitle: "Make sentences",
            taskDesc: "Reorder the words to make meaningful sentences.",
            points: 1.5,
            items: [
              { id: "G5-W2-T2-1", jumbled: "is life / What / in the countryside / like / ?", answer: "What is life in the countryside like?", level: "M1" },
              { id: "G5-W2-T2-2", jumbled: "can I get / How / to the railway station / ?", answer: "How can I get to the railway station?", level: "M1" },
              { id: "G5-W2-T2-3", jumbled: "should not / You / ride your bike / too fast / .", answer: "You should not ride your bike too fast.", level: "M2" },
              { id: "G5-W2-T2-4", jumbled: "do you think / What / of Mai An Tiem / ?", answer: "What do you think of Mai An Tiem?", level: "M2" },
              { id: "G5-W2-T2-5", jumbled: "protect / We should / the environment / by planting trees / .", answer: "We should protect the environment by planting trees.", level: "M3" },
              { id: "G5-W2-T2-6", jumbled: "will be / Smart houses / solar-powered / in the future / .", answer: "Smart houses will be solar-powered in the future.", level: "M3" }
            ]
          }
        ],
        speaking: {
          part1: {
            title: "Part 1: Answer the questions",
            points: 1.5,
            desc: "The examiner asks 6 personal questions below:",
            questions: [
              "1. What is your hometown like?",
              "2. How do you usually get to school?",
              "3. Where is the nearest supermarket from your house?",
              "4. What is your favourite Vietnamese story?",
              "5. What do you do to save electricity at home?",
              "6. What will your dream house in the future be like?"
            ]
          },
          part2: {
            title: "Part 2: Look and answer the questions",
            points: 1.0,
            desc: "Student looks at situational pictures and answers 4 questions:",
            hasPictures: true,
            items: [
              { id: "G5-S2-T2-1", question: "1. How can I get to the museum?", image: "/images/english/grade5/image9.png" },
              { id: "G5-S2-T2-2", question: "2. Why shouldn't he run down the stairs?", image: "/images/english/grade5/image10.png" },
              { id: "G5-S2-T2-3", question: "3. What do you think of Mai An Tiem?", image: "/images/english/grade5/image11.png" },
              { id: "G5-S2-T2-4", question: "4. What should we do to protect our green environment?", image: "/images/english/grade5/image12.png" }
            ],
            rubric: [
              { criteria: "Pronunciation & Intonation", points: 0.35, desc: "Phát âm chuẩn xác, ngữ điệu tự nhiên" },
              { criteria: "Fluency & Response", points: 0.35, desc: "Trả lời lưu loát, phản xạ tốt" },
              { criteria: "Grammar & Vocabulary", points: 0.3, desc: "Dùng từ chính xác theo chủ điểm Term 2" }
            ]
          }
        }
      }
    }
  }
};

module.exports = ENGLISH_CURRICULUM_BANK;
