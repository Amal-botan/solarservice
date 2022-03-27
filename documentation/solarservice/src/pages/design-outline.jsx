import React from 'react';
import Layout from '@theme/Layout'

export default function outline () {
  const projectName = 'Solar Service'
  const company = 'Solar Service Inc'
  const generalDocumentation = 'https://www.industrialempathy.com/posts/design-docs-at-google/'
  return (
    <Layout>
      <h1>Outline</h1> 
      <p>This is an outline of the project called {projectName}, for the company {company}. This application is a social network which allows users to purchase solar panels and share their Do-it-yourself solar projects with others.</p>
      <p>March 26th, 2022</p>
      <p>Status: Draft</p>
      <p>Authors: Keith Noel, Amal Botan</p>

      <p><em>Note</em>: This post is subject to change and is only a rough outline of the project as a whole for for more detail about the project please see the documentation <a href={generalDocumentation}>here</a>.</p>
      <h2>Context and Scope</h2> 
      <p>Software design is an important element of software engineering in which, after we established the requirements of the product or system we are building, we make plans and decisions how to best implement those requirements in software.
      This document describes how a design document is used to facilitate the process of coming to an agreement on a software design and to document it for current and future implementers, maintainers and other stakeholders of the software.</p> 
      <h3>
        Goals
      </h3>
      <h3>
        Avoids
      </h3>
      <h2>Overview</h2>
      <h2>(somewhat) Detailed Design</h2>
      <h3>Relationship to other Systems</h3>
      <h3>Structure</h3>
      <h3>Level of Detail</h3>
      <h3>Lifecycle</h3>
      <h2>Security</h2>
      <h2>Alternatives</h2>
    </Layout>);
}
