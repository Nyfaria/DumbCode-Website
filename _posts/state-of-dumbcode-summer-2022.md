---
title: 'After Summer Round Up'
excerpt: 'What has DumbCode been up to this year so far? Find out in our end of summer 2022 blog post! Project: Nublar updates, Studio Updates, and a collaboration announcement!'
coverImage: '/blog/summer-round-up-2022/cover.png'
date: '2022-08-25T08:35:07.322Z'
author:
  name: NeusFear
  picture: '/images/people/neusfear.png'
ogImage:
  url: '/blog/summer-round-up-2022/cover.png'
---

DumbCode released a "State of DumbCode" Post 8 months ago that outlined what we were working on and what we had planned for this year. A lot of the team is headed back to college and school so we thought it would be a good time to catch everyone up on the progress we made at the beginning of the year and this summer! So buckle up and get ready to get a view into what the team has been up to!

## Project: Nublar

Okay, so before I get into the progress we've made on Project: Nublar since I know that's what most of you are here to read about; I wanted to explain a bit more about how we organize our repositories for storing and managing all of our project files. 

As you've probably seen in our [#github-pn](https://discord.com/channels/648907519166513172/648910979006070795) channel on our [Discord Server](https://discord.gg/6mygAnq) it's pretty easy to see the progress we make on Project: Nublar itself. And you might be thinking to yourself "Dang, these guys haven't worked on PN like at all this year". We've had 50 commits to the Project: Nublar repository since our last blog post, but most of them have been to do with bug fixes and crashes, and only a few AI tasks to get ready for bringing the dinos to life. HOWEVER! We have good news for those of you that don't get to see the other work we do on the mod. 

Our team has a second repository that is private (for asset safety/copyright reasons) that houses all of our models/textures/animations etc. There have been over 150 commits on just the assets for the mod on that repository. We don't make the webhook send messages to our public discord so that we can surprise the community with showcases and wallpapers. I'll go more into the plans for the rest of the semester in a later section in this post, where I'll explain more about why the assets are farther ahead of the programming up to this point. Before we do that let's go over what those 150 commits have been about!

![assets repo](/blog/summer-round-up-2022/assets-repo.png)

## What's New with Project: Nublar?

Without going into too much spoily detail, we've added/updated:
+   12 models (entity and block)
+   6 animations
+   1 skeleton texture
+   10 entity textures
+   60 texture sprites for items
+   8 other textures for UIs
+   lots of paddock signs (no exact number because spoilers)
+   6 showcases
+   400 sounds (yeah, it's a lot. maybe more than we will need)

So yeah, We have been busy. We have a long way to go in a few key areas though. The main area is Animation, but we are getting more and more efficient with those as we continue to develop the studio. We will get to the studio in a later section, as we have a LOT to talk about there. 

I'm going to take the opportunity to reach out to the community. If you or anyone you know has experience with animation, please reach out to us. Our tools are bleeding edge, but we are willing to coach and teach new animators in the community if you have a passion for bringing dinosaurs into the game of Minecraft.

## The DumbCode Studio

Wow, where to even begin talking about the studio? We have done so much work and made so much progress. Wyn, our backend developer for the studio dedicated a couple of weeks for 8-5 development to the studio to knock out a huge number of large tasks remaining. That brought us much closer to a beta for the studio. It's very hard to give a sense of progress for the studio since its scope is so large. We have been developing the studio since 2019 and if you've kept up with the [#github-site](https://discord.com/channels/648907519166513172/648913842730172427) channel on our [Discord Server](https://discord.gg/6mygAnq) you know it's been non-stop since we started, but I'm going to try.

### Modeler
![assets repo](/blog/summer-round-up-2022/modeler.png)
We are almost comfortable saying that the Modeler is done. In a sense that it is usable and most of the bugs have been worked out. We have a lot more features that we want to add in the future, but we are labeling those features as "nice to have", but not vital to the Studio's usefulness.

### Texture Mapper
![assets repo](/blog/summer-round-up-2022/texture-mapper.png)
The Texture Mapper is a relatively new tab to the studio, split from the texturer tab to make the workflows available more diverse. Some teams may want their modelers to create the texture maps, and we don't need to clutter their screens with all of the tools that the Texturers need but the mappers don't. We have added a lot of quality of life features to this tab, including pixel grids, Photoshop-like navigation to the map half of the screen, as well as left it open to our command system. In the future this will give more freedom to add features in later releases.

### Texturer
![assets repo](/blog/summer-round-up-2022/texturer.png)
This tab has the most work to do of any of the other tabs. In our team, our Texturers use Photoshop, not the in-editor tools. In the past that meant creating the texture, saving and exporting it, and finally uploading (or linking) the combined texture to the studio to see what the texture looks like on the model. Enter: Photoshop linking. Wyn has added a way for the studio to link and listen to Photoshop files, so you can just save and see a live update right in our editor. Cool! 

This means that our Texturers lives have gotten a lot easier and that development branch will be merged in with the studio very soon as a feature to expect when we release the beta. For those users that don't use Photoshop, we have some work to do to make the texturing tools feature complete. Those tools have taken a backseat while we get the features that our team need completed first.

### Animator
![assets repo](/blog/summer-round-up-2022/animator.png)
Oh boy, this one is especially interesting. First of all, we brought the functionality of the command system to the animator to add a few key features.

+ Temporary parenting: Useful for complex movements where you would like to rotate relative to a moving object, but don't want these objects to always be attached. For example legs in our dinosaurs.
+ Floor Plane: We have added a way to block cubes from going through the floor plane of the studio. This is an alpha implementation of the feature and will look a lot different in future releases, but essentially it allows our animators to make walking animations with a bit more ease, knowing that their creature's feet won't clip through the ground.
+ LockKF: This allows you to lock a cube in place in an animation with a keyframe.

Planned features for the future are mainly polishing off the current features and the new features mentioned. For example; right now the floor plane feature creates a ton of tiny keyframes, essentially exploding the keyframe the command is applied to. This means that if there need to be edits made to the keyframe you have to re-make the original keyframe, make changes, then re-run the command. In the future, we plan to add a keyframe "effects" system which applies these effects in a non-destructive way. For now though, since our animators know the risks of using the feature, we are going to wait so we can work on other more pressing matters.

Another cool thing we have added is a way to include sounds in an animation in our editor which gives the animators and sound designers more ways to tie those things together. footstep sounds will coordinate with the instances where feet hit the ground, etc.

There is a lot more to talk about with the Animator features, but I think that's best for a future post or for the docs which I'll go into soon.

### Showcase 
![assets repo](/blog/summer-round-up-2022/showcase.png)
Yeah, we may have gotten a bit sidetracked and added a whole new feature to the studio. The showcase tab is intended to be a simpler way for us to create renderings of the studio projects for our creature showcases and wallpapers. With the showcase tab, you can add shadows, edit ambient light, and save lighting presets, and poses to the project to be used later.

### Options
![assets repo](/blog/summer-round-up-2022/options.png)
The Options tab of the studio has been tied into the studio. This means that there are more customization options and all keybindings are configurable now! You can also search for a specific feature you want to configure and we will automatically sort through and give the best results. No more sifting through menus!

## Studio Next Steps

The Studio is a lot closer to being complete than before, but it's not done. We keep a working to-do list in our discord. There are a few features on that list that were in the old studio that haven't made it back into the rewritten new studio, but here is a snippet of the progress this summer and what's left to do.

![Studio Todo](/blog/summer-round-up-2022/studio-todo.png)

## Studio Conclusions

So yeah, we've done a lot with the studio, but there are a few key things we have to complete before we can release a beta. The number one priority is finishing the studio's currently outlined features, and polishing things off with copious amounts of testing. We intend for the beta to be a way to test in a more broad audience, but we don't want our first impression to be a buggy mess, so we will get it as clean as possible before we announce and request your help. The second priority is documentation that goes over every single button and features the studio has in a visual and hands-on way. This has actually already been started on a ``docs`` branch on GitHub, but is very early in development and has no actual chapters yet. We have been setting up the layout of the site and testing different solutions for localization so the docs can be translated into any language! At the time of beta all we plan to include is the English version, but once that's done we will be looking for translators, so keep your eyes peeled for both of those announcements.

## So What Now?

Right now we want to get the studio repository ready for documentation. This means that we need to test and merge the open pull requests on our GitHub repo. Mainly the ``Photoshop Linking`` branch and the ``Scroll Keybinds`` branch which adds the photoshop like scrolling to the texture maps and animator timeline. But we also have a request open for updating dependencies which needed some updates to the code to keep things working.

Once those things are merged we plan to reformat the repository into a monorepo, if you don't know what that is, basically it means we can have more than one website in the same repository to share code between them without having to maintain our own library for components that are shared between the studio, the docs, and future plans which we haven't talked about yet that will be added post-release.

Once that monorepo is created the studio will go into a sort of maintenance mode where Wyn only works on critical bugs and features for the asset makers, as the studio is usable for our team right now, just not ready for a beta or release. As for me, I will be working on the docs website, getting it ready for the team to write articles and lessons.

Once the monorepo is set up Wyn wants to get back into the development of Project: Nublar. There are a few dinos that are asset-complete and can be fully implemented. That means that we need to get all the AI goals and animations pulled in so that the creatures can walk around. Sounds easy, but it's going to take some work. Once Those creatures are added and working we will have essentially a minimum viable product. What will we do with this MVP? We have no idea. Feel free to give suggestions on discord. 

We have a set of features that we want to include before we release a public beta. A set number of dinos, the basic features you have seen in the [Cloning Guide Video](https://www.youtube.com/watch?v=W9cMQUB4EdM), and other showcases for features we've shown in the past. We are standing strong on those select features, and also our secrecy around the subject.

So as I mentioned before in the ``Project: Nublar`` section of this post, our PN coding has been behind the asset creation workflow. The main reason is the extensive development we've been doing in the Studio. That development on the studio isn't done but it's nearing the end and has been a vital tool in the team's life.

## Special Announcement

We have been working on some cool stuff on the business side of DumbCode recently and we are finally ready to share those things with our community!

### CompyCraft Partnership
![Compycraft banner](/blog/summer-round-up-2022/cc.png)
As some of you may have noticed if you're in the bedrock community, we have entered into a collaborative partnership with CompyCraft. Their team is porting our mod to the Bedrock edition of the game. Their team and our team are working independently, they have purchased usage rights to use our assets. 

### What Does This Mean??
Campcraft has been generous in their investment in our assets. This means that the team has some money right now for covering development costs, including hiring animators as we mentioned earlier in the blog post. It also means that when their addon releases and the initial investment is paid off, we will be making recurring income from a portion of the money made from the bedrock addon to continue to support our team and its projects.

**The Java version of the mod will continue to be free. Forever.**

Our team is dedicated to the project that we have been working on and pouring our lives into for many years. The plans we have for the Java version are the same as they were before entering into this agreement with CompyCraft. This is a mutually beneficial partnership and we believe that it is fair to both teams. We hope you bedrock edition users will be pleased to know that we haven't forgotten about you! We just don't have the ability to develop the bedrock addon, so a collaboration like this is perfect.

## Conclusions

Thank you for participating in reading our 3rd blog post. It's been a long one, but we hope it's been informative and encouraging! We have had a lot of things going on simultaneously within the team, and we're glad to be able to get all of these updates off our chests.