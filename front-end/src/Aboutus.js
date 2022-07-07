import './aboutus.css'
import photo from './photo.png'
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutus = props => {
  return (
    <>
      <h1>Jonathan</h1>
      <p>Hi, I’m a sophomore that currently goes to Canyon Crest Academy (CCA). I lived in China for 2 years till I was three, but other than that, I've lived in San Diego pretty much my whole life. I am mainly interested in computer science and engineering. Some things I enjoy doing are socializing with my friends, playing video games, and coding. I love eating japanese food such as sushi and ramen.</p>
      <br />
      <p>One of my favorite games is Tetris, but in a more competitive way. Instead of a one player game, I play tetris in a multiplayer mode, where each person tries to send as many lines as possible to their opponent. These lines will fill up the opponent’s board and eventually prevent them from placing any more blocks inside their board. After their board has been filled up, the player wins that round, and games are usually best of five or best of seven. I’ve had over 100 hours in Tetr.io, which is a popular platform to play multiplayer Tetris.</p>
      <br />
      <p>I first learned how to code in Java with a teacher in my after school program, and we learned how to code Minecraft plugins. From then on, I started to slowly diverge from game development and into other areas of coding. After joining a club at my school in my freshman year, the Programming and Problem Solving Club, I was introduced to this new area of coding: competitive programming. Because of the need for a language that has a fast runtime, I had to switch from Java to C++. I have also done a little bit of web development and also used Python to do cybersecurity challenges. From cybersecurity competitions (mainly known as CTFs), I learned how to reverse engineer code by looking at the ASM and C code, understood Linux, and have gotten to known many new people.</p>
      <img src={photo} />
    </>
  )
}

// make this component available to be imported into any other file
export default Aboutus