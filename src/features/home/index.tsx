import { paths } from "../../config/path";

export const Home = () => {
  return (
    <div>
      <h1>D3 with React</h1>
      <ul>
        <li>
          <a href={paths.emojies.path}>Emojies</a>
        </li>
        <li>
          <a href={paths.chart.path}>Chart</a>
        </li>
      </ul>
    </div>
  );
};
