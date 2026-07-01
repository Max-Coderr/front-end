export interface CourseType {
    id: number;
    title: string;
    author: {
        fullName: string;
    };
    price: number;
    newPrice: number;
    rating: number;
    difficulty: {
        title: string;
        icon: string;
    };
    sectionsCount: number;
    category: {
        title: string;
    };
    language: {
        code: string;
    };
    image: string;
}

export interface BookType {
    id: number;
    title: string;
    author: {
        fullName: string;
    };
    price: number;
    newPrice: number;
    rating: number;
    difficulty: {
        title: string;
        icon: string;
    };
    category: {
        title: string;
    };
    language: {
        code: string;
    };
    image: string;
}

export interface NewsType {
    id: number;
    title: string;
    date: string;
    image: string;
    content: string;
}

export const MOCK_COURSES: CourseType[] = [
    {
        id: 1,
        title: "Shaxmat donalari bilan tanishuv",
        author: { fullName: "Robert Fisher" },
        price: 205000,
        newPrice: 96000,
        rating: 3.5,
        difficulty: { title: "Bashlang'ich", icon: "/BookImage/icon11.svg" },
        sectionsCount: 5,
        category: { title: "Strategiya" },
        language: { code: "PY" },
        image: "/BookImage/image1.svg"
    },
    {
        id: 2,
        title: "Shoxga hujum qilish",
        author: { fullName: "Andre Konfutsiy" },
        price: 0,
        newPrice: 96000,
        rating: 5.0,
        difficulty: { title: "Boshlang'ich", icon: "/BookImage/icon11.svg" },
        sectionsCount: 8,
        category: { title: "Hujum qilish" },
        language: { code: "O'z" },
        image: "/BookImage/image2.svg"
    },
    {
        id: 3,
        title: "Mot qilish",
        author: { fullName: "David Harikon" },
        price: 160000,
        newPrice: 107000,
        rating: 4.5,
        difficulty: { title: "Professional", icon: "/BookImage/icon11.svg" },
        sectionsCount: 20,
        category: { title: "Himoyalanish" },
        language: { code: "PY" },
        image: "/BookImage/image3.svg"
    },
    {
        id: 4,
        title: "Asosiy taktikalar",
        author: { fullName: "Paul Heckler" },
        price: 0,
        newPrice: 0,
        rating: 5.0,
        difficulty: { title: "Havaskor", icon: "/BookImage/icon11.svg" },
        sectionsCount: 7,
        category: { title: "Qoidalar" },
        language: { code: "O'z" },
        image: "/BookImage/image4.svg"
    }
];

export const MOCK_BOOKS: BookType[] = [
    {
        id: 1,
        title: "Shaxmatdagi qobiliyatliringizga qayta baxo bering",
        author: { fullName: "J.Silman" },
        price: 150000,
        newPrice: 99000,
        rating: 4.8,
        difficulty: { title: "O'rta", icon: "/BookImage/icon11.svg" },
        category: { title: "Taktika" },
        language: { code: "O'z" },
        image: "/BookImage/image1.svg"
    },
    {
        id: 2,
        title: "Mening tizimim",
        author: { fullName: "A.Nimzowitsch" },
        price: 120000,
        newPrice: 85000,
        rating: 4.7,
        difficulty: { title: "Yuqori", icon: "/BookImage/icon11.svg" },
        category: { title: "Strategiya" },
        language: { code: "RU" },
        image: "/BookImage/image3.svg"
    },
    {
        id: 3,
        title: "Zurixdagi shaxmat musobaqasi",
        author: { fullName: "D.Bronstein" },
        price: 200000,
        newPrice: 150000,
        rating: 4.9,
        difficulty: { title: "Yuqori", icon: "/BookImage/icon11.svg" },
        category: { title: "O'yinlar to'plami" },
        language: { code: "RU" },
        image: "/BookImage/image2.svg"
    },
    {
        id: 4,
        title: "Mening esdaqolarlik o‘yinlarim",
        author: { fullName: "B.Fischer" },
        price: 180000,
        newPrice: 120000,
        rating: 5.0,
        difficulty: { title: "Yuqori", icon: "/BookImage/icon11.svg" },
        category: { title: "O'yinlar to'plami" },
        language: { code: "O'z" },
        image: "/BookImage/image4.svg"
    }
];

export const MOCK_NEWS: NewsType[] = [
    {
        id: 1,
        title: "UzChess turniri g'olibi aniqlandi",
        date: "25-Aprel, 2026",
        image: "/BookImage/image1.svg",
        content: "Turnirda eng yuqori ball to'plagan o'yinchi shaxmat toji sohibi bo'ldi."
    },
    {
        id: 2,
        title: "Yosh shaxmatchilar o'rtasida musobaqa",
        date: "18-May, 2026",
        image: "/BookImage/image2.svg",
        content: "O'zbekiston yosh shaxmatchilari xalqaro miqyosda faxrli o'rinlarni qo'lga kiritishdi."
    },
    {
        id: 3,
        title: "Yangi shaxmat maktabi ochildi",
        date: "01-Iyun, 2026",
        image: "/BookImage/image3.svg",
        content: "Toshkent shahrida zamonaviy sharoitlarga ega yangi shaxmat maktabi faoliyat boshladi."
    },
    {
        id: 4,
        title: "Grossmeysterlik sari birinchi qadam",
        date: "02-Iyun, 2026",
        image: "/BookImage/image4.svg",
        content: "Shaxmat bo'yicha mahorat darslari va mashhur grossmeysterlar bilan uchrashuvlar bo'lib o'tdi."
    }
];
