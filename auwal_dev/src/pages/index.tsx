'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import fetchGitHubRepos from '@/methods/fetchRepos'


type RepoDetails = {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  lastUpdated: string;
};

export const Portfolio: React.FC<{repos: RepoDetails[]}> = ({repos}: {repos : RepoDetails[]}) => {

  console.log(repos)
  const [activeSection, setActiveSection] = useState('home')

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


export async function getServerSideProps() {
  try {

    const repos = await fetchGitHubRepos();

    return {
      props: { repos }
    }

  } catch (err) {
    console.log(err)
    return {
      props: { repos: [] }
    }
  }
}
