---
layout: default
title: Imagineering Hub
---

Welcome to the Imagineering Hub, an open fiction sandbox! You'll find some of my narrative experiments (AI-assisted), feel free to enjoy, contribute (story, software, whatever) or give feedback! Content and code are available under open licenses, [you can see the full repo](https://github.com/TobbaT/ImagineeringHub) for details.

## Table of Contents

<ul>
  {% assign story_indices = site.pages | where_exp:"page", "page.path contains '/public/index.md'" %}
  {% for story_index in story_indices %}
    <li>
      <h3><a href="{{ story_index.url }}">{{ story_index.title }}</a></h3>
      <p>{{ story_index.summary }}</p>
      <a href="https://github.com/TobbaT/{{ page.path }}">View on GitHub</a>
    </li>
  {% endfor %}
</ul>

