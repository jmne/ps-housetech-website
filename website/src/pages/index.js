import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageContent() {
    const {siteConfig} = useDocusaurusContext();
    return (
            <div className="container">
                <div className="text--center padding-horiz--md margin-top--xl">
                    <h2>⌛ WIP ⌛</h2>
                </div>
            </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
