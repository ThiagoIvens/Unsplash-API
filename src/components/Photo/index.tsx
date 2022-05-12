import { Card } from "./styles";

export default function Photo(props: any) {

  const download = (e: any) => {
    e.preventDefault();
    fetch(e.target.href, {
      method: "GET",
      mode:"no-cors",
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

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
          <a className="link-download" href={props.result.links.download} onClick={e => download(e)} >
            ⬇
          </a>
        </a>
      </div>
    </Card>
  );
}
