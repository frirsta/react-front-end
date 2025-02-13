# Snap it

[![Netlify Status](https://api.netlify.com/api/v1/badges/35d32c76-6b29-4b61-9eed-dcf963d253ec/deploy-status)](https://app.netlify.com/sites/snaapit/deploys)

- [**Project**](#project)
- [**Project Management**](#project-management)
- [**Design**](#design)
- [**Wireframes**](#wireframes)
- [**User Experience UX**](#user-experience-ux)
- [**Features**](#features)
- [**Future Features**](#future-features)
- [**Testing**](#testing)
- [**Technologies Used**](#technologies-used)
- [**Bugs**](#bugs)
- [**Deployment**](#deployment)
- [**Credits**](#credits)
- [**Acknowledgement**](#acknowledgement)

<br>

# Project

Welcome to Snap it! Snap it is the social media app is for everyone who wants to share their life with images and keep up with friends and family on what's going on in their life. Snap it is useful in many ways, people can easily keep up with what is trending regarding anything, like family events, fashion and their favourite celebrity! Anyone can create an account and start sharing images with their followers.

[Front-end live link](https://snaapit.netlify.app/)

<br>

[Front-end repository](https://github.com/frirsta/react-front-end)

The front-end application is connected to Snap it's API.

[Back-end API repository](https://github.com/frirsta/drf-api-react)
<br>

[Back-end API deployment](https://drf-api-frirsta.herokuapp.com/)

<br>

# Project Management

I have used github issues to work with Snap it. They have been prioritized by four different labels.
<br>

## Agile methodology

<br>

- Must Have - Are the issues that have to be top priority.
- Should have - Are second priority.
- Could have - Third priority.
- Won't have - Is what will not be in the project.

The Won't have label is for long term use in the project and has not been used in this project.

GitHub Issues
<br>
<img src="src/assets/readme/github_projects/issues.png" alt="github Issues" style="width: 50%">

<br>

I have used the github project board to work with Snap it.
<br>
<img src="src/assets/readme/github_projects/github_projects.png" alt="github board" style="width: 100%">
<br>

<br>

# Design

Color Scheme
<img src="src/assets/readme/design/color_palette.png" alt="github board" style="width: 100%">

- #F4F2F3 has been used for the background to create a background that does not distract from the images shared by users.

- #c0a9bd has been used for the sidebar, because it is an important feature for the users. Therefore, this color is perfect because it makes the sidebar easy to find.

- The other colors have been chosen for the contrast and to make a visually aesthetic design.

# Wireframes

### I have used [Miro](https://miro.com/) to create WireFrames for the project.

<details><summary>Home page</summary>
<img src="src/assets/readme/wireframes/home.jpg" alt="Home page desktop screen" style="width: 45%;">
<img src="src/assets/readme/wireframes/home_mobile_tablet.jpg" alt="Home page mobile and tablet screen" style="width: 45%;">
<img src="src/assets/readme/wireframes/home_mobile_tablet_full_screen.jpg" alt="Home page full screen mobile and tablet screen" style="width: 45%;">
</details>

<details><summary>Post detail</summary>
<img src="src/assets/readme/wireframes/post_detail.jpg" alt="Post detail page on mobile, tablet and desktop screen">
</details>

<details><summary>Signup</summary>
<img src="src/assets/readme/wireframes/signup.jpg" alt="Sign up page on mobile, tablet and desktop screen">
</details>

<details><summary>Sign in</summary>
<img src="src/assets/readme/wireframes/signin.jpg" alt="Sign in page on mobile, tablet and desktop screen">
</details>

<details><summary>Upload</summary>
<img src="src/assets/readme/wireframes/upload.jpg" alt="Upload page on mobile, tablet and desktop screen">
</details>

<details><summary>profile page from another users view</summary>
<img src="src/assets/readme/wireframes/profile_user_view.jpg" alt="Profile page from other users view on mobile, tablet and desktop screen">
</details>

<details><summary>profile</summary>
<img src="src/assets/readme/wireframes/profile.jpg" alt="Profile page on mobile, tablet and desktop screen">
</details>

<details><summary>Edit profile</summary>
<img src="src/assets/readme/wireframes/edit_profile.jpg" alt="Edit profile page on mobile, tablet and desktop screen">
</details>

<details><summary>Change username</summary>
<img src="src/assets/readme/wireframes/change_username.jpg" alt="Change username page on mobile, tablet and desktop screen">
</details>

<details><summary>Liked posts</summary>
<img src="src/assets/readme/wireframes/liked_posts.jpg" alt="Liked posts page on mobile, tablet and desktop screen">
</details>

<details><summary>Buisness profile</summary>
<img src="src/assets/readme/wireframes/buisness_profile.jpg" alt="Buisness profile page on mobile, tablet and desktop screen">
</details>


<br>

# User Experience UX

User Story
<img src="src/assets/readme/user-story/user_story_1.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_2.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_3.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_4.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_5.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_6.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_7.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_8.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_9.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_10.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_11.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_12.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_13.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_14.png" alt="User story">

</details>

# Features

### Post Detail

<img src="src/assets/readme/features/post_detail.png" style="width: 50%" alt="Post detail page features test for desktop screen">

<br>

- All comments made on that post are displayed as a list under the image.
- The user can leave a comment in the post detail page.
- The owner of the post will have a dropdown menu on the top right corner of the post.

<br>

<img src="src/assets/readme/features/post_dropdown.png" style="width: 50%" alt="post dropdown page">

- Post drop-down menu.
- If the owner of the post clicks the trash can icon they delete the post.
- If the owner of the post clicks the pen to square icon, they get redirected to the update post page.

<br>

<img src="src/assets/readme/features/update_post.png" style="width: 50%" alt="update post page">

- The update post page is where the owner of the post can change the caption or image of the post.


### Likes, comments and saved

<br>
<img src="src/assets/readme/features/post_like_comments_saved.png" style="width: 50%" alt="post likes comments saved page features test for desktop screen">
<br>

- The bottom of the post has the number of likes, comments and saved displayed.
- When a user clicks the heart icon they like a post.
- When a user clicks the comments icon they get redirected to the post details page where they can leave a comment.
- When a user clicks the save icon they save the post, and they can find the post on the saved Posts page.

<br>

<img src="src/assets/readme/features/post_save_message.png" style="width: 50%" alt="Post can't be saved message">
<br>
<img src="src/assets/readme/features/post_like_message.png" style="width: 50%" alt="Post can't be liked message">
<br>

- The owner of the post can't like or save their own posts
- If the user who owns the account tries to like their own post a message will be displayed

<br>
<img src="src/assets/readme/features/post_login_comment.png" style="width: 50%" alt="Log in to leave a comment">
<img src="src/assets/readme/features/post_login_like.png" style="width: 50%" alt="Log in to like a post">
<img src="src/assets/readme/features/post_login_save.png" style="width: 50%" alt="Log in to save a post">
<br>

- If a user is not signed in to an account, they can't like, comment or save a post.
- If they try, a message will be displayed as shown in the images above.

<br>

<img src="src/assets/readme/features/comment_add.png" style="width: 50%" alt="comment add page">
<br>

- In the post detail page the user can leave a comment.

<br>

<img src="src/assets/readme/features/comment_list.png" style="width: 50%" alt="comment list page">
<br>

- The comments are displayed as a list under the post.

<br>

<img src="src/assets/readme/features/comment_dropdown.png" style="width: 50%" alt="comment dropdown page">
<br>

- The owner of the comment will have a drop-down menu displayed on the top right corner.
- If the owner of the comment clicks the trash can icon they delete the comment.
- If the owner of the post clicks the pen to square icon, they will be able to change the content of the comment.

</details>

### Navbar

- The sidebar/navbar when user is offline has a link to the home page, sign up page and sign in page.

<img src="src/assets/readme/features/sidebar.png" style="width: 50%" alt="The sidebar when user is offline">

- The navbar on a tablet and mobile screen.
<br>
<img src="src/assets/readme/features/sidebar_mobile_offline.png" style="width: 50%" alt="The sidebar on smaller screens when user is offline">

<br>

- The sidebar/navbar when user is online has a link to the home page, contact page, sign out page, add post page, saved posts page and profile page.

<img src="src/assets/readme/features/sidebar_online.png" style="width: 50%" alt="The sidebar when user is online">

- The navbar on a tablet and mobile screen.
<br>
<img src="src/assets/readme/features/sidebar_mobile_online.png" style="width: 50%" alt="The sidebar on smaller screens when user is online">

<br>

</details>


### Explore accounts
<img src="src/assets/readme/features/explore_accounts_desktop.png" style="width: 50%" alt="Explore accounts feature">
<br>

* The explore accounts feature shows five of the most followed accounts for other users to find and follow if they want to.

<br>
<img src="src/assets/readme/features/explore_accounts_mobile.png" style="width: 50%" alt="Explore accounts feature">
<br>

* The explore accounts feature on smaller screens.

## All pages

<details><summary>Home page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_home.png" style="width: 50%" alt="Home page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_home.png" style="width: 50%" alt="Home page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_home.png" style="width: 50%" alt="Home page features test for mobile screen">
</details>

<br>

<details><summary>Sign up page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_signup.png" style="width: 50%" alt="Signup page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_signup.png" style="width: 50%" alt="Signup page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_signup.png" style="width: 50%" alt="Signup page features test for mobile screen">
</details>

<br>

<details><summary>Sign in page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_signin.png" style="width: 50%" alt="signin page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_signin.png" style="width: 50%" alt="signin page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_signin.png" style="width: 50%" alt="signin page features test for mobile screen">
</details>

<br>

<details><summary>Upload page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_upload.png" style="width: 50%" alt="upload page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_upload.png" style="width: 50%" alt="upload page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_upload.png" style="width: 50%" alt="upload page features test for mobile screen">
</details>

<br>

<details><summary>Profile page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_profile.png" style="width: 50%" alt="profile page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_profile.png" style="width: 50%" alt="profile page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_profile.png" style="width: 50%" alt="profile page features test for mobile screen">

<br>

<img src="src/assets/readme/features/account_dropdown.png" style="width: 50%" alt="account dropdown page">

- Account drop-down menu.
- If the owner of the account clicks update profile, they get redirected to the update profile page.
- If the owner of the account clicks update username, they get redirected to the update username page.
- If the owner of the account clicks change password, they get redirected to the change password page.

</details>

<br>

<details><summary>Update profile page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_update_profile.png" style="width: 50%" alt="update profile page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_update_profile.png" style="width: 50%" alt="update profile page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_update_profile.png" style="width: 50%" alt="update profile page features test for mobile screen">
</details>

<br>

<details><summary>Change password page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_change_password.png" style="width: 50%" alt="change password page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_change_password.png" style="width: 50%" alt="change password page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_change_password.png" style="width: 50%" alt="change password page features test for mobile screen">
</details>

<br>

<details><summary>Change username page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_change_username.png" style="width: 50%" alt="update username page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_change_username.png" style="width: 50%" alt="update username page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_change_username.png" style="width: 50%" alt="update username page features test for mobile screen">
</details>

<br>

<details><summary>Saved posts page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_saved.png" style="width: 50%" alt="saved posts page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_saved.png" style="width: 50%" alt="saved posts page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_saved.png" style="width: 50%" alt="saved posts page features test for mobile screen">
</details>

<br>

<details><summary>Contact page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/features/desktop_contact.png" style="width: 50%" alt="contact page features test for desktop screen">

<br>

<h3>ipad</h3>
<img src="src/assets/readme/features/ipad_contact.png" style="width: 50%" alt="contact page features test for ipad screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/features/mobile_contact.png" style="width: 50%" alt="contact page features test for mobile screen">
</details>


<br>

## Reusable components

Here are the components that have been used for multiple pages:

### Asset
* The asset component was used to create the NotFound component
* The asset component was used to display a spinner in the explore accounts component.
* The asset component was used in the account page to display a spinner and to display a not found message if a user has not posted any images.
* The asset component was used on the contact page to display a spinner and to display a not found message.
* The asset component was used in the post add form to display an upload image and a message.
* The asset component was used in the post page page to display a spinner.
* The asset component was used in the posts page page to display a spinner and a not found message.

### Profile
* The profile component was used in the sidebar next to the user's username.
* The profile component was used in the account owners account page.
* The profile component was used in the comment component.
* The profile component was used in the comments add form component.
* The profile component was used in the contact component.
* The profile component was used in the post component.

### MoreDropdown
* The MoreDropdown component was used in the comment component.
* The MoreDropdown component was used in the post component.



# Future Features

- Add business profile so user can create an account for their business.
- Add admin dashboard
- Add upload video function
- Add more testing to application

<br>

# Testing

## User story testing
<img src="src/assets/readme/user-story/user_story_1.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_2.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_3.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_4.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_5.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_6.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_7.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_8.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_9.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_10.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_11.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_12.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_13.png" alt="User story">
<img src="src/assets/readme/user-story/user_story_14.png" alt="User story">

<br>

User story | Steps | Expected | Results | Pass/Fail |
--- | --- | --- | --- | ---
As a user. I can upload a picture so that I can share my images with other people | 1. Navigate to the Add post page. <br> 2. Click the upload image. <br> 3. Choose a picture to post. <br> 4. Type a caption and click the post button  | Go to the uploaded posts detail page. | Go to the uploaded posts detail page | Success
As a user, I can view a list of posts so that I can see what people have uploaded | 1. Navigate to home page | See a list of all posts created, with the newest post on top of the list | See a list of all posts created, with the newest post on top of the list | Success
As a User, I can create an account so that I can comment, like/dislike, and upload images |1. Navigate to sign up page. <br> 2. Choose a username and password. <br> 3. Click the Sign up button | Go to Sign in page, and successfully log in to the created account  | Go to Sign in page, and successfully log in to the created account  | Success
As a User, I can log in so that I can upload, delete and edit my posts | 1. Navigate to Sign in page. <br> 2. Type account information | Go to home page. Be able to add posts, delete and edit their own post. | Go to home page. Be able to add posts, delete and edit their own post. | Success
As a Site user, I can log out so that someone else using my computer can't post from my account | 1. Click the Sign out button. | When signed out, the profile, add post, contact and saved posts are removed from the navbar. | When signed out, the profile, add post, contact and saved posts are removed from the navbar. | Success
As a Site user I can go to a profile page specifically for me so that I can find all posts created by me | 1. Navigate to profile page | Go to profile page, see my profile image, the number of followers I have, the number of users I am following, the number of posts I have uploaded, a dropdown menu on the top right corner and a list of all posts uploaded by me. | Go to profile page, see my profile image, the number of followers I have, the number of users I am following, the number of posts I have uploaded, a dropdown menu on the top right corner and a list of all posts uploaded by me. | Success
As a User, I can comment on posts so that I can write what I think about the post and interact with other users | 1. Click a post I want to comment. <br> 2. Click the "Leave a comment..." placeholder text. <br> 3. Type my comment. <br> 4. Click Submit button | See the created comment under the post. | See the created comment under the post. | Success
As a User, I can delete comments I have made so that I have control over my comments, and can remove them if I change my mind in the comments | 1. Click the dropdown menu on the right corner of the comment. <br> 2. Click the trash can icon. | The comment disappears from the list of comments | The comment disappears from the list of comments | Success
As a User, I can read comments that are made for a specific post so that I can read what people think of the post | 1. Click a post. <br> 2. Scroll to below post and read comments | See a list of comments, if no comments have been made "No comments, be the first to comment" will be displayed | See a list of comments, if no comments have been made "No comments, be the first to comment" will be displayed | Success
As a User, I can contact the site Owner so that I can ask questions or report a problem | 1. Navigate to the contact page. <br> 2. Type why I am contacting them, and leave a message. <br> 3. Click post button | See an alert on top of the page "Your message has been sent" | See an alert on top of the page "Your message has been sent" | Success
As a site user, I can save posts so that I can find them easily | 1. Click the bookmark icon on the right bottom corner of the post. <br> 2. Navigate to saved post's page. | The bookmark will go from being outlined to being fully black. On the Saved post's page, I will see a list of posts I have saved. | The bookmark will go from being outlined to being fully black. On the Saved post's page, I will see a list of posts I have saved. | Success
As a user, I can use the navbar from every page so that I can find all pages easily | 1. Go to all pages. | See the navbar on all pages. | See the navbar on all pages. | Success

- HTML pass [W3C HTML](https://validator.w3.org/) with no error
  <br>

- CSS pass [W3C CSS](https://jigsaw.w3.org/) with no error
 <p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>

<br>

The website has also been tested with the Chrome developer tool Google Lighthouse. It has been tested for desktop and for mobile. What was tested:

- Performance
- Accessibility
- Best Practices
- SEO (Search engine optimisation)
<br>

## Lighthouse

<details><summary>home page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_home.png" style="width: 50%" alt="Home page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_home.png" style="width: 50%" alt="Home page lighthouse test for mobile screen">
</details>

<br>

<details><summary>signup page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_signup.png" style="width: 50%" alt="Signup page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_signup.png" style="width: 50%" alt="Signup page lighthouse test for mobile screen">
</details>

<br>

<details><summary>signin page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_signin.png" style="width: 50%" alt="signin page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_signin.png" style="width: 50%" alt="signin page lighthouse test for mobile screen">
</details>

<br>

<details><summary>upload page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_upload.png" style="width: 50%" alt="upload page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_upload.png" style="width: 50%" alt="upload page lighthouse test for mobile screen">
</details>

<br>

<details><summary>profile page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_profile.png" style="width: 50%" alt="profile page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_profile.png" style="width: 50%" alt="profile page lighthouse test for mobile screen">
</details>

<br>

<details><summary>update profile page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_account_update.png" style="width: 50%" alt="update profile page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_account_update.png" style="width: 50%" alt="update profile page lighthouse test for mobile screen">
</details>

<br>

<details><summary>change password page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_change_password.png" style="width: 50%" alt="change password page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_change_password.png" style="width: 50%" alt="change password page lighthouse test for mobile screen">
</details>

<br>

<details><summary>change username page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_update_username.png" style="width: 50%" alt="update username page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_update_username.png" style="width: 50%" alt="update username page lighthouse test for mobile screen">
</details>

<br>

<details><summary>saved posts page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_saved.png" style="width: 50%" alt="saved posts page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_saved.png" style="width: 50%" alt="saved posts page lighthouse test for mobile screen">
</details>

<br>

<details><summary>contact page</summary>
<h3>Desktop</h3>
<img src="src/assets/readme/tests/lighthouse/desktop_contact.png" style="width: 50%" alt="contact page lighthouse test for desktop screen">

<br>

<h3>Mobile</h3>
<img src="src/assets/readme/tests/lighthouse/mobile_contact.png" style="width: 50%" alt="contact page lighthouse test for mobile screen">
</details>


# Technologies used

- React
- React-Bootstrap
- Django rest framework
- HTML
- CSS
- JavaScript
- JSX

Libraries

- GitPod
- Git
- GitHub
- React
- Axios
- React Router
- JWT
- React-Bootstrap
- Heroku
- Google Fonts
- Font Awesome
- Toastify

<br>

# Bugs

<br>

# Deployment

This website was deployed to [Heroku](https://heroku.com/). To deploy the website follow the steps below:

1. Log in or create an account on heroku.

2. On the heroku Website click 'New' and after click 'Create new app'.

3. Write the app name, choose a region and then click 'Create app'.

4. In the application website click 'Deploy' on the navigation menu.

5. In the 'Deploy' page, click the GitHub logo. Search for the GitHub repository that was made for this project.

6. Search for the GitHub repository that was made for this project.

7. When the repository is found click 'Connect'.

8. Scroll down to manual deploy and make sure you have chosen the main branch.

9. Click deploy.

<br>

# Credits

Sources that have helped build the website:

<details><summary>Image sources</summary>

Logo:
<a href="https://www.flaticon.com/free-icons/camera" title="camera icons">Camera icons created by Freepik - Flaticon</a>

Favicon:
<a href="https://www.flaticon.com/free-icons/camera" title="camera icons">Camera icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/camera" title="camera icons">Camera icons created by Good Ware - Flaticon</a>

Image by Frans van Heerden: https://www.pexels.com/sv-se/foto/kall-sno-landskap-natur-624015/

upload:
<a href="https://www.flaticon.com/free-icons/upload" title="upload icons">Upload icons created by Freepik - Flaticon</a>
Image by Artūras Kokorevas: https://www.pexels.com/sv-se/foto/ljus-vag-manniskor-gata-15954341/

<a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>

Menu:
<a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Ayub Irawan - Flaticon</a>

Posts:
Image by Amine İspir: https://www.pexels.com/sv-se/foto/vag-par-romantisk-relation-14578722/
Image by Matteo Milan: https://www.pexels.com/sv-se/foto/hav-strand-vatten-resa-15962125/
Image by Taha Samet Arslan: https://www.pexels.com/sv-se/foto/staende-leende-romantik-sloja-15530666/
Image by Diana Titenko: https://www.pexels.com/sv-se/foto/mode-solglasogon-semester-manniskor-3271945/
Image by Gustavo Fring: https://www.pexels.com/sv-se/foto/man-par-karlek-kvinna-4148842/
Image by Oliver Morgan: https://www.pexels.com/sv-se/foto/tra-bank-landskap-solnedgang-16053779/
Image by Taylen Lundequam: https://www.pexels.com/sv-se/foto/hav-molnig-vagor-kust-14775583/
Image by Kübra Doğu: https://www.pexels.com/sv-se/foto/mat-tra-gryning-kaffe-9222655/
Image by João Jesus: https://www.pexels.com/sv-se/foto/ljus-mode-man-person-1080213/
Image by Matheus Bertelli: https://www.pexels.com/sv-se/foto/hander-kvinna-flicka-sot-3764119/

Image by Cristian Muduc: https://www.pexels.com/sv-se/foto/manniskor-vatten-reser-italien-10146128/
Image by Mikhail Nilov: https://www.pexels.com/sv-se/foto/blommor-pask-bestick-porslin-6957717/
Image by Valeriya Kobzar: https://www.pexels.com/sv-se/foto/drycker-glas-bord-firande-8630148/
Image by Justyna Serafin: https://www.pexels.com/sv-se/foto/hav-vatten-batar-yachter-13563441/
Image by Amar Preciado: https://www.pexels.com/sv-se/foto/kaffe-bar-kafe-ta-bilder-16230535/
Image by Lorenzo Castellino: https://www.pexels.com/sv-se/foto/hav-gryning-landskap-solnedgang-15636474/
Image by Lany-Jade Mondou: https://www.pexels.com/sv-se/foto/stad-solglasogon-kvinna-byggnader-14460412/
Image by Efe Ersoy: https://www.pexels.com/sv-se/foto/karlek-sommar-sol-tradgard-14905759/
Image by Efe Ersoy: https://www.pexels.com/sv-se/foto/karlek-sommar-sol-tradgard-14905759/
Image by sora: https://www.pexels.com/sv-se/foto/vinter-park-blad-oskarpa-15637648/
Image by Mitch Lally: https://www.pexels.com/sv-se/foto/landskap-bergen-hotell-sjo-15032293/
Image by arteliusnis : https://www.pexels.com/sv-se/foto/byggnader-monster-arkitektur-fonster-5338350/
Image by Ayako S: https://www.pexels.com/sv-se/foto/brod-mat-tra-gryning-15640312/
Image by Majo Pestaña : https://www.pexels.com/sv-se/foto/vaxt-blomma-blomning-botanik-16172618/
Image by Mikkel Kvist: https://www.pexels.com/sv-se/foto/stad-gata-byggnad-flaggor-15949542/
Image by Polina Kovaleva: https://www.pexels.com/sv-se/foto/stad-himmel-semester-frankrike-5507232/
Image by Kadir Akman: https://www.pexels.com/sv-se/foto/fagel-djur-papegoja-ara-ararauna-15912424/
Image by Marina Leonova: https://www.pexels.com/sv-se/foto/skog-bord-terrass-plats-installning-9433045/
Image by Andrea Piacquadio: https://www.pexels.com/sv-se/foto/kvinna-smartphone-flicka-trad-3775087/
Image by Masha Raymers: https://www.pexels.com/sv-se/foto/gryning-mode-person-kvinna-2726111/
Image by R. Fera: https://www.pexels.com/sv-se/foto/svartvitt-mode-man-person-432059/
Image by Jonathan Borba: https://www.pexels.com/sv-se/foto/tra-fagel-djur-husdjur-16147939/

</details>
<br>

# Acknowledgement
This website has been made for my 5th Portfolio Project (Advanced Front-end) - Diploma in Full Stack Software Development at [Code Institute](https://codeinstitute.net/).
I would like to thank my mentor Gareth McGirr from Code Institute who helped me develop the website with feedback through the project.
