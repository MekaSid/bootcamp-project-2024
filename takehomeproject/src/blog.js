//Blog items
var blogs = [
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
var blogContainer = document.getElementById('blog-container');
// Function to display blogs dynamically with links to individual pages
function displayBlogs(blogList) {
    if (!blogContainer)
        return;
    blogList.forEach(function (blog) {
        // Create blog post container (div)
        var blogDiv = document.createElement('div');
        blogDiv.className = "blog-entry";
        // Create title with a link to the individual blog page
        var blogTitleLink = document.createElement('a');
        blogTitleLink.href = '/html/blogs/' + blog.slug + '.html';
        blogTitleLink.textContent = blog.title;
        // Create date (time)
        var blogDate = document.createElement('time');
        blogDate.textContent = blog.date;
        // Create description (p)
        var blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        // Create image (img)
        var blogImage = document.createElement('img');
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
