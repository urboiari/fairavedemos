// Puts together article from paragraphs of text. Returns paragraphs
// and the entire article.

// Need to implement pulling article from article.txt and loading it in
import Paragraph from './Paragraph';
import articleTxt from './article.txt';
let rawArticle = null;

let p1Text =
  'If you look it up on Google Street View, there doesn’t seem to be anything particularly memorable about 5664 Fair Ave. Bi-level, garden-style apartment buildings like these, built around an interior courtyard, are a dime a dozen in North Hollywood. And even the features of the property that seem to gesture at something “luxurious” — the palm tree out front, the turreted roofs, the cursive script on the concrete wall welcoming visitors to “Chateau Fair” — feel like reminders of the place’s genial 1960s ordinariness. Still, we all remember the first apartment we moved into as an adult, and the forces of history and happenstance that landed Ari outside the building’s front gate, surrounded by boxes of his belongings, were nothing if not unusual: The pandemic had just hit, and Ari, a recent high school graduate, had decided to forgo Zoom college and move to Los Angeles with his close friend D.';
let p2Text =
  'The rent-controlled one-bedroom they were staying in was cramped: Ari slept on the bottom of a bunk bed they shared, a spot that was his so long as D was able to use the parking spot behind the apartment complex. The living room only had room for  a couch and a desk for some production gear. When they weren’t sleeping or commuting to work, the only thing there was to do was put their heads together and try to make some music.  In a way, the arrangement wasn’t that different from the circumstances that had brought them together in the first place: Ari’s first foray into writing and producing music, while living in a small town in Saudi Arabia in his early teens, was as a member of a Discord group of young musicians. They used the platform to swap beats and verses back and forth across time zones, trying to make tracks that sounded like the Saturation trilogy. This is where Ari had met D. But here, in this apartment, in the middle of a plague, the impulse to create together took on a pressure-cooker quality: “The pandemic definitely forced us to live together more than I think is regular, maybe even healthy,” Ari says. “It put a lot of pressure on us to come out of the lockdown with something to show for ourselves.”';
let p3Text =
  'At first, the plan was to produce a collection of rap songs for D, maybe write a couple of catchy pop songs of his own, pray to the Gods of music that one of them would catch fire on the DSPs. At the end of that tense, weird, claustrophobic year, though, he realized that the star of the story that unfolded was 5664 Fair Ave itself: the disembodied sounds of Daniel Johnston, Dijon, and Kate Bush, wafting through the apartment in the early hours of the morning; marathon recording sessions, punctuated by fits of creative paralysis and post-break-up sadness, punctuated by trips to Circus Liquor for drinks and a bag of peanuts; the revolving door of friends — like producer Jason Wagner and songwriter and producer Jerod — who cycled through the apartment after Ari came home from his job packing orders at a Mexican restaurant. In an instance of life coming full circle, most of them were musicians he’d met in his Discord days. “it took us three years, maybe four years to be like, ‘Oh, community and putting out stuff together — it‘s actually more powerful than trying to do our own thing,’” he says. “We were a Brockhampton copy cat group, and then we kind of divided, and somehow we found our way back together.”';
let p4Text =
  '5664 Fair Ave is a collection of five songs, with accompanying visuals, that were recorded between the apartment’s four walls between August 2020 and January 2021 — released using splits on Ethereum to acknowledge and immutably record each person’s contribution to the whole. It’s less a singular artistic statement, or the work of any official group, than an attempt to capture the feeling of a place and time where a group of people came together and experienced something that can never be replicated. We don’t get the full story arc, but we do get scenes: The plunging, nasty, thickset beat on “c the mess,” for example, derives from period when Ari was trying to work with more abrasive sounds, taking cues from Cody Chestnutt’s “Bitch I’m Broke.” By the next song, “Bordeaux 22,” he’s behind a watery, Elliott-Smith-worthy wall of reverb, strumming a guitar, telling us a story about a friend he wished he was romantic with. “Some of the songs,” he says, “were made in the spirit of, We can do whatever. Some of them are in the spirit of, Oh, this has to be so deep and so good. But I think being able to see that is part of the collection: It’s us finding our way.”';
let p5Text =
  'Sometimes, the process of searching takes us to places that feel absolutely euphoric: Written and performed by D, the Pimp C-sampling, Remi-Wolf inspired “head spinnin electro 3” recalls the sort of hyper-caffeinated EDM-rap that those of us who are old enough to remember that era would have lost our minds to in the early 10s. (This makes sense, because it was co-produced by Jason, who Ari says has a “tendency to make everything he touches sound like 2012”). Which brings us to the question at the heart of this project, of Ari’s desire to capture this strange, in-between period in his life, and the sounds and people that populated it: Did Ari like living at 5664 Fair Ave? Here, Ari will pause for a moment, take a beat to weigh the different considerations. “It’s the question, isn’t it?” he says. “I don’t think I did at the time. Although there were some great moments, of course, with my friends, I remember being pretty dissatisfied. But I really, really started to love that experience after I got out of it.”';

// let fetchText = () =>
//   fetch(articleTxt)
//     .then((response) => response.text())
//     .then((rawArticle) => {
//       let paragraphs = [];
//     });

const Article = () => {
  return (
    <div className='article'>
      <Paragraph text={p1Text} />
      <Paragraph text={p2Text} />
      <Paragraph text={p3Text} />
      <Paragraph text={p4Text} />
      <Paragraph text={p5Text} />
      {/* <Paragraph text={articleText} /> */}
    </div>
  );
};

const P1 = () => {
  return <Paragraph text={p1Text} />;
};
const P2 = () => {
  return <Paragraph text={p2Text} />;
};
const P3 = () => {
  return <Paragraph text={p3Text} />;
};
const P4 = () => {
  return <Paragraph text={p4Text} />;
};
const P5 = () => {
  return <Paragraph text={p5Text} />;
};

export default Article;
export { P1, P2, P3, P4, P5 };
