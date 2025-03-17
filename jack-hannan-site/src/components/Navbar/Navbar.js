import './Navbar.css';

function Navbar({ setCurr }) {

  function redirectMain(event) {
    if (event.target.tagName === 'LI') {
      setCurr(event.target.textContent);
    }
  }

  return (
    <nav onClick={redirectMain}>
      <ul>
        <li>contact</li>
        <li>software</li>
        <li>projects</li>
        <li>gallery</li>
      </ul>
    </nav>
  );
}

export default Navbar;
