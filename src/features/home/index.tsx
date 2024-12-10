import { paths } from "../../config/path";

export const Home = () => {
  return (
    <div className="home">
      <h1>D3 with React</h1>
      <ul>
        {Object.keys(paths)
          .filter((key) => key !== "home")
          .map((key) => (
            <li key={key}>
              <a href={paths[key].path}>{key}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};
