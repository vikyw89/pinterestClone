## This is an attempt to clone Pinterest, with a slight twist

Alpha live preview: https://vikyw89.github.io/pinterestClone/

Beta live preview: https://pinterest-clone-lemon.vercel.app/

Lighthouse score compared to interest :

![image](https://github.com/vikyw89/pinterestClone/assets/112059651/49057d9f-3883-4d4f-9034-30f3adf7b7cd)

![Screenshot from 2023-07-26 13-49-32](https://github.com/vikyw89/pinterestClone/assets/112059651/5732c5ca-4a9d-4e86-9c8a-ab3309f2c9ca)


## Dependencies and Libraries and some tech choices:
- supabase (for BAAS)
  - because pinterest data is mostly relational
  - BAAS is faster to deploy and prototype than writing backend from scratch
  - downside is subscribe function in supabase / postgres aren't that good
  - rpc is stored in the cloud supabase site
- Cloudinary
  - for storage of image and assets
  - it has cloud / edge function to resize assets and convert it to filetype that we want
  - we mostly use webp and webp animated for image because browser support above 95% and file size is small
- nextJS SSG
  - filesystem routing is intuitive
  - it's the new recomended way to scafold react app as per react.dev
  - SSG has faster initial load to client
  - we use nextImage as a way to efficiently show blurhas or placeholder to prevent big layout shift in feeds
  - some improvement to be made, store the image size in database because next image needs size to enable the blur placeholder (right now we use square, so there will be minimal layout shift)
- SWR for fetching and state management
  - it scales better than local state
  - the idea of rebuilding model for front end using redux and copying normalized database to front end, and doing JOIN operation in front end isn't appealing
  - single source of truth is in the backend / db
  - added additional useSyncSWR for global state using swr
- Browser image compressor
  - To compress image before storing in backend
  - it's lightweight and fast for images under 1MB
  - no need to recreate and host backend
- TailwindCSS and daisyUI
  - trying out new css framework aside from css module, bootstrap and mui
  - nextJS offers it
  - it has a lot of theme
- GH action
  - enabled CI CD for deployment
  - in the future we can have different branch for dev purpose / alpha, beta, and latest/stable automatic release and versioning.

## Database model:

outdated, but the idea holds
some improvements can be made, using only insert operation, and no delete therefore maintaining log etc

![Untitled Diagram](https://user-images.githubusercontent.com/112059651/236874824-c1aec858-89e1-470c-9272-f88961ab3abc.jpg)

## Page Routing:

```
'/'
// home shows all pins in the background
// for unsigned user, no search button

'/pin/[pin_id]'
// pin page, show title, description, comment, pin creator stats, follow button etc

'/[user_id]'
// profile page, show user's board, unorganized board, and user stats

'/[user_id]/[board_title]'
// board page, show board's stats, members, content and recomendation

'/createPin'
// show a page to create a pin

sign in and signup will be handled in the '/' route using popup or modal

```

## Original assignment from TOP
<section id="assignment">
  <h3><a href="#assignment" class="anchor-link">Assignment</a></h3>

  <div class="lesson-content__panel">
    <p>Replicate your favorite website as close as possible - Pinterest, Facebook, Twitter, etc. Just make sure it has lots of interesting functionality. You’ll be integrating a full array of skills into this one. If you have completed a backend course, you may use that for this project, otherwise use Firebase. This should prove that you now have all the tools and knowledge needed to build a website, just like the ones you use every day.</p>
    <p>Of course, you can’t replicate every feature, and the user interface will probably be a bit clunkier. However, if you can get yourself 80% of the way there, that’s darn impressive!</p>
    <ol>
      <li>Set up a GitHub Repo for this project. Follow the instructions in <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/git-basics" target="_blank" rel="noopener noreferrer">Git basics</a> if you need help.</li>
      <li>Think about what you need to do. It’s really helpful to write your plan down on paper or whiteboard ahead of time! A few hours of thought now will save you days of coding. Try to lay it ALL out. An important part of planning is <strong>scope</strong>. You obviously can’t build the entire website (which presumably took a full team of engineers years to produce), so you’ll need to identify the site’s core functionality and the “nice-to-have” stuff. <strong>Make sure you finish the core functionality BEFORE working on the rest.</strong> If you try to do everything at once, you’ll get lost and frustrated. Trust us. Everything takes longer than you expect.</li>
      <li>Roll up your sleeves and start building!</li>
      <li>Try to test the high-level functionality using a suitable testing library, for example, Javascript with Jest or Rails with RSpec. Don’t get too bogged down in testing, but try and save yourself time by adding high-level tests, so you don’t need to click around 100 times every time you make a change to something that seems important.</li>
      <li>Once you finish, push to GitHub and definitely submit your project below!</li>
    </ol>
  </div>

</section>
