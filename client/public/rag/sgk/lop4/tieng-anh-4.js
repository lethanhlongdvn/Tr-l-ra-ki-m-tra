/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG ANH LỚP 4 (GLOBAL SUCCESS)
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Tổng chủ biên: Hoàng Văn Vân
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIENG_ANH_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'tieng_anh',
      subjectName: 'Tiếng Anh',
      bookName: 'Tiếng Anh 4 Global Success - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 140,
      volumes: [
        { volume: 1, name: 'Global Success 4 - Student\'s Book 1 (Units 1 - 10)', weeks: '1-18' },
        { volume: 2, name: 'Global Success 4 - Student\'s Book 2 (Units 11 - 20)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'eng4_term1_p1', name: 'Term 1 - Part 1: Me and My Friends (Units 1 - 5)', semester: 1, weeks: '1-10' },
      { id: 'eng4_term1_p2', name: 'Term 1 - Part 2: Me and My School (Units 6 - 10)', semester: 1, weeks: '11-18' },
      { id: 'eng4_term2_p1', name: 'Term 2 - Part 1: Me and My Family (Units 11 - 15)', semester: 2, weeks: '19-27' },
      { id: 'eng4_term2_p2', name: 'Term 2 - Part 2: Me and The World Around (Units 16 - 20)', semester: 2, weeks: '28-35' }
    ],
    lessons: [
      {
        id: 'eng4_u1',
        unitNumber: '1',
        title: 'Unit 1: My friends',
        topic: 'Friends and nationalities',
        volume: 1,
        semester: 1,
        week: 1,
        vocabulary: 'Vietnam, America, Britain, Australia, Japan, friend, teacher',
        sentencePatterns: 'Where are you from? - I\\\'m from Vietnam/America/Australia.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 1: My friends":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 1: My friends.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where are you from?" -> "_______"',
            options: ['I\\\'m from Vietnam/America/Australia.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 1: My friends.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 1: My friends" using learned sentence patterns (Where are you from? - I\\\'m from Vietnam/America/Australia.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u2',
        unitNumber: '2',
        title: 'Unit 2: Time and daily routines',
        topic: 'Telling time and morning routines',
        volume: 1,
        semester: 1,
        week: 3,
        vocabulary: 'o\\\'clock, half past, get up, have breakfast, go to school, wash face',
        sentencePatterns: 'What time is it? - It\\\'s seven o\\\'clock. What time do you get up? - I get up at six o\\\'clock.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 2: Time and daily routines":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 2: Time and daily routines.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What time is it?" -> "_______"',
            options: ['It\\\'s seven o\\\'clock. What time do you get up?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 2: Time and daily routines.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 2: Time and daily routines" using learned sentence patterns (What time is it? - It\\\'s seven o\\\'clock. What time do you get up? - I get up at six o\\\'clock.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u3',
        unitNumber: '3',
        title: 'Unit 3: My week',
        topic: 'Days of the week & weekly routines',
        volume: 1,
        semester: 1,
        week: 5,
        vocabulary: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, weekend',
        sentencePatterns: 'What day is it today? - It\\\'s Monday. What do you do on Mondays? - I study at school.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 3: My week":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 3: My week.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What day is it today?" -> "_______"',
            options: ['It\\\'s Monday. What do you do on Mondays?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 3: My week.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 3: My week" using learned sentence patterns (What day is it today? - It\\\'s Monday. What do you do on Mondays? - I study at school.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u4',
        unitNumber: '4',
        title: 'Unit 4: My birthday party',
        topic: 'Months and birthdays',
        volume: 1,
        semester: 1,
        week: 7,
        vocabulary: 'January, February, March, April, May, June, July, August, September, October, November, December, chips, fruit juice',
        sentencePatterns: 'When is your birthday? - It\\\'s in May. What do you want to eat/drink?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 4: My birthday party":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 4: My birthday party.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "When is your birthday?" -> "_______"',
            options: ['It\\\'s in May. What do you want to eat/drink?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 4: My birthday party.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 4: My birthday party" using learned sentence patterns (When is your birthday? - It\\\'s in May. What do you want to eat/drink?).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u5',
        unitNumber: '5',
        title: 'Unit 5: Things we can do',
        topic: 'Abilities and talents',
        volume: 1,
        semester: 1,
        week: 9,
        vocabulary: 'swim, dance, sing, draw, ride a bike, play the piano, play football',
        sentencePatterns: 'Can you swim/play the guitar? - Yes, I can. / No, I can\\\'t.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 5: Things we can do":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 5: Things we can do.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Can you swim/play the guitar?" -> "_______"',
            options: ['Yes, I can. / No, I can\\\'t.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 5: Things we can do.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 5: Things we can do" using learned sentence patterns (Can you swim/play the guitar? - Yes, I can. / No, I can\\\'t.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u6',
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
        id: 'eng4_u7',
        unitNumber: '6',
        title: 'Unit 6: Our school subjects',
        topic: 'School subjects & preferences',
        volume: 1,
        semester: 1,
        week: 11,
        vocabulary: 'Maths, Vietnamese, English, Science, IT, Music, Art, PE, History and Geography',
        sentencePatterns: 'What subjects do you have today? - I have Maths, Art and English.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 6: Our school subjects":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 6: Our school subjects.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What subjects do you have today?" -> "_______"',
            options: ['I have Maths, Art and English.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 6: Our school subjects.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 6: Our school subjects" using learned sentence patterns (What subjects do you have today? - I have Maths, Art and English.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u8',
        unitNumber: '7',
        title: 'Unit 7: Our timetables',
        topic: 'Timetables & lesson schedules',
        volume: 1,
        semester: 1,
        week: 13,
        vocabulary: 'timetable, every day, once a week, twice a week, three times a week',
        sentencePatterns: 'When do you have English? - I have it on Mondays and Wednesdays.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 7: Our timetables":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 7: Our timetables.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "When do you have English?" -> "_______"',
            options: ['I have it on Mondays and Wednesdays.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 7: Our timetables.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 7: Our timetables" using learned sentence patterns (When do you have English? - I have it on Mondays and Wednesdays.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u9',
        unitNumber: '8',
        title: 'Unit 8: My favourite subjects',
        topic: 'Favorite subjects and reasons',
        volume: 1,
        semester: 1,
        week: 15,
        vocabulary: 'favourite, because, like singing, like numbers, like science experiments',
        sentencePatterns: 'What is your favourite subject? - It\\\'s Art because I like drawing.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 8: My favourite subjects":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 8: My favourite subjects.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What is your favourite subject?" -> "_______"',
            options: ['It\\\'s Art because I like drawing.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 8: My favourite subjects.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 8: My favourite subjects" using learned sentence patterns (What is your favourite subject? - It\\\'s Art because I like drawing.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u10',
        unitNumber: '9',
        title: 'Unit 9: Our sports day',
        topic: 'Sports day & athletic events',
        volume: 1,
        semester: 1,
        week: 16,
        vocabulary: 'Sports Day, Teachers\\\' Day, Children\\\'s Day, play table tennis, run, jump',
        sentencePatterns: 'When is Sports Day? - It\\\'s in November. What are you going to do?',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 9: Our sports day":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 9: Our sports day.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "When is Sports Day?" -> "_______"',
            options: ['It\\\'s in November. What are you going to do?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 9: Our sports day.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 9: Our sports day" using learned sentence patterns (When is Sports Day? - It\\\'s in November. What are you going to do?).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u11',
        unitNumber: '10',
        title: 'Unit 10: Our school sports day',
        topic: 'Activities on sports day',
        volume: 1,
        semester: 1,
        week: 17,
        vocabulary: 'play badminton, play basketball, tug of war, skipping, cheering',
        sentencePatterns: 'What are they doing? - They are playing badminton/basketball.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 10: Our school sports day":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 10: Our school sports day.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What are they doing?" -> "_______"',
            options: ['They are playing badminton/basketball.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 10: Our school sports day.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 10: Our school sports day" using learned sentence patterns (What are they doing? - They are playing badminton/basketball.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u12',
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
        id: 'eng4_u13',
        unitNumber: '11',
        title: 'Unit 11: My home',
        topic: 'Rooms and furniture in the house',
        volume: 2,
        semester: 2,
        week: 19,
        vocabulary: 'living room, bedroom, kitchen, bathroom, sofa, lamp, table, chair, picture',
        sentencePatterns: 'Where is the sofa/lamp? - It\\\'s in the living room / next to the table.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 11: My home":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 11: My home.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where is the sofa/lamp?" -> "_______"',
            options: ['It\\\'s in the living room / next to the table.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 11: My home.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 11: My home" using learned sentence patterns (Where is the sofa/lamp? - It\\\'s in the living room / next to the table.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u14',
        unitNumber: '12',
        title: 'Unit 12: Jobs',
        topic: 'Occupations and workplaces',
        volume: 2,
        semester: 2,
        week: 21,
        vocabulary: 'doctor, nurse, farmer, worker, driver, teacher, hospital, factory, farm',
        sentencePatterns: 'What does your father/mother do? - He\\\'s a doctor. Where does he work? - In a hospital.',
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
            options: ['He\\\'s a doctor. Where does he work?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 12: Jobs.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 12: Jobs" using learned sentence patterns (What does your father/mother do? - He\\\'s a doctor. Where does he work? - In a hospital.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u15',
        unitNumber: '13',
        title: 'Unit 13: Appearance',
        topic: 'Physical appearances & descriptions',
        volume: 2,
        semester: 2,
        week: 23,
        vocabulary: 'tall, short, slim, big, young, old, long hair, short hair, round face',
        sentencePatterns: 'What does he/she look like? - He\\\'s tall and thin / She has long hair.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 13: Appearance":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 13: Appearance.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What does he/she look like?" -> "_______"',
            options: ['He\\\'s tall and thin / She has long hair.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 13: Appearance.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 13: Appearance" using learned sentence patterns (What does he/she look like? - He\\\'s tall and thin / She has long hair.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u16',
        unitNumber: '14',
        title: 'Unit 14: Daily activities',
        topic: 'Routines at different times of the day',
        volume: 2,
        semester: 2,
        week: 25,
        vocabulary: 'in the morning, in the afternoon, in the evening, at night, do homework, watch TV',
        sentencePatterns: 'What do you do in the morning/afternoon? - I do my homework / play games.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 14: Daily activities":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 14: Daily activities.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What do you do in the morning/afternoon?" -> "_______"',
            options: ['I do my homework / play games.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 14: Daily activities.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 14: Daily activities" using learned sentence patterns (What do you do in the morning/afternoon? - I do my homework / play games.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u17',
        unitNumber: '15',
        title: 'Unit 15: My family\\\'s weekend',
        topic: 'Weekend leisure activities',
        volume: 2,
        semester: 2,
        week: 26,
        vocabulary: 'cinema, zoo, park, supermarket, swimming pool, water park, cook dinner',
        sentencePatterns: 'What does your family do on Saturdays? - We go to the cinema / water park.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 15: My family\\\'s weekend":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 15: My family\\\'s weekend.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What does your family do on Saturdays?" -> "_______"',
            options: ['We go to the cinema / water park.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 15: My family\\\'s weekend.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 15: My family\\\'s weekend" using learned sentence patterns (What does your family do on Saturdays? - We go to the cinema / water park.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u18',
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
        id: 'eng4_u19',
        unitNumber: '16',
        title: 'Unit 16: Weather',
        topic: 'Weather conditions & forecasts',
        volume: 2,
        semester: 2,
        week: 28,
        vocabulary: 'sunny, rainy, cloudy, windy, stormy, foggy, hot, cold, warm, cool',
        sentencePatterns: 'What\\\'s the weather like today? - It\\\'s sunny and warm. / It\\\'s rainy.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 16: Weather":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 16: Weather.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What\\\'s the weather like today?" -> "_______"',
            options: ['It\\\'s sunny and warm. / It\\\'s rainy.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 16: Weather.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 16: Weather" using learned sentence patterns (What\\\'s the weather like today? - It\\\'s sunny and warm. / It\\\'s rainy.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u20',
        unitNumber: '17',
        title: 'Unit 17: In the city',
        topic: 'City places & directions',
        volume: 2,
        semester: 2,
        week: 30,
        vocabulary: 'bookshop, bakery, pharmacy, supermarket, sweet shop, turn left, turn right, go straight',
        sentencePatterns: 'Where is the bookshop/bakery? - Go straight and turn left/right.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 17: In the city":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 17: In the city.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "Where is the bookshop/bakery?" -> "_______"',
            options: ['Go straight and turn left/right.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 17: In the city.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 17: In the city" using learned sentence patterns (Where is the bookshop/bakery? - Go straight and turn left/right.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u21',
        unitNumber: '18',
        title: 'Unit 18: At the shopping centre',
        topic: 'Shopping and clothes prices',
        volume: 2,
        semester: 2,
        week: 32,
        vocabulary: 'T-shirt, jacket, dress, skirt, shoes, socks, cap, thousand, expensive, cheap',
        sentencePatterns: 'How much is the T-shirt? - It\\\'s fifty thousand dong.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 18: At the shopping centre":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 18: At the shopping centre.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "How much is the T" -> "_______"',
            options: ['shirt?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 18: At the shopping centre.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 18: At the shopping centre" using learned sentence patterns (How much is the T-shirt? - It\\\'s fifty thousand dong.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u22',
        unitNumber: '19',
        title: 'Unit 19: Special days',
        topic: 'Holidays and festival activities',
        volume: 2,
        semester: 2,
        week: 33,
        vocabulary: 'New Year, Mid-Autumn Festival, Christmas, Teacher\\\'s Day, fireworks, lion dance, presents',
        sentencePatterns: 'What do you do on New Year\\\'s Day / Mid-Autumn Festival? - I watch firework displays.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 19: Special days":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 19: Special days.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What do you do on New Year\\\'s Day / Mid" -> "_______"',
            options: ['Autumn Festival?', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 19: Special days.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 19: Special days" using learned sentence patterns (What do you do on New Year\\\'s Day / Mid-Autumn Festival? - I watch firework displays.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u23',
        unitNumber: '20',
        title: 'Unit 20: At summer camp',
        topic: 'Summer camp activities',
        volume: 2,
        semester: 2,
        week: 34,
        vocabulary: 'summer camp, pitch a tent, build a campfire, tell stories, play games, explore',
        sentencePatterns: 'What are you doing at summer camp? - We are pitching tents and singing songs.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            skill: 'Phonics & Vocabulary',
            question: 'Choose the correct word to complete the sentence in "Unit 20: At summer camp":',
            options: ['Correct vocabulary choice based on the unit', 'Incorrect spelling', 'Irrelevant word', 'Grammatically mismatched word'],
            answer: 0,
            explanation: 'Remember core vocabulary in Unit 20: At summer camp.'
          },
          {
            type: 'TN',
            level: 2,
            skill: 'Grammar & Communication',
            question: 'Complete the dialogue: "What are you doing at summer camp?" -> "_______"',
            options: ['We are pitching tents and singing songs.', 'No, I am not.', 'Yes, it was yesterday.', 'I am reading a book.'],
            answer: 0,
            explanation: 'Apply the correct sentence pattern taught in Unit 20: At summer camp.'
          },
          {
            type: 'TL',
            level: 3,
            skill: 'Writing',
            question: 'Write 3-4 sentences about the topic of "Unit 20: At summer camp" using learned sentence patterns (What are you doing at summer camp? - We are pitching tents and singing songs.).',
            guide: 'Write complete sentences with accurate grammar, spelling, and punctuation.'
          }
        ]
      },
      {
        id: 'eng4_u24',
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
    window.SGK_TIENG_ANH_4 = TIENG_ANH_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'tieng_anh', TIENG_ANH_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_ANH_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
