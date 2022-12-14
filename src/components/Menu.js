import { Link } from "react-router-dom";
import "./Menu.css";
// import Youtube from "./Youtube";

function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={20}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              νμΌλ‘
            </Link>
          </li>
          <li>
            <Link to="/popular">π μΈκΈ°μν</Link>
          </li>
          <li>
            <Link to="/now_playing">π μμμ€</Link>
          </li>
          <li>
            <Link to="/upcoming">π κ°λ΄μμ </Link>
          </li>
          <li>
            <Link to="/about">π About us..</Link>
          </li>
          {/* <li>
            <Link to="/youtube">π μ νλΈ ν΄λ‘ </Link>
          </li>
          <li>
            <Link to="/kakao">π μΉ΄μΉ΄μ€ ν΄λ‘ </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
