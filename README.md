# Mobile Tour App

Pivoting on ideas for final project at Makers Academy

###Brief

Our Cohort has been split into groups and each assigned a project of our
preference to complete and present on
Friday 30th January. Our team consists of: [Ed
Byne](https://github.com/ejbyne), [Ming Chan](https://github.com/ming-chan),
[Mishal Islam](https://github.com/mishal1) and [Nick
Dyer](https://github.com/nickbdyer). The team's brief is to "*build
a tour app for mobile.*"

Technologies are not specified within the brief - they must be decided upon by
the teams based on the merits of
each technology for the project. 

###Development Stages
     
#### Planning Stage

In our team's initial scrum, we discussed what would be the ultimate version of
our app, considering an MVP progression model, we determined what the *Car*
version would be. From there we began to discuss which features would make the
*Skateboard*, *Scooter* and *Bicycle* versions. We opted not to discuss what
would be part of the *Motorbike* at this stage, and decided to re-visit the
feature draw as and when we reach that section.
     
**Technology:** During our initial SCRUM a skateboard version of the
mobile app was brought together, one of the key decisions was that the
product would initial be a responsive webpage rather than a native app. In
discussing the technologies required for this, we did not immediately come
to a consensus. We therefore took the weekend to research the appropriate
technology. The immediate dilemma being, do we sacrifice easy testability
by using NODE.js over Sinatra/Rails, or do we use this opportunity to
experiment with an increasingly popular framework in order to broaden our
knowledge and potentially also take advantage of a full Javascript Stack in
order to assist with consuming APIs.

Our second SCRUM produced a decision on the initial technologies we wanted
to use in order to bring together the Skateboard version of the app. The
features we discussed for the app were moulded into user stories. With all this
information together we created [Kanban
Cards](http://en.wikipedia.org/wiki/Kanban_%28development%29).

#### Project Pivots

Subsequent SCRUMS and consultations with coaches revealed that the initial
concept was flawed. A combination of pre-existing apps in the market, and an
unclear client base brought us to a decision to pivot. 

We have spent much of this week pivoting on various ideas, and have settled
into a concept that we think is interesting, novel and at least a little
useful. 

The new idea is based around an idea of determining venue popularity based on
tweet frequency from its location. As such we have needed to acquire a large
amount of data in order to have a large enough sample to reliably plot. We are
recording all the tweets from the public twitter stream (not Firehose). As such 
the only part of this project that will remain in its entirety is our data
recording Node server that has been deployed to an EC2 instance. We intend to
get 7 days of tweet data before our presentation deadline. 

Due to the nature of our development processes this week, now that we have a picture of what we are heading towards, we are going to start afresh with a new repo, using TDD and BDD from inception.

### Development Ideas

####Version 1.0 - Skateboard:

- Responsive Webpage for Mobile
- Show your position on a map
- Show pins for POIs on map (Google POIs)

---

####Version 2.0 - Scooter: 

- Pins to be clickable and show name + additional data (Wiki API)
- Welcome screen
- Information displayed in half screen or full screen
- Picture of POI in information

---

####Version 3.0 - Bicycle:

- Text to voice conversion of POI information
- Make it an app
- Add notes to the places you have visited

---

####Version 4.0 - Car:

- Interactive Map showing current location
- Surround Points of interest shown on map
- Filterable list of POIs
- Altered google pins, for different types POIs
- Pictures of POIs from users
- Audio Tour Capability, ideally with transport controls
- Pick certain points to make a route for your day
- Recommendations for food based on your route
- Sale to Lonely Planet
- iOS, Android and Windows Phone App
- Social Interaction, sharing events with other users.
- Social Media Integration
- Not reliance on 3G for functionality
- Price Structure per City
- Menu for showing routes, filters, other cities for viewing. 
- Ticking off visited places. 
- Click on points of interest to show information
- When clicking on point of interest option to hear audio description.
- Show public transport routes to a selected point of interest
- Choosing points of interest to create route for you.
- More verbose text about points of interest

---
