import elvis from "./images/elvis.jpeg";

export default function PetOftheMonth() {
  return (
    <div className="petofthemonth">
      <div className="image">
        <img src={elvis} alt="" />
      </div>
      <div className="texts">
        <h2>Pet of the Month!</h2>
        <p>He eats, poops, and sleeps all day</p>
        <h3>It's Elvis!</h3>
        <h5>and he loves....</h5>
        <li>Tennis Balls</li>
        <li>Dried Sweet Potatos</li>
        <li>Love and attention</li>
      </div>
    </div>
  );
}
