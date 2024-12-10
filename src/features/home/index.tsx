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
          <a href={paths.pie.path}>Pie Chart</a>
        </li>
        <li>
          <a href={paths.bar.path}>Bar Chart</a>
        </li>
        <li>
          <a href={paths.scatterPlot.path}>Scatter Plot</a>
        </li>
      </ul>
    </div>
  );
};
