export type Teacher = {
    id: string;
    num: string;
    name: string;
    specialty: string;
    experience: string;
    tags: string[];
    bio: string;
    photo: string;
};

export const teachers: Teacher[] = [
    {
        id: 'Brandon',
        num: '01',
        name: 'Mr. Brandon',
        specialty: 'Pre-School and Kindergarten',
        experience: '13 yrs experience',
        tags: ['Ages 1-6', 'Phonics', 'Play-based'],
        bio: 'Expert in phonics and early childhood development. Brandon brings warmth and structure to every lesson, using games and songs to build foundational vocabulary in young learners.',
        photo: '/images/brandon.PNG',
    },
    {
        id: 'remon',
        num: '02',
        name: 'Mr. Remon',
        specialty: 'Early Childhood Education',
        experience: '12 yrs experience',
        tags: ['Early Childhood', 'Game Based', '3-6'],
        bio: 'Specializes in making learning fun. His fun and happy way of teaching has helped thousands of learners start enjoying English.',
        photo: '/images/Remon.jpg',
    },
    {
        id: 'satoko',
        num: '03',
        name: 'Mrs. Satoko',
        specialty: 'Cross-Cultural Communication',
        experience: '6 yrs experience',
        tags: ['Conversation', 'Culture', 'All ages'],
        bio: 'Focuses on cross-cultural communication and clear communication with parents and students.',
        photo: '/images/Satoko.jpg',
    },
];
