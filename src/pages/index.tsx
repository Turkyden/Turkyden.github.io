import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const features = [
  {
    title: '✨ 3Year+ 经验',
    imageUrl: 'img/features/story_programing.svg',
    description: (
      <>
        就职于<a href="" target="_blank">泛微 OA</a> (A 股上市)，专注于企业协同办公 SaaS 软件的研发。
      </>
    ),
  },
  {
    title: '🖌️ 具备 UI 设计能力',
    imageUrl: 'img/features/stroy_designer.svg',
    description: (
      <>
        同济大学·<a href="" target="_blank">艺术设计硕士</a>毕业，具备扎实的设计基础，将视觉设计融入人机交互的开发实践。
      </>
    ),
  },
  {
    title: '🧡 拥抱开源文化',
    imageUrl: 'img/features/story_open_resource.svg',
    description: (
      <>
        关注 github 上热门项目，<a href="" target="_blank">alibaba/hooks</a> 主要贡献者之一。对「技术产品化」有深刻的体会。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              💬 Contact Me
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
