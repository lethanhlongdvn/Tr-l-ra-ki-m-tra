/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG ANH LỚP 5 (GLOBAL SUCCESS)
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Tổng chủ biên: Hoàng Văn Vân
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIENG_ANH_5_DATA = {
    metadata: {
      grade: 5,
      subjectId: 'tieng_anh',
      subjectName: 'Tiếng Anh',
      bookName: 'Tiếng Anh 5 Global Success - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 140,
      volumes: [
        { volume: 1, name: 'Global Success 5 - Student\'s Book 1 (Units 1 - 10)', weeks: '1-18' },
        { volume: 2, name: 'Global Success 5 - Student\'s Book 2 (Units 11 - 20)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'eng5_term1_p1', name: 'Term 1 - Part 1: Me and My Friends (Units 1 - 5)', semester: 1, weeks: '1-10' },
      { id: 'eng5_term1_p2', name: 'Term 1 - Part 2: Me and My School (Units 6 - 10)', semester: 1, weeks: '11-18' },
      { id: 'eng5_term2_p1', name: 'Term 2 - Part 1: Me and My Family & Health (Units 11 - 15)', semester: 2, weeks: '19-27' },
      { id: 'eng5_term2_p2', name: 'Term 2 - Part 2: Me and The World Around (Units 16 - 20)', semester: 2, weeks: '28-35' }
    ],
    lessons: [
      {
        id: 'eng5_u1',
        unitNumber: '1',
        title: 'Unit 1: All about me',
        topic: 'Personal information & appearances',
        volume: 1,
        semester: 1,
        week: 1,
        vocabulary: 'tall, short, slim, big, cute, friendly, address, hometown',
        sentencePatterns: 'What does he/she look like? - He\\\'s/She\\\'s tall/slim.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 1: All about me":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 1: All about me.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What does he/she look like?" -> "_______"',
            options: ['He\\\'s/She\\\'s tall/slim.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 1: All about me.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 1: All about me" using learned sentence patterns (What does he/she look like? - He\\\'s/She\\\'s tall/slim.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u2',
        unitNumber: '2',
        title: 'Unit 2: Our homes',
        topic: 'Homes and living environments',
        volume: 1,
        semester: 1,
        week: 3,
        vocabulary: 'flat, tower, floor, lane, street, avenue, village, quiet, crowded',
        sentencePatterns: 'Where do you live? - I live in/at... What is your address?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 2: Our homes":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 2: Our homes.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where do you live?" -> "_______"',
            options: ['I live in/at... What is your address?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 2: Our homes.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 2: Our homes" using learned sentence patterns (Where do you live? - I live in/at... What is your address?).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u3',
        unitNumber: '3',
        title: 'Unit 3: My foreign friends',
        topic: 'Nationalities & countries',
        volume: 1,
        semester: 1,
        week: 5,
        vocabulary: 'American, Australian, British, Japanese, Malaysian, Vietnamese, Singaporean',
        sentencePatterns: 'Where is he/she from? - He/She is from... What nationality is he/she?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 3: My foreign friends":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 3: My foreign friends.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where is he/she from?" -> "_______"',
            options: ['He/She is from... What nationality is he/she?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 3: My foreign friends.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 3: My foreign friends" using learned sentence patterns (Where is he/she from? - He/She is from... What nationality is he/she?).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u4',
        unitNumber: '4',
        title: 'Unit 4: Our free-time activities',
        topic: 'Hobbies and leisure',
        volume: 1,
        semester: 1,
        week: 7,
        vocabulary: 'surf the Internet, go skateboarding, do karate, read comic books, go camping',
        sentencePatterns: 'What do you do in your free time? - I often surf the Internet/draw pictures.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 4: Our free-time activities":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 4: Our free-time activities.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What do you do in your free time?" -> "_______"',
            options: ['I often surf the Internet/draw pictures.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 4: Our free-time activities.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 4: Our free-time activities" using learned sentence patterns (What do you do in your free time? - I often surf the Internet/draw pictures.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u5',
        unitNumber: '5',
        title: 'Unit 5: My future job',
        topic: 'Future dreams & professions',
        volume: 1,
        semester: 1,
        week: 9,
        vocabulary: 'doctor, architect, pilot, writer, engineer, teacher, astronaut, artist',
        sentencePatterns: 'What would you like to be in the future? - I\\\'d like to be a/an...',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 5: My future job":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 5: My future job.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What would you like to be in the future?" -> "_______"',
            options: ['I\\\'d like to be a/an...', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 5: My future job.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 5: My future job" using learned sentence patterns (What would you like to be in the future? - I\\\'d like to be a/an...).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u6',
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
            question: 'Write 3-4 sentences about the topic of "Review 1 & Mid-term Test 1" using learned sentence patterns (Revision of structures Units 1-5).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u7',
        unitNumber: '6',
        title: 'Unit 6: Our school rooms',
        topic: 'School facilities & locations',
        volume: 1,
        semester: 1,
        week: 11,
        vocabulary: 'computer room, science lab, library, music room, gym, art room, ground floor',
        sentencePatterns: 'Where is the computer room? - It\\\'s on the first/second floor.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 6: Our school rooms":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 6: Our school rooms.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where is the computer room?" -> "_______"',
            options: ['It\\\'s on the first/second floor.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 6: Our school rooms.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 6: Our school rooms" using learned sentence patterns (Where is the computer room? - It\\\'s on the first/second floor.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u8',
        unitNumber: '7',
        title: 'Unit 7: Our favourite school activities',
        topic: 'School activities & preferences',
        volume: 1,
        semester: 1,
        week: 13,
        vocabulary: 'playing chess, doing projects, singing songs, playing sports, reading books',
        sentencePatterns: 'What school activity do you like? - I like doing science projects/playing chess.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 7: Our favourite school activities":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 7: Our favourite school activities.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What school activity do you like?" -> "_______"',
            options: ['I like doing science projects/playing chess.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 7: Our favourite school activities.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 7: Our favourite school activities" using learned sentence patterns (What school activity do you like? - I like doing science projects/playing chess.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u9',
        unitNumber: '8',
        title: 'Unit 8: School subjects',
        topic: 'Timetable & favorite subjects',
        volume: 1,
        semester: 1,
        week: 15,
        vocabulary: 'Maths, Science, IT, PE, Art, Music, Vietnamese, English, History and Geography',
        sentencePatterns: 'How often do you have English? - I have it four times a week.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 8: School subjects":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 8: School subjects.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "How often do you have English?" -> "_______"',
            options: ['I have it four times a week.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 8: School subjects.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 8: School subjects" using learned sentence patterns (How often do you have English? - I have it four times a week.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u10',
        unitNumber: '9',
        title: 'Unit 9: Our outdoor activities',
        topic: 'Outdoor fun & sports',
        volume: 1,
        semester: 1,
        week: 16,
        vocabulary: 'at the seaside, in the countryside, by the lake, in the mountains, play badminton',
        sentencePatterns: 'Were you in the countryside last weekend? - Yes, I was. / No, I wasn\\\'t.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 9: Our outdoor activities":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 9: Our outdoor activities.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Were you in the countryside last weekend?" -> "_______"',
            options: ['Yes, I was. / No, I wasn\\\'t.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 9: Our outdoor activities.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 9: Our outdoor activities" using learned sentence patterns (Were you in the countryside last weekend? - Yes, I was. / No, I wasn\\\'t.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u11',
        unitNumber: '10',
        title: 'Unit 10: Our school trip',
        topic: 'School trips & past experiences',
        volume: 1,
        semester: 1,
        week: 17,
        vocabulary: 'zoo, museum, botanical garden, water park, ancient town, national park',
        sentencePatterns: 'Where did you go on your school trip? - I went to...',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 10: Our school trip":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 10: Our school trip.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where did you go on your school trip?" -> "_______"',
            options: ['I went to...', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 10: Our school trip.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 10: Our school trip" using learned sentence patterns (Where did you go on your school trip? - I went to...).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u12',
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
            question: 'Write 3-4 sentences about the topic of "Review 2 & Term 1 Exam" using learned sentence patterns (Revision of structures Units 6-10).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u13',
        unitNumber: '11',
        title: 'Unit 11: Family time',
        topic: 'Family activities & routines',
        volume: 2,
        semester: 2,
        week: 19,
        vocabulary: 'visit grandparents, watch TV together, go for a picnic, cook meals, clean house',
        sentencePatterns: 'What does your family usually do on Sundays? - We visit our grandparents.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 11: Family time":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 11: Family time.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What does your family usually do on Sundays?" -> "_______"',
            options: ['We visit our grandparents.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 11: Family time.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 11: Family time" using learned sentence patterns (What does your family usually do on Sundays? - We visit our grandparents.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u14',
        unitNumber: '12',
        title: 'Unit 12: Our health',
        topic: 'Health problems & remedies',
        volume: 2,
        semester: 2,
        week: 21,
        vocabulary: 'headache, fever, toothache, stomach ache, sore throat, backache, rest, doctor',
        sentencePatterns: 'What\\\'s the matter with you? - I have a headache/toothache/stomach ache.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 12: Our health":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 12: Our health.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What\\\'s the matter with you?" -> "_______"',
            options: ['I have a headache/toothache/stomach ache.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 12: Our health.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 12: Our health" using learned sentence patterns (What\\\'s the matter with you? - I have a headache/toothache/stomach ache.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u15',
        unitNumber: '13',
        title: 'Unit 13: Daily activities',
        topic: 'Habits & frequencies',
        volume: 2,
        semester: 2,
        week: 23,
        vocabulary: 'get up early, do morning exercise, brush teeth, wash face, have breakfast',
        sentencePatterns: 'What time do you usually get up? How often do you brush your teeth?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 13: Daily activities":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 13: Daily activities.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What time do you usually get up? How often do you brush your teeth?" -> "_______"',
            options: ['Appropriate response', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 13: Daily activities.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 13: Daily activities" using learned sentence patterns (What time do you usually get up? How often do you brush your teeth?).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u16',
        unitNumber: '14',
        title: 'Unit 14: Staying healthy',
        topic: 'Healthy habits & diet',
        volume: 2,
        semester: 2,
        week: 25,
        vocabulary: 'fresh vegetables, fruit, water, sleep early, exercise, junk food, sweets',
        sentencePatterns: 'You should eat lots of fruit and vegetables. You shouldn\\\'t eat too much junk food.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 14: Staying healthy":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 14: Staying healthy.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "You should eat lots of fruit and vegetables. You shouldn\\\'t eat too much junk food." -> "_______"',
            options: ['Appropriate response', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 14: Staying healthy.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 14: Staying healthy" using learned sentence patterns (You should eat lots of fruit and vegetables. You shouldn\\\'t eat too much junk food.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u17',
        unitNumber: '15',
        title: 'Unit 15: What would you like to eat?',
        topic: 'Food, drinks & quantities',
        volume: 2,
        semester: 2,
        week: 26,
        vocabulary: 'noodles, rice, beef, chicken, orange juice, milk, lemonade, a packet of biscuits',
        sentencePatterns: 'What would you like to eat/drink? - I\\\'d like a bowl of noodles / a glass of milk.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 15: What would you like to eat?":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 15: What would you like to eat?.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What would you like to eat/drink?" -> "_______"',
            options: ['I\\\'d like a bowl of noodles / a glass of milk.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 15: What would you like to eat?.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 15: What would you like to eat?" using learned sentence patterns (What would you like to eat/drink? - I\\\'d like a bowl of noodles / a glass of milk.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u18',
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
            question: 'Write 3-4 sentences about the topic of "Review 3 & Mid-term Test 2" using learned sentence patterns (Revision of structures Units 11-15).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u19',
        unitNumber: '16',
        title: 'Unit 16: Seasons and the weather',
        topic: 'Weather conditions & seasons',
        volume: 2,
        semester: 2,
        week: 28,
        vocabulary: 'spring, summer, autumn, winter, sunny, rainy, windy, foggy, snowy, hot, cold',
        sentencePatterns: 'What\\\'s the weather like in spring/summer? - It\\\'s warm and sunny.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 16: Seasons and the weather":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 16: Seasons and the weather.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What\\\'s the weather like in spring/summer?" -> "_______"',
            options: ['It\\\'s warm and sunny.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 16: Seasons and the weather.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 16: Seasons and the weather" using learned sentence patterns (What\\\'s the weather like in spring/summer? - It\\\'s warm and sunny.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u20',
        unitNumber: '17',
        title: 'Unit 17: Stories for children',
        topic: 'Fairy tales & character traits',
        volume: 2,
        semester: 2,
        week: 30,
        vocabulary: 'The Fox and the Crow, Snow White, Tam Cam, kind, clever, brave, greedy',
        sentencePatterns: 'What is the main character like? - He/She is kind/brave/clever/hardworking.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 17: Stories for children":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 17: Stories for children.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What is the main character like?" -> "_______"',
            options: ['He/She is kind/brave/clever/hardworking.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 17: Stories for children.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 17: Stories for children" using learned sentence patterns (What is the main character like? - He/She is kind/brave/clever/hardworking.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u21',
        unitNumber: '18',
        title: 'Unit 18: Means of transport',
        topic: 'Transportation & directions',
        volume: 2,
        semester: 2,
        week: 32,
        vocabulary: 'plane, train, bus, motorbike, boat, coach, taxi, underground, station',
        sentencePatterns: 'How can I get to Phu Quoc Island? - You can go by plane/boat.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 18: Means of transport":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 18: Means of transport.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "How can I get to Phu Quoc Island?" -> "_______"',
            options: ['You can go by plane/boat.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 18: Means of transport.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 18: Means of transport" using learned sentence patterns (How can I get to Phu Quoc Island? - You can go by plane/boat.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u22',
        unitNumber: '19',
        title: 'Unit 19: Places of interest',
        topic: 'Famous attractions & opinions',
        volume: 2,
        semester: 2,
        week: 33,
        vocabulary: 'Ha Long Bay, Ba Dinh Square, Hoan Kiem Lake, Ben Thanh Market, beautiful, peaceful',
        sentencePatterns: 'Which place would you like to visit: Ha Long Bay or Nha Trang? - I\\\'d like to visit...',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 19: Places of interest":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 19: Places of interest.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Which place would you like to visit: Ha Long Bay or Nha Trang?" -> "_______"',
            options: ['I\\\'d like to visit...', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 19: Places of interest.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 19: Places of interest" using learned sentence patterns (Which place would you like to visit: Ha Long Bay or Nha Trang? - I\\\'d like to visit...).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u23',
        unitNumber: '20',
        title: 'Unit 20: Our summer holiday',
        topic: 'Summer plans & vacation',
        volume: 2,
        semester: 2,
        week: 34,
        vocabulary: 'swim in the sea, build sandcastles, eat seafood, take photos, visit attractions',
        sentencePatterns: 'Where are you going this summer? - I\\\'m going to Da Nang. What are you going to do there?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 20: Our summer holiday":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 20: Our summer holiday.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where are you going this summer?" -> "_______"',
            options: ['I\\\'m going to Da Nang. What are you going to do there?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 20: Our summer holiday.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 20: Our summer holiday" using learned sentence patterns (Where are you going this summer? - I\\\'m going to Da Nang. What are you going to do there?).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng5_u24',
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
            question: 'Write 3-4 sentences about the topic of "Review 4 & Final Exam" using learned sentence patterns (Full Year Revision).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIENG_ANH_5 = TIENG_ANH_5_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'tieng_anh', TIENG_ANH_5_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_ANH_5_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
