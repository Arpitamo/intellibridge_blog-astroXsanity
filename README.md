📂 Project Structure
- `/astro-hello-world`: The frontend website built with Astro.
- `/sanity-folder`: The admin dashboard for writing blog posts.
  
📝 How to Write and Publish a Blog Post
This project uses Sanity Studio as the content management system. Follow these steps to add new content to your blog:

1. Launch the Admin Dashboard
Open your terminal and navigate to the Sanity project folder:

Bash

cd sanity-folder-name
npm run dev
Once the local server starts, open the URL provided (usually http://localhost:3333) in your browser.

2. Create a New Post
Inside the Sanity Studio dashboard:

Locate the "Post" document type in the left-hand sidebar.

Click the plus sign (+) icon at the top of the column to create a new entry.

3. Write and Format
Title: Enter the headline of your blog post.

Content: Write your post body using the rich text editor.

Slug: Click the "Generate" button to create a URL-friendly version of your title.

Images: Upload a featured image if required.

4. Publish to the Web
Once you are happy with your content:

Click the large green "Publish" button in the bottom right corner.

The content is now saved to the Sanity Cloud.

Note: If your Astro site is set to static, you may need to trigger a redeploy to see the changes on the live site.

🌐 How to View Your Blog Posts (Frontend)
To see your published posts on the website locally, follow these steps:

1. Launch the Astro Website
Open a new terminal and navigate to your Astro project folder:

Bash

cd astro-hello-world
npm run dev
The terminal will show a local URL, usually http://localhost:4321.

2. Access the Local Site
Open your browser.

Copy and paste http://localhost:4321 into the address bar.

3. Route to the Blog
Depending on how you set up your pages, you can view your posts by navigating to the post section:

Click on the post link in the navigation bar.

OR manually add /post to the URL: http://localhost:4321/post

4. Verify Content
If you just published a post in Sanity, it should appear here automatically.

Note: If the post doesn't appear, ensure you clicked the "Publish" button in Sanity and not just "Save".
