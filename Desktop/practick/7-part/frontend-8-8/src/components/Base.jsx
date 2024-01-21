import logo from "../assets/i.webp";
import Detective from "./Detective";
import Heroes from "./Heros";
function Base() {
  return (
    <div>
      <Heroes />
      <Detective />
      <img src={logo} alt="111" />
      <h1>hello world</h1>
    </div>
  );
}
export default Base;
