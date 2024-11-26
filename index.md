---
layout: default
title: Imagineering Hub
---

# Imagineering Hub: an Open Fiction Sandbox

Welcome to the Imagineering Hub! You'll find some of my narrative experiments, feel free to enjoy, contribute (story, software, whatever) or give feedback! Most of this uses open licenses, see the full repo at https://github.com/TobbaT/ImagineeringHub .

## Table of Contents

<ul>
  {% assign story_indices = site.pages | where_exp:"page", "page.path contains '/public/index.md'" %}
  {% for story_index in story_indices %}
    <li>
      <h3><a href="{{ story_index.url }}">{{ story_index.title }}</a></h3> 
      <p>{{ story_index.summary }}</p> {/* Assuming you have 'summary' in your frontmatter */}
      <a href="https://github.com/{{ site.repository }}/blob/{{ site.github.source.branch }}/{{ page.path }}">View on GitHub</a>
    </li>
  {% endfor %}
</ul>

