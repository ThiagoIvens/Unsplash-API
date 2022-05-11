import { Card } from "./styles";

export default function Photo(props: any) {
  console.log(props);
  return (
    <Card>
      <a href={props.result.links.html} target="_blank">
        <img src={props.result.urls.small} alt={props.result.description} />
      </a>
      <div className="data-info">
        <a href={props.result.user.links.html} target="_blank">
          <img
            src={props.result.user.profile_image.small}
            alt={props.result.user.name}
          />
          <p>{props.result.user.name}</p>
        </a>
      </div>
    </Card>
  );
}
