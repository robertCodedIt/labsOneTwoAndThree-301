import HornedBeasts from "./HornedBeasts";
import { data } from "./data";

const Main = () => {
  return (
    <div>
      {data.map((el) => {
        return (
          <HornedBeasts
            image_url={el.image_url}
            title={el.title}
            description={el.description}
          />
        );
      })}
    </div>
  );
};

export default Main;
