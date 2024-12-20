//Blog template
export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

//Blog items
const blogs: Blog[] = [
    {
        title: "SOFTWARE ENGINEERING IN ROME",
        date: "10-17-2024",
        description: "My experience while studying abroad in Rome, Italy",
        image: "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp", 
        imageAlt: "Picture of Rome",
        slug: "rome"
    },
    {
        title: "Making Carbonara",
        date: "10-17-2024",
        description: "An easy way to make Carbonara",
        image: "https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/1:1/w_2560%2Cc_limit/pasta-carbonara.jpg",
        imageAlt: "Carbonara Dish",
        slug: "making-carbonara"
    },
    // Add more blog posts as needed
];

export default blogs;
