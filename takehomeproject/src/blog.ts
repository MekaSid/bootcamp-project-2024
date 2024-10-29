//Blog template
type Blog = {
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
];

// Get blog container by ID
const blogContainer = document.getElementById('blog-container');

// Function to display blogs dynamically with links to individual pages
function displayBlogs(blogList: Blog[]) {
    if (!blogContainer) return;

    blogList.forEach(blog => {
        // Create blog post container (div)
        const blogDiv = document.createElement('div');
        blogDiv.className = "blog-entry";

        // Create title with a link to the individual blog page
        const blogTitleLink = document.createElement('a');
        blogTitleLink.href = '/html/blogs/' + blog.slug + '.html';
        blogTitleLink.textContent = blog.title;

        // Create date (time)
        const blogDate = document.createElement('time');
        blogDate.textContent = blog.date;

        // Create description (p)
        const blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;

        // Create image (img)
        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;

        // Append elements to blog div
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogTitleLink);
        blogDiv.appendChild(blogDescription);
        blogDiv.appendChild(blogDate);


        // Append blog div to blog container
        blogContainer.appendChild(blogDiv);
    });
}

// Call the function to display blogs
displayBlogs(blogs);
