import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happerning. We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            data="Dec 28, 2022"
            title="GPT-3 and OpenAI is the Future. Let us explain how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            data="Dec 28, 2022"
            title="GPT-3 and OpenAI is the Future. Let us explain how it is?"
          />
          <Article
            imgUrl={blog03}
            data="Dec 28, 2022"
            title="GPT-3 and OpenAI is the Future. Let us explain how it is?"
          />
          <Article
            imgUrl={blog04}
            data="Dec 28, 2022"
            title="GPT-3 and OpenAI is the Future. Let us explain how it is?"
          />
          <Article
            imgUrl={blog05}
            data="Dec 28, 2022"
            title="GPT-3 and OpenAI is the Future. Let us explain how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
