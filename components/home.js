import Link from 'next/link';
import ArticleForMain from './article-for-main';
import articles from '../pages/api/mocks';

const Home = () => {
  const articlesThoughts = articles.filter((article) => article.category === `thoughts`).slice(0, 5);
  const articlesNews = articles.filter((article) => article.category === `news`).slice(0, 5);

  return (
        <>       
          <section className="content__articles articles">
            <h2 className="articles__title">
              <Link href="/">
                <a className="navigation-link">Статьи</a>
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
            <Link href="/">
              <a className="navigation-link articles__next">Все статьи »</a>
            </Link>
          </section>

          <section className="content__news news">
            <h2 className="news__title">
              <Link href="/" className="">
                <a className="navigation-link">Новости</a>               
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
            <Link href="/">
              <a className="navigation-link news__next">Все новости »</a>
            </Link>
          </section>
        </>
  );
};

export default Home;
