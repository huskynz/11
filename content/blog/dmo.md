---
title: "Digitech Assessment - Develop a Digital Media Outcome"
summary: "I go over my redesign of the school's start page"
date: "Oct 10 2023"
draft: false
tags: ["personal", "tech"]
---

# THE CURRENT SITE

![](https://serv.husky.nz/ddmo/c41f7c063bc46a046d168037a58cd2936f6fbdcb.png)

This is the current site, and the buttons are small. It is internal-only.  
Some feedback I have heard about this site includes comments like *"Why is it broken?"* and that it is not used by the school anymore.  
So, I decided to give it a new coat of paint and then work with Hamish (School IT Manager) to implement it throughout the school.

# V1 – Getting a Basic Layout

![](https://serv.husky.nz/ddmo/media/image3.png)

I put together an initial design to get a base layout and gain an understanding of what is required for a clean start page.

It was important for me to get feedback at this stage, as it would help shape the way I build the site.  
Feedback from Liam and Finn was that the design looked too clunky and did not feel “right.”

# V2 Part 1 – Moving to Webflow and Testing

![](https://serv.husky.nz/ddmo/6fb5fbd4e7782af8700cb6b303fa29b946ad41a9.png)  
![](https://serv.husky.nz/ddmo/media/image5.png)

Here, I was experimenting with the size of the boxes. I decided to test Webflow to see if it was suitable for my designs.  
Using the feedback I received on my previous design, I moved to Webflow, as it would let me focus on the design rather than the code.  

Hamish pointed out something important for the site to be used successfully — people do not like scrolling. Mr Thew agreed with this.  
While box size 3 seemed okay, some sizes didn’t look as good.

# V2 Part 2 – Building a Template

Now that I understood how to use Webflow, I built this first version of the design.  
Webflow was a bit cumbersome to work with, but I pushed through. I kept the rough square theme but added scrolling for access.

![](https://serv.husky.nz/ddmo/297b72cceddda0f7ebe5d06adfbd3af30e26a804.png)

I made the big grid smaller based on feedback from Liam, Hamish, and Finn. However, even after making adjustments, they still felt the boxes were too big.

![](https://serv.husky.nz/ddmo/184baf042f8c074d0661b245ea5e03a92f3e5dbb.png)

You can also see the nav bar here, which I later replaced as it did not look good.

# V2 Part 3 – Getting a Grid

![](https://serv.husky.nz/ddmo/b157b6a044e0b013a8f8cc43c8ae8ba40ed86ddc.png)

This was my first design with a banner and links to various sites. Feedback suggested the buttons were too big, but overall it looked good.  

The login/logout system worked well — this allowed staff links to be hidden from students.  
When logged out, the “Login” button is visible; when logged in, staff-only links appear.

![](https://serv.husky.nz/ddmo/e08c1677fde9239dc91f997e1f2d2fc0ffdfd8d6.png)

# V2 Part 4 – Adding a Signup Button

![](https://serv.husky.nz/ddmo/16ae5c241ac29e81e80bbbb7462a99fdd1a0081e.png)

I added a sign-up button, but Finn felt it looked messy (“janky”). Liam also agreed it didn’t look right.

![](https://serv.husky.nz/ddmo/2d83c25c079628a55391d81c81cd919bb7a68bd3.png)

I removed it and moved the sign-up link to the login page.

# V2 Part 5 – The Tab Experiment

![](https://serv.husky.nz/ddmo/0e0afe2cb641c0f2fec72d816d4e2654dd641d9d.png)

Since people don’t like scrolling, I experimented with using tabs.  
However, this caused more issues than it solved and didn’t look right, so I abandoned it in favour of the grid design.

# V2 Part 6 – Fixing the Boxes

![](https://serv.husky.nz/ddmo/1178f0d8d19833927fdfb9b0c2463f5f8a0a2983.png)

Based on feedback, I made the boxes smaller and improved the text by changing the font.  
Liam and Finn also suggested removing the Student IT Wiki and fixing the Google logo.

![](https://serv.husky.nz/ddmo/eb7fdf3c1e6f92ce2b745375c463d898ca7485e0.png)

I removed the staff links, fixed the Google logo, and ended up with my “Final” V2 design.  
The buttons are smaller, the layout is cleaner, and feedback from Liam, Hamish, and Finn was positive.

# V2 Part 7 – Improving the Login Look

![](https://serv.husky.nz/ddmo/53d5d690d34ef89b8607466b7f12d6e8875f63d1.png)

Finn suggested changing the login page image and mentioned the site should be in dark mode (outside the project scope).

![](https://serv.husky.nz/ddmo/4d45ae39deea22181fa80cbe427ea1efadd64f2e.png)

I also changed the sign-up page image following similar feedback.

![](https://serv.husky.nz/ddmo/fc50867be0f4b4a3712ac08299e9ec2d2eea8391.png)

I updated the icons based on Finn’s suggestions, and Zak suggested reducing the padding for better spacing.

![](https://serv.husky.nz/ddmo/06740b56439d84888b48415d1e498cc21d220156.png)

Zak also suggested dark mode, which again is out of scope but inspired ideas for V3.

# V2 Part 8 – The End of V2

![](https://serv.husky.nz/ddmo/eb3217f3088fe136eb62a3b81697ba0579dc7ee3.png)

This concludes V2. It was okay but not great — it still needed a lot of work.  
I decided to invest my time into a V3 to address issues and make the site even better.

# Relevant Implications

**Functionality** – A site is good when it looks nice, but without proper testing, things can fall apart quickly. Most testing was done by getting feedback and improving on it.

**Aesthetics** – Even if the site works, if it doesn’t look appealing, people won’t want to use it. I made sure to gather plenty of feedback to ensure it was not just based on my own opinion.

# Feedback

Most feedback came from Hamish, who manages the current version of the site.  
The process was: I made a change, and he gave his opinion on whether he liked it or not.

# Tools

Based on feedback from Liam, Hamish, and Finn, my attempt to use Nuxt.js was unnecessary.  
Webflow was the better choice — partly because of my student discount (free), but mainly because it was easier to work with.

I built the site twice, using two different tools. The first was in NuxtJS and CSS, but at the time, I was not skilled with frameworks. For my final version, I used Webflow as it was easier for both me and Hamish to edit when needed.  
However, Webflow did have limitations, particularly in its design tools, which made it hard to get everything looking right.
