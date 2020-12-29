import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './books.module.css';

const books = [
  {
    title: 'Clean Code',
    imageUrl: 'img/book/book_clean_code.jpg',
    linkUrl: 'https://github.com/xx-zh/xx-zh-roadmap',
    coverBackground: '#0f2531',
    buttons: [
      {
        text: '在线阅读',
        link: 'http://gdut_yy.gitee.io/doc-cleancode/'
      }
    ],
    description: (
      <>
        一本关于代码整洁之道的书籍，帮助你提升代码的优雅程度。
      </>
    ),
  }, 
  {
    title: "You Don't Know JS (2nd)",
    imageUrl: 'img/book/book_ydnjs.jpg',
    linkUrl: 'https://github.com/xx-zh/xx-zh-roadmap',
    coverBackground: '#e8e8e8',
    buttons: [
      {
        text: '在线阅读',
        link: 'http://gdut_yy.gitee.io/doc-ydkjs/'
      },
    ],
    description: (
      <>
        这一系列是深入研究 JavaScript 语言核心机制的书籍。
      </>
    ),
  }, 
  {
    title: "领域驱动设计",
    imageUrl: 'img/book/book_ddd.jpg',
    linkUrl: 'https://github.com/xx-zh/xx-zh-roadmap',
    coverBackground: '#e8e8e8',
    buttons: [
      {
        text: '在线阅读',
        link: 'http://gdut_yy.gitee.io/doc-ddd/'
      },
    ],
    description: (
      <>
        一本讲述软件核心复杂性应对之道的书籍，启发你基于业务领域解决实际问题。
      </>
    ),
  }, 
  {
    title: '重构·改善既有代码的设计',
    imageUrl: 'img/book/book_refactoring.jpg',
    linkUrl: 'https://github.com/xx-zh/xx-zh-roadmap',
    coverBackground: '#252a2e',
    buttons: [
      {
        text: '在线阅读',
        link: 'http://gdut_yy.gitee.io/doc-refact2'
      }
    ],
    description: (
      <>
        Refactoring 是一本关于代码优雅之道的书籍，帮助你提升代码的优雅程度。
      </>
    ),
  }
];

function Book({imageUrl, title, description, coverBackground, buttons}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      <div className={styles.book}>
        {imgUrl && (
          <div className={clsx('text--center', styles.books_background)} style={{ backgroundColor: coverBackground }}>
            <img className={styles.bookImage} src={imgUrl} alt={title} />
          </div>
        )}
        <div className={styles.books_intro}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="button-group button-group--block">
            {
              buttons.map((props, idx) => (
                <button key={idx} className="button button--secondary" 
                onClick={() => window.open(props.link)}>{props.text}</button>
              )) 
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function Books() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout 
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        {books && books.length > 0 && (
          <section className={styles.books}>
            <div className="container">
              <div className="row">
                {books.map((props, idx) => (
                  <Book key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Books;