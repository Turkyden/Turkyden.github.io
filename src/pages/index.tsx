import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

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

function SectionHeader({ title, desc }) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionHeader_title}>{title}</h2>
      <p className={styles.sectionHeader_desc}>{desc}</p>
    </div>
  )
}

function MyWork({}) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="avatar">
          <img
            className="avatar__photo"
            src="https://turkyden.com/img/logo.svg"
          />
          <div className="avatar__intro">
            <h4 className="avatar__name">icon-c4d</h4>
            <small className="avatar__subtitle">
              React / Icon / C4D / Animate Effects
            </small>
          </div>
        </div>
      </div>
      <div className="card__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor.
        </p>
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <button className="button button--secondary">watchers</button>
          <button className="button button--secondary">stars</button>
          <button className="button button--secondary">forks</button>
        </div>
      </div>
    </div>
  )
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
              💬 快联系我
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {[
                {
                  title: '✨ 4Year+ 经验',
                  imageUrl: 'img/features/story_programing.svg',
                  description: (
                    <>
                      熟悉现代前端技术与流行框架 <a href="" target="_blank">React</a> / <a href="" target="_blank">Vue</a> 的使用，基本功扎实，编码习惯良好。
                    </>
                  ),
                },
                {
                  title: '🖌️ 具备 UI 设计能力',
                  imageUrl: 'img/features/stroy_designer.svg',
                  description: (
                    <>
                      同济大学·<a href="" target="_blank">设计硕士</a> 毕业，具备扎实的 UI 设计基础，拥有丰富的 UI 开发实践经验。
                    </>
                  ),
                },
                {
                  title: '🧡 拥抱开源文化',
                  imageUrl: 'img/features/story_open_resource.svg',
                  description: (
                    <>
                      Github 重度使用者，<a href="" target="_blank">alibaba/hooks</a> 主要贡献者之一。对「技术产品化」有深刻理解。
                    </>
                  ),
                }].map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>


        <section className={styles.mywork}>
          <div className="container">
            <SectionHeader title="My Work" desc="There is some work in my github." />
            <div className="row">
              {
                Array.from(Array(6), v => (
                  <div className={clsx('col col--4', styles.mywork_card)}>
                    <MyWork />
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
