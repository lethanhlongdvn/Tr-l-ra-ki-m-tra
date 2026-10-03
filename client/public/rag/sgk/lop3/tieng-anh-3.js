/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG ANH LỚP 3 (GLOBAL SUCCESS)
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Tổng chủ biên: Hoàng Văn Vân
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIENG_ANH_3_DATA = {
    metadata: {
      grade: 3,
      subjectId: 'tieng_anh',
      subjectName: 'Tiếng Anh',
      bookName: 'Tiếng Anh 3 Global Success - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 140,
      volumes: [
        { volume: 1, name: 'Global Success 3 - Student\'s Book 1 (Units 1 - 10)', weeks: '1-18' },
        { volume: 2, name: 'Global Success 3 - Student\'s Book 2 (Units 11 - 20)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'eng3_term1_p1', name: 'Term 1 - Part 1: Me and My Friends (Units 1 - 5)', semester: 1, weeks: '1-10' },
      { id: 'eng3_term1_p2', name: 'Term 1 - Part 2: Me and My School (Units 6 - 10)', semester: 1, weeks: '11-18' },
      { id: 'eng3_term2_p1', name: 'Term 2 - Part 1: Me and My Family & House (Units 11 - 15)', semester: 2, weeks: '19-27' },
      { id: 'eng3_term2_p2', name: 'Term 2 - Part 2: Me and The World Around (Units 16 - 20)', semester: 2, weeks: '28-35' }
    ],
    lessons: [
      {
        id: 'eng3_u1',
        unitNumber: '1',
        title: 'Unit 1: Hello',
        topic: 'Greetings and introductions',
        volume: 1,
        semester: 1,
        week: 1,
        vocabulary: 'hello, hi, I, you, fine, thank you, goodbye, bye',
        sentencePatterns: 'Hello / Hi, I\\\'m... How are you? - I\\\'m fine, thanks.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 1: Hello":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 1: Hello.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Hello / Hi, I\\\'m... How are you?" -> "_______"',
            options: ['I\\\'m fine, thanks.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 1: Hello.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 1: Hello" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u2',
        unitNumber: '2',
        title: 'Unit 2: Our names',
        topic: 'Asking and spelling names',
        volume: 1,
        semester: 1,
        week: 3,
        vocabulary: 'name, spell, alphabet letters, what, my, your',
        sentencePatterns: 'What\\\'s your name? - My name is... How do you spell your name?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 2: Our names":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 2: Our names.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What\\\'s your name?" -> "_______"',
            options: ['My name is... How do you spell your name?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 2: Our names.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 2: Our names" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u3',
        unitNumber: '3',
        title: 'Unit 3: Our friends',
        topic: 'Introducing friends',
        volume: 1,
        semester: 1,
        week: 5,
        vocabulary: 'friend, this, that, yes, no, teacher, classmate',
        sentencePatterns: 'This is... / That is... Is this / that your friend? - Yes, it is. / No, it isn\\\'t.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 3: Our friends":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 3: Our friends.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "This is... / That is... Is this / that your friend?" -> "_______"',
            options: ['Yes, it is. / No, it isn\\\'t.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 3: Our friends.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 3: Our friends" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u4',
        unitNumber: '4',
        title: 'Unit 4: Our bodies',
        topic: 'Parts of the body',
        volume: 1,
        semester: 1,
        week: 7,
        vocabulary: 'eye, nose, mouth, ear, face, hand, arm, leg, foot, hair, touch',
        sentencePatterns: 'What is this? - It\\\'s an eye/a nose. Touch your hair/face.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 4: Our bodies":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 4: Our bodies.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What is this?" -> "_______"',
            options: ['It\\\'s an eye/a nose. Touch your hair/face.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 4: Our bodies.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 4: Our bodies" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u5',
        unitNumber: '5',
        title: 'Unit 5: My hobbies',
        topic: 'Hobbies and activities',
        volume: 1,
        semester: 1,
        week: 9,
        vocabulary: 'singing, dancing, drawing, reading, cooking, swimming, running',
        sentencePatterns: 'What is your hobby? - It\\\'s singing/dancing/drawing.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 5: My hobbies":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 5: My hobbies.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What is your hobby?" -> "_______"',
            options: ['It\\\'s singing/dancing/drawing.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 5: My hobbies.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 5: My hobbies" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u6',
        unitNumber: 'R1',
        title: 'Review 1 & Mid-term Test 1',
        topic: 'Review Units 1 - 5',
        volume: 1,
        semester: 1,
        week: 10,
        vocabulary: 'Comprehensive vocabulary Units 1-5',
        sentencePatterns: 'Revision of structures Units 1-5',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Review 1 & Mid-term Test 1":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Review 1 & Mid-term Test 1.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Revision of structures Units 1" -> "_______"',
            options: ['5', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Review 1 & Mid-term Test 1.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Review 1 & Mid-term Test 1" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u7',
        unitNumber: '6',
        title: 'Unit 6: Our school',
        topic: 'School places and buildings',
        volume: 1,
        semester: 1,
        week: 11,
        vocabulary: 'school, classroom, library, playground, music room, gym, art room, computer room',
        sentencePatterns: 'Is this our school/library? - Yes, it is. / No, it isn\\\'t. Let\\\'s go to the playground.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 6: Our school":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 6: Our school.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Is this our school/library?" -> "_______"',
            options: ['Yes, it is. / No, it isn\\\'t. Let\\\'s go to the playground.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 6: Our school.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 6: Our school" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u8',
        unitNumber: '7',
        title: 'Unit 7: Classroom instructions',
        topic: 'Classroom commands & rules',
        volume: 1,
        semester: 1,
        week: 13,
        vocabulary: 'open, close, stand up, sit down, ask, speak, come in, go out',
        sentencePatterns: 'Open your book. / Close your book. May I come in? - Yes, you can. / No, you can\\\'t.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 7: Classroom instructions":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 7: Classroom instructions.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Open your book. / Close your book. May I come in?" -> "_______"',
            options: ['Yes, you can. / No, you can\\\'t.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 7: Classroom instructions.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 7: Classroom instructions" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u9',
        unitNumber: '8',
        title: 'Unit 8: My school things',
        topic: 'School stationery items',
        volume: 1,
        semester: 1,
        week: 15,
        vocabulary: 'pen, pencil, ruler, eraser, pencil case, school bag, book, notebook',
        sentencePatterns: 'I have a pen/ruler. Do you have a pencil? - Yes, I do. / No, I don\\\'t.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 8: My school things":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 8: My school things.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "I have a pen/ruler. Do you have a pencil?" -> "_______"',
            options: ['Yes, I do. / No, I don\\\'t.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 8: My school things.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 8: My school things" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u10',
        unitNumber: '9',
        title: 'Unit 9: Colours',
        topic: 'Colours of objects',
        volume: 1,
        semester: 1,
        week: 16,
        vocabulary: 'red, blue, yellow, green, orange, purple, brown, black, white, pink',
        sentencePatterns: 'What colour is it? - It\\\'s red/blue. What colour are they? - They\\\'re yellow.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 9: Colours":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 9: Colours.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What colour is it?" -> "_______"',
            options: ['It\\\'s red/blue. What colour are they?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 9: Colours.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 9: Colours" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u11',
        unitNumber: '10',
        title: 'Unit 10: Break time activities',
        topic: 'Games at break time',
        volume: 1,
        semester: 1,
        week: 17,
        vocabulary: 'break time, badminton, football, basketball, table tennis, chess, hide-and-seek',
        sentencePatterns: 'What do you do at break time? - I play badminton/football/chess.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 10: Break time activities":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 10: Break time activities.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What do you do at break time?" -> "_______"',
            options: ['I play badminton/football/chess.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 10: Break time activities.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 10: Break time activities" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u12',
        unitNumber: 'R2',
        title: 'Review 2 & Term 1 Exam',
        topic: 'Review Units 6 - 10',
        volume: 1,
        semester: 1,
        week: 18,
        vocabulary: 'Comprehensive vocabulary Units 6-10',
        sentencePatterns: 'Revision of structures Units 6-10',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Review 2 & Term 1 Exam":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Review 2 & Term 1 Exam.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Revision of structures Units 6" -> "_______"',
            options: ['10', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Review 2 & Term 1 Exam.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Review 2 & Term 1 Exam" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u13',
        unitNumber: '11',
        title: 'Unit 11: My family',
        topic: 'Family members & ages',
        volume: 2,
        semester: 2,
        week: 19,
        vocabulary: 'grandfather, grandmother, father, mother, brother, sister, numbers 1-50',
        sentencePatterns: 'Who is that? - That\\\'s my father/mother. How old is he/she? - He\\\'s/She\\\'s thirty.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 11: My family":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 11: My family.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Who is that?" -> "_______"',
            options: ['That\\\'s my father/mother. How old is he/she?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 11: My family.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 11: My family" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u14',
        unitNumber: '12',
        title: 'Unit 12: Jobs',
        topic: 'Occupations in the family',
        volume: 2,
        semester: 2,
        week: 21,
        vocabulary: 'doctor, nurse, teacher, worker, driver, farmer, singer, cook',
        sentencePatterns: 'What does your father/mother do? - He\\\'s a doctor. / She\\\'s a teacher.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 12: Jobs":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 12: Jobs.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What does your father/mother do?" -> "_______"',
            options: ['He\\\'s a doctor. / She\\\'s a teacher.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 12: Jobs.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 12: Jobs" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u15',
        unitNumber: '13',
        title: 'Unit 13: My house',
        topic: 'Rooms and places in the house',
        volume: 2,
        semester: 2,
        week: 23,
        vocabulary: 'living room, bedroom, kitchen, bathroom, hall, dining room, garden, pond, tree',
        sentencePatterns: 'Where is the bedroom/kitchen? - It\\\'s here/there. Is there a pond? - Yes, there is.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 13: My house":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 13: My house.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where is the bedroom/kitchen?" -> "_______"',
            options: ['It\\\'s here/there. Is there a pond?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 13: My house.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 13: My house" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u16',
        unitNumber: '14',
        title: 'Unit 14: My bedroom',
        topic: 'Furniture and items in the room',
        volume: 2,
        semester: 2,
        week: 25,
        vocabulary: 'bed, desk, chair, door, window, picture, ball, fan, in, on, under, near',
        sentencePatterns: 'Where is the bed/desk? - It\\\'s on/under/near the window. Where are the balls?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 14: My bedroom":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 14: My bedroom.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where is the bed/desk?" -> "_______"',
            options: ['It\\\'s on/under/near the window. Where are the balls?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 14: My bedroom.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 14: My bedroom" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u17',
        unitNumber: '15',
        title: 'Unit 15: At the dining table',
        topic: 'Food, drinks and preferences',
        volume: 2,
        semester: 2,
        week: 26,
        vocabulary: 'bread, rice, fish, meat, chicken, eggs, milk, water, orange juice, tea',
        sentencePatterns: 'Would you like some bread/milk? - Yes, please. / No, thanks.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 15: At the dining table":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 15: At the dining table.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Would you like some bread/milk?" -> "_______"',
            options: ['Yes, please. / No, thanks.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 15: At the dining table.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 15: At the dining table" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u18',
        unitNumber: 'R3',
        title: 'Review 3 & Mid-term Test 2',
        topic: 'Review Units 11 - 15',
        volume: 2,
        semester: 2,
        week: 27,
        vocabulary: 'Comprehensive vocabulary Units 11-15',
        sentencePatterns: 'Revision of structures Units 11-15',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Review 3 & Mid-term Test 2":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Review 3 & Mid-term Test 2.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Revision of structures Units 11" -> "_______"',
            options: ['15', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Review 3 & Mid-term Test 2.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Review 3 & Mid-term Test 2" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u19',
        unitNumber: '16',
        title: 'Unit 16: My pets',
        topic: 'Pets and animals at home',
        volume: 2,
        semester: 2,
        week: 28,
        vocabulary: 'dog, cat, bird, rabbit, goldfish, parrot, mouse, have, how many',
        sentencePatterns: 'Do you have any cats/dogs? - Yes, I do. / No, I don\\\'t. How many birds do you have?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 16: My pets":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 16: My pets.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Do you have any cats/dogs?" -> "_______"',
            options: ['Yes, I do. / No, I don\\\'t. How many birds do you have?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 16: My pets.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 16: My pets" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u20',
        unitNumber: '17',
        title: 'Unit 17: Our toys',
        topic: 'Toys and quantities',
        volume: 2,
        semester: 2,
        week: 30,
        vocabulary: 'doll, car, robot, ball, puzzle, yo-yo, kite, plane, ship, truck, train',
        sentencePatterns: 'What toys do you have? - I have a teddy bear / a car. Where are the kites?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 17: Our toys":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 17: Our toys.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What toys do you have?" -> "_______"',
            options: ['I have a teddy bear / a car. Where are the kites?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 17: Our toys.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 17: Our toys" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u21',
        unitNumber: '18',
        title: 'Unit 18: Playing and doing',
        topic: 'Actions happening now (Present Continuous)',
        volume: 2,
        semester: 2,
        week: 32,
        vocabulary: 'drawing, singing, dancing, reading, cooking, listening to music, watching TV',
        sentencePatterns: 'What are you doing? - I\\\'m drawing/singing. What is he/she doing? - He\\\'s reading.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 18: Playing and doing":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 18: Playing and doing.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What are you doing?" -> "_______"',
            options: ['I\\\'m drawing/singing. What is he/she doing?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 18: Playing and doing.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 18: Playing and doing" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u22',
        unitNumber: '19',
        title: 'Unit 19: Outdoor activities',
        topic: 'Activities in the park & outdoor',
        volume: 2,
        semester: 2,
        week: 33,
        vocabulary: 'cycling, skating, walking, running, skipping, playing football, in the park',
        sentencePatterns: 'What are they doing in the park? - They\\\'re cycling/skating/flying kites.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 19: Outdoor activities":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 19: Outdoor activities.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What are they doing in the park?" -> "_______"',
            options: ['They\\\'re cycling/skating/flying kites.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 19: Outdoor activities.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 19: Outdoor activities" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u23',
        unitNumber: '20',
        title: 'Unit 20: At the zoo',
        topic: 'Zoo animals and actions',
        volume: 2,
        semester: 2,
        week: 34,
        vocabulary: 'monkey, tiger, elephant, bear, zebra, lion, kangaroo, climb, jump, swing',
        sentencePatterns: 'What can you see at the zoo? - I can see a tiger/monkey. What is the monkey doing?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 20: At the zoo":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 20: At the zoo.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What can you see at the zoo?" -> "_______"',
            options: ['I can see a tiger/monkey. What is the monkey doing?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 20: At the zoo.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Unit 20: At the zoo" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
      {
        id: 'eng3_u24',
        unitNumber: 'R4',
        title: 'Review 4 & Final Exam',
        topic: 'Review Units 16 - 20 & Whole Year',
        volume: 2,
        semester: 2,
        week: 35,
        vocabulary: 'Full Year Vocabulary Revision',
        sentencePatterns: 'Full Year Revision',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Review 4 & Final Exam":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Review 4 & Final Exam.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Full Year Revision" -> "_______"',
            options: ['Appropriate response', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Review 4 & Final Exam.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 2-3 short sentences about the topic of "Review 4 & Final Exam" using learned words.',
            guide: 'Write simple sentences with correct spelling and punctuation.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIENG_ANH_3 = TIENG_ANH_3_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(3, 'tieng_anh', TIENG_ANH_3_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_ANH_3_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
