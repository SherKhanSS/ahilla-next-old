import Link from 'next/link';
import Side from "./side";
import ArticleForMain from "./article-for-main";
import articles from '../pages/api/mocks'

const Main = () => {
  const articlesThoughts = articles.filter((article) => article.category === `thoughts`).slice(0, 5);
  const articlesNews = articles.filter((article) => article.category === `news`).slice(0, 5);

  return (
    <main className="main">
      <div className="main__wrapper">
        <h1 className="visually-hidden">Независимый аналитический проект «Ахилла»</h1>
        <section className="main__content content">
          
          <section className="content__articles articles">
            <h2 className="articles__title">
              <Link href="/" className="navigation-link">
                Статьи
              </Link>
            </h2>
            <ul className="articles__list">
              {articlesThoughts.map((article, index) => {
                return (
                  <ArticleForMain
                    article={article}
                    key={article.name + index}
                  />
                );
              })}
            </ul>
            <Link href="/" className="navigation-link articles__next">
              Все статьи »
            </Link>
          </section>

          <section className="content__news news">
            <h2 className="news__title">
              <Link href="/" className="navigation-link">
                Новости
              </Link>
            </h2>
            <ul className="news__list">
              {articlesNews.map((article, index) => {
                return (
                  <ArticleForMain
                    article={article}
                    key={article.name + index}
                  />
                );
              })}
            </ul>
            <Link href="/" className="navigation-link news__next">
              Все новости »
            </Link>
          </section>

          <Side/>

        </section>

      </div>
    </main>
  );
};

export default Main;
