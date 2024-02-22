import Button from "./button";
import ContentText from "./content-text";
import Figure from "./figure";

const Article = () => {
  return (
    <article>
      <div className="text-button">
        <ContentText />
        <div className="buttons">
          <Button className={"button-assista"}>
            <a href="https://www.netflix.com/br/title/60023642" target="_blank">
              <img src="../../../public/image/play.svg" alt="play" />
              <span>Assista agora</span>
            </a>
          </Button>
          <Button className={"button-trailer"}>
            <a
              href="https://www.youtube.com/watch?v=ByXuk9QqQkk"
              target="_blank"
            >
              <span>Assista ao trailer</span>
            </a>
          </Button>
        </div>
      </div>
      <Figure />
    </article>
  );
};

export default Article;
